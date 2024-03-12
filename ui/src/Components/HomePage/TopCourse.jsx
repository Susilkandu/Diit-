import React from 'react'
import GallaryImages from './GallaryImages'
import Home from '../Home'
export default function TopCourse(props) {
    return (
        <div>
            <div className="card-group ">


                <div className="card p-1 m-3 cardBoxShadow" style={{ background: '#fff' }} data-aos="zoom-in">

                    {/* <img src="images/vender/web.png" className="img-fluid card-img-top img-size" /> */}
                    <div className="card-body">
                        {/* {
                            GallaryImages.map((val, ind) => {
                                return <GallaryImages
                                    imgSrc={val.imgsrc}
                                    title={ind.title}
                                />
                            })
                        } */}
                        <b className="card-title ">Web Development</b>
                    </div>
                </div>

            </div>
        </div>
    )
}
