import React, { useEffect, useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Clock } from 'lucide-react';
import '../../stylesheets/DemoVideo.css';

const demoVideos = [
    {
        id: 1,
        title: "Mountainous Roads in India",
        description: "Experience autonomous driving through challenging mountainous terrain with winding roads, steep inclines, and complex navigation scenarios.",
        clipDuration: "2:30",
        thumbnail: "/28-pPnWT_eQ-HD.jpg",
        clipVideo: "/Autonomous Driving_ Mountainous Roads in India - Coming Soon.mp4",
        category: "MOUNTAIN",
        status: "coming_soon"
    },
    {
        id: 2,
        title: "Coastal Highway Drive",
        description: "Navigate scenic coastal highways with varying weather conditions, ocean views, and dynamic traffic patterns in autonomous mode.",
        clipDuration: "1:45",
        thumbnail: "/28-pPnWT_eQ-HD.jpg",
        clipVideo: "/Autonomous Driving_ Mountainous Roads in India - Coming Soon.mp4",
        category: "HIGHWAY",
        status: "coming_soon"
    },
    {
        id: 3,
        title: "Urban Traffic Navigation",
        description: "Master complex city traffic with intelligent decision-making through dense urban environments, intersections, and pedestrian areas.",
        clipDuration: "3:15",
        thumbnail: "/28-pPnWT_eQ-HD.jpg",
        clipVideo: "/Autonomous Driving_ Mountainous Roads in India - Coming Soon.mp4",
        category: "URBAN",
        status: "coming_soon"
    },
];

const VideoSection = ({ video, index }) => {
    const videoRef = useRef(null);
    const sectionRef = useRef(null);

    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const [showControls, setShowControls] = useState(false);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
                setIsPlaying(false);
            } else {
                videoRef.current.play();
                setIsPlaying(true);
            }
        }
    };

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    const getStatusIcon = () => <Clock size={16} />;
    const getStatusText = () => 'Coming Soon';

    const isEven = index % 2 === 0;

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (videoRef.current) {
                    if (entry.isIntersecting) {
                        videoRef.current.play().catch(() => {});
                        setIsPlaying(true);
                    } else {
                        videoRef.current.pause();
                        setIsPlaying(false);
                    }
                }
            },
            { threshold: 0.5 } 
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    useEffect(() => {
        let controlsTimeout;
        if (showControls && isPlaying) {
            controlsTimeout = setTimeout(() => {
                setShowControls(false);
            }, 3000);
        }
        return () => clearTimeout(controlsTimeout);
    }, [showControls, isPlaying]);


    return (
        <div className={`Demo-video-section ${isEven ? 'even' : 'odd'}`} ref={sectionRef}>
            <div
                className="Demo-video-container"
                onMouseEnter={() => setShowControls(true)}
                onMouseLeave={() => setShowControls(false)}
            >
                <video
                    ref={videoRef}
                    className="section-video"
                    poster={video.thumbnail}
                    preload="metadata"
                    muted={isMuted}
                    loop
                    playsInline
                >
                    <source src={video.clipVideo} type="video/mp4" />
                </video>

                <div className="Demo-video-overlay">
                    <div className="category-tag">{video.category}</div>

                    {/* <div className={`video-controls ${showControls ? 'show' : ''}`}>
                        <button className="play-button" onClick={togglePlay}>
                            {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                        </button>
                        <button className="mute-button" onClick={toggleMute}>
                            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                        </button>
                    </div> */}
                </div>f
            </div>

            <div className="Demo-content-container">
                <div className="content-box">
                    <div className="coming-soon-badge">
                        {getStatusIcon()}
                        <span>{getStatusText()}</span>
                    </div>

                    <h2 className="Demo-section-title">{video.title}</h2>
                    <p className="section-description">{video.description}</p>

                    <div className="video-info">
                        <div className="duration-info">
                            <span className="clip-duration">
                                <Clock size={16} style={{ marginRight: '8px' }} /> 
                                Preview: {video.clipDuration}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const DemoPage = () => {
    return (
        <div className="demo-page">
            <div className="page-header">
                <h1 className="main-title">Autonomous Driving Demo Collection</h1>
                <p className="main-subtitle">
                    Preview our comprehensive autonomous driving scenarios while full videos are being prepared.
                </p>
            </div>

            <div className="Demo-video-sections">
                {demoVideos.map((video, index) => (
                    <VideoSection key={video.id} video={video} index={index} />
                ))}
            </div>
        </div>
    );
};

export default DemoPage;