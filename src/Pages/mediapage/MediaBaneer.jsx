import React from 'react';
import '../../../public/Stylesheet/Swiper.css';

const Banner = () => {
  return (
    <div className="media_banner-container">
      <div className="media_banner-content">
        <div className="media_banner-text">
          <h1 className="media_banner-title">
            {/* Swaayatt Robots */}
             In The<span className="media_banner-highlight"> Media</span> 
          </h1>
          <p className="media_banner-paragraph">From cutting-edge tech advancements to company milestones, get the inside scoop on everything happening at Swaayatt Robots. Stay tuned for the latest breakthroughs and updates shaping the future of autonomous driving!</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
