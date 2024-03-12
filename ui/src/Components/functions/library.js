import React, { useContext } from "react";
import { toast } from "react-toastify"
import { adminContext } from "../../context/admin";
// functions
const fetchStudentList = async () => {
    const { setAllStudent } = useContext(adminContext);
    fetch("http://localhost:3000/admin/studentList", {
        headers: {
            'Authorization': localStorage.getItem('aJwt')
        },
    }).then(res => res.json())
        .then((data) => {
            if (!data.error) {
                setAllStudent(data);
                toast.success(data.message);
            }
            else {
                toast.error(data.error);
            }
        })
}
const hell = 'jkl';
export{
    fetchStudentList,
    hell
}