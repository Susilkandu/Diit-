import React from 'react';

const TopCourseList = () => {
  const images = [
    { src: "images/vender/adca.png", title: "ADCA+" },
    { src: "images/vender/web.png", title: "Web Development" },
    { src: "images/vender/python-training.jpg", title: "Python Programming" },
    { src: "images/vender/soft.png", title: "Software Development" },
    { src: "images/vender/o-level.png", title: "O Level" },
    { src: "images/vender/office.png", title: "Microsoft Office" },
    { src: "images/vender/ccc.jpg", title: "CCC" },
    { src: "images/vender/hardware.png", title: "CHN" }
  ];

  return (
    <div className="card-group" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '5px' }}>
      {images.map((image, index) => (
        <div key={index} className="card p-1 m-2 cardBoxShadow" style={{ background: '#fff' }} data-aos="zoom-in">
          <img src={image.src} className="img-fluid card-img-top img-size" alt={image.title} />
          <div className="card-body">
            <b className="card-title">{image.title}</b>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopCourseList;
