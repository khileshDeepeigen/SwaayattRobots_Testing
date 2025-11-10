import React, { useRef, useEffect, useState } from 'react';
import '../../stylesheets/HeroImage.css';
import { RiSingleQuotesL } from "react-icons/ri";
import OffRoadCard from "./OffRoadVideoCard";
import Hls from 'hls.js';

const OffRoad = ({ setIsPageLoading }) => {
  const videoRef = useRef(null);
  const [loading, setLoading] = useState(false); 
  const hlsSrc = "https://swaayattwebsitevideos.b-cdn.net/off_road.m3u8"; 

  useEffect(() => {
    if (typeof setIsPageLoading === 'function') {
      setIsPageLoading(true);
    }
  }, [setIsPageLoading]);
  useEffect(() => {
  if (typeof setIsPageLoading === 'function') {
    setIsPageLoading(false);
  }
}, [setIsPageLoading]);


  useEffect(() => {
    const video = videoRef.current;

    if (video && Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(hlsSrc);
      hls.attachMedia(video);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play();
      });

      return () => {
        hls.destroy();
      };
    } else if (video?.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = hlsSrc;
    }
  }, []);

  useEffect(() => {
    const reloadInterval = setInterval(() => {
      window.location.reload();
    }, 20 * 60 * 1000); 

    return () => clearInterval(reloadInterval);
  }, []);

  const handleCanPlay = () => {
    setLoading(false);
    if (typeof setIsPageLoading === 'function') {
      setIsPageLoading(false);
    }
  };

  return (
    <div className='Offhero'>
      <div className="hero-image">
        {/* {loading && (
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
     <img
      src="/loading.gif" 
      alt="Loading text animation"
      style={{
        height: '124px', 
      }}
    />
  </div>
        )} */}

        <video
          className="hero-video"
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          onCanPlay={handleCanPlay}
        />

        <div className="header-leiste">
          <div className="welcome">
            <p>Off Road</p>
          </div>
        </div>

        <div className="zitate">
          <p>
            Revolutionizing Off-Road Autonomy: Conquering Uneven, Adversarial, and Unpredictable Terrains
            <hr />
          </p>
        </div>
      </div>

      <OffRoadCard />
    </div>
  );
};

export default OffRoad;
