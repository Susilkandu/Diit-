import React, { useState } from 'react';

const tabContent = [
    [
        "images/vender/dance1.jpg",
        "images/vender/parti2.png",
        "images/vender/opening2.png",
        "images/vender/gift.jpg"
    ],
    [
        "images/vender/sir_1.png",
        "images/vender/parti.png",
        "images/vender/sanjana.jpg",
        "images/vender/all_std2.png"
    ],
    [
        "images/vender/pray.png",
        "images/vender/Tparty.png",
        "images/vender/std2.jpg",
        "images/vender/reward1.png"
    ],
    [
        "images/vender/std1.png",
        "images/vender/std19.jpg",
        "images/vender/diitClass2.jpg",
        "images/vender/lab2.jpg"
    ],
    [
        "images/vender/presentation1.png",
        "images/vender/dance1.jpg",
        "images/vender/dance3.jpg",
        "images/vender/dance4.jpg"
    ],
    [
        "images/vender/presentation2.png",
        "images/vender/std2.jpg",
        "images/vender/presentation2.png",
        "images/vender/presentation2.png"
    ],
    [
        "images/vender/reward1.png",
        "images/vender/reward2.png",
        "images/vender/reward4.png",
        "images/vender/reward5.png"
    ],
    [
        "images/vender/reward7.png",
        "images/vender/rwd2.png",
        "images/vender/sir_1.png",
        "images/vender/presentation2.png"
    ],
    [
        "images/vender/sanjana.jpg",
        "images/vender/rwd1.jpg",
        "images/vender/sm.png",
        "images/vender/std2.jpg"
    ]
];


const tabLabels = ["All Picture", "Classes", "Rewards"];

export default function PhotoGallery() {
    const [activeTab, setActiveTab] = useState(0);

    // Function to chunk array into smaller arrays of specified size
    const chunkArray = (arr, size) => {
        return Array.from({ length: Math.ceil(arr.length / size) }, (_, index) =>
            arr.slice(index * size, index * size + size)
        );
    };

    return (
        <div className="container-fluid px-0 my-1 skyblue2" id="MyGallery">
            <div className="text-center" style={{ background: 'var(--aboutBgColor)' }}>
                <div className="text-center text-warning h2 py-4 ">
                    <i className="fa fa-picture-o text-white" aria-hidden="true"></i> PHOTO GALLERY
                </div>
                <ul className="nav nav-pills pb-4 text-center d-flex justify-content-center" id="pills-tab" role="tablist">
                    {tabLabels.map((label, index) => (
                        <li key={index} className="nav-item" role="presentation">
                            <button
                                className={`nav-link fw-normal border border-white p-2 mx-1 ${activeTab === index ? 'active' : ''}`}
                                onClick={() => setActiveTab(index)}
                                aria-selected={activeTab === index ? 'true' : 'false'}
                            >
                                <small>{label}</small>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="tab-content" id="pills-tabContent">
                {chunkArray(tabContent, 3).map((tabRows, tabIndex) => (
                    <div
                        key={tabIndex}
                        className={`tab-pane fade ${activeTab === tabIndex ? 'show active' : ''}`}
                        id={`pills-tab-${tabIndex}`}
                        role="tabpanel"
                        aria-labelledby={`pills-tab-${tabIndex}`}
                    >
                        {[0, 1, 2].map((rowIndex) => (
                            <div key={rowIndex} className="card-group ZoomGallaryPic">
                                {tabRows[rowIndex] && tabRows[rowIndex].map((image, imageIndex) => (
                                    <div key={imageIndex} className="card m-2 p-0 myshadow transparentTableData" data-aos="zoom-in">
                                        <img src={image} className="card-img-top" alt={`Image ${tabIndex}-${rowIndex}-${imageIndex}`} />
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

