import React from 'react';
import '../../../../public/Stylesheet/Swiper.css';

const Banner = () => {
  return (
    <div className="blog_banner-container">
      <div className="blog_banner-content">
        <div className="blog_banner-text">
          <h1 className="blog_banner-title">
            Blogs<span className="blog_banner-highlight"></span> 
          </h1>
          <p className="blog_banner-paragraph">Read how autonomous vehicles are navigating the chaotic, bidirectional traffic of India’s unpredictable roads. Dive into the challenges, breakthroughs, and the potential of self-driving cars in one of the world’s most complex driving environments

          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;