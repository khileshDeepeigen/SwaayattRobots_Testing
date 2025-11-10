import { useEffect } from 'react';
import '../../stylesheets/YoutubeVideo.css';

const VideoPopup = ({ video, onClose }) => {
  useEffect(() => {
    document.body.classList.add('no-scroll');

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.classList.remove('no-scroll');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!video || !video.src) return null;

  const isYouTubeVideo = video.src.includes("youtube.com") || video.src.includes("youtu.be");

  return (
    <div className="video-popup">
      <div className="video-popup-content">
        <button className="video-popup-close" onClick={onClose}>✖</button>
        <h2>{video.title}</h2>
        <span>{video.date}</span>
        <div className='youtube_video_con'>
          {isYouTubeVideo ? (
            <iframe
              src={video.src}
              width="100%"
              height="315"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <video
              src={video.src}
              controls
              autoPlay
              muted
              loop
              width="100%"
            ></video>
          )}
        </div>
        <p className="video-explanation" dangerouslySetInnerHTML={{ __html: video.detail }}></p>
      </div>
    </div>
  );
};

export default VideoPopup;
