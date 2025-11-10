import { useState, useEffect } from 'react';
import '../../stylesheets/AutonomousDriving.css';
import VideoPopup from './VideoPopup'; 
import axios from 'axios';

const Perception = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videoData, setVideoData] = useState([]);
  const [showAll, setShowAll] = useState(false); 

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_SERVER_URL}/research`)
      .then(response => {
        const demonstration3Data = response.data.demonstration3;
        setVideoData(demonstration3Data);
      })
      .catch(error => {
        console.error('There was an error:', error);
      });
  }, []);

  const handleVideoClick = (video) => {
    setSelectedVideo({
      id: video.id,
      title: video.topic_name,
      src: video.video_link,
      date: video.Date_added,
      detail: video.video_explanation
    });
  };

  const closePopup = () => {
    setSelectedVideo(null);
  };

  // Handle showing videos
  const videosToShow = showAll ? videoData : videoData.slice(0, 6);

  useEffect(() => {
    const handleScroll = () => {
      const rows = document.querySelectorAll('.videocard-row');
      rows.forEach((row) => {
        const rect = row.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          row.classList.add('visible');
        } else {
          row.classList.remove('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <div className="videocard-container">
        <div className="videocard-header">
          <h1 className="videocard-title">Perception</h1>
         
        </div>
        <p className="videocard-description">
        These videos demonstrate robust environmental understanding and implicit reasoning through cameras.  </p>

        <div className="videocard-cards">
          {videosToShow.map((video, index) => (
            <div
              className="videocard-card"
              key={index}
              onClick={() => handleVideoClick(video)}
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
        <div className="videocard-button" style={{display:'flex', justifyContent:'end'}}>
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
            onClose={closePopup}
          />
        )}
      </div>
    </div>
  );
};

export default Perception;
