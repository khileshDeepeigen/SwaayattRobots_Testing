import React, { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../../../../public/Stylesheet/Swiper.css';

function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_SERVER_URL}/blog`)
      .then((response) => {
        setBlogs(response.data.blogs);
    console.log(blogs);

      })
      .catch((error) => {
        console.error("There was an error fetching the blogs!", error);
      });
  }, []);

  return (
    <div className='latest_back_blog'>
      <div className="latest-container">
        <div className="latest-header-section">
          <div className="videocard-header">
            <h1 className="videocard-title">Latest Blogs</h1>
          </div>
          <p className="videocard-description">
            Explore in-depth articles on autonomous driving and the challenges of decision-making in unstructured environments
          </p>
        </div>

        <div className="latest-waterfall-grid">
          {blogs.map((blog, index) => (
            <Link to={`/blog/blog_post/${blog.id}`} key={index} className={`latest-project-item latest-${index % 2 === 0 ? 'first' : 'second'}`}>
              <div className="latest-project-text">
              <p style={{color:"#3b82f6"}}>{blog.Date_added}</p>
                <h2>{blog.title}</h2>
                <p>{blog.description}</p>

                <div className="latest-line"></div>
                <div className="latest-arrow-button">
                  <ArrowUpRight size={24} />
                </div>
              </div>
              <div className="latest-project-image-container">
               <img 
  src={`/blog_${index+1}.jpg`} 
  alt={blog.title}
  className="latest-project-image"
/>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
