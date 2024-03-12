import React, { useState, useEffect } from 'react';

const StudentDataBs = () => {
    const [students, setStudents] = useState([]);
    const [originalStudents, setOriginalStudents] = useState([]); // Store the original list of students
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        fetchStudentData(); // Fetch student data on initial render
    }, []);

    const fetchStudentData = async () => {
        try {
            const response = await fetch('http://localhost:3000/admin/studentList', {
                method: 'POST',
                headers: {
                    'Authorization': localStorage.getItem('aJwt'),
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            if (!data.error) {
                setStudents(data);
                setOriginalStudents(data); // Save the original list
            }
        } catch (error) {
            console.error('Error fetching student data:', error);
        }
    };

    const handleSearch = () => {
        // Filter original list of students based on search query
        const filteredStudents = originalStudents.filter(student =>
            student.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setStudents(filteredStudents);
    };

    const handleReload = () => {
        fetchStudentData(); // Refetch student data
    };

    // Function to format date in simple format
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString();
    };

    return (
        <div>
            <div className="mb-3 row bg-success-subtle p-4">
                    <span className="text-danger fw-medium">महत्वपूर्ण निर्देश:</span> 
                <div className="col-12 small p-2 text-danger d-flex align-items-center">
                    <div className="marquee-container">
                        <div className="marquee">
                            किसी भी छात्र/छात्रा का पूरा रिकॉर्ड प्राप्त करने के लिए छात्र/छात्रा का पंजीकृत पूरा नाम सही-सही से भरें
                        </div>
                    </div>
                </div>
                <div className="col-10 d-flex justify-content-center align-items-center small">
                    <div className="col">
                        <input
                            type="text"
                            className='form-control'
                            placeholder="Search by name..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>
                <div className="col-2">
                    <button className="btn btn-primary btn-sm ms-1" onClick={handleSearch}>Search</button>
                    <button className="btn btn-sm btn-warning ms-1" onClick={handleReload}>Reload</button>
                </div>
            </div>
            <table className="table table-responsive table-bordered" style={{ fontSize: '0.8rem' }}>
                <thead>
                    <tr>
                        <th className="DataBsHead">Reg.</th>
                        <th className="DataBsHead">Name</th>
                        <th className="DataBsHead">Father's Name</th>
                        <th className="DataBsHead">Mother's Name</th>
                        <th className="DataBsHead">Gender</th>
                        <th className="DataBsHead">Complete Address</th>
                        <th className="DataBsHead">Mobile</th>
                        <th className="DataBsHead">D.O.B</th>
                        <th className="DataBsHead">Course</th>
                        <th className="DataBsHead">Category</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <tr key={student._id}>
                            <td className='text-center'>{index + 1}</td>
                            <td>{student.name}</td>
                            <td>{student.fatherName}</td>
                            <td>{student.motherName}</td>
                            <td>{student.gender}</td>
                            <td>{student.address}</td>
                            <td>{student.mobileNumber}</td>
                            <td>{formatDate(student.dob)}</td>
                            <td>{student.course}</td>
                            <td>{student.category}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    );
};

export default StudentDataBs;
