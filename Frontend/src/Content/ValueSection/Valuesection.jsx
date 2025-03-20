import React from "react";
import "./Valuesection.css"; // Import the external CSS file
import rocket from "../../assets/images/rocketicon.png";
import value from "../../assets/images/valueicon.png";
import eye from "../../assets/images/eyeicon.png";



const Valuesection = () => {
  return (
    <>
      <div className="outer-Valuesection-container">
      <h2>Discover Our Values</h2>
      <h1>Quality, Safety & Security</h1>

      <div className="mission-box">
      <div className="mission-icon">
      <img src={rocket}></img>
        </div>
        <h3 className="mission-title">Mission</h3>
        <h6 className="mission-description">
          To ensure good health for all newly diagnosed patients with innovative medicines.
        </h6>
      </div>
            <div className="vision-box">
            <div className="vision-icon">
                <img src={eye}></img>
            </div>
        <h3 className="vision-title">Vision</h3>
        <h6 className="mission-description">
        To be amongst Top 150 leading healthcare company by 2027 in Indian Pharmaceutical market.
        </h6>
            </div>
      <div className="value-box">
      <div className="value-icon">
      <img src={value}></img>
        </div>
        <h3 className="value-title">Value</h3>
        <h6 className="mission-description">
        To be amongst Top 150 leading healthcare company by 2027 in Indian Pharmaceutical market.
        </h6>

      </div>
      </div>
    </>
    );
};

export default Valuesection;