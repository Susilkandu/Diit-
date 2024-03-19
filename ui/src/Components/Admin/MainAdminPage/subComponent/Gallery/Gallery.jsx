import React from 'react'
import toast from 'react-toastify'
export default function Gallery() {
  return (
    <div>
          <form className="p-2" onSubmit={handleSubmit}>
      <div className="text-center">
        <h1 className="fw-bolder text-gray-900 mb-4 text-primary">New Picture</h1>
      </div>
      <div className="offersTitle">
        <div className="d-flex d-flex justify-content-between">
          <span className='fw-medium'>Total offers <span className='text-success' id="Total">
            {offersLength}
          </span></span>
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Caption of message....*"
            value={caption}
            onChange={(e) => setCaption(e.target.value)} />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Type notice message"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        {error && <div className="alert alert-danger" role="alert">{error}</div>}
      </div>
      <div className="text-center my-2">
        <button type="submit" className="small btn btn-primary">Push</button>
      </div>
    </form>
    </div>
  )
}
