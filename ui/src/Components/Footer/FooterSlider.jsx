import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css'; // Corrected import statement for Swiper styles
import '../../App.css';

const images = [
    'images/thumbnails/python-img.png',
    'images/thumbnails/bootstrap.png',
    'images/thumbnails/sass.png',
    'images/thumbnails/dtp.png',
    'images/thumbnails/ccc.png',
    'images/thumbnails/c-lang.png',
    'images/thumbnails/python-img.png',
    'images/thumbnails/sass.png',
    'images/thumbnails/tally.png',
    'images/thumbnails/pm70.png',
    'images/thumbnails/ms_office.png',
    'images/thumbnails/js.png',
    'images/thumbnails/funda.png',
];

const FooterSlider = () => {
    return (
        <Swiper
            slidesPerView={7}
            spaceBetween={3}
            centeredSlides={true}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop={true}
            modules={[Autoplay]}
            className="mySwiper p-0 m-0 border-secondary border-bottom"
            id="thumblain"
            style={{ background: '#00062B' }}
            breakpoints={{
                640: {
                    slidesPerView: 3,
                    spaceBetween: 1
                },
                768: {
                    slidesPerView: 6,
                    spaceBetween: 3
                },
            }}
        >
            {images.map((image, index) => (
                <SwiperSlide key={index}>
                    <div className="transparentTableData m-0 my-auto p-0 border-0 d-flex">
                        <div className="transparentTableData m-auto my-4">
                            <img src={image} className='img-fluid' alt={`Thumbnail ${index + 1}`} />
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default FooterSlider;
