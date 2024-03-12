import { useState, useContext, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import '../../App.css';
import { Link } from "react-router-dom";
import { UniversalContext } from '../../context/universal';
import toggleDarkMode from '../Darkmode/DarkMode'; // Import the toggleDarkMode function

function Header() {
    const { setAdminLogin } = useContext(UniversalContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const fetchLoginAdmin = (async () => {
        if (email && password) {
            fetch("http://localhost:3000/admin/login", {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email, password
                })
            }).then(res => res.json())
                .then((data) => {
                    if (!data.error) {
                        localStorage.setItem('aJwt', data.token)
                        setAdminLogin(true);
                        toast.success('Logged In')
                        navigate('/Admin');
                    }
                    else {
                        toast.error(data.error);
                    }
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    })

    const [isDarkMode, setIsDarkMode] = useState(false);
    useEffect(() => {
        function header() {
            new window.google.translate.TranslateElement({ pageLanguage: 'en', includedLanguages: 'ar,bn,de,en,es,fr,gu,hi,it,ja,jv,ko,mr,pa,pt,ru,sw,ta,te,tr,ur,zh-CN,zh-TW,nl,fi,el,he,haw,hu,is,id,ga,lv,lt,ms,mt,ml,ne,no,fa,pl,ro,sm,sr,sk,sl,sv,tl,th,to,uk,vi,af,am,az,be,bg,bs,ca,ceb,co,cs,cy,da,et,eu,fa,fi,fj,fr,fy,ga,gd,gl,gu,ha,haw,hmn,hr,ht,hu,hy,ig,is,it,iw,ja,jw,ka,kk,km,kn,ku,ky,la,lb,lo,lo,lt,lv,mg,mk,ml,mn,mr,ms,my,nb,ne,nl,nn,no,ny,or,pa,pl,ps,pt,ro,ru,rw,si,sk,sl,sm,sn,so,sq,sr,st,su,sv,sw,ta,te,tg,th,tk,tl,tn,tr,tt,ug,uk,ur,uz,vi,xh,yi,yo,zh,zh-CN,zh-TW,zu' }, 'ChangerLang');
        }
        header();
    }, []);

    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top py-0" style={{ background: 'var(--darkRed)' }} id="TopNavBar">

                <div className="d-flex align-items-center justify-content-between fixed-top" style={{ background: 'var(--topNavBgColor)', width: '100vw', fontSize: '0.7rem' }}>
                    <div className="changer-container d-flex align-items-center justify-content-center TopWelcomeNavLeft">
                        <input type="checkbox" id="switch" className="checkbox d-none w-50" onClick={() => toggleDarkMode(isDarkMode, setIsDarkMode)} />
                        <label htmlFor="switch" className="toggle">
                            <p className="m-0 p-0 switchChild">
                                <i className="bi bi-sun-fill" style={{ color: 'orangered' }} title="Light Mode"></i>
                                <i className="bi bi-moon-stars-fill text-white" title="Night Mode"></i>
                            </p>
                        </label>
                        <span id="ChangerLang" title='Change into your own Language'></span>
                    </div>
                    <div className="TopWelcomeCenter d-flex align-items-center">
                        <marquee scrollamount="8" width="100%">
                            <b className="text-light text-uppercase">
                                <big style={{ letterSpacing: '1px' }}> Welcome to DRISHTEE COMPUTER CENTER</big>
                            </b>
                        </marquee>
                    </div>

                    <div className="ms-auto d-flex align-items-center justify-content-end TopWelcomeNavRight">

                        <a className="nav-link active text-white" id="myH2" href="tel:+919918151032" title="Call-now">
                            <img src='images/icon/call.gif' className='img-fluid' />+919918151032
                        </a> &nbsp; &nbsp;
                        <a className="nav-link text-white" id="myH3" href="mailto:ajtiwari4@gmail.com" title="E:Mail-Us">
                            <img src='images/icon/mail.png' className='img-fluid' />ajtiwari4@gmail.com
                        </a>
                    </div>
                </div>

                <div className="container-fluid fw-medium text-uppercase">
                    <Link className="navbar-brand p-0" to="/">
                        <img src="images/icon/logo.png" className="img-fluid" width={42} alt="DIIT" />
                    </Link>
                    <button className="navbar-toggler small" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon small text-light"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav m-auto w-100 d-flex justify-content-between align-items-center ">
                            <li className="nav-item">
                                <Link to="/Home" className="nav-link"> <i className="fa fa-home"></i> Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link"> <i className="fa fa-address-card"></i> About</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link to="/Course" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">
                                    <i className="fa fa-book"></i> Course
                                </Link>
                                <ul className="dropdown-menu rounded rounded-0" id='CourseListNav'>
                                    <li>
                                        <Link className="dropdown-item" to="/ComputerLanguage">All Computer Course</Link>
                                    </li>

                                    <li>
                                        <Link className="dropdown-item" to="/Certificate">Computer Certificate</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/Diploma">Computer Language</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/GraphicsDesign">Graphics Design</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/WebDevelopment">Web Development</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/ComputerRepairing">Computer Repairing</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/NielitCourse">NIELIT/DEEOACC Courses</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link to="/branch" className="nav-link"><i className="fa fa-anchor"></i> Branch</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/StudentZone" role="button" data-bs-toggle="dropdown">
                                    <i className="bi bi-mortarboard-fill"></i> Student-zone
                                </Link>
                                <ul className="dropdown-menu" id="studentZoneNav">
                                    <li>
                                        <Link className="dropdown-item" to="/AdmissionForm">New Admission</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/verification">Verify Your Certificate</Link>
                                    </li>
                                    <li>
                                        <Link to={'/testExamCcc'} className="dropdown-item">CCC PRACTICE</Link>
                                    </li>
                                    <li>
                                        <Link to={'/offer'} className="dropdown-item">New Offer</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link"><i className="fa fa-phone"></i> Contact</Link>
                            </li>
                            <li className="nav-item">
                                <button className="btn btn-small p-0 border-0 myDisplayflexRow flex-column" type="button"
                                    data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrollingRight"
                                    aria-controls="offcanvasScrollingRight">
                                    <img src="images/team/team1.png" className="rounded rounded-circle" width="35" alt="Team Member" />
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1"
                id="offcanvasScrollingRight" aria-labelledby="offcanvasScrollingLabel">

                <div className="offcanvas-header bg-primary border-bottom">
                    <h5 className="offcanvas-title" id="offcanvasScrollingLabel">
                        <img src="images/team/team1.png" width="40" className="rounded-circle" alt="User Avatar" />&nbsp;
                        <span className='fw-bolder text-white'>Ajay Tiwari</span>
                    </h5>
                    <button type="button" className="btn btn-outline-dark" data-bs-dismiss="offcanvas" aria-label="Close">x</button>
                </div>

                <div className="offcanvas-body myshadow m-0 p-0">
                    <div className="row bg-primary mx-0 px-0">
                        <div className="col-12 p-0 m-0 d-flex text-white fw-bolder text-center align-items-center justify-content-center">
                            <h1 className='p-0 m-0'><b className='p-0 m-0'>Admin Portal</b></h1>
                        </div>
                        <hr className="border border-secondary" />
                    </div>

                    <div className="row mx-0 px-0 py-1 my-1">
                        <div className="col-12">
                            <ul className="nav nav-pills mb-3 d-flex" id="pills-tab" role="tablist">
                                <li className="nav-item d-flex" role="presentation">
                                    <button className="nav-link small" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#Profile"
                                        type="button" role="tab">
                                        <i className="fa fa-user" aria-hidden="true"></i> Profile
                                    </button>
                                    <button className="nav-link small" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#SettingAccount"
                                        type="button" role="tab">
                                        <i className="fa fa-gear amtWheel"></i> Log In
                                    </button>
                                </li>
                            </ul>

                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade" id="SettingAccount" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0">
                                    <div className='d-flex align-content-center justify-content-center flex-column'>
                                        <div className="mb-3">
                                            <input type='email' value={email} className="form-control" placeholder='Enter Your id' aria-describedby="emailHelp"
                                                onChange={(event) => { setEmail(event.target.value) }} />
                                        </div>
                                        <div className="mb-3">
                                            <input type="text" value={password} placeholder='Enter Your Password' className="form-control"
                                                onChange={(event) => { setPassword(event.target.value) }} />
                                        </div>
                                        <button type="button" className="btn bg-primary text-white fw-bold" onClick={() => { fetchLoginAdmin() }}>
                                            <i className="fa fa-sign-in"></i> Log in
                                        </button>
                                    </div>
                                </div>

                                <div className="tab-pane" id="Profile" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0">
                                    <div>
                                        <ul className="list-group ">
                                            <li className="list-group-item bg-transparent">
                                                <span className='text-primary'>Name:</span> Ajay Tiwari
                                            </li>
                                            <li className="list-group-item bg-transparent">
                                                <span className='text-primary'>Address:</span> Harredih Mohalla Nichlaul
                                            </li>
                                            <li className="list-group-item bg-transparent">
                                                <span className='text-primary'>Contact:</span> +919918151032
                                            </li>
                                            <li className="list-group-item bg-transparent">
                                                <span className='text-primary'>Profession:</span> Lawyer
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}

export default Header;
