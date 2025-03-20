import React from "react";
import "./Banner.css";



const Banner = () => {
  return (
    <>
    <div className="aboutus-banner-container">
         <div className="aboutus-title">About Us</div>
         <p className="aboutus-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
      </p>
    </div>
     <div className="breadcrumb">
      <div className="breadcrumb-text">Home &gt; About Us</div>
   </div>
   </>
  );
};

export default Banner;