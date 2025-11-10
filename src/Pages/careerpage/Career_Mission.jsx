import '../../stylesheets/Career1.css';

const Mission = () => {
    return (
        <div className="quote-section">
            <div className="quote-container">
                <div className="quote-mark">❝</div>
                <p className="quote-text">
                    Our mission is to revolutionize the future of transportation and contribute to the advancement of autonomous systems
                    on a global scale. By becoming part of the Swaayatt's team, you will be surrounded by passionate individuals who are 
                    dedicated to pushing the boundaries of technology and reshaping the world of autonomy.
                </p>
                <a href="#job-opening-section" className="explore-button">
                    Explore open roles &rarr;
                </a>
                <div className="quote-mark">❞</div>
            </div>
            <div className="image-container">
                <img src="/blog-1.jpeg" alt="Person" className="person-image" />
            </div>
        </div>
    );
};

export default Mission;
