import React, { useState, useEffect } from 'react';

const SendOffer = () => {
  const [caption, setCaption] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [offersLength, setOffersLength] = useState(0);

  useEffect(() => {
    fetchOffersLength();
  }, []);

  const fetchOffersLength = async () => {
    try {
      const response = await fetch('http://localhost:3000/admin/getAllNotice');
      if (!response.ok) {
        throw new Error('Failed to fetch offers. Status: ' + response.status);
      }

      const data = await response.json();
      setOffersLength(data.length);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/admin/pushNotice', {
        method: 'POST',
        headers: {
          'Authorization': localStorage.getItem('aJwt'),
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title: caption, nMessage: message })
      });

      if (!response.ok) throw new Error('Failed to update. Please try again.');

      setCaption('');
      setMessage('');
      setError('');
      fetchOffersLength();
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form className="p-2" onSubmit={handleSubmit}>
      <div className="text-center">
        <h1 className="fw-bolder text-gray-900 mb-4 text-primary">OFFERS FOR ENQUIRY NOW</h1>
      </div>
      <div className="offersTitle">
        <div className="d-flex d-flex justify-content-between">
          <h4><b className="text-warning">Send</b> a new offer</h4>
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
            placeholder="Send a new offer....*"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        {error && <div className="alert alert-danger" role="alert">{error}</div>}
      </div>
      <div className="text-center my-2">
        <button type="submit" className="small btn btn-primary">Update Now.</button>
      </div>
    </form>
  );
};

export default SendOffer;
