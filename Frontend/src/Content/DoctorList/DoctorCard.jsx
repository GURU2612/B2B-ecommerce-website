import React from 'react';
import './DoctorCard.css';




const DoctorCard = ({ name, specialty, imageUrl }) => {
  return (
    <div className="doctor-card">
      <img src={imageUrl} alt={name} className="doctor-image" />
      <div className="doctor-info">
        <h3 className="doctor-name">{name}</h3>
        <p className="doctor-specialty">{specialty}</p>
      </div>
    </div>
  );
};

export default DoctorCard;
