import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './signin.css';
import illustration from '../assets/background.png';

const Signin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="signin-container">
      <div className="form-section">
        <div className="inner-box">
          <h2>Seller Login</h2>
          <p>Please Login to your account</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <Link to="/forgot-password" className="forgot-password">Forgot Password?</Link>
            </div>
            <button type="submit" className="login-button">Login</button>
          </form>
          <p className="signup-link">
            Want to be a seller? <Link to="/signup">Signup</Link>
          </p>
        </div>
      </div>
      <div className="image-section">
        <img src={illustration} alt="Illustration" />
      </div>
    </div>
  );
};

export default Signin;