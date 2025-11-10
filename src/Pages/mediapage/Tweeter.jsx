import { useEffect, useState } from 'react';
import '../../stylesheets/Tweeter.css';
import Media1 from '../homepage/Media1';
import YoutubeBlog from './YoutubeBlog';
import Mediabanner from './MediaBaneer';

const Investor = ({ setIsPageLoading }) => {
  const [loading, setLoading] = useState(true);

  const twitterImages = [
    {
      src: "https://d3126e9c9smo8b.cloudfront.net/swaayatt_react_website_videos/Screenshot 2024-10-16 125303.png",
      link: "https://twitter.com/Rajeev_GoI/status/1762155162892669198"
    },
    {
      src: "https://d3126e9c9smo8b.cloudfront.net/swaayatt_react_website_videos/Screenshot 2024-10-16 125444.png",
      link: "https://twitter.com/anandmahindra/status/1775042212218179815"
    },
    {
      src: "https://d3126e9c9smo8b.cloudfront.net/swaayatt_react_website_videos/Screenshot 2024-10-16 125636.png",
      link: "https://twitter.com/aajtak/status/1775534573742354530"
    },
    {
      src: "https://d3126e9c9smo8b.cloudfront.net/swaayatt_react_website_videos/Screenshot 2024-10-16 123932.png",
      link: "https://twitter.com/GoodNewsToday/status/1775789715070833037"
    },
    {
      src: "https://d3126e9c9smo8b.cloudfront.net/swaayatt_react_website_videos/Screenshot 2024-10-16 125808.png",
      link: "https://twitter.com/Rajeev_GoI/status/1752920064200990744"
    },
  ];

  // 
  useEffect(() => {
  if (typeof setIsPageLoading === 'function') {
    setIsPageLoading(false);
  }
  setLoading(false);
}, [setIsPageLoading]);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    const reloadInterval = setInterval(() => {
      window.location.reload();
    }, 20 * 60 * 1000); 

    return () => clearInterval(reloadInterval);
  }, []);

  return (
    <div className='tweeter_body'>
      {loading && (
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
    {/* <h2 style={{
      marginTop: '1rem',
      fontSize: '1.5rem',
      fontWeight: '600',
      color: '#1f2937',
      fontFamily: 'Poppins, sans-serif',
    }}>
      Loading...
    </h2> */}
     <img
      src="/loading.gif" 
      alt="Loading text animation"
      style={{
        // marginTop: '1rem',
        height: '124px', 
      }}
    />
  </div>
      )}

      {/* {!loading && ( */}
        <>
          <Mediabanner />
          <div className="explore-more-section">
            <div className="cards-container">
              <div className="intro-section">
                <img
                  src="https://d3126e9c9smo8b.cloudfront.net/swaayatt_react_website_videos/tweeter.png"
                  alt="Twitter Logo"
                  className="twitter-logo"
                />
                <h2>Twitter Spotlight</h2>
                <p>What people say about us.</p>
              </div>

              {twitterImages.map((item, index) => (
                <div className="twitter-card" key={index}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <img
                      src={item.src}
                      alt="Twitter Post"
                      className="twitter-image"
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
          <Media1 />
          <YoutubeBlog />
        </>
      {/* )} */}
    </div>
  );
};

export default Investor;
