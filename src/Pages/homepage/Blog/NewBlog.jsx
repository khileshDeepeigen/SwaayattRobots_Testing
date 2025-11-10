import { useEffect, useState } from 'react';
import '../../../../public/Stylesheet/Swiper.css';
import BlogSlider from './BlogSlider';
import Blog_Post from './Card';
import Blog from "./RecentBlog";
import Blog1 from "./Blog1";
import Latest from "./LatestBlog";
import Banner from "./BlogBaneer";

function Newblog({ setIsPageLoading }) {
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
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
    <>
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
          <Banner />
          <section className="new-hero-section new-bg-white">
            {/* <Blog1 /> */}
            {/* <Blog /> */}
            {/* <BlogSlider /> */}
            {/* <Blog_Post /> */}
            <Latest />
          </section>
        </>
      {/* )} */}
    </>
  );
}

export default Newblog;
