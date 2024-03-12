import React, { useState } from 'react';

export default function UpdateCourse() {
    const [showInput, setShowInput] = useState(false);
    const handleNewButtonClick = () => {
        setShowInput(!showInput); // Toggle the state
    };

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

    return (
        <div>
            <div className="mx-0 px-0">
                <div className="row mb-5">
                    <div className="row container my-1 py-5 g-3 align-items-center">
                        <div className="col-12 d-flex justify-content-around px-md-5 p-0">
                            <button type="button" className="btn btn-primary" onClick={handleNewButtonClick}>
                                New <i className="bi bi-plus-circle "></i>
                            </button>
                        </div>
                        <div className={`col-lg-5 col-md-10 m-auto mt-3 m-auto my-4 shadow p-5${showInput ? '' : ' d-none'}`}>
                            <div className="input-group">
                                <input type="text" name='text' className="form-control" />
                                <button type='button' className='btn btn-warning'> <i className="bi bi-upload"></i> Send</button>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="" className="form-label"></label>
                                <textarea className="form-control" name="" id="" rows="3"></textarea>
                            </div>
                            <div className="text-center">
                                <button className='btn btn-primary'>Upload</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
