import React from "react";
import "./CareerHighlights.css";

const CareerCard = ({ icon, title, description }) => {
  return (
    <div className="career-card">
      <div className="icon-circle">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default CareerCard;
