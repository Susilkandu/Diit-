import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchBox from "./SearchBox";

const AnotherCourseType = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetchCourses();
    }, []);

    const fetchCourses = async () => {
        try {
            const response = await fetch('http://localhost:3000/admin/getCourseList', {
                method: 'GET',
                headers: {
                    "Authorization": localStorage.getItem("aJwt"),
                    "Content-type": "application/json"
                }
            });
            if (!response.ok) throw new Error(`Failed to fetch courses. Status: ${response.status}`);
            const data = await response.json();
            setCourses(data);
        } catch (error) {
            console.error('Error fetching courses: ', error.message);
        }
    };

    const handleSearchQueryChange = (query) => {
        setSearchQuery(query);
    };

    const filteredCourses = courses.filter((course) => course.name.toLowerCase().includes(searchQuery.toLowerCase()));
    const courseTypes = ["CHN", "CCA", "CDTP"];

    return (
        <div className="container-fluid mt-5 diplomaTable">
            <div className="container-fluid row text-center px-0 mx-0 my-3 py-2 border bg-white border-secondary-subtle myshadow" id="mainDiplomaContainer">
                <h1 className="fw-bolder py-1">Computer <font color="red"> Certificate</font></h1>
                <div className="col-md-12 mx-0 px-0 d-flex justify-content-between">
                    <div>
                        <small className="d-flex px-2">
                            <Link to="/" className="nav-link"><i className="fa fa-home"></i> /</Link> &nbsp; Diploma Courses
                        </small>
                    </div>
                    <div><SearchBox searchQuery={searchQuery} setSearchQuery={handleSearchQueryChange} /></div>
                </div>
            </div>
            {(filteredCourses.length > 0 || courseTypes.some(type => filteredCourses.some(course => course.name === type))) ? (
                <div>
                    {courseTypes.map(type => filteredCourses.some(course => course.name === type) && (
                        <div key={type} className="my-2 p-2 bg-white"><CourseTable course={filteredCourses.find(course => course.name === type)} /></div>
                    ))}
                </div>
            ) : (
                <div className="my-2 p-2 bg-white">
                    <p><span className="text-danger">Dear student.....!</span> No courses found. Please search again query.</p>
                </div>
            )}
        </div>
    );
};

const CourseTable = ({ course }) => (
    <table className="table table-bordered bg-transparent">
        <thead>
            <tr className="text-center h4"><th colSpan={4}>{course.name} ({course.description})</th></tr>
            <tr className="text-start"><th colSpan={3}>Course Contents</th><th className="text-end">Duration {course.duration}</th></tr>
        </thead>
        <tbody>
            {[...Array(Math.ceil(course.subjects.length / 4))].map((_, rowIndex) => (
                <tr key={rowIndex}>
                    {[...Array(4)].map((_, colIndex) => (
                        <td key={colIndex} className="border border-primary">{course.subjects[rowIndex * 4 + colIndex]?.name}</td>
                    ))}
                </tr>
            ))}
            <tr>
                <td colSpan={4}>
                    <Link to="/AdmissionForm" className="btn btn-primary btn-sm">Apply</Link>
                </td>
            </tr>
        </tbody>
    </table>
);

export default AnotherCourseType;
