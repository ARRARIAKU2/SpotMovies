import React, { useState, useEffect } from "react";
import "./index.css";
import axios from "axios";
import { Link } from "react-router-dom";

function ListVideo() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        getVideos();
    }, []);

    const getVideos = async () => {
        const response = await axios.get("https://backend-finpro-production.up.railway.app/videos");
        console.log(response.data);
        setVideos(response.data);
    };

    return (
        <section id="Hightlight">
            <h2>Popular</h2>
            <div className="container">
                {
                    videos.map((video) => (
                        <Link className="box" to={`/videos/${video._id}`} key={video._id}>
                            <div className="imgBx">
                                <img
                                    id="gambar" src={video.videoThumbnail} alt="sdfsdfsd"/>
                            </div>
                            <div className="content">
                                <div>
                                    <h2>{video.videoTitle}</h2>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </section>
    )
}

export default ListVideo;