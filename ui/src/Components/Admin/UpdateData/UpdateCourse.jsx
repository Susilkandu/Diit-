import React, { useState, useEffect } from 'react';
export default function UpdateCourse() {
    const [showInput, setShowInput] = useState(false);
    const [id,setId] = useState('');
    const [notice, setNotice] = useState([]);
    const [title,setTitle]=useState('');
    const [nMessage,setNewMessage]=useState('');
    const fetchNotice = async () => {
        await fetch('http://localhost:3000/admin/getAllNotice', {
            method: "get"
        }).then(data => data.json())
            .then((data) => {
                setNotice(data);
            })
    }
    const deleteNotice = async (_id) => {
        await fetch(`http://localhost:3000/admin/deleteNotice/${_id}`, {
            method: "delete",
            headers: {
                "Authorization": localStorage.getItem('aJwt')
            }
        }).then(data => data.json())
            .then((data) => {

                fetchNotice();
            })
    }
    const updateNotice = async (_id) => {
        await fetch(`http://localhost:3000/admin/updateNotice`, {
            method: "put",
            headers: {
                "Content-Type": "application/json",
                'Authorization':localStorage.getItem('aJwt')
            },
            body: JSON.stringify({ _id: _id, title: title, nMessage: nMessage })
        }).then(data => data.json())
            .then((data) => {
                setShowInput(false)
                fetchNotice();
            })
    }
    useEffect(() => {
        fetchNotice();
    }, [])
    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                    {
                        notice && notice.map((notice, index) => {
                            return (
                                <tr key={index}>
                                    <td>{notice.title}</td>
                                    <td>{notice.nMessage}</td>
                                    <td><button className="btn btn-primary" onClick={() => { setTitle(notice.title);
                                        setNewMessage(notice.nMessage);
                                        setId(notice._id);
                                        setShowInput(true) }}><i className="bi bi-pencil-square">Edit</i></button></td>
                                    <td><button className="btn btn-danger" onClick={() => { deleteNotice(notice._id) }}><i className="bi bi-trash-fill">Delete</i></button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            {showInput && <div >
                <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder='New Title' />
                <input type="text" value={nMessage} onChange={(e)=>setNewMessage(e.target.value)} placeholder='New Description' />
                <button className="btn btn-primary" onClick={()=>{updateNotice(id)}}>Update</button>
            </div>}
        </>
    );
}
