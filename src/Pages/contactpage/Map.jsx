import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import '../../stylesheets/JobOpening.css';

function Map() {
  const [showAddress, setShowAddress] = useState(false);

  const companyAddress = "1/3D, DRM Rd, Saket Nagar, Habib Ganj, Bhopal, Madhya Pradesh 462026";
  const googleMapsUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.710213141742!2d77.45966837509795!3d23.217229179037755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c422e8ff156df%3A0x1c5f94f65295b036!2s1%2F3D%2C%20DRM%20Rd%2C%20Saket%20Nagar%2C%20Tv27news%20digital%2C%20Bhopal%2C%20Madhya%20Pradesh%20462026!5e0!3m2!1sen!2sin!4v1724837956684!5m2!1sen!2sin";

  const handleLocationClick = () => {
    window.open(googleMapsUrl, '_blank');
  };

  return (
    // <div className="map_back-container">
    //   <div className="map_back-map-background">
    //     <div className="map_back-map-gradient"></div>
    //     <div 
    //       className="map_back-map-image"
    //       style={{
    //         backgroundImage: 'url("https://d3126e9c9smo8b.cloudfront.net/swaayatt_react_website_videos/map.png")'
    //       }}
    //     />
    //   </div>

    //   <div className="map_back-content">
    //     <div 
    //       className={`map_back-location-marker ${showAddress ? 'map_back-show-address' : ''}`}
    //       onMouseEnter={() => setShowAddress(true)}
    //       onMouseLeave={() => setShowAddress(false)}
    //       onClick={handleLocationClick}
    //     >

    //       <div className="map_back-company-icon">
    //         <div className="map_back-icon-background"></div>
    //         {/* Replace the Building2 icon with your logo */}
    //         <img src="https://d3126e9c9smo8b.cloudfront.net/swaayatt_react_website_videos/logo.png" alt="Company Logo" className="map_back-logo" />
    //       </div>

    //       <div className="map_back-pin-container">
    //         <MapPin 
    //           size={80} 
    //           className="map_back-location-pin"
    //           strokeWidth={1.5}
    //         />
    //       </div>

    //       <div className="map_back-address-card">
    //         <div className="map_back-card-content">
    //           <h3 className="map_back-company-title">Our Location</h3>
    //           <p className="map_back-address-text">{companyAddress}</p>
    //           <span className="map_back-click-hint">Click to open in Google Maps</span>
    //         </div>
    //         <div className="map_back-card-decoration"></div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="map_back-container">
      <iframe
        src={googleMapsUrl}
        width="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        className='map_iframe'
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="map_back-address-card">
        <h3 className="map_back-company-title">Our Location</h3>
        <p className="map_back-address-text">{companyAddress}</p>
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="map_back-click-hint"
        >
          Click to open in Google Maps
        </a>
      </div>
    </div>
  );
}

export default Map;
