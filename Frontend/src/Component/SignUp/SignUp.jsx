import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './SignUp.css';
import SignUpimg from '../../assets/images/loginimg.png';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import BASE_URL from '@src/config';

const Signup = () => {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const validatePassword = (pwd) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/;
        return regex.test(pwd);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            return alert("Passwords do not match.");
        }

        if (!validatePassword(password)) {
            return alert("Password must contain at least one uppercase, one lowercase, one special character, and be at least 8 characters long.");
        }

        try {
            const response = await axios.post(`${BASE_URL}/signup`, {
                name,
                email,
                password
            });

            alert("Signup successful!");
            navigate("/login");
        } catch (error) {
            console.error("Signup failed:", error.response?.data || error.message);
            alert("Signup failed: " + (error.response?.data?.message || error.message));
        }
    };

    return (
        <div className="signup-wrapper">
            <motion.div className="signup-content"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                <motion.div className="signup-image-section"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
                >
                    <img src={SignUpimg} alt="Doctors Illustration" />
                </motion.div>

                <motion.div className="signup-form-section"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
                >
                    <h2><span>Welcome to</span><br />Meghmani Lifescience</h2>

                    <form className="signup-form" onSubmit={handleSubmit}>
                        <label>Full Name</label>
                        <input type="text" placeholder="Enter your Name" value={name} onChange={(e) => setName(e.target.value)} required />

                        <label>Email</label>
                        <input type="email" placeholder="Enter your Email here" value={email} onChange={(e) => setEmail(e.target.value)} required />

                        <label>Password</label>
                        <input type="password" placeholder="Enter your Password" value={password} onChange={(e) => setPassword(e.target.value)} required />

                        <label>Confirm Password</label>
                        <input type="password" placeholder="Enter your Password again" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />

                        <button type="submit">Create Account</button>
                    </form>

                    <p className="login-link">Already have an account? <span onClick={() => navigate("/login")}>Log in</span></p>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Signup;
