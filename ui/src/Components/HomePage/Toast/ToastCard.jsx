import React from 'react';
import ToastModel from './ToastModel';

function ToastCard() {
  return (
    <div className="toast-container left-0 position-absolute  bottom-0 start-10 position-fixed">
      <div className="toast show" role="alert" aria-live="assertive" aria-atomic="true" style={{ margin: '0 0 5rem 0' }}>
        <div className="toast-header m-0 p-0 px-2">
          <img src="images/icon/welcome-girl.png" style={{ width: '40px' }} className="rounded" alt="..." />
          <strong className="me-auto text-danger HindiFont">
            नमस्कार
          </strong>  
          <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <marquee className="m0 p-0">
          <small className="HindiFont"> क्या मैं आपकी कोई मदद कर सकती हूँ</small>
        </marquee>
        <ToastModel />
      </div>
    </div>
  );
}

export default ToastCard;
