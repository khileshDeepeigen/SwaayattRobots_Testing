import '../../stylesheets/HeroImage.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import VideoPopup from '../researchpage/VideoPopup';
// import Footer from '../Footer';


const OffRoadDemo = () => {
  const [videoData, setVideoData] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const endpoint = 'off_road_demonstration';
        const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/research`);
        console.log(response)
        setVideoData(response.data[endpoint]);
      } catch (error) {
        console.error('Error fetching video data:', error);
      }
    };

    fetchVideoData();
  }, []);

  const videosToShow = showAll ? videoData : videoData.slice(0, 6);

  return (
    <>
      <div className="videocard-container">
        <div className="videocard-header">
          <h1 className="videocard-title">Off Road </h1>
          {/* <button
            className="videocard-view-all-button"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'Show Less' : 'View All'}
          </button> */}
        </div>
        <p className="videocard-description">
          These demonstrations highlight our autonomous vehicles tackling challenging off-road terrains, leveraging advanced reinforcement learning to redefine decision-making across diverse and unpredictable conditions for future Level-5 autonomy.
        </p>
        <div className="videocard-cards">
          {videosToShow.map((video, index) => (
            <div
              className="videocard-card"
              key={index}
              onClick={() =>
                setSelectedVideo({
                  title: video.topic_name,
                  date: video.Date_added,
                  src: video.video_link,
                  detail: video.video_explanation,
                })
              }
            >
              <div className="videocard-card-content">
                <p className="videocard-date">{video.Date_added}</p>
                <h3 className="videocard-card-title">{video.topic_name}</h3>
                <p
                  className="videocard-card-description"
                  dangerouslySetInnerHTML={{ __html: video.video_explanation }}
                ></p>
              </div>
              {video.video_link.includes('youtube') ? (
                <iframe
                  src={video.video_link}
                  className="videocard-card-video"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <video
                  src={video.video_link}
                  className="videocard-card-video"
                  controls
                  preload="auto"
                ></video>
              )}
            </div>
          ))}
        </div>
        <div className="videocard-button" style={{ display: 'flex', justifyContent: 'end' }}>
          <button
            className="videocard-view-all-button"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'Show Less' : 'View All'}
          </button>
        </div>

        {selectedVideo && (
          <VideoPopup
            video={selectedVideo}
            onClose={() => setSelectedVideo(null)}
          />
        )}
      </div>
      {/* <Feature/> */}
      {/* <Footer /> */}

    </>
  );
};

export default OffRoadDemo;
