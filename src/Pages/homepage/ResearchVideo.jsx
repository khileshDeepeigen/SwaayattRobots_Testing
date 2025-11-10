import React, { useState, useRef, useEffect } from "react";
import Hls from "hls.js";
import "../../stylesheets/BackgroundVideo.css";

const ResearchVideo = () => {
  const cards = [
    { type: "Research_video", src: "https://swaayattwebsitevideos.b-cdn.net/nalkheda_return_trejectory.m3u8" },
    {
      type: "text",
      heading: "Our Mission",
      content:
        "Our mission is to develop Level-5 autonomous driving technology, striving for a future where vehicles can operate autonomously. Our imminent goal is to conduct a compelling 100 KM/H autonomous driving demonstration on Indian roads, showcasing our technology’s ability to navigate real-world environments at high speeds. This milestone pushes the boundaries of self-driving technology and brings the future of mobility closer to reality.",
    },
    { type: "Research_video", src: "https://swaayattwebsitevideos.b-cdn.net/2024_02_28_fast_withoutLogo.m3u8" },
    {
      type: "text",
      heading: "Technology Overview",
      content:
        "Our technology has undergone extensive testing across diverse scenarios, including complex traffic conditions with stochastic and adversarial dynamics. Our advanced perception and behavior planning algorithms have significantly reduced reliance on high-definition 3D mapping. Instead, we have demonstrated seamless end-to-end navigation using GPS maps, reducing the necessity for dense maps in autonomous driving.",
    },
    { type: "Research_video", src: "https://swaayattwebsitevideos.b-cdn.net/behind_42.m3u8" },
    {
      type: "text",
      heading: "R&D Focus",
      content:
        "A Significant potion of our R&D is dedicated to decision-making and motion planning, focusing on reinforcement learning, delving into diverse facets of theoretical computer science, and applying advanced mathematical principles. This concentrated effort enhances our understanding of the mechanisms behind decision-making and motion planning, positioning us at the forefront of innovative solutions for the future of autonomous driving.",
    },
  ];

  return (
    <div className="video-grid-container">
      <div className="text-center">
        <h2 className="section-title">Research & Techstack</h2>
      </div>
      <div className="research_video-grid">
        {cards.map((card, index) => (
          <div className="research_grid-item" key={index}>
            {card.type === "Research_video" ? (
              <VideoCard src={card.src} />
            ) : (
              <TextCard heading={card.heading} content={card.content} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const VideoCard = ({ src }) => {
  const [hovered, setHovered] = useState(false);
  const videoRef = useRef(null);
  const [fullscreen, setFullscreen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const video = videoRef.current;
    if (video && Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(video);
      return () => {
        hls.destroy();
      };
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
    }
  }, [src]);

  const handleMouseEnter = () => {
    setHovered(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleClick = () => {
    if (!fullscreen) {
      if (videoRef.current) {
        videoRef.current.play();
      }
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.mozRequestFullScreen) {
        videoRef.current.mozRequestFullScreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.msRequestFullscreen) {
        videoRef.current.msRequestFullscreen();
      }
      setFullscreen(true);
    } else {
      document.exitFullscreen();
      setFullscreen(false);
    }
  };

  return (
    <div
      className="video-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      onClick={handleClick}
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="video-element"
      />
    </div>
  );
};

const TextCard = ({ heading, content }) => {
  return (
    <div className="text-card">
      {heading && <h3 className="text-card-heading">{heading}</h3>}
      <p className="text-card-para">{content}</p>
    </div>
  );
};

export default ResearchVideo;
