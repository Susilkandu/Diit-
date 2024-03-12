import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Errors = () => {
    return (
        <div style={{ margin: '5rem 0' }}>
            <section className="container myshadow bg-white py-md-5 py-4 d-flex align-items-center">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-6 col-12">
                            <div className="cont_principal cont_error_active text-center">
                                <div className="cont_error">
                                    <span className="fw-700 mb-2 BadLine">404</span>
                                    <h2 className="fw-700 mb-2">Sorry, We Can't Find That Page!</h2>
                                    <p className="label-color-1 small fw-400 mb-sm-5 mb-4">Some Error Occurred. Your Request Could Not Be Processed!</p>
                                    <p className="label-color-1 small fw-400 mb-sm-5 mb-4">Start working with DRISHTEE that can provide everything you need for Education.</p>
                                    <div className="mx-auto btn btn-primary rounded-pill px-sm-5 px-4 py-sm-3 py-2 fs-18 fw-600">
                                        <Link to="/" title="Home" className='nav-link fs-4'>
                                            <i className="fa fa-home"></i> Back to Home
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Errors;
