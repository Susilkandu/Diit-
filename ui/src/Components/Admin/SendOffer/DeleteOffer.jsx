import React, { useState, useEffect } from 'react';

const DeleteNoticeComponent = () => {
  const [caption, setCaption] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const deleteNotice = async () => {
      try {
        const response = await fetch('http://localhost:3000/admin/deleteNotice/65e9d4364046e9a8ce445047', {
          method: 'DELETE',
          headers: {
            'Authorization': localStorage.getItem('aJwt'),
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ title: caption, nMessage: message })
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log(data); // Logging the data to the console
      } catch (error) {
        console.error('There was a problem:', error);
      }
    };

    deleteNotice();
  }, [caption, message]); // Include caption and message in the dependency array to re-run the effect when they change

  return (
    <div>
      <input type="text" value={caption} onChange={(e) => setCaption(e.target.value)} />
      <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
    </div>
  );
};

export default DeleteNoticeComponent;
