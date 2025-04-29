import React from 'react';
import { motion } from 'framer-motion'; // <-- Import motion
import './Login.css';
import Logindrimg from '../../assets/images/loginimg.png';

const Login = () => {
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

                    <form className="login-form">
                        <label>Email</label>
                        <input type="email" placeholder="Enter your Email here" />

                        <label>Password</label>
                        <input type="password" placeholder="Enter your Password" />

                        <button type="submit">Login</button>
                    </form>

                    <p className="signup-link">
                        Don't have an account? <span> Sign Up</span>
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
