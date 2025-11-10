import '../../stylesheets/Career1.css';

function JoinUs() {
  return (
    <div className="join-us-container">
      <div className="join-us-text-section">
        <h4 className="join-us-heading-small">Join Us</h4>
        <h1 className="join-us-heading-large">We Are Hiring</h1>
        <p className="join-us-description">
         Swaayatt Robots is seeking motivated and passionate individuals eager to contribute to the cutting-edge fields of autonomous driving and AI. Our vision is to lead globally in these areas, and we aim to attract those who share our drive. Joining our team means working on groundbreaking projects that push technological boundaries and shape the future of transportation. We foster a collaborative environment where innovation and continuous learning are encouraged.

        </p>
        <p className="join-us-description">
         If you're excited to be at the forefront of transformative technologies and ready to take on challenges, join us on this journey. At Swaayatt Robots, you'll have the opportunity to make a real impact and help revolutionize autonomous driving and AI. Be part of our visionary team and help shape the future of these industries. Apply now for a rewarding career with us!

        </p>
      </div>
      <div className="join-us-video-section">
  {/* 
  <video 
    className="join-us-video" 
    width="560" 
    height="315" 
    controls 
    autoPlay 
    muted 
    loop
  >
    <source src="https://d3126e9c9smo8b.cloudfront.net/swaayatt_react_website_videos/2023_03_21_LBSNAA_2.mp4" type="video/mp4" />
  </video> 
  */}

  <img
    className="join-us-image"
    src="/IMG_2898.JPG"
    alt="Join Us at Swaayatt Robots"
  />
</div>

    </div>
  );
}

export default JoinUs;
