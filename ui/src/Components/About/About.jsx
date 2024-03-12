import React, { useState } from "react";
import CounterCard from "../Counter/CounterCard";
import "../Darkmode/DarkMode";
function About() {

    const [activeButton, setActiveButton] = useState(0);

    const listItemsData = [
        { icon: 'images/icon/homeTwo.png', label: 'Address', value: 'Paragpur Road near Ramharsh inter collage' },
        { icon: 'bi bi-map-fill text-success mx-1', label: 'City', value: 'Nichlaul' },
        { icon: 'bi bi-globe-central-south-asia text-success mx-1', label: 'District', value: 'Maharajganj' },
        { icon: 'bi bi-pin-map-fill text-danger mx-1', label: 'State', value: 'Uttar Pradesh' },
        { icon: 'bi bi-journal-text text-primary mx-1', label: 'Library', value: 'Yes' },
        { icon: 'bi bi-bank2 fw-bold text-success mx-1', label: 'Establishment(in year)', value: '20+' }
    ];

    const accordionData = [
        {
            id: 'collapseOne',
            title: 'Our Aim',
            content: 'We will provide high and quality education for all very nominal fees to maximize the value of our students, as well as the community we serve in the progress and development of the nation.',
        },
        {
            id: 'collapseTwo',
            title: 'Our Mission 1',
            content: 'To be leader in the development of I.T. oriented Quality education and Training and be the Country’s premier organization for examination and certification in the field of IT.',
        },
        {
            id: 'collapseThree',
            title: 'Our Mission 2',
            content: 'All the training programs are designed and developed by the team of experts as per the industry input. It is our utmost satisfaction when our student is placed in various companies and firms on completion of his/her.',
        },
        {
            id: 'collapseFour',
            title: 'Our Mission 3',
            content: 'Our vision is to improve the youth of rural India, by giving them high class training atmosphere at very affordable cost. We work on the philosophy of “SHINING INDIA”, which can be achieved by developing only rural India. We are committed to impart quality computer education among the students.',
        }
    ];

    const affiliationsData = [
        {
            image: 'images/thumbnails/Certificate1.png',
            textColor: '#000',
            text: 'Registered under the society Act, 21, 1860, Government Of India having registration number 72/2013-2014.',
            duration: 400
        },
        {
            image: 'images/thumbnails/Certificate3.png',
            textColor: '#000',
            text: 'Certified by BSI, as an ISO 9001:2008 certified institute, for International standard, quality training, having Certificate number MSYS/0485/15.',
            duration: 700
        },
        {
            image: 'images/thumbnails/Certificate2.png',
            textColor: '#000',
            text: 'Registered with NIELIT(Formerly DOEACC) Government Of India, as a facilitation centre for CCC & O level. Having accreditation number 88001055.',
            duration: 1000
        },
        {
            image: 'images/thumbnails/Certificate4.png',
            textColor: '#000',
            text: 'Registered with Algol Universal Trust, as an associate of KSOU(Karnataka state open university), for University level courses such as, BCA,BSC,MCA,MSC, etc, having reg. No. - KSOU/AUT/980-A',
            duration: 1300
        }
    ];
    return (
        <div className="pb-5" id="aboutMainBg" >

            <div style={{ borderRadius: '0 !important', margin: '4rem 0 0 0' }}>
                <div className="card-footer d-flex align-items-center justify-content-center p-1" style={{ background: 'var(--lightBlack)' }}>
                    <marquee className="text-white fw-medium" direction="left">
                        ISO 9001 : 2008 द्वारा प्रमाणित &amp; भारत सरकार द्वारा पंजीकृत संस्था ||
                        DOEACC द्वारा पंजीकृत संस्था हर कोर्स पूरा करने पर फ्री प्रमाणपत्र || योग्य एवं अनुभवी प्रशिक्षकों द्वारा प्रशिक्षण ||
                        प्रमाण पत्र को इंटरनेट से जानने योग्य सुविधा, इत्यादी........
                    </marquee>
                </div>
                <div className="row m-0 p-0 myshadow border border-secondary-subtle" style={{ background: 'white' }} id="aboutBg">
                    <div className="col-12 py-4">
                        <div className="row">
                            <div className="col-md-6 pb-2" data-aos="zoom-in" data-aos-duration="700">
                                <img src="images/vender/main.jpg" className="w-100 p-0 m-0 border border-0 img-thumbnail" alt="Main Background" />
                            </div>
                            <div className="col-md-6" data-aos="zoom-in" data-aos-duration="700">
                                <h3 className="card-title fw-medium pt-3">Drishtee Institute Information Of Technology</h3>
                                <small className="fw-bolder" style={{ color: 'green' }}>A Complete I.T. Institute.</small>
                                <p className="card-text p-4" data-aos="zoom-in" data-aos-duration="900">
                                    <span className="text-danger">Drishtee Institute Of Information Technology </span> In
                                    Nichlaul Is One Of The Leading Businesses In The Computer I.T Training Institutes. Also
                                    Known For Computer Training Institutes, Computer Training Institutes For
                                    <span className="text-success fw-medium">CCC, PGDCA, C Programming, C++, Python , HTML, CSS,
                                        Bootstrap, JavaScript, W3-CSS, SASS, JQuery, PHP, VB.NET, Hardware Networking,
                                        Software Development, web Development</span> and Much More.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-group m-0 p-0 my-2">
                    <div className="card rounded-0 mx-4 myshadow border border-secondary-subtle" >
                        <div className="card-body m-0 p-0" data-aos="fade-down" data-aos-duration="300" >
                            <ol className="list-group border-0  list-group-numbered" >
                                <li className="list-group-item border-0 d-flex justify-content-between align-items-start" id="MissionLeft1">
                                    <div className="me-auto">
                                        <div className="fw-bold text-primary">
                                            <p className="px-1">Our Vision</p>
                                        </div>
                                        <p className="m-0 p-0">Our vision is to improve the youth of rural India, by giving them
                                            high-class training atmosphere at a very affordable cost.
                                            We work on the philosophy of “SHINING INDIA”, which can be achieved by developing only rural India.
                                            We are committed to impart quality computer education among the students.</p>
                                    </div>
                                </li>
                                <li className="list-group-item border-0 d-flex justify-content-between align-items-start" id="MissionLeft2">
                                    <div className="me-auto">
                                        <div className="fw-bold text-primary">
                                            <p className="px-1">Our Mission</p>
                                        </div>
                                        <p className="m-0 p-0">DIIT is committed to impart Professional education by inculcating three basic values
                                            among the youth-----
                                            “Building National Character, quality education and developing Management Skills”.
                                            <span className="text-danger">We believe in doing & learning.</span>
                                        </p>
                                    </div>
                                </li>
                            </ol>
                        </div>
                    </div>
                    <div className="card border border-secondary-subtle mx-4 rounded-0 myshadow" id='MissionRight'>
                        <div className="card-body">
                            <h5 className="card-title text-primary">THE REASONS ARE HERE………………………….</h5>
                            <p className="m-0 p-0" data-aos="fade-down">
                                An ISO 9001:2008 Certified institute by BSI.
                                Online examination facility and quick result.
                                Training on Live project.
                                High-class technology.
                                Hi-tech lab.
                                Govt. recognize institute.
                                Affordable fees.
                                Free bags, books, and I-cards to each admission.
                                Monthly test facility, to understand the grasping power of students.
                                Tie-ups with Global companies.
                                Microsoft certified courses and study materials.
                                Conducted by well-experienced I.T. professionals.
                                100 % job-oriented Courses.
                                Free English speaking and personality development class.
                                Classes by well-experienced and qualified trainers.
                                …………………………. & many more reasons to Join Drishtee.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Accordion */}
            <div className="row p-0 m-0" >
                <div className="col-md-8 m-0 p-0">
                    <div className="card m-2 rounded">
                        <div className="accordion bg-white myshadow" >
                            {accordionData.map((item, index) => (
                                <div key={index} className="accordion-item" id='Accordion1'>
                                    <h2 className="accordion-header">
                                        <button
                                            className={`accordion-button ${activeButton === index ? 'bg-primary text-white' : 'bg-white'}`}
                                            type="button"
                                            onClick={() => setActiveButton(index)}
                                            data-bs-toggle="collapse"
                                            data-bs-target={`#${item.id}`}
                                            aria-expanded={activeButton === index ? 'true' : 'false'}
                                            aria-controls={item.id}
                                        >
                                            {item.title}
                                        </button>
                                    </h2>
                                    <div
                                        id={item.id}
                                        className={`accordion-collapse collapse ${activeButton === index ? 'show' : ''}`}
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div className="accordion-body">
                                            {item.content}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
                {/* Affiliations */}
                <div className="col-md-4 m-0 p-0">
                    <div className="card m-2 myshadow rounded rounded-0 border border-secondary-subtle" id="MyCardBg">
                        <div className="card-header fs-4" style={{ background: "var(--d-blue)" }}>
                            <div className="fw-bold text-white">
                                <i className="bi bi-card-list fst-normal text-uppercase text-warning"></i>
                                Basic Information:
                            </div>
                        </div>
                        <ul className="list-group list-group-flush text-start small basicStuctureShadow" id="MyCardBgText">
                            {listItemsData.map((item, index) => (
                                <li key={index} className="list-group-item transparentTableData" data-aos="fade-right">
                                    {item.icon.includes('bi') ? (
                                        <i className={item.icon}></i>
                                    ) : (
                                        <img src={item.icon} width="20px" alt="" />
                                    )}
                                    {item.label}: <span className='px-1'>{item.value}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            {/* Affiliations */}
            <div className="container-fluid my-4 py-4" id="affiliationsContainer">
                <div className="row m-auto">
                    <span className="w-100 text-center">
                        <h2 style={{ color: 'red' }}>Our Affiliations</h2>
                        <p className="pb-0 mb-0" style={{ color: 'orangered' }}>Drishtee is registered under the following organization.</p>
                    </span>
                    <div className="row row-cols-1 row-cols-md-4 pt-0 mt-0 row-cols-sm-1 g-2" >
                        {affiliationsData.map((affiliation, index) => (
                            <div key={index} className="col">
                                <div className="card p-0 m-0 myshadow" id="affiliations">
                                    <img src={affiliation.image} data-aos="fade-up" data-aos-duration="1200" className="card-img-top" alt="..." />
                                    <div className="card-body p-0 p-2 m-0">
                                        <p className="card-text">
                                            <div data-aos="fade-right" data-aos-duration={affiliation.duration}>
                                                <small>{affiliation.text}</small>
                                            </div>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <CounterCard />
        </div>
    );
}

export default About;
