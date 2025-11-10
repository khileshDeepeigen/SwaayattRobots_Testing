import { useEffect, useState } from 'react';
import '../../../stylesheets/Blog1.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
var api_url = import.meta.env.VITE_SERVER_URL;

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [featuredBlog, setFeaturedBlog] = useState(null);
  const [animatedArticles, setAnimatedArticles] = useState(new Set());

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_SERVER_URL}/blog`)
      .then(response => {
        console.log(response.data);
        const { blogs, featuredBlog } = response.data;
        setBlogs(blogs);
        setFeaturedBlog(featuredBlog);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const articleId = entry.target.getAttribute('data-id');
        if (entry.isIntersecting && !animatedArticles.has(articleId)) {
          entry.target.classList.add('visible');
          setAnimatedArticles((prev) => new Set(prev).add(articleId));
        }
      });
    }, { threshold: 0.1 });

    const articles = document.querySelectorAll('.article');
    articles.forEach(article => observer.observe(article));

    return () => {
      articles.forEach(article => observer.unobserve(article));
    };
  }, [animatedArticles]);

  return (
    <div className="latest-section">
      <div className="header">
        <h2>Blogs</h2>
      </div>
      <div className="content">
        {featuredBlog && (
          <div className="featured-article">
            <img src={`${api_url}/${featuredBlog.poster_image}`} alt="Featured blog" />
            <div className="info">
              <p>{new Date(featuredBlog.Date_added).toLocaleDateString()}</p>
              <h3>{featuredBlog.title}</h3>
              {/* <p>{featuredBlog.description}</p> */}
            </div>
          </div>
        )}

        <div className="article-container">
          {blogs.map((blog) => (
            <div className="article" key={blog.id} data-id={blog.id}>
              <p>{new Date(blog.Date_added).toLocaleDateString()}</p>
              <h3>{blog.title}</h3>
              <img className='article_con_img' src={`${api_url}/media/${blog.poster_image}`} alt="Blog poster" /> 

              <p>{blog.description}</p>
              {/* /blog/blog_post/{blog.id} */}
              <Link to={`/blog/blog_post/${blog.id}`} className="read-more-link">Read Article</Link>
              {/* <a href="#">Read Article &rarr;</a> */}
            </div>  
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogSection;
