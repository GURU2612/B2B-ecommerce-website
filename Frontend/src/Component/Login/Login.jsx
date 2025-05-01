import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Login.css';
import Logindrimg from '../../assets/images/loginimg.png';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BASE_URL from "@src/config.js";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission

        // Check if the email and password match the admin credentials
        if (email === "admin@123" && password === "admin123") {
            console.log("I am admin");
        }

        try {
            const response = await axios.post(
                `${BASE_URL}/login`,
                { email, password },
                { headers: { 'Content-Type': 'application/json' } }
            );

            // Handle successful login (e.g., save token, redirect)
            console.log('Login successful:', response.data);
            navigate("/"); // Change to your desired route after login
        } catch (error) {
            console.error('Login failed:', error.response?.data || error.message);
            alert("Login failed: " + (error.response?.data?.message || error.message));
        }
    };


    return (
        <div className="login-wrapper">
            <motion.div
                className="login-content"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                {/* Login Form Section */}
                <motion.div
                    className="login-form-section"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
                >
                    <h2>
                        <span>Login to</span> <br />
                        Meghmani Life Science
                    </h2>

                    <form className="login-form" onSubmit={handleSubmit}>
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="Enter your Email here"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="Enter your Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />

                        <button type="submit">Login</button>
                    </form>

                    <p className="signup-link">
                        Don't have an account? <span onClick={() => navigate("/signup")}> Sign Up</span>
                    </p>
                </motion.div>

                {/* Login Image Section */}
                <motion.div
                    className="login-image-section"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
                >
                    <img src={Logindrimg} alt="Doctor" />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Login;
