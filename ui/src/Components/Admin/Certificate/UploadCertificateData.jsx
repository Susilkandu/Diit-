import React, { useState } from "react";

const UploadCertificateData = () => {
    const [imgPreview, setImgPreview] = useState("");
    const [error, setError] = useState("");
    const [showInput, setShowInput] = useState(false);

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

    const handleNewButtonClick = () => {
        setShowInput(!showInput);
    };

    return (
        <div>
            <form className="mt-2 g-4 m-0 px-md-3 m-auto text-center myshadow border border-light bg-white" id="verifyParentBg">
                <div className="col-12 m-0 p-0 my-1" style={{ border: '1px solid #012C5', background: 'var(--card-bg)' }}>
                    <div className="container text-center m-0 py-3 h2 fw-bold text-uppercase" style={{ color: 'rgb(255, 255, 255)' }}>
                        <b style={{ letterSpacing: '1px', color: 'white' }}>
                            Upload  <font color="red">Certificate Data</font>
                        </b>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <input type="text" className="form-control my-2" placeholder="Student Name" />
                        <input type="text" className="form-control my-2" placeholder="Complete Duration in Months" />
                    </div>
                    <div className="col-md-6">
                        <div className="input-group input-group-text my-2 p-0 m-0 d-flex justify-content-center align-items-center" >
                            <i className="bi bi-calendar-month p-2 m-0 py-0 my-0"></i>
                            <input type="date" className="form-control my-0 border-0" placeholder="Date of issue" />
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <button type="button" className="btn btn-primary" onClick={handleNewButtonClick}> Course Content <i className="bi bi-arrow-right-short"></i></button>
                            </div>
                            <div className={`col-md-8 ${showInput ? '' : ' d-none'}`}>
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Enter course content here....." />
                                    <button type='button' className='btn btn-warning'>Send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row m-0 p-0">
                        <div className="col-md-6">
                            <input type="text" className="form-control my-2" placeholder="Course Name (Full)" />
                            <input type="text" className="form-control my-2" placeholder="Grade & Percentage " />
                            <input type="file" accept="image/*" className="form-control my-2 float-start" id="choose-file" onChange={handleFileChange} />
                        </div>
                        <div className="col-md-6">
                            {imgPreview && (
                                <div id="img-preview" style={{ display: "block" }}>
                                    <img src={imgPreview} style={{ maxWidth: '100px' }} className="border" alt="Preview" />
                                    <button type="button" className="btn btn-sm btn-outline-info fw-bold px-3 d-block m-auto mt-2"> <i className="bi bi-database-fill-up "></i>Upload</button>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        {error && <div style={{ color: "red", fontSize: '0.7rem' }}>{error}</div>}
                    </div>
                </div>
                <div className="col-md-12 pb-2 text-center mt-5">
                    <button type="button" className="btn btn-sm btn-primary text-white yellow-btn py-2 fw-bold" ><i className="bi bi-cloud-arrow-up fs-5"></i> Push </button>
                </div>
            </form>
        </div>
    );
};

export default UploadCertificateData;
