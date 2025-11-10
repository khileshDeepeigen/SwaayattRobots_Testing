import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../../stylesheets/Road.css";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom"; 

const RecentPosts = () => {
  const [blogs, setBlogs] = useState([]);
  
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_SERVER_URL}/blog`)
      .then((response) => {
        console.log(response.data);
        setBlogs(response.data.blogs);  
      })
      .catch((error) => {
        console.error("There was an error fetching the blogs!", error);
      });
  }, []);

  return (
    <div className="recent-posts">
     <div className="text-center">
     <h2 className="section-title">Blogs</h2>

        <p className="news-description">From the Recent</p>
      </div>
      <div className="posts-layout">
        {/* Middle Column (unchanged) */}
        <div className="column large-column">

          <div className="post-card large-post">
              <img
                src="/blog-1.jpg"
                alt="Post 2"
                className="post-image full-height"
              />
            <div className="overlay-text">
              <p className="post-date"></p>
              <h3 className="post-title"></h3>
              <p className="post-description"></p>
            </div>
          </div>

        </div>
        {/* First Column */}
        <div className="column">
          {/* First Row - Image only */}
          <Link to={`/blog/blog_post/${blogs[0]?.id}`}> 

          <div className="post-card image-only">
              <img
                src={blogs[0] ? `${import.meta.env.VITE_SERVER_URL}/media/${blogs[0].poster_image}` : "default-image.jpg"}
                alt="Post 1"
                className="post-image"
              />
          </div>
          </Link>

          {/* Second Row - Text only */}
          <div className="post-card text-only">
            {blogs[0] && (
                  <Link to={`/blog/blog_post/${blogs[0].id}`}> 

              <div className="post-info">
                <div className="post-date-container">
                  <p className="post-date">{new Date(blogs[0].Date_added).toLocaleDateString()}</p>
                  <div className="icon-circle">
                    <MdArrowOutward />
                  </div>
                </div>
                <h3 className="post-title">
                    {blogs[0].title}
                </h3>
                <p className="post-description">{blogs[0].description}</p>
              </div>
              </Link>

            )}
          </div>
        </div>
        {/* Third Column */}
        <div className="column">
          {/* Second Row - Text only */}
          <div className="post-card text-only">
            {blogs[1] && (
                  <Link to={`/blog/blog_post/${blogs[1].id}`}>

              <div className="post-info">
                <div className="post-date-container">
                  <p className="post-date">{new Date(blogs[1].Date_added).toLocaleDateString()}</p>
                  <div className="icon-circle">
                    <MdArrowOutward />
                  </div>
                </div>
                <h3 className="post-title">
                    {blogs[1].title}
                </h3>
                <p className="post-description_1">{blogs[1].description}</p>
              </div>
              </Link>

            )}
          </div>
          {/* First Row - Image only */}
          <Link to={`/blog/blog_post/${blogs[1]?.id}`}>

          <div className="post-card image-only">
              <img
                src={blogs[1] ? `${import.meta.env.VITE_SERVER_URL}/media/${blogs[1].poster_image}` : "default-image.jpg"}
                alt="Post 3"
                className="post-image"
              />
          </div>
          </Link>
        </div>

        

        
      </div>
    </div>
  );
};

export default RecentPosts;
