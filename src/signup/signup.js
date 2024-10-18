import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './signup.css';
import logo from '../assets/background.png'; 

const SignUpForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/signup/signup', {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData), 
            });

            const data = await response.text();
            if (response.ok) {
                console.log("User registered:", data);
            } else {
                console.error("Registration failed:", data);
            }
        } catch (err) {
            console.error("Error:", err);
        }
    };

    return (
        <div className="signup-container">
            <div className="form-section1">
                <div className="inner-box1">
                    <h2>Create New Account <span role="img" aria-label="wave">👋</span></h2>
                    <p>Please enter details to create a new account</p>
                    <form onSubmit={handleSubmit}> {/* Form submission triggers handleSubmit */}
                        <div className="form-group">
                            <label>Full Name</label>
                            <input
                                type="text"
                                name="fullName"
                                placeholder="Enter your full name"
                                value={formData.fullName}
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
                                placeholder="Enter your password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit" className="submit-button">Sign Up</button>
                    </form>
                    <p>Already have an account? <Link to="/signin">Sign in</Link></p>
                </div>
            </div>
            <div className="image-section1">
                <img src={logo} alt="Model" />
            </div>
        </div>
    );
};

export default SignUpForm;
