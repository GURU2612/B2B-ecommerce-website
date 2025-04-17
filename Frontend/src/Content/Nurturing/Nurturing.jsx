import React from 'react';
import './Nurturing.css';
import teamImage from "../../assets/images/Nurturingimage.png";


const CareerSection = () => {
  return (
    <div className="career-section">
      <div className="career-left">
        <img src={teamImage} alt="Team presentation" />
      </div>
      <div className="career-right">
        <h3>
          <span className="italic-purple">Nurturing Excellence To</span><br />
          <span className="bold-orange">Build a Healthier World</span>
        </h3>
        <h2>Progress with us for Growth and Happiness</h2>
        <p>
          At Meghmani Lifesciences, we provide a conducive environment that nurtures
          talent and facilitates growth. Our core developmental strategy is to keep our
          employees progressive and happy.
        </p>
        <p>
          Meghmani Lifesciences’ ‘talent strategy’ contributes to the success of the business.
          We strive to provide a healthy work-life balance through a lot of vibrant, cultural,
          and social development events.
        </p>
        <button className="apply-btn">Apply Now</button>
      </div>
    </div>
  );
};

export default CareerSection;
