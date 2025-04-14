import React from "react";
import "./Herosection.css";
import bannerImage from "../../assets/images/bannerimage.png";
import dnaStyle from "../../assets/images/dnastyle.png";
import ellipse from "../../assets/images/Ellipse.png";


const Herosection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h2 className="hero-heading">Health & Happiness</h2>
        <h2 className="hero-subheading">In the Heart of</h2>
        <h1 className="hero-title">Trust, We Thrive</h1>

        <div className="hero-description-block">
          <div className="vertical-line" />
          <p className="hero-description">
            It is a long established fact that a reader will be distracted.
          </p>
        </div>

        <button className="hero-button">Contact Us Now</button>
      </div>

      <div className="hero-image-wrapper">
        <img src={dnaStyle} alt="DNA style" className="dna-frame" />
        <img src={bannerImage} alt="Product" className="product-image" />
        <img src={ellipse} alt="bg" className="ellipse-image" />

      </div>

      <div className="slider-indicators">
        <span className="dot" />
        <span className="dot active" />
        <span className="dot" />
      </div>
    </section>
  );
};

export default Herosection;
