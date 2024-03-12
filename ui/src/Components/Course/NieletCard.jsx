import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBox from "./SearchBox";

function NeiletCard() {
    const [DiplomaData, setDiplomaData] = useState("var(--mainBgcolor)");
    const [DiplomaText, setDiplomaText] = useState("#212329");
    const [mainContainer, setmainContainer] = useState("white");
    const [DiplomaTitle, setDiplomaTitle] = useState("white");
    const [mainContainerBorder, setmainContainerBorder] = useState("transparent");
    const [searchQuery, setSearchQuery] = useState("");

    const courses = [

        {
            title: "CCC ( Course on computer concepts )",
            duration: "3 months",
            contents: [
                "Computer fundamentle",
                "Ms. Word",
                "Ms. Excel",
                "Ms. PowerPoint",
                "Ms. Access",
                "Internet",

            ],
        },
        {
            title: "CCA (Certificate in Computer Application)",
            duration: "3 months",
            contents: [
                "Computer Fundamental",
                "Introduction to Microsoft",
                "Microsoft Windows",
                "Microsoft Word",
                "Microsoft Excel",
                "Microsoft Powerpoint",
            ],
        }



    ];

    const filteredCourses = courses.filter((course) =>
        course.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Separate matching and non-matching courses
    const matchingCourses = filteredCourses.filter((course) =>
        course.title.toLowerCase().startsWith(searchQuery.toLowerCase())
    );
    const nonMatchingCourses = filteredCourses.filter(
        (course) => !course.title.toLowerCase().startsWith(searchQuery.toLowerCase())
    );

    // Concatenate matching and non-matching courses
    const displayedCourses = [...matchingCourses, ...nonMatchingCourses];

    return (
        <div style={{ background: DiplomaData, color: DiplomaText }} className="mb-4">

            <div
                className=" mt-3"
                style={{ background: mainContainer, border: mainContainerBorder }}
            >
                <div className="diplomaTable my-2">
                    {displayedCourses.map((course, index) => (
                        <div key={index} className="container-fluid my-4" data-aos="fade-down">
                            <table
                                className="table table-hover table-bordered border-primary  table-lg table-hover border-0"
                                style={{ border: "1px solid skyblue", marginBottom: "20px" }}
                            >
                                <thead>
                                    <tr className="headText">
                                        <th colSpan="4">{course.title}

                                        </th>
                                    </tr>
                                    <tr className="my-row-color">
                                        <th>Course Content</th>
                                        <th></th>
                                        <th></th>
                                        <th>Duration: {course.duration}</th>
                                    </tr>
                                </thead>

                                <tbody className="border-0 table-bordered border-primary  ">
                                    {[...Array(Math.ceil(course.contents.length / 4))].map((_, rowIndex) => (
                                        <tr key={rowIndex}>
                                            {[...Array(4)].map((_, colIndex) => (
                                                <td key={colIndex}>
                                                    {course.contents[rowIndex * 4 + colIndex]}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                                <button type="button" className="btn btn-primary btn-sm my-1">
                                    <Link to="/AdmissionForm" className="nav-link m-0 p-0">APPLY</Link>
                                </button>
                            </table>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default NeiletCard;
