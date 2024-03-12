import React, { useState } from 'react';

const AwesomeForm = () => {
  const [formData, setFormData] = useState({
    question: '',
    options: {
      option1: '',
      option2: '',
      option3: '',
      option4: ''
    },
    answer: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleOptionsChange = (option, e) => {
    const { value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      options: {
        ...prevState.options,
        [option]: value
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your form submission logic here
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-6 mt-3 pb-5">
        <form onSubmit={handleSubmit} className='bg-white myshadow2 p-2'>
          <div className="mb-3">
            <label className="form-label text-primary fs-5">Question:</label>
            <input type="text" className="form-control " name="question" value={formData.question} onChange={handleChange} />
          </div>
          <div className="row mb-3">
            {Object.keys(formData.options).map((option, index) => (
              <div key={index} className="col-md-6">
                <label htmlFor={option} className="form-label">{option}:</label>
                <input type="text" id={option} className="form-control" name={option} value={formData.options[option]} onChange={(e) => handleOptionsChange(option, e)} />
              </div>
            ))}
          </div>
          <div className="mb-3">
            <label htmlFor="answer" className="form-label">Answer:</label>
            <input type="text" id="answer" className="form-control" name="answer" value={formData.answer} onChange={handleChange} />
          </div>
          <div className="pb-2 d-flex justify-content-center">
            <button type="submit" className="btn btn-primary ">Add Question</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AwesomeForm;
