import React from 'react';
import { motion } from 'framer-motion'; // <-- Import motion
import './Signup.css';
import SignUpimg from '../../assets/images/loginimg.png';

const Signup = () => {
    return (
        <div className="signup-wrapper">
            <motion.div
                className="signup-content"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                {/* Left Image Section */}
                <motion.div
                    className="signup-image-section"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
                >
                    <img src={SignUpimg} alt="Doctors Illustration" />
                </motion.div>

                {/* Right Form Section */}
                <motion.div
                    className="signup-form-section"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
                >
                    <h2>
                        <span>Welcome to</span> <br />
                        Meghmani Lifescience
                    </h2>

                    <form className="signup-form">
                        <label>Full Name</label>
                        <input type="text" placeholder="John Doe" />

                        <label>Email</label>
                        <input type="email" placeholder="Enter your Email here" />

                        <label>Password</label>
                        <input type="password" placeholder="Enter your Password" />

                        <label>Confirm Password</label>
                        <input type="password" placeholder="Enter your Password again" />

                        <button type="submit">Create Account</button>
                    </form>

                    <p className="login-link">
                        Already have an account? <span>Log in</span>
                    </p>

                    <div className="or-divider">OR</div>

                    <div className="social-buttons">
                        <button className="google-btn">
                            <img src="https://img.icons8.com/color/16/google-logo.png" alt="Google" /> Sign up with Google
                        </button>
                        <button className="facebook-btn">
                            <img src="https://img.icons8.com/fluency/16/facebook-new.png" alt="Facebook" /> Sign up with Facebook
                        </button>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Signup;
