import React from "react";
const AdvisorCard = ({ img, name, title, description }) => {
  return (
    <div className="advisor-container">
      <img src={img} alt={`${name}`} />
      <div className="advisor-gradient">
        <h2 className="advisor-name">{name}</h2>
        <p className="advisor-title">{title}</p>
        <p className="advisor-description">{description}</p>
      </div>
    </div>
  );
};

export default AdvisorCard;