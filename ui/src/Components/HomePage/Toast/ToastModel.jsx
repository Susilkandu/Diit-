import React, { useState } from 'react';

const ToastModel = ({ enquiryForm }) => {
  const [formData, setFormData] = useState({
    fname: '',
    contact: '',
    email: '',
    message: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      fname: '',
      contact: '',
      email: '',
      message: ''
    });
  }

  return (
    <div>
      <div className="modal fade m-0 p-0 myMOdal" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header bg-primary">
              <h3 className="modal-title text-uppercase text-white fw-bolder fs-3" id="exampleModalLabel">Enquire Now</h3>
              <button type="button" className="btn-close text-white btn btn-light" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body bg-primary">
              <div className="col-md-12">
                <div className="p-3" style={{ color: 'white' }}>
                  <form className="row p-0 border m-0 text-white" data-aos="fade-left" onSubmit={handleSubmit}>
                    <h4 className='text-center bg-warning py-2 fw-bolder text-uppercase'>Fill Up The Details</h4>
                    <div className="col-md-12 position-relative">
                      <div className="input-group my-2">
                        <span className="input-group-text bg-primary-subtle"><i className="bi bi-person-bounding-box text-danger "></i></span>
                        <input type="text" name="fname" className="form-control p-0 m-0" placeholder="Enter Your Name" value={formData.fname} onChange={handleInputChange} required />
                      </div>
                    </div>
                    <div className="col-md-12 position-relative ">
                      <div className="input-group my-2">
                        <span className="input-group-text bg-primary-subtle"><i className="bi bi-telephone-fill text-danger "></i></span>
                        <input type="number" name="contact" className="form-control p-0 m-0" placeholder="Enter Your Mobile" value={formData.contact} onChange={handleInputChange} required />
                      </div>
                    </div>
                    <div className="col-md-12 position-relative">
                      <div className="input-group my-2">
                        <span className="input-group-text bg-primary-subtle"><i className="bi bi-envelope text-danger "></i></span>
                        <input type="email" name="email" className="form-control" placeholder="Enter Your Email" value={formData.email} onChange={handleInputChange} required />
                      </div>
                    </div>
                    <div className="col-md-12 position-relative">
                      <div className="input-group my-2">
                        <span className="input-group-text bg-primary-subtle">
                          <i className="bi bi-messenger text-danger "></i>
                        </span>
                        <textarea className="form-control" name="message" rows="3" placeholder="Type Your Message Here*" value={formData.message} onChange={handleInputChange}></textarea>
                      </div>
                    </div>
                    <div className="modal-footer m-0 p-0 d-flex justify-content-center">
                      <button className="btn fw-medium text-white hoverBtn" name="submit" style={{ background: 'orangered' }} type="submit">
                        <i className="bi bi-send-fill "></i> Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="m-0 p-0 px-2">
        <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={enquiryForm}>Get Help</a>
      </p>
    </div>
  );
}

export default ToastModel;
