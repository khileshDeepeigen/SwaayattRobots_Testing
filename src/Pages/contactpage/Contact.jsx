import { useEffect, useState } from 'react';
import '../../stylesheets/JobOpening.css'; 
import Map from './Map';

const Contact = ({ setIsPageLoading }) => {
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //     setIsPageLoading(false);  
  //   }, 3000);

  //   return () => clearTimeout(timer);
  // }, [setIsPageLoading]);

useEffect(() => {
  setIsLoading(false);
  if (typeof setIsPageLoading === 'function') {
    setIsPageLoading(false);
  }
}, [setIsPageLoading]);


  return (
    <section className="location-section">
      {/* {isLoading ? ( */}
        {/* <div
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
          <img
            src="/loading.gif" 
            alt="Loading text animation"
            style={{ height: '124px' }}
          />
        </div> */}
      {/* ) : ( */}
        <>
          <div className="media-bg">
            <video className="media_background-video" autoPlay muted loop>
              <source src="/front.mp4" type="video/mp4" />
            </video>
            <div className="media_container">
              <h1>Contact</h1>
              <hr />
            </div>
          </div>

          <div className="info-container">
            <div className="info-block">
              <i className="fas fa-user-tie"></i>
              <p>For Potential Investors</p>
              <p className="email-link">
                <a href="mailto:investment@swaayatt.com" className="email-link">
                  investment@swaayatt.com
                </a>
              </p>
            </div>

            <div className="info-block">
              <i className="fas fa-envelope"></i>
              <p>For Generic Queries</p>
              <p className="email-link">
                <a href="mailto:contact@swaayatt.com" className="email-link">
                  contact@swaayatt.com
                </a>
              </p>
            </div>

            <div className="info-block">
              <i className="fas fa-phone"></i>
              <p>Phone</p>
              <p className="email-link">+91 755-4947025</p>
            </div>

            <div className="info-block">
              <i className="fas fa-map-marker-alt"></i>
              <p>Address</p>
              <p className="email-link">
                1/3D, DRM Rd, Saket Nagar, Habib Ganj, Bhopal, Madhya Pradesh 462026
              </p>
            </div>
          </div>

          <Map />
        </>
      {/* )} */}
    </section>
  );
};

export default Contact;
