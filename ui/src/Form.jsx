// // Form.jsx
// import React, { useState } from 'react';

// export default function Form() {
//   const [name, setName] = useState('');

//   const handleSubmit = async (event) => {
//     event.preventDefault(); // Prevent default form submission behavior

//     // Make sure name is not empty before sending
//     if (name.trim() === '') {
//       alert('Please enter a name');
//       return;
//     }

//     try {
//       const response = await fetch('http://localhost:3000/studentRegistration', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ name })
//       });

//       // Check if response is successful
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       console.log('Name submitted successfully');
//       // Optionally, you can reset the form after successful submission
//       setName('');
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div className='my-5 pt-4'>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label htmlFor="name" className="form-label">Name</label>
//           <input
//             type="text"
//             className="form-control"
//             id="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>
//         <button type="submit" className="btn btn-primary">Send</button>
//       </form>
//     </div>
//   );
// }
import React from 'react'

export default function Form() {
  return (
    <div>Form</div>
  )
}
