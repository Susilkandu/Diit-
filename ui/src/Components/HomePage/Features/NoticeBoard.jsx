import React from 'react';
import { Link } from 'react-router-dom';

const NoticeBoard = ({ featureBgColor, featureTextColor }) => (
    <div className="col-md-6 my-1 p-0 px-1">
        <div className="card cardBoxShadow border-0" style={{ background: featureBgColor, color: featureTextColor }} id="NotishBoard">
            <div className="card-header h4 text-white text-start" style={{ background: "var(--cardHeadColor)" }}>
                <div data-aos="fade-right">
                    <i className="bi bi-bell-fill text-warning"></i> NOTICE BOARD
                </div>
            </div>
            <div className="card-body fw-normal FeatureCard2 my-0 py-0">
                <MarqueeContent />
            </div>
            <MarqueeLink />
        </div>
    </div>
);

const MarqueeContent = () => (
    <marquee direction="up" scrollamount="3" behavior="scroll">
        <NoticeItem text="Course certified by Microsoft." imageSrc="images/icon/gifPic.gif" />
        <hr width="90%" />
        <NoticeItem text="CCC free on ADCA course" imageSrc="images/icon/gifPic.gif" />
        <hr width="90%" />
        <NoticeItem text="Free English Speaking & Personality Development classNames" imageSrc="images/icon/gifPic.gif" />
        <hr width="90%" />
        <NoticeItem text="प्रत्येक पाठ्यक्रम के पूरा होने पर नि: शुल्क प्रमाण पत्र।" imageSrc="images/icon/gifPic.gif" />
        <hr width="90%" />
        <NoticeItem text="GOVT. recognized institute" />
        <hr width="90%" />
    </marquee>
);

const NoticeItem = ({ text, imageSrc }) => (
    <small>
        {text}
        {imageSrc && <img src={imageSrc} className="img-fluid" width="40px" alt="icon" />}
    </small>
);

const MarqueeLink = () => (
    <marquee className="py-2" behavior="scroll" direction="left">
        <Link to="/Verification" className="blink">
            <b>अपनी प्रमाणपत्र की स्थिति जानने के लिए क्लिक करें </b>
        </Link>
    </marquee>
);

export default NoticeBoard;
