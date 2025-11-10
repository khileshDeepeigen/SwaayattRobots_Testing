import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import '../stylesheets/Navbar.css';

const Navbar  = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResearchHovered, setIsResearchHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleDropdownClick = (e) => {
    if (window.innerWidth <= 960) {
      e.preventDefault();
      setIsResearchHovered(!isResearchHovered);
    }
  };

  const handleDropdownItemClick = () => {
    setIsResearchHovered(false);
    closeMenu();
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMenuOpen]);

  return (
    <>
      <div className={`backdrop ${isMenuOpen ? 'show' : ''}`} onClick={closeMenu} />
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <NavLink to="/" className="nav-logo" onClick={closeMenu}>
            <img
              src="https://d3126e9c9smo8b.cloudfront.net/swaayatt_react_website_videos/logo.png"
              className="logo-image"
              alt="Swaayatt Robots Logo"
            />
            <span className="logo-text">
              Swaayatt <br/>Robots
            </span>
          </NavLink>

          <ul className={`nav-menu ${isMenuOpen ? 'show' : ''}`}>
            <li className="nav-item">
              <NavLink to="/" className="nav-links" onClick={closeMenu}>
                Home
              </NavLink>
            </li>
            
            <li 
              className="nav-item dropdown-container"
              onMouseEnter={() => window.innerWidth > 960 && setIsResearchHovered(true)}
              onMouseLeave={() => window.innerWidth > 960 && setIsResearchHovered(false)}
            >
              <NavLink 
                to="/research" 
                className={`nav-links ${isResearchHovered ? 'active' : ''}`}
                onClick={handleDropdownClick}
              >
                Research
                <ChevronDown className="dropdown-icon" size={18} />
              </NavLink>
              
              <div className={`dropdown ${isResearchHovered ? 'show' : ''}`}>
                <div className="dropdown-content">
                  <div className="research-text">
                    <NavLink to="/research" onClick={handleDropdownItemClick}>
                      Research
                    </NavLink>
                  </div>
                  
                  <div className="nav-dropdown-items">
                    <NavLink 
                      to="/onroad" 
                      className="nav-dropdown-item"
                      onClick={handleDropdownItemClick}
                    >
                      <div className="dropdown-item-content">
                        <span className="nav-title"> <i className="fa fa-road icon"></i> On Road</span>
                        <span className="description">
                          Explore on-road research and innovations
                        </span>
                      </div>
                    </NavLink>
                    
                    <NavLink 
                      to="/offroad" 
                      className="nav-dropdown-item"
                      onClick={handleDropdownItemClick}
                    >
                      <div className="dropdown-item-content">
                     <span className="nav-title">  <i className="fa fa-mountain icon"></i> Off Road</span>
                        <span className="description">
                          Dive into off-road navigation techniques
                        </span>
                      </div>
                    </NavLink>
                  </div>
                </div>
                
                <div className="dropdown-footer">
                  <div className="footer-links">
                    <NavLink to="/contact" className="footer-link" onClick={handleDropdownItemClick}>
                      Contact
                    </NavLink>
                    <NavLink to="/blog" className="footer-link" onClick={handleDropdownItemClick}>
                      Blog
                    </NavLink>
                    <NavLink to="/career" className="footer-link" onClick={handleDropdownItemClick}>
                      Career
                    </NavLink>
                  </div>
                  
                  <div className="social-links">
                    <a href="https://twitter.com/swaayatt" target="_blank" rel="noopener noreferrer" className="social-link">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </svg>
                    </a>
                    <a href="https://www.facebook.com/swaayatt" target="_blank" rel="noopener noreferrer" className="social-link">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>
                    <a href="https://www.linkedin.com/company/swaayatt-robots/" target="_blank" rel="noopener noreferrer" className="social-link">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            
            <li className="nav-item">
              <NavLink to="/media" className="nav-links" onClick={closeMenu}>
                Media
              </NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink to="/blog" className="nav-links" onClick={closeMenu}>
                Blogs
              </NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink to="/career" className="nav-links" onClick={closeMenu}>
                Career
              </NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink to="/contact" className="nav-links" onClick={closeMenu}>
                Contact
              </NavLink>
            </li>
            {/* <li className="nav-item">
  <NavLink to="/101k-project" className="nav-button" onClick={closeMenu}>
    101k Project
  </NavLink>
</li> */}

          </ul>
          
          <button className="menu-toggle" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;