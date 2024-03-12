import React, { useState } from 'react';


const TestExamCcc = () => {
  const [quizData, setQuizData] = useState({
    JS: [
      {
        id: 1,
        question: 'What is the shortcut key to cut LibreOffice?',
        options: {
          a: 'Ctrl + C',
          b: 'Ctrl + X',
          c: 'Ctrl + G',
          d: 'Ctrl + M',
        },
        answer: 'Ctrl + X',
        score: 0,
        status: '',
      },

    ],
  });

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [totalObtained, setTotalObtained] = useState(0);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const checkAnswer = () => {
    const correctOptionKey = Object.keys(quizData.JS[currentQuestion].options).find(
      (optionKey) => quizData.JS[currentQuestion].options[optionKey] === quizData.JS[currentQuestion].answer
    );

    if (selectedOption === correctOptionKey) {
      if (quizData.JS[currentQuestion].score === 0) {
        quizData.JS[currentQuestion].score = 1;
        quizData.JS[currentQuestion].status = <span style={{ color: 'green' }}> Correct</span>;

        setTotalObtained(totalObtained + 1); // Update totalObtained when the answer is correct
      }
    } else {
      quizData.JS[currentQuestion].status = <span style={{ color: 'red' }}> Wrong</span>;
    }
  };



  const changeQuestion = (increment) => {
    if (selectedOption) {
      checkAnswer();
    } else {
      return;
    }
    setCurrentQuestion(currentQuestion + increment);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    quizData.JS.forEach((question) => {
      question.score = 0;
      question.status = '';
    });
  };

  const displayQuiz = (currentQue) => {
    const totalQue = quizData.JS.length;

    if (currentQue < totalQue) {
      return (
        <div className="container bg-white my-5 py-4" style={{ boxShadow: '2px 5px 8px #888888' }}>
          <div className="container-fluid my-0 py-0" id="ansData">
            <div className="row d-flex justify-content-between bg-info text-danger py-3 mb-3">
              <div className="col-8 fw-bold d-flex align-items-center">Total Questions: {totalQue}</div>
              <div className="col-4 text-end">
                <button className="btn btn-sm btn-warning px-2 py-1" onClick={restartQuiz}>
                  Restart
                </button>
              </div>
            </div>

            <h5>
              Question {currentQue + 1} : {quizData.JS[currentQue].question}
            </h5>
            <div className="row border-0">
              <div className="col-sm-12 border-0">
                <form>
                  <ul className="list-group my-2">
                    <li className="list-group-item border-0">
                      {Object.keys(quizData.JS[currentQue].options).map((optionKey, index) => (
                        <div key={index} className="bg-info-subtle py-1 border border-info my-2">
                          <input
                            className="m-2"
                            type="radio"
                            id={`option_${index}`}
                            name="quizOption"
                            value={optionKey}
                            checked={selectedOption === optionKey}
                            onChange={handleOptionChange}
                          />
                          <label htmlFor={`option_${index}`}>{quizData.JS[currentQue].options[optionKey]}</label>
                        </div>
                      ))}
                    </li>
                  </ul>
                </form>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-between my-4">
              <button
                className="btn btn-success"
                onClick={() => changeQuestion(-1)}
                disabled={currentQue === 0}
              >
                <i className="bi bi-arrow-left-short mb-1"></i> Previous
              </button>

              <button className="btn btn-success" onClick={() => changeQuestion(1)}>
                <i className="bi bi-arrow-right-short mb-1"></i> Next
              </button>
            </div>
          </div>
        </div>
      );
    }
    if (currentQue >= totalQue) {
      return (
        <div className="container bg-white my-5 py-4" style={{ boxShadow: '2px 5px 8px #888888' }}>
          <div className="container-fluid my-0 py-0" id="ansData">
            <div className="row d-flex justify-content-between align-items-center bg-info text-danger mb-4">
              <div
                className="border-bottom text-white text-center text-dark m-0 py-2 h4 fw-bold text-uppercase"
                style={{ border: '1px solid #012C5', background: 'var(--card-bg)' }}
              >
                <b style={{ letterSpacing: '1px' }}> YOUR RESULT </b>
              </div>
              <div className="col-8 fw-bold my-1">
                <span>Total Obtain: {totalObtained}</span>
              </div>
              <div className="col-4 text-end my-1">
                <button className="btn btn-sm btn-warning" onClick={restartQuiz}>
                  Restart
                </button>
              </div>
            </div>
            {quizData.JS.map((question) => (
              <div key={question.id}>
                <ul className="list-group my-2">
                  <li className="list-group-item bg-light">Question: {question.question}</li>
                  <li className="list-group-item bg-light">Answer: {question.answer}</li>
                  <li className="list-group-item bg-light">Status: {question.status}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      {/* <QuestionForm addQuestion={addQuestion} /> */}
      {displayQuiz(currentQuestion)}
    </div>
  );
};

export default TestExamCcc;
