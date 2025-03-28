import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className="hero">
      <div className="logo">Eflyer</div>

      <div className="main-nav">
        <button 
          className="menu-toggle" 
          onClick={toggleMenu} 
          aria-label="Open Menu"
        >
          &#9776;
        </button>
        
        <select className="category-select" aria-label="Category">
          <option>All Categories</option>
          <option value="action">Action</option>
          <option value="other">Else Action Occur</option>
        </select>

        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Search this blog" 
            aria-label="Search"
          />
          <button type="submit" aria-label="Search Button">
            &#128269;
          </button>
        </div>

        <div className="language-select-wrapper">
          <select className="language-select" aria-label="Language">
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="es">Spanish</option>
          </select>
        </div>

        <div className="cart-icons">
          <span>&#128722; CART</span>
          <Link to="/signin" className="account-link">
            <span>&#128100; ACCOUNT</span>
          </Link>
        </div>
      </div>

      {/* Side Menu - Now includes top navigation links for mobile */}
      <div className={`side-menu ${isMenuOpen ? 'open' : ''}`}>
        <button 
          className="close-btn" 
          onClick={toggleMenu} 
          aria-label="Close Menu"
        >
          &times;
        </button>
        <ul>
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/fashion" onClick={toggleMenu}>Fashion</Link></li>
          <li><Link to="/electronic" onClick={toggleMenu}>Electronic</Link></li>
          <li><Link to="/jewellery" onClick={toggleMenu}>Jewellery</Link></li>
          
          {/* Mobile-only top navigation links */}
          {isMobile && (
            <>
              <li className="mobile-nav-divider"></li>
              <li><a href="#" onClick={toggleMenu}>Best Sellers</a></li>
              <li><a href="#" onClick={toggleMenu}>Gift Ideas</a></li>
              <li><a href="#" onClick={toggleMenu}>New Releases</a></li>
              <li><a href="#" onClick={toggleMenu}>Today's Deals</a></li>
              <li><a href="#" onClick={toggleMenu}>Customer Service</a></li>
            </>
          )}
        </ul>
      </div>

      {/* Overlay when menu is open */}
      {isMenuOpen && <div className="overlay" onClick={toggleMenu}></div>}

      {/* Hero Content */}
      <div className="hero-content-wrapper">
        <button className="nav-arrow left" aria-label="Previous">
          &lt;
        </button>
        <div className="hero-content">
          <h1>
            GET START <br />
            YOUR FAVOURITE SHOPPING
          </h1>
          <button className="cta">BUY NOW</button>
        </div>
        <button className="nav-arrow right" aria-label="Next">
          &gt;
        </button>
      </div>
    </section>
  );
};

export default Hero;