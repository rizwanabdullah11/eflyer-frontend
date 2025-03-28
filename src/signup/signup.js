import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './signup.css';
import illustration from '../assets/background.png';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    console.log("Form Data:", formData);
  };

  return (
    <div className="signup-container">
      <div className="form-section1">
        <div className="inner-box1">
          <h2>Create Seller Account</h2>
          <p>Please fill in the details to create your account</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
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
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
                required
                minLength="6"
              />
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                minLength="6"
              />
            </div>
            <button type="submit" className="submit-button">Create Account</button>
          </form>
          <p className="signin-link">
            Already have an account? <Link to="/signin">Login</Link>
          </p>
        </div>
      </div>
      <div className="image-section1">
        <img src={illustration} alt="Illustration" />
      </div>
    </div>
  );
};

export default Signup;