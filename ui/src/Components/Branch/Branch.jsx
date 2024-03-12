import React, { useEffect } from 'react';
import Typed from 'typed.js';
import { Link } from 'react-router-dom';
import toggleDarkMode from '../Darkmode/DarkMode';
function Branch() {
    useEffect(() => {
        const typed = new Typed('#typingAmt', {
            strings: ['Growing', 'Faster.', 'Bigger'],
            typeSpeed: 50,
            loop: true,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div id='branchBg'>
            <div className="mx-sm-0 px-sm-0 px-0">
                <div className="myshadow" style={{ background: 'white', margin: '4.1rem 0' }} id="BranchHeadSection">
                    <div className="row border-bottom p-0 m-0" style={{ background: 'var(--dark-blue)' }}>
                        <div className="col-md-6 p-0">
                            <div id="carouselExampleAutoplaying" className="carousel slide carousel-fade p-0 m-0 aboutMainImg" data-bs-ride="carousel">
                                <div className="carousel-inner MainCarousel p-0 m-0">
                                    {[
                                        "images/vender/diitOffice.jpg",
                                        "images/vender/diitOffice2.jpg",
                                        "images/vender/diit2Lab.jpg",
                                        "images/vender/diitOffice2.jpg",
                                        "images/vender/diit2Lab.jpg"
                                    ].map((image, index) => (
                                        <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`} data-bs-interval="3000">
                                            <img src={image} className="d-block img-fluid w-100" alt={`Slide ${index}`} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6" style={{ background: 'var(--cardHeadColorDark)' }} id='branchBgCard'>
                            <div className="row">
                                <div className="col-md-12 text-warning fw-bolder py-4" data-aos="fade-up" data-aos-duration="1000">
                                    <h3 className="fw-bolder">WELCOME TO DRISHTEE COMPUTER CENTER </h3>
                                    <h6 className="p-2">
                                        <span>Branch:-</span>
                                        Main Market road in front of Rauniyar chitra mandir, Thoothibari
                                        Maharajganj
                                    </h6>
                                </div>
                            </div>
                            <div className="row mt-2" data-aos="fade-down" data-aos-duration="2000">
                                <div className="col-12" style={{ color: 'white' }}>
                                    <h3 className="pt-2 px-md-4">We Provide High-Quality Education For Everyone</h3>
                                    <p className="px-md-4">
                                        Drishtee Institute of Technology is started as one of the best Technical
                                        computer institutes in the year 2018.
                                        Drishtee Institute of Technology is established under the best computer center Education Trust in Thoothibari.
                                        <br />
                                        Drishtee Institute of Technology is known for quality and excellence in education as
                                        well as extra-curricular activities. It is committed to providing abundant learning
                                        opportunities to students.
                                        <br /> <br />
                                        <button className="button btn btn-primary yellow-btn fw-bolder" data-aos="fade-down">
                                            <Link to="/Contact" className="nav-link"> Contact <i className="bi bi-arrow-right-short"></i> </Link>
                                        </button>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container text-center fs-4 fw-bold">
                    <div className="row">
                        <div className="col-12 my-3" id="BranchTypingText">
                            <small>
                                Drishtee Institute of Technology is{' '}
                                <span className="text-warning" id="typingAmt"></span>
                            </small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid mt-4">
                <div className="row text-white" style={{ background: 'var(--dark-blue2)' }} id="shortContact">
                    <div className="col-12 py-4">
                        <div className="row my-4 d-flex align-items-center">
                            <div className="col-md-6 text-uppercase" data-aos="fade-right">
                                For More Informations to contact us &nbsp;
                                <img src="images/icon/arrow.png" width="50px" alt="Arrow Icon" />
                            </div>
                            <div className="col-md-6">
                                <div className="row d-flex justify-content-center">
                                    <div className="col-6 bg-warning yellow-btn border border-light fw-medium px-1 py-4 mx-1 my-3 d-flex justify-content-center" title="Santosh Singh Chauhan" data-aos="fade-right" data-aos-duration="1000">
                                        <Link to="mailto:santoshchauhan@gmail.com " className="nav-link">Drishteeeducation@yahoo.com</Link>
                                    </div>
                                    <div className="col-5 bg-warning yellow-btn border border-light fw-medium px-1 py-4 mx-1 my-3 d-flex justify-content-center" title="Santosh Singh Chauhan" data-aos="fade-right">
                                        <img src="images/icon/call.gif" width="20px" alt="Call Icon" />
                                        <Link to="tel:+917398889347" className="nav-link">+917398889347</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row m-0 p-0 mt-4">
                <div className="col-12 p-0 m-0">
                    <div className="card border border-0 rounded rounded-0">
                        <div className="card-header h4 text-white rounded rounded-0" style={{ background: 'var(--d-blue)' }}>
                            <div data-aos="fade-right">
                                <i className="bi bi-geo-alt-fill"></i> Location
                            </div>
                        </div>
                        <div className="card-body m-0 p-0">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3541.3484879661028!2d83.69061145032624!3d27.427248144117375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39942392249c9073%3A0x6b62ef81415149dd!2sDrishtee%20Institute%20of%20Information%20Technology!5e0!3m2!1sen!2sin!4v1696133570458!5m2!1sen!2sin"
                                width="100%" height="500px" style={{ border: '0' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
            <div />
        </div>
    );
}

export default Branch;
