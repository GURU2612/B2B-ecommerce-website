import React from 'react';
import './Card.css';

const Card = ({ icon, title, description, linkText }) => {
  return (
    <div className="card">
      <div className="card-icon">
        <img src={icon} alt={`${title} icon`} />
      </div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <div className="card-link">{linkText}</div>
    </div>
  );
};

export default Card;
