

import React from "react";
import "./Valuesection.css";
import rocket from "../../assets/images/rocketicon.png";
import value from "../../assets/images/valueicon.png";
import eye from "../../assets/images/eyeicon.png";

const Valuesection = () => {
  return (
    <div className="outer-Valuesection-container">
      <h2>Discover Our Values</h2>
      <h1>Quality, Safety & Security</h1>

      <div className="values-box-container">
        <div className="value-box-common">
          <div className="icon-circle">
            <img src={rocket} alt="Mission Icon" />
          </div>
          <h3>Mission</h3>
          <p>
            To ensure good health for all newly diagnosed patients with innovative medicines.
          </p>
        </div>

        <div className="value-box-common">
          <div className="icon-circle">
            <img src={eye} alt="Vision Icon" />
          </div>
          <h3>Vision</h3>
          <p>
            To be amongst Top 150 leading healthcare company by 2027 in Indian Pharmaceutical market.
          </p>
        </div>

        <div className="value-box-common">
          <div className="icon-circle">
            <img src={value} alt="Value Icon" />
          </div>
          <h3>Value</h3>
          <p>
            To be amongst Top 150 leading healthcare company by 2027 in Indian Pharmaceutical market.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Valuesection;
