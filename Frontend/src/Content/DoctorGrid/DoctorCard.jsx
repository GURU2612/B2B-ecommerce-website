import React from "react";
import "./DoctorCard.css";

const DoctorCard = ({ name, specialization, image }) => {
  return (
    <div className="doctor-card">
      <div className="image-container">
        <img src={image} alt={name} />
        <div className="overlay">
          <span className="plus-icon">+</span>
        </div>
      </div>
      <div className="doctor-info">
        <h3>{name}</h3>
        <p>{specialization}</p>
      </div>
    </div>
  );
};

export default DoctorCard;
