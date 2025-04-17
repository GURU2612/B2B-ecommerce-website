import React from "react";
import "./CareerBanner.css";

const CareerBanner = () => {
  return (
    <>
      <div className="career-banner-container">
        <div className="career-title">Career</div>
        <p className="career-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>

      <div className="breadcrumb">
        <div className="breadcrumb-text">Home &gt; Career</div>
      </div>
    </>
  );
};

export default CareerBanner;
