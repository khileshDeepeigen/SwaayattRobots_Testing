import { useState, useEffect, useRef } from 'react';
import Hls from 'hls.js'; // ✅ import hls.js
import '../../stylesheets/BackgroundVideo.css';

const MissionUpdatedCard = () => {
  const [currentVideo, setCurrentVideo] = useState('');
  const [activeCard, setActiveCard] = useState(null);
  const [videoIndex, setVideoIndex] = useState(0);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef();
  const videoRef = useRef(null);
  const hlsRef = useRef(null);

  const missionCardVideos = [
    {
      src: 'https://swaayattwebsitevideos.b-cdn.net/Swaayatt_website_main_page_video.m3u8',
      label: 'Autonomous Driving',
      image: 'https://d3126e9c9smo8b.cloudfront.net/swaayatt_react_website_videos/auto.png',
      id: 'card-1',
    },
    {
      // src: 'https://d3126e9c9smo8b.cloudfront.net/swaayatt_react_website_videos/warehouse.m3u8',
      src: '/Warehouse trimmed 7.mp4',

      label: 'Robotics and AI Platforms',
      image: '/Untitled design (3).png',
      id: 'card-3',
    },
  ];

  useEffect(() => {
    setCurrentVideo(missionCardVideos[0].src);
    setActiveCard(missionCardVideos[0].id);
  }, []);

  useEffect(() => {
  const video = videoRef.current;

  if (hlsRef.current) {
    hlsRef.current.destroy();
    hlsRef.current = null;
  }

  const handleCanPlay = () => {
    video.play().catch(err => {
      console.warn('Autoplay error (handled):', err.message);
    });
    video.removeEventListener('canplay', handleCanPlay); 
  };

  if (video.canPlayType('application/vnd.apple.mpegurl') || currentVideo.endsWith('.mp4')) {
    video.src = currentVideo;
    video.addEventListener('canplay', handleCanPlay);
  } else if (Hls.isSupported()) {
    const hls = new Hls();
    hlsRef.current = hls;
    hls.loadSource(currentVideo);
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED, () => {
      video.play().catch(err => {
        console.warn('HLS autoplay error (handled):', err.message);
      });
    });
  }

  return () => {
    if (hlsRef.current) {
      hlsRef.current.destroy();
    }
    video.removeEventListener('canplay', handleCanPlay);
  };
}, [currentVideo]);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const playNextVideo = () => {
    const nextIndex = (videoIndex + 1) % missionCardVideos.length;
    const nextVideo = missionCardVideos[nextIndex];
    setCurrentVideo(nextVideo.src);
    setActiveCard(nextVideo.id);
    setVideoIndex(nextIndex);
  };

  const handleCardClick = (videoSrc, cardId, index) => {
    setCurrentVideo(videoSrc);
    setActiveCard(cardId);
    setVideoIndex(index);

    const landingVideoElement = document.querySelector('.landing_video');
    if (landingVideoElement) landingVideoElement.pause();
  };

  return (
    <main ref={sectionRef}>
      <div className='mission_upper'>
        <div className='section_header'>
          <div className="left ">
            <h1>OUR MISSION</h1>
            <p className='miss_para'>
              Make connected autonomous driving technology accessible, affordable and available to everyone!
            </p>
          </div>
        </div>

        <div className='mission_padding'>
          <div className="mission_vertical_container">
            <div className="mission_card_wrapper">
              {missionCardVideos.map((item, index) => (
                <div
                  key={item.id}
                  className={`card ${activeCard === item.id ? 'active' : ''}`}
                  onClick={() => handleCardClick(item.src, item.id, index)}
                >
                  <img src={item.image} alt={item.label} className="mission_card_image" />
                  <h3>{item.label}</h3>
                </div>
              ))}
            </div>

            <div className="mission_video_wrapper">
              <video
                className='mission_video'
                ref={videoRef}
                autoPlay
                muted
                controls={false}
                onEnded={playNextVideo}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MissionUpdatedCard;
