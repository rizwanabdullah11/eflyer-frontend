import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <nav className="top-nav">
        <ul>
          <li><a href="#">Best Sellers</a></li>
          <li><a href="#">Gift Ideas</a></li>
          <li><a href="#">New Releases</a></li>
          <li><a href="#">Today's Deals</a></li>
          <li><a href="#">Customer Service</a></li>
        </ul>
      </nav>
      
    </header>
  );
};

export default Navbar;