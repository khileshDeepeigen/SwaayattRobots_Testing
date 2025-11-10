import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';
import '../../../public/Stylesheet/Swiper.css';

const Banner = () => {
  const videoRef = useRef(null);
  const hlsUrl = "https://swaayattwebsitevideos.b-cdn.net/career_page_video.m3u8"; 

  useEffect(() => {
    const video = videoRef.current;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(hlsUrl);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play();
      });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = hlsUrl;
      video.addEventListener('loadedmetadata', () => {
        video.play();
      });
    }

    return () => {
      if (Hls.isSupported() && video && video.hls) {
        video.hls.destroy();
      }
    };
  }, [hlsUrl]);

  return (
    <div className="career_banner-container">
      <div className="career_banner-content">
        <div className="career_banner-text">
          <h1 className="career_banner-title">
            Career At <span className="career_banner-highlight">Swaayatt Robots</span>
          </h1>
          <p className="career_banner-paragraph">
            At Swaayatt Robots, we’re driving the future of robotics with cutting-edge technology and innovation. Join our dynamic team to work on groundbreaking projects and contribute to solutions that shape industries and impact the world.
          </p>
        </div>
      </div>
      <video
        ref={videoRef}
        className="career_banner-video"
        muted
        loop
        playsInline
        controls={false}
      />
    </div>
  );
};

export default Banner;
