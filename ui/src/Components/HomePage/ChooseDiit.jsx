import React from 'react';

const ChooseDiit = () => {
    const liveChildOne = '#fff';
    const liveChildOneText = '#000';
    const liveChildTwo = '#fff';
    const liveChildTwoText = '#000';
    const liveChildThree = '#fff';
    const liveChildThreeText = '#000';
    const liveChildFour = '#fff';
    const liveChildFourText = '#000';

    const liveFeatures = [
        {
            id: 1,
            background: liveChildOne,
            textColor: liveChildOneText,
            imageSrc: "images/icon/projector.png",
            altText: "Projector Icon",
            title: "Live Projects",
            description: "To work on real-time projects."
        },
        {
            id: 2,
            background: liveChildTwo,
            textColor: liveChildTwoText,
            imageSrc: "images/icon/trainers.png",
            altText: "Trainers Icon",
            title: "Expert Trainers",
            description: "Learn from certified & experienced trainers."
        },
        {
            id: 3,
            background: liveChildThree,
            textColor: liveChildThreeText,
            imageSrc: "images/icon/course2.png",
            altText: "Course Icon",
            title: "Globally Recognized Certificates",
            description: "Our Certificates are valued by top corporates."
        },
        {
            id: 4,
            background: liveChildFour,
            textColor: liveChildFourText,
            imageSrc: "images/icon/practical.gif",
            altText: "Practical Icon",
            title: "Hands-on Training",
            description: "100% Practical based training model."
        }
    ];

    const renderLiveFeatureCard = (feature) => (
        <div key={feature.id} className="col-md-3 my-3">
          <div className="card text-center border-secondary-subtle mx-1 d-flex flex-column h-100"
              style={{ background: feature.background, color: feature.textColor }} data-aos="fade-up"
              data-aos-duration={`${feature.id * 300}`}>
              <img className="card-img-top mt-2 rounded mx-auto d-block" src={feature.imageSrc} style={{ width: '70px' }} alt={feature.altText} />
              <div className="card-body flex-grow-1">
                  <h5 className="card-title fw-bolder" style={{ color: 'blue' }}>{feature.title}</h5>
                  <p className="card-text" id={`liveText${feature.id}`}>{feature.description}</p>
              </div>
          </div>
        </div>
      );
    return (
        <div className="d-flex flex-wrap justify-content-center">
            {liveFeatures.map(renderLiveFeatureCard)}
        </div>
    );
};

export default ChooseDiit;
