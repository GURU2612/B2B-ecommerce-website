// DrCart.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './DrCart.css'; // Assuming you have a CSS file

function DrCart({ name, title, image, description }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/doctor-details', {
            state: {
                name,
                title,
                image,
                description
            }
        });
    };

    return (
        <motion.div
            className="advisor-section-card"
            onClick={handleClick}
            initial={{ opacity: 0, scale: 0.8, y: 30 }} // Initial state with scale down and fade
            animate={{ opacity: 1, scale: 1, y: 0 }} // Final state
            transition={{ duration: 0.6, ease: "easeOut" }} // Smooth transition
            whileHover={{
                scale: 1.05, // Slightly scale up
                y: -5, // Slight upward movement for hover effect
                boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.2)", // Adding shadow effect on hover
                cursor: "pointer", // Change cursor on hover
                transition: { duration: 0.3, ease: "easeOut" }
            }}
            whileTap={{
                scale: 0.95, // Scale down slightly on tap/click for tactile feedback
                transition: { duration: 0.2 }
            }}
        >
            <motion.img
                src={image}
                alt={name}
                className="advisor-section-doctor-img"
                initial={{ scale: 0.9 }} // Initial scale of image
                animate={{ scale: 1 }} // Image smoothly scales up
                transition={{ duration: 0.4, ease: "easeOut" }}
            />
            <div className="advisor-section-card-info">
                <h3>{name}</h3>
                <p className="advisor-section-title">{title}</p>
            </div>
        </motion.div>
    );
}

export default DrCart;
