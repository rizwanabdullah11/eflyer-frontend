import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h1 className="footer-logo">Eflyer</h1>
        <div className="footer-subscribe">
          <input 
            type="email" 
            placeholder="Your Email" 
            className="subscribe-input"
          />
          <button className="subscribe-button">SUBSCRIBE</button>
        </div>

        <div className="footer-nav">
          <a href="#">Best Sellers</a>
          <a href="#">Gift Ideas</a>
          <a href="#">New Releases</a>
          <a href="#">Today's Deals</a>
          <a href="#">Customer Service</a>
        </div>

        <div className="footer-help">
          <p>Help Line Number: +92 330-8067161</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
