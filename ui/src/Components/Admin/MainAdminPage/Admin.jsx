import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import {toast} from 'react-toastify';
import { Modal, Button } from 'react-bootstrap';
import AdmissionForm from '../../Admission/AdmissionForm';
// import SearchBox from '../../Course/SearchBox';
import UploadCertificateData from '../Certificate/UploadCertificateData';
import StudentChart from '../Charts/Chart';
import QuestionForm from '../../OnlineTest/Update';
import UpdateCourse from '../UpdateData/UpdateCourse';
import StudentModel from './StudentModel';
import CreateNewCourse from './subComponent/CreateNewCourse';
import OffersForm from '../SendOffer/SendOffer';
import StudentDataBs from '../../Admission/StudentDataBs';
import CourseList from '../UpdateData/CourseList';
import ProgramPictures from './subComponent/Gallery/ProgramPictures';
export default function Admin() {
  let navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const handleModalClose = () => setShowModal(false);
  const handleModalShow = () => setShowModal(true);
  const [dlSId, setdlSId] = useState("");
  const [allStudent, setAllStudent] = useState([]);
  const [IndexNum, setIndexNum] = useState('');
  const [tkAdmission, setTkAdmission] = useState("");
  const [fullName, setFullName] = useState('');
  const [regNum, setRegNum] = useState('');
  const [gnrCert, setGnrCert] = useState('');
  const [percentage, setPercentage] = useState('');
  const [issueDate, setIssueDate] = useState(new Date());
  const [offersLength, setOffersLength] = useState(0);
  const [coursesLength, setCoursesLength] = useState(0);
  const [adminData, setAdminData] = useState([]);
  const [error, setError] = useState(null);
  const [adminList,setAdminList]=useState([]);
  const [name, setName] = useState('');
  const [uploadStatus, setUploadStatus] = useState(false);
  const [image, setImage] = useState("");
  const [photo, setPhoto] = useState("");
  const [email, setEmail] = useState('');
  const [nDob, setNDob] = useState(new Date())
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const [aadhaar, setAadhaar] = useState('');
  const [profession, setProfesssion] = useState('');
  const [password, setPassword] = useState('');
  const [rPassword, setRPassword] = useState('');
  const [about, setAbout] = useState('');
  


  const dob = new Date(adminData.dob);

  const uploadPhoto = () => {
    if (image) {
      const data = new FormData()
      data.append("file", image)
      data.append("upload_preset", "hridesh99!")
      data.append("cloud_name", "draowpiml")
      fetch('https://api.cloudinary.com/v1_1/draowpiml/image/upload', { method: 'post', body: data }).then(res => res.json())
        .then(data => {
          if (!data.error) {
            setPhoto(data.url);
            setUploadStatus(true);
          }
        })
        .catch((error) => {
          setMessage(error)
        })
    }
  }

  const RegisterAccount = async () => {
    await fetch('http://localhost:3000/admin/addAdmin', {
      method: "post",
      headers: {
        "content-type": "application/json",
        "authorization": localStorage.getItem('aJwt')
      },
      body: JSON.stringify({
        name: name,
        email: email,
        profilePic: photo,
        dob: nDob,
        mobileNumber: mobile,
        address: address,
        aadhaarNumber: aadhaar,
        profession: profession,
        about: about,
        password: password
      })
    }).then(data => data.json())
      .then((data) => {
        if (data.error) {
          toast.error(data.message);
        }
        else {
          toast.success('Account Created');
        }
      })
  }
  const fetchAdminProfile = async () => {
    await fetch('http://localhost:3000/admin/adminProfile', {
      headers: {
        'Authorization': localStorage.getItem('aJwt')
      }
    }).then(data => data.json())
      .then((data) => {
        if (data.error) {
          toast.error(data.error);
        }
        else {
          setAdminData(data);
        }
      }).catch((error) => {
        toast.error(error);
      })
  }
  const fetchAdminList = async () => {
    await fetch('http://localhost:3000/admin/getAdminList', {
      headers: {
        "authorization": localStorage.getItem('aJwt')
      }
    }).then(data =>data.json())
      .then((data) => {
          setAdminList(data);
      })
  }
  const deleteAdmin = async(_id)=>{
    await fetch(`http://localhost:3000/admin/deleteAdmin/${_id}`,{
      method:'delete',
      headers:{
        'authorization':localStorage.getItem('aJwt')
      }
    }).then(data=>data.json())
    .then((data)=>{
      document.getElementById(_id).remove();
      toast.success(data.message);
    })
  }
  const getStudentList = async () => {
    const query = {};
    if (fullName != '' || fullName != 'undefined' || fullName != 'null') {
      query.name = fullName;
    }
    if (regNum != '' || regNum != 'undefined' || regNum != 'null') {
      query.regNum = regNum;
    }
    // console.log(query)
    await fetch('http://localhost:3000/admin/studentList', {
      method: 'post',
      headers: {
        "Authorization": localStorage.getItem("aJwt"),
        "Content-type": "application/json"
      },
      body: JSON.stringify(query)
    })
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          toast.error(data.error);
        } else {
          setAllStudent(data);
        }
      }).catch((error) => {
        toast.error(error);
      })
  }
  const deleteStudentById = async () => {
    dlSId && await fetch(`http://localhost:3000/admin/deleteStudentRegistrationForm/${dlSId}`,
      {
        method: 'delete',
        headers: {
          "Authorization": localStorage.getItem("aJwt")
        }
      }
    ).then(res => res.json())
      .then(data => {
        toast.success(data.message);
        setdlSId('');
        getStudentList();
      }).catch((error) => {
        toast.error(error)
      })
  }
  const takeNewAdmission = async () => {
    tkAdmission && await fetch(`http://localhost:3000/admin/takeNewAdmission/${tkAdmission}`, {
      method: 'put',
      headers: {
        "Authorization": localStorage.getItem("aJwt"),
        "Content-type": "Application/json"
      },
      body: JSON.stringify({
        iNum: IndexNum
      })
    })
      .then(res => res.json())
      .then((data) => {
        if (data.error) {
          toast.error(data.error);
        }
        else {
          setIndexNum('');
          setTkAdmission('');
          toast.success(data.message);
          showModal(false);
          getStudentList();

        }
      }).catch((error) => {
        alert(error);
      })
  }

  const generateCertificate = async () => {
    await fetch('http://localhost:3000/admin/generateCertificate', {
      method: 'post',
      headers: {
        "Authorization": localStorage.getItem('aJwt'),
        "Content-type": 'application/json'
      },
      body: JSON.stringify({
        _id: gnrCert,
        percentage: percentage,
        issueDate: issueDate
      })
    }).then(res => res.json())
      .then((data) => {
        if (data.error) {
          setShowModal(false);
          (data.error);
        }
        else {
          setShowModal(false);
          getStudentList();
          alert(data.message);
        }
      })
  }

  useEffect(() => {
    getStudentList();
  }, [])

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('http://localhost:3000/admin/getAllNotice');
        if (!response.ok) throw new Error('Failed to fetch offers. Status: ' + response.status);
        const data = await response.json();
        setOffersLength(data.length);
      } catch (error) {
        setError(error.message);
      }
    })();
  }, []);

  useEffect(() => {
    const fetchCoursesLength = async () => {
      try {
        const response = await fetch('http://localhost:3000/admin/getCourseList', {
          method: 'GET',
          headers: {
            "Authorization": localStorage.getItem("aJwt"),
            "Content-type": "application/json"
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch courses. Status: ' + response.status);
        }
        const allCourses = await response.json();
        setCoursesLength(allCourses.length);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchCoursesLength();
  }, []);



  //--------------------------Start Show Hide -------------------//
  const [showInput, setShowInput] = useState(false);
  const handleNewButtonClick = () => {
    setShowInput(!showInput); // Toggle the state
  };
  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      const selectedFile = files[0];
      if (selectedFile.size <= 50 * 1024) {
        const fileReader = new FileReader();
        fileReader.onload = () => {
          setImgPreview(fileReader.result);
          setError("");
        };
        fileReader.readAsDataURL(selectedFile);
      } else {
        setImgPreview("");
        setError("Upload only 50 KB smaller image.");
      }
    }
  };
  return (
    <div style={{ background: '#B2CBFF' }}>
      <header className="p-0  shadow d-flex align-items-center bg-primary shadow-sm w-100 " style={{ marginTop: '4rem' }} id="adminHeader">
        <div className="row  px-0 mx-0  w-100 d-flex justify-content-between">
          <div className="col-md-10 mx-0 px-0 ">
            <div className="row px-0 mx-0  ">
              <div className="col-md-12 d-flex">
                <div className="row d-flex  justify-content-between text-center w-100 mx-0 px-0">
                  <div className="col-6  col-sm-5 d-flex justify-content-start ">
                    <h4 className="text-center fw-bolder fw-bolder text-white bg-primary p-0 m-0 py-4">
                      <i className="fa fa-dashboard"
                        aria-hidden="true"></i>&nbsp; <span>Dash Board</span></h4>
                  </div>

                  <div className="col-6 pe-sm-2 d-flex align-items-center justify-content-end">
                    <div>
                      <button type="button" className="btn bg-secondary-subtle mx-3 position-relative" data-bs-toggle="modal"
                        data-bs-target="#MessageModal">
                        <i className="bi bi-bell-fill text-secondary-emphasis fs-6"></i>
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                          99+
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="row mx-0 px-0">
        <div className="col-12 mx-0 px-0  ">
          <div className="row  mx-0 px-0 ">
            {/* ------------------------ Start  Aside Bar ------------------------ */}
            <div className="col-md-2 mx-0 text-white px-0 bg-white myshadow" style={{ height: '100vh' }}>
              <hr className="m-0 p-0" />
              <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                {/* Institute Section */}
                <div className="accordion accordion-flush" id="AdminSection">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button bg-primary text-white accordianShadowHover collapsed"
                        type="button" data-bs-toggle="collapse" data-bs-target="#InstituteData">
                        <i className="fa fa-user-circle" aria-hidden="true"></i> &nbsp; Institute
                      </button>
                    </h2>
                    <div id="InstituteData" className="accordion-collapse collapse">
                      <div className="accordion-body">
                        <button className="nav-link w-100 mx-0 px-0" data-bs-toggle="pill" data-bs-target="#ContactForm"
                          type="button" role="tab">
                          <i className="fa fa-map-marker" aria-hidden="true"></i> Contact & Location
                        </button>
                        <button className="nav-link w-100" data-bs-toggle="pill" data-bs-target="#instituteCertificatePictutes"
                          type="button" role="tab">
                          <i className="fa fa-camera-retro" aria-hidden="true"></i>  Affiliations Pics
                        </button>
                        <button className="nav-link w-100" data-bs-toggle="pill" data-bs-target="#Notisfication"
                          type="button" role="tab">
                          <i className="fa fa-newspaper-o" aria-hidden="true"></i> Notification
                        </button>
                        <button className="nav-link w-100" data-bs-toggle="pill" data-bs-target="#ProgramPictures"
                          type="button" role="tab">
                          <i className="fa fa-picture-o" aria-hidden="true"></i> Program Pictures
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Students Section */}
                <div className="accordion accordion-flush" id="accordionFlushExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button bg-primary text-white accordianShadowHover collapsed"
                        type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne">
                        <i className="fa fa-graduation-cap" aria-hidden="true"></i> &nbsp; Students
                      </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body">
                        <button className="nav-link active w-100" data-bs-toggle="pill" data-bs-target="#v-pills-home"
                          type="button" role="tab">
                          <i className="bi bi-search"></i>  Students Board
                        </button>
                        <button className="nav-link w-100" data-bs-toggle="pill" data-bs-target="#AllStudent"
                          type="button" role="tab" onClick={getStudentList}><i className="bi bi-patch-check-fill"></i> &nbsp; All Students
                        </button>
                        <button className="nav-link w-100" data-bs-toggle="pill" data-bs-target="#AddStudent"
                          type="button" role="tab">
                          <i className="bi bi-person-plus-fill"></i> Add Students
                        </button>
                        <button data-bs-toggle="pill" data-bs-target="#DeleteStudents" className="nav-link w-100"
                          type="button" role="tab"><i className="bi bi-activity"></i>  Students Database
                        </button>
                        <button className="nav-link w-100" data-bs-toggle="pill" data-bs-target="#RestoreStudent"
                          type="button" role="tab">
                          <i className="bi bi-arrow-counterclockwise"></i> Restore Students
                        </button>
                        <button className="nav-link w-100" data-bs-toggle="pill" data-bs-target="#certificate"
                          type="button" role="tab">
                          <i className="bi bi-card-list"></i> Certificate Data
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Admin Section */}
                <div className="accordion accordion-flush" id="AdminSection">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button bg-primary text-white accordianShadowHover collapsed"
                        type="button" data-bs-toggle="collapse" data-bs-target="#AdmimPanel">
                        <i className="bi bi-universal-access" aria-hidden="true"></i> &nbsp; Admin
                      </button>
                    </h2>
                    <div id="AdmimPanel" className="accordion-collapse collapse" data-bs-parent="#AdminSection">
                      <div className="accordion-body">
                        <button className="nav-link w-100" data-bs-toggle="pill" data-bs-target="#AdminProfile"
                          type="button" role="tab" onClick={fetchAdminProfile}>
                          <i className="fa fa-user-circle" aria-hidden="true"></i> Profile
                        </button>
                        <button className="nav-link w-100" data-bs-toggle="pill" data-bs-target="#NewAccount"
                          type="button" role="tab">
                          <i className="bi bi-person-fill-lock"></i>  Create an account
                        </button>
                        <button className="nav-link w-100" data-bs-toggle="pill" data-bs-target="#AdminList"
                          type="button" role="tab" onClick={fetchAdminList}>
                          <i className="fa fa-arrow-circle-left" aria-hidden="true"></i> Admin List
                        </button>
                        <button onClick={() => {
                          navigate('/');
                          localStorage.removeItem('aJwt');
                        }} className="nav-link w-100" data-bs-toggle="pill"
                          type="button" role="tab">
                          <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i> Log Out
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Courses Section */}
                <div className="accordion accordion-flush" id="accordionFlushExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button bg-primary text-white accordianShadowHover collapsed"
                        type="button" data-bs-toggle="collapse" data-bs-target="#allCourses">
                        <i className="fa fa-book" aria-hidden="true"></i> &nbsp; Courses
                      </button>
                    </h2>
                    <div id="allCourses" className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body">
                        <button className="nav-link w-100" data-bs-toggle="pill" data-bs-target="#UpdateNewCourse"
                          type="button" role="tab">
                          <i className="bi bi-cloud-arrow-up-fill"></i>  Push New
                        </button>
                        <button className="nav-link w-100" data-bs-toggle="pill" data-bs-target="#hhhh"
                          type="button" role="tab">Course List
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Offer Section */}
                <div className="accordion accordion-flush" id="NewOffer">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button bg-primary text-white accordianShadowHover collapsed"
                        type="button" data-bs-toggle="collapse" data-bs-target="#Offers">
                        <i className="bi bi-rss"></i>&nbsp;   Offer
                      </button>
                    </h2>
                    <div id="Offers" className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body">
                        <button className="nav-link w-100" data-bs-toggle="pill" data-bs-target="#OffersForNewStudent"
                          type="button" role="tab">
                          <i className="bi bi-cloud-arrow-up-fill"></i>   Push New Notice
                        </button>
                        <button className="nav-link small w-100" data-bs-toggle="pill" data-bs-target="#noticeArea"
                          type="button" role="tab">
                          Notice
                        </button>
                      </div>
                    </div>


                  </div>
                </div>
                {/* Online Exams Section */}
                <div className="accordion accordion-flush" id="OnlineExams">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button bg-primary text-white accordianShadowHover collapsed"
                        type="button" data-bs-toggle="collapse" data-bs-target="#CCC">
                        <i className="fa fa-file-text" aria-hidden="true"></i> &nbsp;   CCC MCQ
                      </button>
                    </h2>
                    <div id="CCC" className="accordion-collapse collapse" data-bs-parent="#CCC">
                      <div className="accordion-body">
                        <button className="nav-link small w-100" data-bs-toggle="pill" data-bs-target="#CCCMCQ"
                          type="button" role="tab">
                          Update MCQ
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ------------------------ End  Aside Bar ------------------------ */}
            {/* ------------------------ Start Main Body Content ------------------------ */}
            <div className="col-md-10 container m-0 p-0">
              <div className="tab-content mx-1 px-0 bg-light" id="v-pills-tabContent">
                {/* --------------------------- Start Body Nav Top Bar --------------------------- */}
                <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel"
                  aria-labelledby="v-pills-home-tab" tabIndex="0">
                  <div className="mx-0 px-0 ">
                    <div className="row mb-2 d-flex justify-content-center m-auto w-100">
                      <div className="col-xl-3 col-xxl-3 col-sm-6 my-2">
                        <div className="widget-stat myshadow2 border-0 card bg-danger">
                          <div className="card-body">
                            <div className="media">
                              <span className="mx-1 bg-white">
                                <i className="fa fa-user-circle-o text-danger" aria-hidden="true"></i>
                              </span>
                              <div className="media-body text-white">
                                <p className="mb-1">Total Students</p>
                                <h3 className="text-white">{allStudent.length}</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-xxl-3 col-sm-6 my-2">
                        <div className="widget-stat myshadow2 border-0 card bg-warning d-flex">
                          <div className="card-body">
                            <div className="media">
                              <span className="mx-1">
                                <i className="fa fa-graduation-cap text-primary" aria-hidden="true"></i>
                              </span>
                              <div className="media-body text-white">
                                <p className="mb-1">Total Course</p>
                                <h3 className="text-white">{coursesLength}</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-xxl-3 col-sm-6 my-2">
                        <div className="widget-stat myshadow2 border-0 card bg-voilet">
                          <div className="card-body">
                            <div className="media">
                              <span className="mx-1">
                                <i className="bi bi-award-fill text-voilet" aria-hidden="true"></i>
                              </span>
                              <div className="media-body text-white">
                                <p className="mb-1">Total Offers</p>
                                <h3 className="text-white">{offersLength}</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-xxl-3 col-sm-6 my-2">
                        <div className="widget-stat myshadow2 border-0 card bg-primary">
                          <div className="card-body">
                            <div className="media">
                              <span className="mx-1">
                                <i className="fa fa-comments text-primary" aria-hidden="true"></i>
                              </span>
                              <div className="media-body text-white">
                                <p className="mb-1">New Message</p>
                                <h3 className="text-white">25</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <StudentChart std={allStudent} Tcourse={coursesLength} />

                  <div className=" myshadow2 border-0 card">ff</div>
                </div>
                {/* --------------------------- End Body Nav Top Bar --------------------------- */}
                <div className="tab-pane fade mx-0 px-0 position-absolute top-25 mt-2" id="AllStudent" role="tabpanel"
                  tabIndex="0">
                  <div className="row mx-0 px-0 bg-primary myshadow w-100">
                    <div className="col-12 py-2 mx-0 px-0 d-flex justify-content-around align-items-center ">
                      <div className="h2 fw-bold myFlex2 text-white"><b className='px-2 text-uppercase'>All Students</b></div>
                      <div className="myFlex2">
                        <button className="btn btn-primary rounded-0 d-flex align-items-center">  <i className="fa fa-plus-circle"
                          aria-hidden="true"></i>
                          <Link to="/AdmissionForm" className="nav-link" >&nbsp; Add New</Link> </button>
                      </div>
                    </div>
                  </div>
                  <div className="row mx-0 p-4 bg-white text-primary  myshadow"
                    style={{ borderTop: 'var(--my-border)' }}>

                    <div
                      className="col-12 mx-0  px-2 fw-medium d-flex justify-content-between align-items-center ">
                      <div className="d-flex align-items-center fw-bolder">
                        <p id="All"> Total Students List</p>
                      </div>
                      <div className="row d-flex align-items-center m-2">

                        <div className="col d-flex input-group mysearch">
                          <button className=' btn btn-warning m-1 rounded-2 searchStudent fw-bolder' onClick={getStudentList}><i className="bi bi-search text-white "></i></button>
                          <input type="text" className="form-control m-1 w-25" placeholder="Full name" onChange={(e) => { setFullName(e.target.value) }} value={fullName} />
                          <input type="text" className="form-control m-1 w-25" placeholder="Reg No." onChange={(e) => { setRegNum(e.target.value) }} value={regNum} />
                        </div>

                      </div>

                    </div>
                    <hr />
                    <table className="table table-responsive table-sm small " id="dashBoardTable" style={{ color: 'maroon' }}>
                      <thead>
                        <tr role="row">
                          <th >Photo</th>
                          <th>Reg. No</th>
                          <th>Name</th>
                          <th>Address</th>
                          <th>Mobile</th>
                          <th>Admission Date</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {allStudent.length >= 1 && allStudent.map((student) => {
                          return (
                            <tr role="row" className="odd" id={student._id} key={student._id}>
                              <td>
                                <div className="databsimg">
                                  <img className={student.gnCertificate == 1 ? "border border-success" : "rounded-circle"} src={student.photo} width="40" alt="Student Photo" />
                                </div>
                              </td>
                              <td className="fw-medium small text-uppercase">
                                {student.regNum ? (
                                  <span className="text-success">
                                    {student.regNum.split('/')[1] + '/' + student.regNum.split('/')[2]}
                                  </span>
                                ) : (
                                  <span className="text-warning">Pending</span>
                                )}
                              </td>
                              <td className="">{student.name}</td>
                              <td>{student.address}</td>
                              <td>{student.mobileNumber}</td>
                              <td>{student.dob.slice(0, 10)}</td>
                              <td>
                                {
                                  (!student.regNum) && <button
                                    type="button"
                                    id="LaunchModal"
                                    className="btn btn-sm bg-secondary bg-primary m-1 text-white"
                                    title='Take Admission'
                                    onClick={() => {
                                      setdlSId('');
                                      setTkAdmission(student._id);
                                      setShowModal(true);
                                    }}
                                  >
                                    <i className="fa fa-pencil-square" aria-hidden="true"></i>
                                  </button>}
                                {
                                  (student.regNum) && <button className='btn btn-primary' title='Generate certificate' onClick={() => {
                                    setdlSId('');
                                    setTkAdmission('');
                                    setGnrCert(student._id);
                                    setShowModal(true);
                                  }}><i className="bi bi-person-check-fill"></i></button>
                                }
                                {
                                  (!student.regNum) && <button
                                    type="button"
                                    id="LaunchModal"
                                    className="btn btn-sm bg-secondary bg-danger m-1 text-white"
                                    title='delete Registration'
                                    onClick={() => {
                                      setdlSId(student._id);
                                      setShowModal(true);
                                    }}
                                  >
                                    <i className="fa fa-trash-o" aria-hidden="true"></i>
                                  </button>
                                }
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>

                      <Modal show={showModal} onHide={handleModalClose} animation={false} >
                        <Modal.Header className='bg-primary ' closeButton >
                          <Modal.Title>
                            <div className="h2 fw-bold myFlex2 text-white "><b className="px-2 text-uppercase"> {dlSId ? "DELETE STUDENT'S" : tkAdmission ? 'Take Admission' : "Generate Certificate"}</b></div>
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <StudentModel />
                        </Modal.Body>
                        <Modal.Footer>

                          {
                            dlSId ? (<Button variant="danger" onClick={deleteStudentById}>Delete</Button>) : tkAdmission ?
                              (<>
                                <input type="number" placeholder="Enter Registration Number" onChange={(e) => { setIndexNum(e.target.value) }} />
                                <Button variant='primary' onClick={takeNewAdmission}><i className="fa fa-plus" aria-hidden="true"></i></Button>
                              </>) : gnrCert ?
                                (<>
                                  <input type="number" maxLength={3} className='form-control' placeholder='Enter Percentage' onChange={(e) => { setPercentage(e.target.value) }} />
                                  <input type="date" maxLength={3} className='form-control' onChange={(e) => { setIssueDate(e.target.value) }} />
                                  <Button variant="secondary" onClick={handleModalClose}>
                                    <i className="bi bi-trash"></i>
                                  </Button>
                                  <button title='Save' className='btn btn-primary' onClick={generateCertificate}>
                                    <i className="fa fa-paper-plane" aria-hidden="true"></i></button>
                                </>) :
                                (<>
                                  <span>Not Defined</span>
                                </>)
                          }
                        </Modal.Footer>
                      </Modal>
                    </table>
                  </div>
                </div>
                <div className="tab-pane fade mx-0 px-0 position-absolute top-0 mt-5 pt-4 AddmissionDataAdmin" id="AddStudent" role="tabpanel"
                  tabIndex="0">
                  <AdmissionForm className="mx-0 px-0 cardEffects border border-2 border-white" />
                </div>
                <div className="tab-pane fade mx-0 px-0 cardEffects cardEffectsBorder my-2" id="DeleteStudents" role="tabpanel"
                  tabIndex="0">
                  <StudentDataBs />
                </div>
                <div className="tab-pane fade mx-0 px-0" id="RestoreStudent" role="tabpanel"
                  tabIndex="0">
                  <header className="bg-dark my-2 py-2">
                    <h1 className="text-center text-white">
                      Restore Student's
                    </h1>
                  </header>
                </div>
                <div className="tab-pane fade mx-2 py-4" id="ContactForm" role="tabpanel">
                  <div className="mx-0 px-0">
                    <div className="row mb-5">
                      <div className="row  myflex d-flex justify-content-center my-1">
                        <div className="col-12 col-md-8 bg-white py-1 myshadow">
                          <div className="p-2">
                            <div className="border-bottom text-white text-center text-dark m-0 py-2 h4 fw-bold text-uppercase"
                              style={{ border: '1px solid #012C5', background: 'var(--card-bg)' }}
                            >
                              <h1 className="fw-bolder fw-bolder"> UPDATE <font color='red'>CONTACT DETAILS</font></h1>
                            </div>
                            <div className="row offersTitle">
                              <div className="d-flex py-3">
                                <div className="col-md-3">
                                  <button type="button" className="btn btn-primary" onClick={handleNewButtonClick}>
                                    <i className="fa fa-phone" aria-hidden="true"></i>   Contact <i className="bi bi-arrow-right-short"></i></button>
                                </div>
                                <div className={`col-md-9 ${showInput ? '' : ' d-none'}`}>
                                  <div className="input-group">
                                    <input type="number" placeholder='Enter Contact Number...' className='form-control' />
                                    <button className='btn btn-primary'>Send</button>
                                  </div>
                                </div>
                              </div>
                              <div className="mb-3">
                                <textarea className="form-control" placeholder='Enter institute Location....' rows="4"></textarea>
                              </div>
                            </div>
                            <div className="text-center my-2">
                              <a className="small btn btn-primary">Update</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade mx-2 py-5" id="Notisfication" role="tabpanel">
                  <div className="mx-0 px-0">
                    <div className="row mb-5">
                      <div className="row  myflex d-flex justify-content-center my-1">
                        <div className="col-12 col-md-8 bg-white py-1 myshadow">
                          <div className="p-2">
                            <div className="border-bottom text-white text-center text-dark m-0 py-2 h4 fw-bold"
                              style={{ border: '1px solid #012C5', background: 'var(--card-bg)' }} >
                              <h1 className="fw-bolder fw-bolder"> UPDATE <font color='red'>NOTICEFICATION</font></h1>
                            </div>
                            <div className="row py-3">
                              <div className="col-md-3">
                                <button type="button" className="btn btn-primary" onClick={handleNewButtonClick}>
                                  <i className="fa fa-book" aria-hidden="true"></i>   Content <i className="bi bi-arrow-right-short"></i></button>
                              </div>
                              <div className={`col-md-9 ${showInput ? '' : ' d-none'}`}>
                                <div className="input-group">
                                  <textarea className="form-control" placeholder='Enter Noticefication content here.....' rows="4"></textarea>
                                </div>
                              </div>
                            </div>
                            <div className="text-center my-2">
                              <a className="small btn btn-primary" href="#">Update</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade mx-2 py-3" id="instituteCertificatePictutes" role="tabpanel">
                  <div className="row  myflex d-flex justify-content-center my-1">
                    <div className="col-12 col-md-8 bg-white py-1 myshadow">
                      <div className="mx-0 px-0">
                        <div className="row mb-5">
                          <div className="col-12">
                            <div className="col-12 m-0 p-0 mb-3" style={{ border: '1px solid #012C5', background: 'var(--card-bg)' }}>
                              <div className="container text-center m-0 py-3 h2 fw-bold text-uppercase"
                                style={{ color: 'rgb(255, 255, 255)' }}>
                                <b style={{ letterSpacing: '1px', color: 'white' }}>
                                  Our <font color='red'>Affiliations</font>
                                </b>
                              </div>
                            </div>
                            <span className='text-danger fw-medium'>Provide to all the instituion  certificate ,
                              Drishtee is registered under the organization.</span>
                            <div className="my-3">
                              <textarea className="form-control" placeholder='Caption of AFFILIATIONS message....' rows="4"></textarea>
                            </div>
                          </div>
                          <div className="text-center">
                            <a className="small btn btn-primary" href="#">
                              <i className="bi bi-cloud-arrow-up-fill"></i> Update</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <ProgramPictures className="tab-pane fade bg-primary my-2" id="ProgramPictures" role="tabpanel" tabIndex="0"/>
                <div className="tab-pane fade mx-2" id="certificate" role="tabpanel">
                  <div className="mx-0 px-0">
                    <div className="row mb-5">
                      <UploadCertificateData />
                    </div>
                  </div>
                </div>
                {/* ---------------------Start Admin  Body--------------------- */}
                <div className="tab-pane fade" id="AdminProfile" role="tabpanel" tabIndex="0">
                  <div className="row m-auto my-2">
                    <div className="col-12 bg-white myshadow p-2 ">
                      <div className="row bg-white mx-0 px-0">
                        <section className="section">
                          <div className="container ">
                            <div className="row align-items-center flex-row-reverse">
                              <div className="col-md-8  border-bottom ">
                                <div className="about-text">
                                  <div className="row">
                                    <h1 className='fw-bolder text-primary'>{adminData.name}</h1>
                                    <hr />
                                    <div className="col-6">
                                      <div className="media">
                                        <label>Birthday</label>
                                        <p>{dob.toDateString()}</p>
                                      </div>
                                      <div className="media">
                                        <label>Address</label>
                                        <p>{adminData.address}</p>
                                      </div>
                                    </div>
                                    <div className="col-6">
                                      <div className="media">
                                        <label>E-mail</label>
                                        <p>{adminData.email}</p>
                                      </div>
                                      <div className="media">
                                        <label>Profession</label>
                                        <p>{adminData.profession}</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-4  d-flex text-center flex-column">
                                <div className="about-avatar">
                                  <img src={adminData.profilePic} alt="Ajay Tiwary" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="px-4 pb-5 bg-body-tertiary">
                            <h3 className="dark-color fw-bolder text-warning">About Me</h3>
                            <p>{adminData.about}</p>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="NewAccount" role="tabpanel" tabIndex="0">
                  <div className="row myflex d-flex justify-content-center">
                    <div className="col-12 col-md-8 bg-white py-3 my-3 myshadow">
                      <div className="p-2">
                        <div className="text-center">
                          <h1 className="h2 fw-bold text-gray-900 mb-4 text-primary">Create Account!</h1>
                        </div>
                        <div className="user">
                          <div className="form-group row my-2">
                            <div className="col-sm-6 mb-3 mb-sm-0 ">
                              <input type="text" className="form-control form-control" onChange={(e) => { setName(e.target.value) }} value={name} placeholder="Enter Name" />
                            </div>
                            <div className="col-sm-6">
                              <input type="email" className="form-control form-control" onChange={(e) => { setEmail(e.target.value) }} value={email} placeholder="Email" />
                            </div>
                            <div className="input-group mb-3"> <i className="bi bi-image input-group-text "></i> <input
                              className="form-control form-control-sm py-2 " id="formFileSm" type="file"
                              onChange={(event) => { setImage(event.target.files[0]); setUploadStatus(false) }} />
                              {uploadStatus ? <span >Uploaded</span> : <button className="btn btn-primary btn-small"
                                onClick={uploadPhoto}>Upload Now</button>}
                            </div>
                            <div className="col-sm-6">
                              <input type="date" className="form-control form-control" onChange={(e) => { setNDob(e.target.value) }} placeholder="Date Of Birth" />
                            </div>
                            <div className="col-sm-6">
                              <input type="Number" className="form-control form-control" onChange={(e) => { setMobile(e.target.value) }} value={mobile} placeholder="Mobile Number" />
                            </div>
                            <div className="col-sm-6">
                              <input type="text" className="form-control form-control" onChange={(e) => { setAddress(e.target.value) }} value={address} placeholder="Address" />
                            </div>
                            <div className="col-sm-6">
                              <input type="text" maxLength={12} className="form-control form-control" onChange={(e) => { setAadhaar(e.target.value) }} value={aadhaar} placeholder="12 digit Aadhaar Number" />
                            </div>
                            <div className="col-sm-6">
                              <input type="text" className="form-control form-control" onChange={(e) => { setProfesssion(e.target.value) }} value={profession} placeholder="Profession" />
                            </div>
                            <div className="form-group row my-2">
                              <div className="col-sm-6 mb-3 mb-sm-0">
                                <input type="text" className="form-control form-control" onChange={(e) => { setPassword(e.target.value) }} value={password} placeholder="Password....*" />
                              </div>
                              <div className="col-sm-6">
                                <input type="text" className="form-control form-control" onChange={(e) => { setRPassword(e.target.value) }} value={rPassword} placeholder="Repeat Password....*" />
                              </div>
                              <div className="w-10">
                                <input type="text" className="form-control form-control" onChange={(e) => { setAbout(e.target.value) }} value={about} placeholder="Write About" />
                              </div>
                            </div>
                            <button type='button' className="btn btn-primary w-100 my-2 py-2 rounded-pill" onClick={RegisterAccount}>
                              Register Account
                            </button>
                          </div>
                        </div>
                        <hr />
                        <div className="text-center">
                          <a className="small" href="#">Forgot Password?</a>
                        </div>
                        <div className="text-center">
                          <a className="small" href="#">Already have an account? Login!</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="AdminList" role="tabpanel" tabIndex="0">
                  <div className="row myflex d-flex justify-content-center py-5">
                  <table>
                    <tbody>
                      <tr>
                        <th>Profile</th>
                        <th>NAME</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>UIDAI NO.</th>
                        <th>Addres</th>
                        <th>Profession</th>
                        <th>Generated At</th>
                        <th>Delete</th>
                      </tr>
                      {
                        (adminList.length>0) && adminList.map((admin) => {
                          return (
                            <tr id={admin._id}>
                              <td ><img style={{width:"40px"}} src={admin.profilePic} alt="Loading.." /></td>
                              <td>{admin.name}</td>
                              <td>{admin.email}</td>
                              <td>{admin.mobileNumber}</td>
                              <td>{admin.aadhaarNumber}</td>
                              <td>{admin.address}</td>
                              <td>{admin.profession}</td>
                              <td>{admin.createdAt}</td>
                              <td onClick={()=>{deleteAdmin(admin._id)}}><button><i class="bi bi-trash3-fill"></i></button></td>
                            </tr>
                          )
                        })
                      }
                    </tbody>
                  </table>
                  </div>
                </div>
                <div className="tab-pane fade" id="AdminProfile" role="tabpanel" tabIndex="0">
                  <div className="row myflex d-flex justify-content-center my-4">
                    <div className="col-12 col-md-11 bg-white py-3 myshadow">
                      <div className="row">
                        <div className="col-md-4">
                          <div className="row">
                            <div className="col-md-11  d-flex justify-content-center">
                              <div className="card px-3 " >
                                <img src="images/team/team-1.png" className="img-fluid card-img-top" alt="..." />
                                <div className="card-body text-center">
                                  <h5 className="card-title">Ajay Tiwari</h5>
                                  <p className="card-text">Web Developer || Programmer </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-8">
                          <div className="row">
                            <div className="col-md-11">
                              <div className="card ">
                                <div className="card-body">
                                  <div className="profile-personal-info pt-4">
                                    <h4 className="text-primary mb-4">Personal Information</h4>
                                    <div className="row mb-4">
                                      <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                        <h5 className="f-w-500">Name <span className="pull-right">:</span>
                                        </h5>
                                      </div>
                                      <div className="col-lg-9 col-md-8 col-sm-6 col-6"><span>Ajay Tiwari</span>
                                      </div>
                                    </div>
                                    <div className="row mb-4">
                                      <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                        <h5 className="f-w-500">Email <span className="pull-right">:</span>
                                        </h5>
                                      </div>
                                      <div className="col-lg-9 col-md-8 col-sm-6 col-6">
                                        <span>ajtiwari4@gmail.com</span>
                                      </div>
                                    </div>
                                    <div className="row mb-4">
                                      <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                        <h5 className="f-w-500">Mobile <span className="pull-right">:</span>
                                        </h5>
                                      </div>
                                      <div className="col-lg-9 col-md-8 col-sm-6 col-6"><span>9918151032</span>
                                      </div>
                                    </div>
                                    <div className="row mb-4">
                                      <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                        <h5 className="f-w-500">Address <span className="pull-right">:</span>
                                        </h5>
                                      </div>
                                      <div className="col-lg-9 col-md-8 col-sm-6 col-6"><span>
                                        Harredih mohalla , ward No. 04 Nichlaul, Maharajganj
                                      </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row m-2 d-flex justify-content-evenly ">
                      <div data-target="" className="col-3 mx-1  btn btn-primary"> Profile</div>
                      <div data-target="" className="col-3 mx-1  btn btn-primary">Edit </div>
                    </div>
                  </div>
                </div>
                {/* ---------------------End Admin Body --------------------- */}
                {/* ---------------------Start Course Body  --------------------- */}
                <div className="tab-pane fade mx-2" id="UpdateNewCourse" role="tabpanel">
                  <CreateNewCourse />
                </div>
                <div className="tab-pane fade mx-2" id="hhhh" role="tabpanel" >
                  <CourseList />
                </div>
                <div className="tab-pane fade mx-2" id="noticeArea" role="tabpanel" >
                  <UpdateCourse />
                </div>
                <div className="tab-pane fade" id="OffersForNewStudent" role="tabpanel">
                  <div className="mx-0 px-0 py-5">
                    <div className="row mb-5">
                      <div className="row  myflex d-flex justify-content-center my-1">
                        <div className="col-12 col-md-8 bg-white py-1 myshadow">
                          <OffersForm />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="CCCMCQ" role="tabpanel">
                  <QuestionForm />
                </div>
                {/* ---------------------End Course Body  --------------------- */}
              </div>
            </div>
            {/* ------------------------ Start Main Body Content ------------------------ */}
          </div>
        </div>
      </div>
    </div >
  )
}
