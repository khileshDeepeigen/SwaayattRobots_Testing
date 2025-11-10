import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';
import '../../stylesheets/ScrollLoaderData.css';

const EventSection = ({ id, title, description, videoSrc }) => {
  const videoRef = useRef(null);

 useEffect(() => {
  const video = videoRef.current;
  let hls;

  if (video && videoSrc && videoSrc.endsWith('.m3u8')) {
    if (Hls.isSupported()) {
      hls = new Hls();
      hls.loadSource(videoSrc);
      hls.attachMedia(video);

      hls.on(Hls.Events.ERROR, (event, data) => {
        console.error('HLS.js error:', data);
      });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = videoSrc;
    }
  }

  return () => {
    if (hls) {
      hls.destroy();
    }
  };
}, [videoSrc]);

  return (
    <div id={id} className="event">
      <div className="pinWrapper">
        <div className="text">
          <h2 className='loaderheading'>{title}</h2>
          <p className='loaderparagraph'>{description}</p>
        </div>
        <div className="image" id={id === 'section1' ? 'loaderVideo' : ''}>
          <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className={id === 'section1' ? 'section1-video' : ''}
            >
            {!videoSrc.endsWith('.m3u8') && (
              <source src={videoSrc} type="video/mp4" />
            )}
          </video>
        </div>
      </div>
      {id === 'section1' && (
        <div className="scrollBtn">
          <h6>scroll</h6>
          <span></span>
        </div>
      )}
    </div>
  );
};

export default EventSection;
