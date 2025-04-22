
// DrCart.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DrCart.css'; // Assuming you have a CSS file

function DrCart({ name, title, image,description }) {
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
        <div className="advisor-section-card" onClick={handleClick}>
            <img src={image} alt={name} className="advisor-section-doctor-img" />
            <div className="advisor-section-card-info">
                <h3>{name}</h3>
                <p className="advisor-section-title">{title}</p>
            </div>
        </div>
    );
}

export default DrCart;
