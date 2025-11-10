import { useState, useEffect } from 'react';
import '../../stylesheets/Career1.css'; 
import '../../stylesheets/OnRoad.css'; 

import JoinUs from './JoinUs';
import Quote from './Quote';
import Career from './Career';
import CareerBanner from './CareerBaneer';

const HeroSection = ({ setIsPageLoading }) => {
  const [loading, setLoading] = useState(true);
    const [isLoading, setIsLoading] = useState(true); 
  

  // useEffect(() => {
  //   if (typeof setIsPageLoading === 'function') {
  //     setIsPageLoading(true);
  //   }

  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //     if (typeof setIsPageLoading === 'function') {
  //       setIsPageLoading(false);
  //     }
  //   }, 1000); 

  //   return () => clearTimeout(timer);
  // }, [setIsPageLoading]);


useEffect(() => {
  if (typeof setIsPageLoading === 'function') {
    setIsPageLoading(false);
  }
  setLoading(false);
}, [setIsPageLoading]);

  useEffect(() => {
    const reloadInterval = setInterval(() => {
      window.location.reload();
    }, 20 * 60 * 1000); 

    return () => clearInterval(reloadInterval);
  }, []);

  return (
    <section className="hero">
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
          <CareerBanner />

          <div className="hero-content">
            <h2>Innovation That Matters</h2>
            <p>
              At Swaayatt Robots, we have been at the forefront of developing India's first Autonomous Driving technology since 2016.
              Join our innovative team and embark on a journey to work on cutting-edge research in the field of autonomous driving and 
              artificial intelligence. At Swaayatt, you'll have access to continuous learning opportunities and the latest advancements 
              in tools and technologies related to autonomous driving and AI. We take pride in being recognized as the first company 
              in the world to enable autonomous driving in some of the most challenging and stochastic environments, such as India.
            </p>
          </div>

          <Quote />
          <JoinUs />
          <Career />
        </>
      {/* )} */}
    </section>
  );
};

export default HeroSection;
