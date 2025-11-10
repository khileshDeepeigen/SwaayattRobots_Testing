import React, { useEffect, useRef } from "react";
import Hls from "hls.js";
import "../../../public/Stylesheet/Swiper.css";

const HeroSection = () => {
  const videoRefs = [useRef(null), useRef(null), useRef(null)];

  const hlsSources = [
    "https://swaayattwebsitevideos.b-cdn.net/front_view.m3u8", 
    "https://swaayattwebsitevideos.b-cdn.net/carview.m3u8",
    "https://swaayattwebsitevideos.b-cdn.net/op.m3u8", 
  ];

  useEffect(() => {
    videoRefs.forEach((ref, index) => {
      const video = ref.current;
      if (video && Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(hlsSources[index]);
        hls.attachMedia(video);
      } else if (video && video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = hlsSources[index];
      }
    });

    return () => {
      videoRefs.forEach(ref => {
        if (ref.current && ref.current.hls) {
          ref.current.hls.destroy();
        }
      });
    };
  }, []);

  return (
    <section className="newbanner-section-hero">
      <div className="newbanner-hero">
        <div className="newbanner-hero-text-box">
          <h1 className="newbanner-heading-primary">
            Technology Demonstration
          </h1>
          <p className="newbanner-hero-description">
            Explore how autonomous vehicles navigate the chaotic, bidirectional traffic on India’s unpredictable roads. Dive into the challenges, breakthroughs, and the potential of self-driving cars in one of the world’s most complex driving environments.
          </p>
        </div>
        <div className="newbanner-hero-video-box">
          <div className="newbanner-video-collage">
            <video
              ref={videoRefs[0]}
              className="newbanner-video-item newbanner-video-item-1"
              autoPlay
              loop
              muted
              playsInline
            />
            <video
              ref={videoRefs[1]}
              className="newbanner-video-item newbanner-video-item-2"
              autoPlay
              loop
              muted
              playsInline
            />
            <video
              ref={videoRefs[2]}
              className="newbanner-video-item newbanner-video-item-3"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
