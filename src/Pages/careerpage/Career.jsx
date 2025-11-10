import  { useEffect } from 'react';
import '../../stylesheets/JobOpening.css'; 
import JobOpening from './JobOpening';

// import Footer from '../Footer';


const Career = () => {
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('scale-up');
          entry.target.classList.add('fade-in');
        } else {
          entry.target.classList.remove('fade-in');
          entry.target.classList.add('scale-up');
        }
      });
    }, options);

    const targets = document.querySelectorAll('.hidden');
    targets.forEach((target) => {
      observer.observe(target);
    });
  }, []);

  

  return (
    <section className="careers-section">
           <div className="section-header hidden">
        <h1>Want to join Swaayatt Robots?</h1>
        <p>
          Check out current openings and send your resume to{' '}
          <a href="mailto:career@swaayatt.com" className="email-link">
            career@swaayatt.com
          </a>
        </p>
      </div>
      
      <JobOpening />
    </section>
  );
};

export default Career;
