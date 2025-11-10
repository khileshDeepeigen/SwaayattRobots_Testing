import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../stylesheets/YoutubeVideo.css';

const Youtubeblog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/youtube`);
        console.log(response)

        const mappedPosts = response.data.youTubeVideos.map((video) => ({
          title: video.title,
          description: video.description,
          src: video.url,
          uploadedAt: new Date(video.uploaded_at).toLocaleDateString(),
        }));

        setBlogPosts(mappedPosts);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch blog posts. Please try again later.');
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="videocard-container">
      <div className="text-center">
        <p className="news-description">Explore</p>
        <h2 className="section-title">In The Media</h2>
      </div>

     

     <div className="yt_videocard_cards">
  {blogPosts.map((post, index) => (
    <div className="videocard-card_yt" key={index}>
      <div className="videocard-card-content">
        <h3 className="videocard-card-title">{post.title}</h3>
        <p className="videocard-card-description">{post.description}</p>
      </div>
      <div className="videocard-card-video-wrapper">
        <iframe
          src={post.src}
          className="videocard-card-video"
          title={post.title}
          frameBorder="0"
          allowFullScreen
          width="100%"
          height="315"
        ></iframe>
      </div>
    </div>
  ))}

  <div className="videocard-card_yt">
    <div className="videocard-card-content">
      <h3 className="videocard-card-title">Zee Hindustan</h3>
      <p className="videocard-card-description">
        Swaayaat Robots' Autonomous vehicles was featured on ZEE Hindustan News Channel. In this video, CEO Mr. Sanjeev Sharma is demonstrating the autonomous driving of their vehicle.
      </p>
    </div>
    <div className="videocard-card-video-wrapper">
      <video
        src="https://d3126e9c9smo8b.cloudfront.net/swaayatt_react_website_videos/swaayatt.mp4"
        className="videocard-card-video"
        width="100%"
        height="315"
        muted
        controls
        playsInline
      >
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
</div>

    </div>
  );
};

export default Youtubeblog;
