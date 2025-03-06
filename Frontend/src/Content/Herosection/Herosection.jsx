import React from "react";
import "./Herosection.css";
import i1 from "../../assets/images/bannerimage.png";
import i2 from "../../assets/images/dnastyle.png";


const Herosection = () => {
  return (
    <div className="hero-container">
      <div className="ellipse"></div>
      <h2 className="hero-text">Health & Happiness</h2>
      <h2 className="hero-subtext">In the Heart of</h2>
      <h1 className="hero-title">Trust, We Thrive</h1>
      <div className="group-3">
        <div className="line"></div>
        <p className="hero-description">
          It is a long established fact that a reader will be distracted.
        </p>
      </div>
      <button className="contact-button">Contact Us Now</button>
        <div class="hero-image">
        <img src={i1} alt="Hero Image">
        </img>
        </div>

        <div class="frame-image">
        <img src={i2} alt="Decorative Frame">
        </img>
        </div>
       
        {/* Slider Indicator */}
        <div className="slider-indicator">
        <div className="slider-dot"></div>
        <div className="slider-dot active"></div>
        <div className="slider-dot"></div>
        </div>

    </div>
    
  );
};

export default Herosection;
