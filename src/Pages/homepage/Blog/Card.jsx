import '../../../stylesheets/HeroImage.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/blog`);
        console.log(response.data);
        setBlogs(response.data.blogs);
      } catch (error) {
        console.error('Error fetching blog data:', error);
      }
    };

    fetchBlogData();
  }, []);

  const blogsToShow = showAll ? blogs : blogs.slice(0, 6);

  return (
    <>
      <div className="blog_videocard-container">
        <div className="videocard-header">
          <h1 className="videocard-title">Latest Blogs</h1>
        </div>
        <p className="videocard-description">
          Explore in-depth articles on autonomous driving and the challenges of decision-making in unstructured environments
        </p>
        <div className='blog_section-back'>
        <div className="videocard-cards">
          {blogsToShow.map((blog, index) => (
            <Link
              key={index}
              to={`/blog/blog_post/${blog.id}`} 
              className="videocard-card"        
            >
              <div className="videocard-card-content">
                <p className="videocard-date">{blog.Date_added}</p>
                <h3 className="videocard-card-title">{blog.title}</h3>
                <p
                  className="videocard-card-description"
                  dangerouslySetInnerHTML={{ __html: blog.description }}
                ></p>
              </div>
              <img
                src={`${import.meta.env.VITE_SERVER_URL}/media/${blog.poster_image}`}
                alt={blog.title}
                className="videocard-card-image"
              />
            </Link>
          ))}
        </div>
        </div>
      </div>
    </>
  );
};

export default BlogSection;
