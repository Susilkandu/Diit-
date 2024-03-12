import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchBox from "./SearchBox";

function ComputerLanguage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [courses, setCourses] = useState([]);
    const [courseNotFound, setCourseNotFound] = useState(false);

    useEffect(() => {
        async function fetchCourses() {
            try {
                const response = await fetch('http://localhost:3000/admin/getCourseList', {
                    method: 'GET',
                    headers: {
                        "Authorization": localStorage.getItem("aJwt"),
                        "Content-type": "application/json"
                    }
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch courses. Status: ' + response.status);
                }

                const data = await response.json();
                setCourses(data);
                setCourseNotFound(data.length === 0);
            } catch (error) {
                console.error('Error fetching courses: ', error.message);
            }
        }

        fetchCourses();
    }, []);

    const handleSearchQueryChange = (query) => {
        setSearchQuery(query);
    };

    const filteredCourses = courses.filter((course) =>
        course.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="container-fluid mt-5 diplomaTable">
            <div className="container-fluid row text-center px-0 mx-0 my-3 py-2 border bg-white border-secondary-subtle myshadow" id="mainDiplomaContainer">
                <h1 className="fw-bolder py-1">
                    All Computer <font color="red"> Course </font>
                </h1>
                <div className="col-md-12 mx-0 px-0 d-flex justify-content-between">
                    <div>
                        <small className="d-flex px-2">
                            <Link to="/" className="nav-link">
                                <i className="fa fa-home"></i> /
                            </Link>{" "}
                            &nbsp;All Diploma Courses{" "}
                        </small>
                    </div>
                    <div>
                        <SearchBox searchQuery={searchQuery} setSearchQuery={handleSearchQueryChange} />
                    </div>
                </div>
            </div>
            {courseNotFound ? (
                <div className="my-2 p-2 bg-white">
                    <p><span className="text-danger">Dear student.....!</span> No courses found. Please try again with a different search query.</p>
                </div>
            ) : (
                filteredCourses.map((course, index) => (
                    <div key={index} className="my-2 p-2 bg-white">
                        <table className="table table-bordered bg-transparent">
                            <thead>
                                <tr className="text-center h4">
                                    <th colSpan={4}>{course.name} ({course.description})</th>
                                </tr>
                                <tr className="text-start">
                                    <th colSpan={3}>Course Contents</th>
                                    <th className="text-end">Duration {course.duration}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[...Array(Math.ceil(course.subjects.length / 4))].map((_, rowIndex) => (
                                    <tr key={rowIndex}>
                                        {[...Array(4)].map((_, colIndex) => (
                                            <td key={colIndex} className="border border-primary">
                                                {course.subjects[rowIndex * 4 + colIndex]?.name}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div>
                            <Link to="/AdmissionForm" className="btn btn-primary btn-sm">Apply</Link>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}

export default ComputerLanguage;
