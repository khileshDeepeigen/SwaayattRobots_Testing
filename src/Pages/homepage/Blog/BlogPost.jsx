import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import axios from 'axios';
import '../../../stylesheets/Blog1.css'; 
// import Footer from '../../Footer';
var api_url = import.meta.env.VITE_SERVER_URL;
const Blog_Post = () => {
  const { id } = useParams(); 
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    axios.get(`${api_url}/blog/blog_post/${id}`)
      .then(response => {
        const blogPostData = JSON.parse(response.data.blog_post); 
        const blogDetails = blogPostData[0].fields; 

        setBlog(blogDetails); 
      })
      .catch(error => {
        console.error('There was an error fetching the blog post!', error);
      });
  }, [id]);

  if (!blog) {
    return <p>Loading...</p>; 
  }

  return (
    <div className="Blog_Post_container">
      <div className="Blog_Post_bg">
        <video className="background-video" autoPlay muted loop>
          <source src="https://d3126e9c9smo8b.cloudfront.net/swaayatt_react_website_videos/2023_02_23.mp4" type="video/mp4" />
        </video>
        <div className="Blog_Post_bg_container">
          <h1>{blog.title}</h1>
          <hr />
        </div>
      </div>

      <div className="Blog_Post_content">
        <div className="Blog_Post_details">
          <p>{new Date(blog.Date_added).toLocaleDateString()}</p>
          <img src={`/blog_${-id/7+3+1}.jpg`} alt={blog.title} className="blog-image" />
          <div className="Blog_Post_description" dangerouslySetInnerHTML={{ __html: blog.content }} /> 
        </div>
      </div>

      {/* <Footer />  */}
    </div>
  );
};

export default Blog_Post;
