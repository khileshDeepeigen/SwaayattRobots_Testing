import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import '../../stylesheets/AutonomousDriving.css';
import '../../stylesheets/OnRoad.css';
import VideoPopup from './VideoPopup';
import axios from 'axios';

const AutonomousDriving = () => {
  const [activeTab, setActiveTab] = useState('onroad');
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videoData, setVideoData] = useState([]);
  const [showAll, setShowAll] = useState(false); 
  const rightSideRef = useRef(null);
  const location = useLocation();

  const handleTabClick = (category) => {
    setActiveTab(category);
  };

  const fetchVideoData = () => {
    const endpoint = activeTab === 'onroad' ? 'demonstration4' : 'off_road_demonstration';
    axios.get(`${import.meta.env.VITE_SERVER_URL}/research`)
      .then(response => {
        const data = response.data[endpoint];
        setVideoData(data);
      })
      .catch(error => {
        console.error('There was an error:', error);
      });
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const tab = searchParams.get('tab');
    if (tab === 'onroad' || tab === 'offroad') {
      setActiveTab(tab);
    }
  }, [location.search]);

  useEffect(() => {
    fetchVideoData();
  }, [activeTab]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        } else {
          entry.target.classList.remove('fade-in');
        }
      },
      { threshold: 0.1 }
    );

    if (rightSideRef.current) {
      observer.observe(rightSideRef.current);
    }

    return () => {
      if (rightSideRef.current) {
        observer.unobserve(rightSideRef.current);
      }
    };
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

  return (
    <div>
    <div className="videocard-container">
      <div className="videocard-header">
        <h1 className="videocard-title">Autonomous Driving</h1>
       
       
      </div>

      <p className="videocard-description">
     These videos demonstrate the ability of our autonomous vehicle to navigate complex real-world environments independently.
      </p>
      <div className="unique-tabs">
          <button
            className={`unique-tab ${activeTab === 'onroad' ? 'unique-active-tab' : ''}`}
            onClick={() => handleTabClick('onroad')}
          >
            On Road
          </button>
          <button
            className={`unique-tab ${activeTab === 'offroad' ? 'unique-active-tab' : ''}`}
            onClick={() => handleTabClick('offroad')}
          >
            Off Road
          </button>
        </div>

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

export default AutonomousDriving;
