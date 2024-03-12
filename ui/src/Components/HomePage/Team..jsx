import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
import '../../App.css';
import { EffectCoverflow, Autoplay } from 'swiper/modules'; // Import Autoplay module

export default function App() {
    const BgTeam = {
        background: `linear-gradient(rgba(0, 0, 20, 0.8) ,rgba(14, 15, 16, 0.933)), url(images/vender/map2.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height:'450px'
    }
    return (
        <div className='py-4' style={{ ...BgTeam }}>
            <span className="w-100 d-block text-center my-4">
                <h1 className="fw-bolder text-warning" style={{ textShadow: '5px 5px 5px black' }}> Expert Instructors </h1>
            </span>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 350,
                    modifier: 1,
                    slideShadows: true,
                }}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}
                pagination={true}
                modules={[EffectCoverflow, Autoplay]}
                className="mySwiper"
            >

                <SwiperSlide className='swiper-slide'>
                    <div className="card px-5 py-2 team m-2 text-center rounded" id="expertFirst">
                        <img src="images/team/team1.png" style={{ border: '5px solid lightgray' }} className="card-img-top img-size rounded-circle" alt="Mr. Ajay Tiwari" />
                        <span className="w-100 fw-bold" style={{ color: 'red' }}>Mr. Ajay Tiwari</span>
                        <small className="fw-normal text-center text-success">Owner of DIIT</small>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                    <div className="card px-5 py-2 team m-2 text-center rounded" id="expertSecond">
                        <img src="images/team/team2.png" style={{ border: '5px solid lightgray' }} className="card-img-top img-size rounded-circle" alt="Santosh Singh Chauhan" />
                        <span className="w-100 fw-bold" style={{ color: 'red' }}>Santosh Singh Chauhan</span>
                        <small className="fw-normal text-center text-success">Teacher</small>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                    <div className="card px-5 py-2 team m-2 text-center rounded" id="expertThird">
                        <img src="images/team/team3.png" style={{ border: '5px solid lightgray' }} className="card-img-top img-size rounded-circle" alt="Manjesh Vishwakarma" />
                        <span className="w-100 fw-bold" style={{ color: 'red' }}>Manjesh Vishwakarma</span>
                        <small className="fw-normal text-center text-success">Teacher</small>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                    <div className="card px-5 py-2 team m-2 text-center rounded" id="expertFourth">
                        <img src="images/team/team4.jpg" style={{ border: '5px solid lightgray' }} className="card-img-top img-size rounded-circle" alt="Hridesh Bharati" />
                        <span className="w-100 fw-bold" style={{ color: 'red' }}>Hridesh Bharati</span>
                        <small className="fw-normal text-center text-success">Teacher</small>
                    </div>
                </SwiperSlide>
            </Swiper>

        </div>
    );
}
