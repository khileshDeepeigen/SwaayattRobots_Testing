import '../stylesheets/Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-left">
                    <img
                        src="https://d3126e9c9smo8b.cloudfront.net/swaayatt_react_website_videos/logo.png"
                        className="logo_image1"
                        alt="Swaayatt Robots Logo"
                    />
                    <h3>SWAAYATT ROBOTS</h3>
                    <p>Autonomous Driving and ADAS</p>
                    <div className="social-icons">
                        <a href="https://twitter.com/swaayatt?lang=en"><i className="fab fa-twitter"></i></a>
                        <a href="https://www.facebook.com/swaayatt"><i className="fab fa-facebook-f"></i></a>
                        <a href="mailto:sanjeevsharma@swaayatt-robots.com"><i className="fas fa-envelope"></i></a>
                        <a href="https://www.linkedin.com/company/swaayatt-robots/?originalSubdomain=in"><i className="fab fa-linkedin-in"></i></a>
                        <a href="https://www.youtube.com/@swaayattrobots1827"><i className="fab fa-youtube"></i></a>

                    </div>
                </div>
                

                <div className="footer-center">
                    <h3>Company</h3>
                    <ul>
                        {/* <li><a href="/aboutus">About Us</a></li> */}
                        <li><a href="/research">Research</a></li>
                        <li><a href="/media">Media</a></li>
                        <li><a href="/career">Career</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-center">
                    <h3>Blog</h3>
                    <ul>
                        <li><a href="/autonomous-driving?tab=onroad">On Road</a></li>
                        <li><a href="/autonomous-driving?tab=offroad">Off Road</a></li>
                        <li><a href="/mappingandlocalisation">Mapping and Localization</a></li>

                        <li><a href="/motion-planning">Motion Planning</a></li>
                        <li><a href="/perception">Perception</a></li>

                    </ul>
                </div>
               

                <div className="footer-right">
                    <h3>Contact</h3>
                    <ul>
                        <li><i className="fas fa-building"></i> Swaayatt Robots Pvt. Ltd.</li>
                        <li>1/3D, DRM Rd, Saket Nagar, Habib Ganj, <br /> Bhopal, Madhya Pradesh-462026</li>
                        <li>Phone: +91 755 494 7025</li>
                    </ul>
                </div>
            </div>
            <div className="divider_footer"></div>
            <div className="footer-bottom">
                <p>© Copyright 2025. All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
