import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import Navbar from './Pages/Navbar';
import Footer from './Pages/Footer';
import ScrollToTop from './ScrollToTop';

import HomePage from './Pages/homepage/HomePage';
import Research from './Pages/researchpage/Research';
import Tweeter from './Pages/mediapage/Tweeter';
import Career1 from './Pages/careerpage/Career1';
import Contact from './Pages/contactpage/Contact';
import BlogPost from './Pages/homepage/Blog/BlogPost';
import JobOpening from './Pages/careerpage/JobOpening';
import AutonomousDriving from './Pages/researchpage/AutonomousDriving';
import MotionPlanning from './Pages/researchpage/MotionPlanning';
import MappingandLocalisation from './Pages/researchpage/MappingandLocalisation';
import Perception from './Pages/researchpage/Perception';
import Onroad from './Pages/onroad/OnRoad';
import Offroad from './Pages/onroad/OffRoad';
import Blog from './Pages/homepage/Blog/NewBlog';
import AboutUs from './Pages/aboutuspage/AboutUs';
import DemoPage from './Pages/aboutuspage/DemoPage';


function RouteHandler({ setIsPageLoading }) {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setIsPageLoading(true);
    } else {
      setIsPageLoading(false); 
    }

    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage setIsPageLoading={setIsPageLoading} />} />
      <Route path="/research" element={<Research setIsPageLoading={setIsPageLoading} />} />
      <Route path="/media" element={<Tweeter setIsPageLoading={setIsPageLoading} />} />
      <Route path="/career" element={<Career1 setIsPageLoading={setIsPageLoading} />} />
      <Route path="/onroad" element={<Onroad setIsPageLoading={setIsPageLoading} />} />
      <Route path="/offroad" element={<Offroad setIsPageLoading={setIsPageLoading} />} />
      <Route path="/blog" element={<Blog setIsPageLoading={setIsPageLoading} />} />
      <Route path="/contact" element={<Contact setIsPageLoading={setIsPageLoading} />} />
      <Route path="/blog/blog_post/:id" element={<BlogPost setIsPageLoading={setIsPageLoading} />} />
      <Route path="/job-openings" element={<JobOpening setIsPageLoading={setIsPageLoading} />} />
      <Route path="/autonomous-driving" element={<AutonomousDriving setIsPageLoading={setIsPageLoading} />} />
      <Route path="/motion-planning" element={<MotionPlanning setIsPageLoading={setIsPageLoading} />} />
      <Route path="/mappingandlocalisation" element={<MappingandLocalisation setIsPageLoading={setIsPageLoading} />} />
      <Route path="/perception" element={<Perception setIsPageLoading={setIsPageLoading} />} />
      <Route path="/aboutus" element={<AboutUs setIsPageLoading={setIsPageLoading} />} />
      <Route path="/101k-project" element={<DemoPage setIsPageLoading={setIsPageLoading} />} />

    </Routes>
  );
}

const App = () => {
  const [isPageLoading, setIsPageLoading] = useState(true);

  return (
    <Router>
      <Navbar />
      <ScrollToTop />

       {isPageLoading && (
        <div
          className="loader-overlay"
          style={{
            position: 'fixed',
            top: 0, 
            left: 0,
            width: '100vw',
            // height: 'calc(100vh - 140px)',
            backgroundColor: 'white',
            zIndex: 9999,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            paddingBottom: '70px' 
          }}
        >
          <video
            src="/FInal_Loader_OP_2.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{ height: '120px', width: '120px' }}
          />
        </div>
      )} 

      <RouteHandler setIsPageLoading={setIsPageLoading} />
      <Footer />
    </Router>
  );
};


export default App;
