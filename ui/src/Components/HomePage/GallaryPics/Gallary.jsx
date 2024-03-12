import React from 'react';

const YourComponent = () => {
    const images = {
        "images": [
            {
                "id": "pills-home",
                "sources": [
                    "images/vender/dance1.jpg",
                    "images/vender/parti2.png",
                    "images/vender/opening2.png",
                    "images/vender/gift.jpg",
                    "images/vender/sir_1.png",
                    "images/vender/parti.png",
                    "images/vender/sanjana.jpg",
                    "images/vender/all_std2.png",
                    "images/vender/pray.png",
                    "images/vender/Tparty.png",
                    "images/vender/std2.jpg",
                    "images/vender/reward1.png"
                ]
            },
            {
                "id": "pills-profile",
                "sources": [
                    "images/vender/std1.png",
                    "images/vender/std19.jpg",
                    "images/vender/diitclass.jpg",
                    "images/vender/lab2.jpg",
                    "images/vender/presentation1.png",
                    "images/vender/dance1.jpg",
                    "images/vender/dance3.jpg",
                    "images/vender/dance4.jpg",
                    "images/vender/presentation2.png",
                    "images/vender/std2.jpg",
                    "images/vender/presentation2.png",
                    "images/vender/presentation2.png"
                ]
            },
            {
                "id": "pills-contact",
                "sources": [
                    "images/vender/reward1.png",
                    "images/vender/reward2.png",
                    "images/vender/reward4.png",
                    "images/vender/reward5.png",
                    "images/vender/reward7.png",
                    "images/vender/rwd2.png",
                    "images/vender/sir_1.png",
                    "images/vender/presentation2.png",
                    "images/vender/sanjana.jpg",
                    "images/vender/rwd1.jpg",
                    "images/vender/sm.png",
                    "images/vender/std2.jpg"
                ]
            }
        ]
    }


    const renderImageGroup = (groupId) => (
        <div className="card-group" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '5px' }}>
            {images.images.find(group => group.id === groupId)?.sources.map((src, index) => (
                <div key={index} className="card m-2 p-0 myshadow" data-aos="zoom-in">
                    <img src={src} className="card-img-top" alt={`Image ${index + 1}`} />
                </div>
            ))}
        </div>
    );

    return (
        <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0">
                {renderImageGroup("pills-home")}
            </div>
            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex="0">
                {renderImageGroup("pills-profile")}
            </div>
            <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex="0">
                {renderImageGroup("pills-contact")}
            </div>
        </div>
    );
};

export default YourComponent;
