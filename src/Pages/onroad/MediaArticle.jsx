import React from 'react';
import '../../../public/Stylesheet/Media.css';
import { Link } from 'react-router-dom';
import { BsArrowRight } from "react-icons/bs";

const ArticleSection = () => {
  const sidebarPosts = [
      {
      category: "Analytics India Magazine",
      title: "Bhopal-Based Swaayatt Robots Demonstrates New Obstacle Avoidance Patterns",
      link: "https://analyticsindiamag.com/ai-news-updates/bhopal-based-swaayatt-robots-demonstrates-new-obstacle-avoidance-patterns",
      date: "January 28, 2025",
      authorImage: "https://analyticsindiamag.com/wp-content/uploads/2021/12/AIM-logo-black.png"
    },
    {
      category: "StartupStory",
      title: "Swaayatt Robots Raises $4 Million at $151 Million Valuation",
      link: "https://startupstorymedia.com/insights-swaayatt-robots-raises-4-million-at-151-million-valuation/",
      date: "June 10, 2024",
      authorImage: "https://startupstorymedia.com/wp-content/themes/startupstory/img/logo-2.png"
    },
   
    
    {
      category: "Startup Spectrum",
      title: "Bhopal Entrepreneur Builds L-5 Autonomous Driving System In India",
      link: "https://startuppedia.in/bhopal-based-swaayatt-robots-startup-story/",
      date: " April 08, 2024",
      authorImage: "https://thestartupspectrum.com/wp-content/uploads/2024/05/Logo-v2.png"
    },
    {
      category: "Zee News",
      title: "Indian Startup Converts Mahindra Bolero Into Self-Driving SUV, Anand Mahindra Reacts",
      link: "https://zeenews.india.com/companies/indian-startup-converts-mahindra-bolero-into-self-driving-suv-anand-mahindra-reacts-2736569.html",
      date: " April 02, 2024",
      authorImage: "https://english.cdn.zeenews.com/static/public/zee-news-new-logo.jpg"
    },
  ];

  return (
    <section className="blog-section">
      <div className="container_article">
        <div className="text-center">
          <h2 className="section-title">Articles & News</h2>
        </div>
        <div className="content-wrapper">
          <div className="main-content">
            <div className="featured-image">
              <a
                href="https://analyticsindiamag.com/deep-tech/exclusive-indian-ai-and-robotic-company-confirms-level-5-autonomy/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://d3126e9c9smo8b.cloudfront.net/swaayatt_react_website_videos/news.webp"
                  alt="Featured blog post"
                />
              </a>

            </div>

            <div className="post-art">
              <h3 className="author-name">In the News</h3>
              <div className="author">
                <img
                  className="author-image"
                  src="https://analyticsindiamag.com/wp-content/uploads/2021/12/AIM-logo-black.png"
                  alt="Amelia Anderson"
                />
                <div className="author-details">
                  <h1 className="title">Anand Mahindra Praises Swaayatt Robots’ Level 5 Autonomy Efforts</h1>

                </div>
              </div>
            </div>
          </div>

          <aside className="sidebar">
            {sidebarPosts.map((post, index) => (
              <div key={index} className="sidebar-post">
                <div className="sidebar-header">
                  <div className="sidebar-author">
                    <img
                      className="author-image"
                      src={post.authorImage}
                      alt="Author"
                    />
                  </div>
                  <h3 className="sidebar-category">{post.category}</h3>
                </div>

                <a href={post.link} className="sidebar-title">
                  {post.title}

                  <p className="sidebar-date">{post.date}</p>

                  <p className="sidebar-more">Read More
                    <div className='morearrow'><BsArrowRight /></div> </p>

                </a>
                {index < sidebarPosts.length - 1 && <hr className="divider" />}
              </div>
            ))}
          </aside>
        </div>
      </div>
    </section>
  );
};

export default ArticleSection;
