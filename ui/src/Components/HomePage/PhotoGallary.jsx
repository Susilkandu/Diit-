import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify'
const tabLabels = ["All Picture", "Classes", "Rewards"];

export default function PhotoGallery() {
    const [galleryPhotos, setGalleryPhotos] = useState([]);
    const fetchPhotos = async () => {
        await fetch('http://localhost:3000/admin/getPhotos', {
            method: 'post',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ category: "event" })
        }).then(data=>data.json())
        .then((data) => {
            if (data) {
                if(Array.isArray(data)){
                    setGalleryPhotos(data);
                }
                else{
                    toast.error('Failed to fetch ');
                }
            }
            else {
                toast.error(data.error);
            }
        })
    }
    useEffect(() => {
        fetchPhotos();
    }, [])
    return (
        <div>
            {galleryPhotos.map((pic) => (
                <div key={pic._id} className="card-group ZoomGallaryPic">
                    <div className="card m-2 p-0 myshadow transparentTableData" data-aos="zoom-in">
                        <img src={pic.url} className="card-img-top" alt={`${pic.name} Loading..`} />
                    </div>
                </div>
            ))}
        </div>

    );
}

