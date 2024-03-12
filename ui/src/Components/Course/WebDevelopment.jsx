import { Link } from "react-router-dom"
import { useState } from "react";
import WebCard from "./WebCard";
import WebDesignCard from "./WebDesignCard";
export default function WebDevelopment() {
    const [DiplomaData, setDiplomaData] = useState('var(--mainBgcolor)')
    const [DiplomaText, setDiplomaText] = useState('#212329')
    const [DiplomaTitle, setDiplomaTitle] = useState('white')
    const [cwdCourseBg, setcwdCourseBg] = useState('white')
    const [cwdCourseBgBorder, setcwdCourseBgBorder] = useState('transparent')
    const [WebLeftCourse, setWebLeftCourse] = useState('white')
    const [featureBg, setfeatureBg] = useState('white')
    const [featureBgText, setfeatureBgText] = useState('#212329')
    const [featureBorder, setfeatureBorder] = useState('transparent')
    const [QUESTION, setQUESTION] = useState('white')
    const [QUESTIONTBorder, setQUESTIONBorder] = useState('#212329')
    const [dwdCourseBg, setdwdCourseBg] = useState('white')
    const [dwdCourseBgBorder, setdwdCourseBgBorder] = useState('transparent')
    const DarkMode = () => {
        if (DiplomaData === 'black') {
            setDiplomaData('var(--mainBgcolor)')
            setDiplomaText('#212329')
            setDiplomaTitle('white')
            setcwdCourseBg('white')
            setcwdCourseBgBorder('transparent')
            setdwdCourseBg('white')
            setdwdCourseBgBorder('transparent')
            setWebLeftCourse('white')
            setfeatureBg('white')
            setfeatureBgText('#212329')
            setfeatureBorder('transparent')
            setQUESTION('white')
            setQUESTIONBorder('transparent')
        }
        else {
            setDiplomaData('black')
            setDiplomaText('white')
            setDiplomaTitle('var(--MyDarkGrayBg)')
            setcwdCourseBg('var(--MyDarkGrayBg)')
            setcwdCourseBgBorder('1px solid gray')
            setdwdCourseBg('var(--MyDarkGrayBg)')
            setdwdCourseBgBorder('1px solid #202020')
            setWebLeftCourse('var(--MyDarkGrayBg)')
            setfeatureBg('var(--MyDarkGrayBg)')
            setfeatureBgText('white')
            setfeatureBorder('1px solid #202020')
            setQUESTION('var(--MyDarkGrayBg)')
            setQUESTIONBorder('1px solid #202020')
        }
    }
    return (
        <div style={{ background: DiplomaData, color: DiplomaText }} >
            <div className="container-fluid text-center p-0 pt-3  border-bottom  myshadow" style={{
                background: DiplomaTitle,
                marginTop: '3.7rem'
            }}
                id="doeaccHead">
                <div className="col-md-12 text-uppercase">
                    <h1 className="fw-bolder">
                        <font color="red"> Web Development</font> COURSE
                    </h1>
                    <small className="d-flex px-2"> <a href="/" className="nav-link"><i className="fa fa-home"> </i> / </a> &nbsp;
                        DOEACC
                        Courses </small>
                </div>
            </div>
            <div className="container-fluid DoeaccCourseContainer">
                <div className="row myPaddingMargin p-0 m-0">
                    <div className="row my-2 p-0 ">
                        <div className="col-md-12 m-0 p-0">
                            <div className="row">
                                <div className="col-md-3 mx-0 px-0">
                                    <h5 className="p-0 m-0  myshadow" id="AskQuestions"
                                        style={{ background: QUESTION, color: 'white', border: QUESTIONTBorder }}>
                                        <Link to="../Contact"
                                            className="nav-link d-flex  justify-content-center p-2  hoverTextBlue blink">ASK
                                            A QUESTION &nbsp; &nbsp; <i className="bi bi-person-circle text-danger"></i></Link> </h5>
                                </div>
                                <div className="col-md-9 myshadow d-flex align-items-center " style={{
                                    background: featureBg,
                                    color: featureBgText,
                                    border: featureBorder
                                }} id="WebMarquee">
                                    <div className="card-footer  d-flex align-items-center justify-content-center p-1 ">
                                        <marquee className=" fw-medium " direction="left"  > ISO 9001 :
                                            2008
                                            द्वारा प्रमाणित &amp; भारत सरकार द्वारा पंजीकृत
                                            संस्था
                                            || DOEACC द्वारा पंजीकृत संस्था हर कोर्स पूरा करने पर फ्री प्रमाणपत्र || योग्य एवं अनुभवी
                                            प्रशिक्षकों द्वारा प्रशिक्षण || प्रमाण पत्र को इंटरनेट से जानने योग्य सुविधा,
                                            इत्यादी........
                                        </marquee>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 myshadow d-flex align-items-start" style={{ background: WebLeftCourse }} id="WebLeftCourse">
                        <table style={{ position: 'absolute' }}>
                            <tr>
                                <th className="col-12 px-4  bg-warning  w-100 myshadow">Get More Info........</th>
                            </tr>
                        </table>
                        <table style={{ fontSize: '0.95rem' }} className="mt-5 DoeaccCourseLeftTable">
                            <tr>
                                <th colSpan="2">DOEACC Course:</th>
                            </tr>
                            <tr>
                                <td><span className="rounded rounded-circle bg-secondary-subtle p-1"> 01 </span></td>
                                <td> <small className="text-md hoverTextOrange"> DOEACC Certificate Courses on Computer Concepts
                                    (CCC)
                                </small> </td>
                            </tr>
                            <tr>
                                <td><span className="rounded rounded-circle bg-secondary-subtle p-1"> 02 </span></td>
                                <td> <small className="text-md hoverTextOrange"> DOEACC O Level Course </small></td>
                            </tr>
                            <tr>
                                <td><span className="rounded rounded-circle bg-secondary-subtle p-1"> 03 </span></td>
                                <td> <small className="text-md hoverTextOrange"> DOEACC A Level Course </small> </td>
                            </tr>
                            <tr>
                                <th colSpan="2">DIPLOMA Course:</th>
                            </tr>
                            <tr>
                                <td><span className="rounded rounded-circle bg-secondary-subtle p-1"> 01 </span></td>
                                <td> <small className="text-md hoverTextOrange"> Advance Diploma in Computer Application+ (ADCA+)
                                </small>
                                </td>
                            </tr>
                            <tr>
                                <td><span className="rounded rounded-circle bg-secondary-subtle p-1"> 02 </span></td>
                                <td> <small className="text-md hoverTextOrange"> Advance Diploma in Computer Application (ADCA)
                                </small>
                                </td>
                            </tr>
                            <tr>
                                <td><span className="rounded rounded-circle bg-secondary-subtle p-1"> 03 </span></td>
                                <td> <small className="text-md hoverTextOrange"> Diploma in Banking Insurance (DBI) </small> </td>
                            </tr>
                            <tr>
                                <td><span className="rounded rounded-circle bg-secondary-subtle p-1"> 04 </span></td>
                                <td> <small className="text-md hoverTextOrange">Diploma in Web Development (DWD) </small></td>
                            </tr>
                            <tr>
                                <td><span className="rounded rounded-circle bg-secondary-subtle p-1"> 05 </span></td>
                                <td> <small className="text-md hoverTextOrange"> Diploma in Computer Application (DCA) </small>
                                </td>
                            </tr>
                            <tr>
                                <td><span className="rounded rounded-circle bg-secondary-subtle p-1"> 06 </span></td>
                                <td> <small className="text-md hoverTextOrange"> Diploma in Desktop Publishing (DDTP) </small></td>
                            </tr>
                            <tr>
                                <td><span className="rounded rounded-circle bg-secondary-subtle p-1"> 07 </span></td>
                                <td> <small className="text-md hoverTextOrange"> Certificate in Hardware & Networking (CHN) </small>
                                </td>
                            </tr>
                            <tr>
                                <td><span className="rounded rounded-circle bg-secondary-subtle p-1"> 08 </span></td>
                                <td> <small className="text-md hoverTextOrange"> Certificate in Accounting Cource (CAC) </small>
                                </td>
                            </tr>
                            <tr>
                                <td><span className="rounded rounded-circle bg-secondary-subtle p-1"> 09 </span></td>
                                <td> <small className="text-md hoverTextOrange">Certificate in Desktop Publishing (CDTP) </small>
                                </td>
                            </tr>
                            <tr>
                                <td><span className="rounded rounded-circle bg-secondary-subtle p-1"> 10 </span></td>
                                <td> <small className="text-md hoverTextOrange"> Advanced Diploma Information Technology (ADIT)
                                </small>
                                </td>
                            </tr>
                            <tr>
                                <td><span className="rounded rounded-circle bg-secondary-subtle p-1"> 11 </span></td>
                                <td> <small className="text-md hoverTextOrange"> Certificate in Computer Application (CCA) </small>
                                </td>
                            </tr>
                            <tr>
                                <td><span className="rounded rounded-circle bg-secondary-subtle p-1"> 12 </span></td>
                                <td> <small className="text-md hoverTextOrange"> Diploma in Information Technology (DIT) </small>
                                </td>
                            </tr>
                            <tr>
                                <td><span className="rounded rounded-circle bg-secondary-subtle p-1">13</span></td>
                                <td> <small className="text-md hoverTextOrange">Diploma in Computer Application & Designing (DCAD)
                                </small> </td>
                            </tr>
                        </table>
                    </div>
                    <div className="col-md-10 mx-0 ">
                        <div className="diplomaTable">
                            <div className=" my-2 py-2 myshadow " id="MainWebBg"
                                style={{ background: cwdCourseBg, border: cwdCourseBgBorder }}>
                                <div data-aos="fade-down ">
                                    <WebCard className="mx-0 px-0" />
                                </div>
                                <div className="row">
                                    <div className="col mx-2">
                                        <h5 className="textColorOne">What is a Certificate in Web Designing Course? </h5>
                                        <p id="TextCaptionTwo" className="hoverTextOrange"> Certificate in Web Designing is a
                                            certification
                                            course for students who are seeking to learn the fundamentals of web designing after
                                            completing their 10+2. This is a 2- 6 months long course where the students are taught
                                            about
                                            some basic tools and Web coding languages that are useful for web designing. Certificate
                                            courses in web designing are important for students willing to seek a career as a web
                                            designer.</p>
                                    </div>
                                </div>
                            </div>
                            <div className=" my-2 myshadow" id="MainDwdBg"
                                style={{ background: dwdCourseBg, border: dwdCourseBgBorder }}>
                                <div data-aos="fade-down ">
                                    <WebDesignCard />
                                </div>
                                <div className="row">
                                    <div className="col mx-2">
                                        <h5 className="textColorOne">What is a Certificate in Web Designing Course? </h5>
                                        <p id="TextCaptionTwoDwd" className="hoverTextOrange"> Certificate in Web Designing is a
                                            certification
                                            course for students who are seeking to learn the fundamentals of web designing after
                                            completing their 10+2. This is a 2- 6 months long course where the students are taught
                                            about
                                            some basic tools and Web coding languages that are useful for web designing. Certificate
                                            courses in web designing are important for students willing to seek a career as a web
                                            designer.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div>
        </div >
    )
}