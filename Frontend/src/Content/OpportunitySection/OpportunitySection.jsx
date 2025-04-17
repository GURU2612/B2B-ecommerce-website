import React from "react";
import "./OpportunitySection.css";
import bgImage from "../../assets/images/opportunity-bg.png";

const OpportunitySection = () => {
  return (
    <div className="opportunity-section" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="opportunity-box">
        <p>
          “Explore opportunities in our progressive pharmaceuticals business,
          where we offer exciting work life balance. Working with us, you'll
          discover a wide array of opportunities including establishing a
          pharmaceuticals business across various therapeutic areas.”
        </p>
      </div>
    </div>
  );
};

export default OpportunitySection;
