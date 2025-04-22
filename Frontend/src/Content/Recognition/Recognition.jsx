
import React from "react";
import "./Recognition.css";
import Recognitionimg from "../../assets/images/Recognitionimg.png";

const Recognition = () => {
  return (
    <div className="recognition-section">
      <div className="text-content">
        <h2 className="recognition-heading">Values</h2>
        <h2 className="core-values-heading">Our Core Values</h2>

        <div className="button-group">
          <button className="value-button">Ethics & Integrity</button>
          <button className="value-button">Quality</button>
          <button className="value-button">Innovation</button>
          <button className="value-button">Consistency</button>
        </div>

        <p className="meghmani-description-about">
          At Meghmani Lifesciences Ltd, we're more than just a leading name in healthcare.
          We're a collective of innovative minds committed to transforming the way health and
          well-being are perceived and managed. <br /><br />
          Every day, we strive to live up to our promise - 
          to empower everyone to live their healthiest life. This is who we are, this is what drives us - 
          Meghmani Lifesciences Ltd, nurturing health and wellbeing.
        </p>

        <h3 className="awards-heading-about">Awards & Recognition</h3>
        <div className="award-images">
          <div className="award-box" />
          <div className="award-box" />
        </div>
      </div>

      <div className="image-container">
        <img src={Recognitionimg} alt="Recognition" className="recognition-img" />
      </div>
    </div>
  );
};

export default Recognition;
