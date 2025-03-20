import React from "react";
import "./Evolution.css"; // Import the external CSS file
// import { FaLinkedinIn,  FaFacebookF, FaTwitter } from "react-icons/fa";

import evolutionimage from "../../assets/images/evolution-image.png";


const Evolution = () => {
  return (
    <>
      <div className="outer-Evolution-container">
      <h2 className="evolution-heading">Evolution</h2>
      <h2 className="professional-journey-heading">Our Professional Journey</h2>
      <div className="evolution-image">
        <img src={evolutionimage} alt="evolution-image" />
      </div>
      </div>
    </>
  );
};
export default Evolution;