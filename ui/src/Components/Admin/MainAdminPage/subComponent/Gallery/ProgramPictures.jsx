import { useState } from "react"
import { toast } from "react-toastify";

export default function ProgramPictures() {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');
    const [url, setUrl] = useState('');
    const [clImstatus, setClImstatus] = useState(Boolean);
    const uploadPhoto = () => {
        if (image) {
            const data = new FormData()
            data.append("file", image)
            data.append("upload_preset", "hridesh99!")
            data.append("cloud_name", "draowpiml")
            fetch('https://api.cloudinary.com/v1_1/draowpiml/image/upload', { method: 'post', body: data }).then(res => res.json())
                .then(data => {
                    if (!data.error) {
                        setUrl(data.url);
                        setClImstatus(true);
                    }
                })
                .catch((error) => {
                    toast.error("Some Error Occured While Picture Uploading");
                })
        }
    }
    const upLoadToServer=async()=>{
        await fetch('http://localhost:3000/admin/pushPhoto',{
            "method":"POST",
            headers:{
                "content-type":"Application/json",
                "Authorization":localStorage.getItem('aJwt')
            },
            body:JSON.stringify({
                name:name,
                category:category,
                url:url
            })
        }).then(data=>data.json)
        .then((data)=>{
            toast.success(data.message);
        })
        .catch((error)=>{
            toast.error(error);
        })
    }
    return (
        <div >
            <div className="col-12 m-0 p-0 " style={{ border: '1px solid #012C5', background: 'var(--card-bg)' }}>
                <div className="container text-center m-0 py-3 h2 fw-bold text-uppercase " style={{ color: 'rgb(255, 255, 255)' }}>
                    <b style={{ letterSpacing: '1px', color: 'white' }}>
                        Upload  <font color="red">Gallary Images</font>
                    </b>
                </div>
            </div>
            <div className="col-12 d-flex justify-content-around px-md-5 p-0 row container my-1 py-5 g-3 align-items-center">

                <div className={`col-lg-5 col-md-10 m-auto mt-3  m-auto my-4`}>
                    <div className="input-group">
                        <input type="file" name='file' className="form-control" onChange={(e) => {
                            setImage(e.target.files[0]);
                            uploadPhoto();
                        }} />
                        <button type='button' className='btn btn-warning'> <i className="bi bi-upload"></i> Send</button>
                    </div>
                    <input type="text" required="true" placeholder="Photo Name" onChange={(e)=>{setName(e.target.value)}}></input>
                    <input type="text" placeholder="Enter Category" onChange={(e)=>{setCategory(e.target.value)}}/>
                    <button onClick={upLoadToServer}>Push</button>
                </div>
            </div>
        </div>
    )
}
