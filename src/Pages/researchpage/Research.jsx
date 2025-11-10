import { useState, useEffect } from 'react';
import '../../stylesheets/Technology.css';

import AutonomousDriving from './AutonomousDriving';
import MotionPlanning from './MotionPlanning';
import Perception from './Perception';
import MappingandLocalisation from './MappingandLocalisation';
import Banner from './Banner';

const Research = ({ setIsPageLoading }) => {

  const [loading, setLoading] = useState(true);

//  useEffect(() => {
//   if (typeof setIsPageLoading === 'function') {
//     setIsPageLoading(true);
//   }

//   const timer = setTimeout(() => {
//     setLoading(false);
//     if (typeof setIsPageLoading === 'function') {
//       setIsPageLoading(false);
//     }
//   }, 2000); 

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
    <div className="technology_container" style={{ position: 'relative' }}>
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
        height: '124px', 
      }}
    />
  </div>
      )}

      {/* {!loading && ( */}
        <>
          <Banner />
          <AutonomousDriving />
          <MotionPlanning />
          <Perception />
          <MappingandLocalisation />
        </>
      {/* )} */}
    </div>
  );
};

export default Research;
