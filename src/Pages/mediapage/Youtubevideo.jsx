import React, { useEffect, useState } from "react";
import axios from "axios";
import '../../stylesheets/YoutubeVideo.css';

const YoutubeVideo = () => {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/youtube`);

                setVideos(response.data.youTubeVideos);
                setLoading(false);
            } catch (err) {
                setError("Failed to fetch videos. Please try again later.");
                setLoading(false);
            }
        };

        fetchVideos();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="youtube-section">
            <div className="youtube-grid">
                <div className="youtube_intro_box">
                    <img src="/youtube_logo.png" alt="YouTube Logo" className="youtube-logo" />
                    <h2>YouTube Highlights</h2>
                    <p>Explore</p>
                </div>
                {videos.map((video) => (
                    <div key={video.id} className="youtube_card">
                        <iframe 
                            src={video.url} 
                            title={video.title} 
                            allowFullScreen 
                        ></iframe>
                       
                    </div>
                ))}
            </div>
        </div>
    );
};

export default YoutubeVideo;
