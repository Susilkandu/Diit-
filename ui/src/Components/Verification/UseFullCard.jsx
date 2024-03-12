import React from 'react'
import { Link } from 'react-router-dom'
export default function UseFullCard() {
    return (
        <div className="col-md-4 col-sm-12 mt-4 cardEffectsBorder cardEffects">
            <div className="row">
                <div className="container text-center m-0 py-2 h4 fw-bold text-uppercase"
                    style={{ color: 'rgb(255, 255, 255)', background: 'var(--card-bg)' }}>
                    <b style={{ letterSpacing: '1px', color: 'white' }}>
                        Useful Links
                    </b>
                </div>
                <div className="col-xl-6  col-md-6 col-sm-12 my-2">
                    <div className="widget-stat myshadow border card bg-warning d-flex">
                        <div className="card-body">
                            <div className="media">
                                <div className="media-body text-white ">
                                    <Link to={'/contact'} className="nav-link">Enquery Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6  col-md-6 col-sm-12 my-2">
                    <div className="widget-stat myshadow border card bg-danger d-flex">
                        <div className="card-body">
                            <div className="media">
                                <div className="media-body text-white text-center ">
                                    <Link to={'/AdmissionForm'} className="nav-link">New Admission</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 my-2">
                    <div className="widget-stat myshadow border card bg-primary d-flex">
                        <div className="card-body">
                            <div className="media">
                                <div className="media-body text-white ">
                                    <Link to={'/TestExamCcc'} className="nav-link">CCC PRACTICE</Link>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 my-2">
                    <div className="widget-stat myshadow border card bg-voilet d-flex ">
                        <div className="card-body">
                            <div className="media">
                                <div className="media-body text-white ">
                                    <Link to={'/offer'} className="nav-link">What's New Offers..?</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}
