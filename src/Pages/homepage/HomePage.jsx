import React, { useEffect, useState, useRef } from 'react';
import '../../stylesheets/HomePage.css';
import '../../stylesheets/BackgroundVideo.css';
import Invester from './Invester';
import ResearchVideo from './ResearchVideo';
import MissionUpdatedCard from './MissionUpdatedCard';
import ScrollLoaderData from './ScrollLoaderData';
import Article from '../onroad/MediaArticle';
import HLSPlayer from './Hls';

// const Loader = () => (
//   <div
//     className="loader-overlay"
//     style={{
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       position: 'fixed',
//       top: '70px',         
//       left: 0,
//       width: '100vw',
//       height: 'calc(100vh - 70px)',  
//       backgroundColor: 'white',
//       zIndex: 9999,
//     }}
//   >
//     <div className="spinner"></div>

//   </div>
// );

const Loader = () => (
  <div
    className="loader-overlay"
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'fixed',
      top: '70px',
      left: 0,
      width: '100vw',
      height: 'calc(100vh - 70px)',
      backgroundColor: 'white',
      zIndex: 9999,
    }}
  >
    <video
      src="/FInal_Loader_OP_2.mp4"
      autoPlay
      loop
      muted
      playsInline
      style={{ height: '120px', width: '120px' }}
    />
   
  </div>
);




const HomePage = ({ setIsPageLoading }) => {
  const [scrolling, setScrolling] = useState(false);
  const [currentVideo, setCurrentVideo] = useState('https://res.cloudinary.com/drue3yx0s/video/upload/v1726222592/front_qhtxtc.mp4');
  const [activeButton, setActiveButton] = useState('button-2');
  const [videoIndex, setVideoIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const nextSectionRef = useRef(null);

  const videos = [
    { src: '/uploads/Sparse High Definition Maps (S-HD Maps) for Autonomous Driving in India.mp4', label: 'Perception', id: 'button-2' },
    { src: '/uploads/localisation.mp4', label: 'Localization', id: 'button-3' },
    { src: '/uploads/maping.mp4', label: 'Planning & Decision Making', id: 'button-1' },
    { src: '/uploads/Autonomous Driving Off-Roads at High Speeds in India-YoutubeConvert.cc.mp4', label: 'Controls', id: 'button-4' }
  ];

  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(element => {
      element.classList.toggle('fade-in', scrolling);
      element.classList.toggle('fade-out', !scrolling);
    });
  }, [scrolling]);

  const handleButtonClick = (videoSrc, buttonId) => {
    setCurrentVideo(videoSrc);
    setActiveButton(buttonId);
    setVideoIndex(videos.findIndex(video => video.src === videoSrc));

    const missionVideoElement = document.querySelector('.mission_video');
    if (missionVideoElement) {
      missionVideoElement.pause();
    }
  };

  const playNextVideo = () => {
    const nextVideoIndex = (videoIndex + 1) % videos.length;
    setCurrentVideo(videos[nextVideoIndex].src);
    setActiveButton(videos[nextVideoIndex].id);
    setVideoIndex(nextVideoIndex);
  };

  const scrollToNextSection = () => {
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

useEffect(() => {
  const timer = setTimeout(() => {
    setIsLoading(false);
    setIsPageLoading(false);
  }, 1500); 

  return () => clearTimeout(timer);
}, [setIsPageLoading]);





  // useEffect(() => {
  //   setIsPageLoading(false);
  // }, [setIsPageLoading]);


  useEffect(() => {
    const reloadInterval = setInterval(() => {
      window.location.reload();
    }, 20 * 60 * 1000);

    return () => clearInterval(reloadInterval);
  }, []);


  useEffect(() => {
    const timeoutId = setTimeout(() => {
      playNextVideo();
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [currentVideo]);

  return (
    <main>
      {isLoading ? (
        <Loader />
      ) : (
      <>
        <div className="home_top_video_container">
          <div className="home_top_background_video">
            <HLSPlayer
              src="https://swaayattwebsitevideos.b-cdn.net/Swaayatt_landing_page.m3u8"
              className="responsive-video"
            />
          </div>
          <div className="home_top_content">
            <h1 className="home_top_overlay_text">AUTONOMOUS DRIVING</h1>
            <p className="home_top_subheading">Adversarial and Unstructured Environments via Reinforcement Learning</p>
            {/* <div className="home_top_circle_container">
                <div className="home_top_circle" onClick={scrollToNextSection} role="button" aria-label="Scroll to next section">
                  <span className="down-arrow">↓</span>
                </div>
              </div> */}
            <div className="home_top_circle_container" onClick={scrollToNextSection} role="button" aria-label="Scroll to next section">
              <img
                src="/loader.gif"
                alt="Scroll down"
                className="scroll-gif"
              />
            </div>

          </div>
        </div>

        <div ref={nextSectionRef}></div>

        <MissionUpdatedCard />
        <ScrollLoaderData />
        <ResearchVideo />
        <Article />
        <Invester />
      </>
        )}  
    </main>
  );
};

export default HomePage;
