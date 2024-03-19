import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UseFullCard from './UseFullCard';
import QRCode from 'qrcode.react';
// import TestExamCcc from '../Components/OnlineTest/TestExamCcc'
const Verification = () => {
   const [regNum, setRegNum] = useState('');
   const [stdData, setStdData] = useState([]);
   const verifyCertificate = async () => {
      if (!regNum) {
         alert('Please Enter Registration Number');
      } else {
         try {
            const response = await fetch('http://localhost:3000/admin/verifyCertificate', {
               method: "post",
               headers: {
                  "Content-type": 'application/json'
               },
               body: JSON.stringify({
                  regNum
               })
            });
            const data = await response.json();
            if (data.error) {
               alert(data.error);
            } else {
               setStdData(data); // Set stdData with the entire data array
               console.log(data); // Log the entire data array
            }
         } catch (error) {
            console.error('Error:', error);
         }
      }
   };
   const formatDate = (dateString) => {
      const date = new Date(dateString);
      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
      const year = date.getFullYear().toString() // Get last two digits of the year
      return `${day}/${month}/${year}`;
   };

   const downloadPDF = () => {
      const printResult = document.getElementById('printResult');
      if (printResult) {
         html2pdf(printResult, {
            margin: 1,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape' },
         });
      } else {
         alert('Element not found.');
      }
   };
   // *----------------------------Start Captcha Code ---------------------------//
   const [captchaValue, setCaptchaValue] = useState('');
   const [userInput, setUserInput] = useState('');
   const [isCaptchaVerified, setIsCaptchaVerified] = useState(true);


   const MyQr = {
      background: 'black',
      border: '5px solid white'
   }

   useEffect(() => {
      generateCaptcha();
   }, []);

   // QRcode 


   const generateCaptcha = () => {
      // Generate a random text for the captcha
      const randomText = Math.random().toString(36).substring(7);
      setCaptchaValue(randomText);
   };

   const handleInputChange = (event) => {
      setUserInput(event.target.value);
   };

   const handleCaptchaCheck = () => {
      if (userInput.toLowerCase() === captchaValue.toLowerCase()) {
         setIsCaptchaVerified(true);
         verifyCertificate();
      } else {
         setIsCaptchaVerified(false);
         alert('CAPTCHA verification failed.');
         generateCaptcha();
      }
   };
   const handleReloadCaptcha = () => {
      generateCaptcha();
      setIsCaptchaVerified(false);
   };
   useEffect(() => {
      const typed = new Typed('#guidline', {
         strings: ['Important Guidelines.', 'Important Guidelines.', 'Important Guidelines.'],
         typeSpeed: 50,
         loop: true,
      });
      return () => {
         typed.destroy();
      };
   }, []);
   // useEffect(() => {
   //     const typed = new Typed('#usefulllinks', {
   //         strings: ['USEFUL LINKS', 'USEFUL LINKS.', 'USEFUL LINKS'],
   //         typeSpeed: 80,
   //         loop: true,
   //     });
   //     return () => {
   //         typed.destroy();
   //     };
   // }, []);
   // <span id='usefulllinks'></span>

   const backgroundStyle = {
      // backgroundImage: 'url("../public/images/icon/captcha.png")',
      border: '1px dotted maroon',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '0 10px',
      height: '100%',
   };

   const captchaTextStyle = {
      fontFamily: "Kotta One, serif",
      fontWeight: 'bolder',
      fontStyle: 'italic',
      fontSize: '2rem',
      height: '100%',
      letterSpacing: '10px',
      userSelect: 'none',
   };
   // *----------------------------End Captcha Code ---------------------------//
   //--------------------------Start BgImage----------------------------------//

   const MainBg = {
      backgroundImage: 'url("/images/vender/enquiryBg.png") ',
      // background: 'linear-gradient(to left, #283593, #1976d2)',
      // background: '#00062B',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      width: '100%',
      height: '100vh !important',
      padding: '0 !important',
      margin: '0 !important',
   };
   const darkBlueBg = {
      background: '#00062B',
   };
   var a = "केवल पंजीकृत उपयोगकर्ताओं को ही आगे बढ़ने की अनुमति है।";
   var b = "पंजीकरण संख्या छात्र इसे छात्र द्वारा सही ढंग से भरा जाना चाहिए।";
   var c = "किसी भी छात्र/छात्रा का रिकॉर्ड प्राप्त करने के लिए छात्र/छात्रा का पंजीकृत संख्या सही - सही से भरें";
   var d = "केवल पंजीकृत उपयोगकर्ताओं को ही आगे बढ़ने की अनुमति है।";

   return (
      <div className="container-fluid m-0 p-0 px-2" style={MainBg}>
         <div style={{ margin: '4.1rem 0 0 0' }} id="VerificationBody">

            <div className="row m-0 p-0 justify-content-center mt-4 pt-5" style={{ fontFamily: "'Poppins', sans-serif" }} >
               <UseFullCard />
               <div className="col-md-4 col-sm-12 mt-4 ">
                  <div className='rounded-2 cardEffectsBorder cardEffects'>
                     <form className="row gy-4 m-0 myshadow searchCard m-auto text-center">
                        <div className="col-12 m-0 p-0 " style={{ border: '1px solid #012C5', background: 'var(--card-bg)' }}>

                           <div className="container text-center m-0 py-2 h4 fw-bold text-uppercase " style={{ color: 'rgb(255, 255, 255)' }}>
                              <b style={{ letterSpacing: '1px', color: 'white' }}>
                                 Verify Your <font color="red">Certificate</font>
                              </b>
                           </div>
                        </div>
                        <div className="col-md-12 position-relative">
                           <div className="input-group mb-3">
                              <span className="input-group-text" id="basic-addon1"><i className="bi bi-person-fill"></i></span>
                              <input type="text" className="form-control" placeholder="Enter Registration No." onChange={(e) => { setRegNum(e.target.value) }} />
                           </div>
                        </div>

                        <div>
                           <div className='row h-50'>
                              <div className="col-8">
                                 <label htmlFor="captcha" style={captchaTextStyle}>
                                    <div style={backgroundStyle}> {captchaValue} </div>
                                 </label>
                              </div>

                              <div className="col-4">
                                 <button
                                    type="button"
                                    className="btn px-2 mx-5 border-0"
                                    onClick={handleReloadCaptcha}>
                                    <img src="/images/icon/refresh.png" alt="Reload Captcha" />
                                 </button>
                              </div>

                              <br />
                           </div>
                           <div>
                              <input
                                 type="text"
                                 id="captcha"
                                 placeholder='Enter Captcha here..'
                                 value={userInput}
                                 className='form-control w-75 d-inline border-0 bg-white'
                                 onChange={handleInputChange}
                                 style={{ marginTop: '10px' }}
                              />
                              <button
                                 type="button"
                                 className='btn btn-danger btn m-0 mx-2 '
                                 onClick={handleCaptchaCheck}
                                 disabled={!userInput || isCaptchaVerified}
                                 style={{ marginTop: '10px' }} > Verify
                              </button>
                           </div>
                        </div>
                        <button
                           type="button"
                           className='border-0 bg-info p-0 m-0 py-2 mt-2 btn d-inline'
                           disabled={!isCaptchaVerified}
                           style={{ margin: '10px' }} > Search </button>
                     </form>
                  </div>
               </div>

               <div className="col-md-4 col-sm-12 mt-4 rounded-2 cardEffectsBorder cardEffects" >
                  <div className="row">
                     <div className="col-12 bg-warning fw-bolder py-1 text-dark fs-4 text-uppercase">
                        <b style={{ letterSpacing: '1px' }}>
                           <span id='guidline'></span></b></div>
                  </div>
                  <div className="row"  >
                     <div className="col-12 text-white fw-normal py-0 my-0">
                        <marquee behavior="scroll" scrollamount="1" direction="up" >
                           <p className='HindiFont'>[1]. {a} </p>
                           <hr width="100%" />
                           <p className='HindiFont' >[2]. {b}</p>
                           <hr width="100%" />
                           <p className='HindiFont' >[3]. {c} </p>
                           <hr width="100%" />
                           <p className='HindiFont'>[4]. {a}</p>
                        </marquee>
                     </div>
                  </div>
               </div>

            </div>

            {
               stdData.details &&
               (<div className='mt-5 user-select-none' >
                  <div id="printResult">
                     <div className="m-1 px-2 certificate" style={{ background: '#00062B', border: "15px solid #00062B" }}>
                        <div className="header row bg-white d-flex py-1">

                           <div className="col-2 HeaderLeft">
                              <img src="images/vender/logo.png" width={90} alt="DIIT" />
                           </div>
                           <div className="col-7 text-center HeaderCenter">
                              <div className="row d-flex justify-content-end ">
                                 <div className="col-8  title">
                                    <h1 className='fw-bolder m-0 p-0 '> DRISHTEE </h1>
                                    <p className='p-0 m-0' style={{ color: 'maroon' }} >An ISO 9001-2008 Certified Institute</p>
                                 </div>
                                 <div className="col-4">
                                    <img src={stdData?.details?.photo} width={90} alt="DIIT_Student" />

                                 </div>
                              </div>
                           </div>
                           <div className="col-3 HeaderRight text-end fw-medium ">
                              <p className='p-0 m-0'>Reg Under Society act 21, 1860 govt, of india</p>
                              <p className='p-0 m-0'>Reg NO : 72/2013-14</p>
                           </div>
                        </div>
                        <div className="caption text-center " style={{ background: '#00062B', color: 'white', fontFamily: "'Poppins', sans-serif" }}>
                           <h1 className='p-0 m-0'>Certificate of  Course Completion</h1>
                        </div>
                        <div className="row p-1 px-3 bg-white text-center">
                           <div className="col ">
                              <p className='m-0 p-0'> This Certified is awarded to Mr/Miss <span style={{ color: 'red', fontSize: '1rem', fontWeight: 'bold' }}>
                                 {/* {stdData && typeof stdData === 'object' && stdData.details && stdData.details.name} */}
                                 {stdData?.details?.name} s/o  {stdData?.details?.fatherName}
                              </span></p>
                              on the successfully Completion of a <span><b>  03 month (2160 hours.)</b></span> course , titled
                              <h3 style={{ color: 'red', fontWeight: 'bold', padding: '10px 0 0 0' }}>  {stdData?.details?.course}  </h3>
                              <p>  with grade & percentage <span style={{ color: 'red' }}> Execellent &  {stdData?.details?.percentage}  % </span>
                                 <br /> , Examination conducted on at all-indiabasis at <span style={{ color: 'red' }}> Maharajganj / U.P.</span> </p>

                              <div className='AllCoursseContent m-0'>
                                 Subject:-
                                 <div>
                                    <>

                                    </>

                                 </div>
                                 <ul className='px-lg-3 d-flex flex-wrap p-0  m-0'>
                                    <p className='m-0 p-0 pe-2 '> <b>Modulus Covered:</b> </p>
                                    {
                                       stdData?.details?.subjects?.map((subjectGroup) =>
                                          subjectGroup.map((subject) => (
                                             <li key={subject._id}>{subject.name}</li>
                                          ))
                                       )
                                    }
                                    <li>MS. Windows</li>
                                 </ul>

                                 <table className='w-100 table-responsive m-0 p-0 mt-5'>
                                    <tbody>
                                       <tr className='m-0 p-0'>
                                          <td className='m-0 p-0 text-start'>
                                             <img src="images/vender/signature.png" alt="Sign" />
                                             <p className='m-0 p-0'>Chif Exam Controller</p>
                                          </td>
                                          <td className='m-0 p-0' colSpan={3}>
                                             Date of issue: <b><span>{formatDate(stdData?.details?.completationDate)}</span></b>
                                          </td>
                                       </tr>
                                       <tr style={{ fontWeight: 'bold', borderTop: '1px solid blue', borderBottom: '1px solid blue' }}>
                                          <td className='m-0' colSpan={2}>
                                             Student Reg No.: <span className='text-danger text-uppercase'> {stdData?.details?.regNum} </span>
                                          </td>
                                          <td className='m-0' colSpan={2}>
                                             Center Code: DIIT124
                                          </td>
                                       </tr>
                                    </tbody>
                                 </table>
                              </div>
                              <div className="col  text-center mt-1">
                                 <p className='border border-1 border-warning-subtle bg-warning-subtle d-inline-block p-1 px-4'>Grade Mark : Exellent (81% - 100%), &nbsp;Very Good (71% - 80), &nbsp; Good (61% - 70%), &nbsp; Satisfactory (50% - 60%)</p>
                              </div>
                              <div className="col fw-normal text-center mb-1">
                                 <h5 className='m-0 p-0' style={{ color: 'maroon', fontSize: '1.4rem', fontWeight: 'medium' }} > DRISHTEE INSTITUTE OF INFORMATION TECHNOLOGY</h5>
                                 <p className='m-0 p-0'>(A UNIT OF DRISHTEE EDUCATIONAL & WELFARE SOCIETY)</p>
                                 <p className='m-0 p-0'><b>Corporate Office : </b> Gayatri nagar, Kurghat, Gorakhpur District: Gorakhpur(273001) &nbsp;&nbsp;&nbsp; https://www.drishteeindia.com </p>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="row py-4 m-auto text-center d-flex justify-content-center">
                        <div className="col-md-5 m-1 myshadow p-5 d-flex flex-column align-items-center  justify-content-center" >
                           <QRCode value="printResult" size={200} style={MyQr} />
                           <h2 className='text-white'>Scan your QR code to see your E-Certificate </h2>
                        </div>
                        <div className="col-md-5 m-1 myshadow p-5 d-flex flex-column align-items-center justify-content-center" >
                           <button className="mx-4 btn btn-sm hover-btn p-0 m-0" onClick={downloadPDF}>
                              <img src="/images/icon/download.png" className='img-fluid p-0 m-0 ' alt="Download" />  </button>
                           <h2 className='text-white lh-lg'>Download your E-Certificate  </h2>
                        </div>
                        {/* <div className="col-12 mx-0 px-0 py-5">
                                <div className="container-fluid m-auto">
                                    <p className="p-0 m-0 mt-2  text-white">
                                        <marquee behavior="alternate" direction='left'> ISO 9001 : 2008 द्वारा प्रमाणित &amp; भारत सरकार द्वारा पंजीकृत संस्था  </marquee>
                                        <marquee behavior="alternate" direction='right'>  DOEACC द्वारा पंजीकृत संस्था हर कोर्स पूरा करने पर फ्री प्रमाणपत्र </marquee>
                                        <marquee behavior="alternate" direction='left'>  योग्य एवं अनुभवी प्रशिक्षकों द्वारा प्रशिक्षण || प्रमाण पत्र को इंटरनेट से जानने योग्य सुविधा, इत्यादी........ </marquee>
                                    </p>
                                </div>
                            </div> */}
                     </div>
                  </div>

               </div>)

            }
         </div>
      </div >

   );
};
export default Verification;
