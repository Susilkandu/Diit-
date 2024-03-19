import { useEffect, useState } from "react"
import { toast } from "react-toastify";

export default function CourseList() {
    const [courseList, setCourseList] = useState([]);
    const fetchCourse = async () => {
        await fetch('http://localhost:3000/admin/getCourseList', {
            method: "get",
            headers: {
                "Authorization": localStorage.getItem('aJwt')
            }
        })
            .then(data => data.json())
            .then((data) => {
                if (data) {
                    setCourseList(data)
                }
                else {
                    toast.error(data.error);
                }
            })
            .catch((error) => {
                toast.error(error);
            })
    }
    const deleteCourse = async (_id) => {
        await fetch(`http://localhost:3000/admin/deleteCourse/${_id}`, {
            method: 'delete',
            headers: {
                'authorization': localStorage.getItem('aJwt')
            }
        }).then(data => data.json())
            .then((data) => {
                if (!data.error) {
                    fetchCourse();
                }
                else {
                    toast.error(data.error);
                }
            }).catch((error) => {
                toast.error(error);
            })
    }
    useEffect(() => {
        fetchCourse();
    }, [])
    return (
        <div className="w-100">
            <table className="w-100">
                <thead>
                    <tr>
                        <th>Course Name</th>
                        <th>Description</th>
                        <th>Content</th>
                        <th>Duration</th>
                        <th>Prerequisites</th>
                        <th>delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        courseList.length && courseList.map((course) => {
                            return (
                                <tr key={course._id}>
                                    <td>{course.name}</td>
                                    <td>{course.description}</td>
                                    <td>{course.subjects.map((subject) => {
                                        return (
                                            subject.name + `, `
                                        )
                                    })}</td>
                                    <td>{course.duration}</td>
                                    <td>{course.prerequisites}</td>
                                    <td onClick={() => { deleteCourse(course._id) }}><button className="btn btn-danger"><i className="bi bi-trash"></i></button></td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
            </table>
        </div>
    )
}
