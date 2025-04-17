import React from "react";
import "./Aboutussection.css";
import memberimage from "../../assets/images/memberimage.png";
import Navbar from "../Navbar/Navbar.jsx";
import Banner from "../../Content/AboutusBanner/Banner.jsx";
import Valuesection from "../../Content/ValueSection/Valuesection.jsx";
import Recognition from "../../Content/Recognition/Recognition.jsx";
import Management from "../../Content/Management/Management.jsx";
import Evolution from "../../Content/Evolution/Evolution.jsx";
import Blog from "../../Content/Blog/Blog.jsx";
const Aboutussection = () => {
  return (
    <>
    <Banner/>
    <div className="aboutus-container">
      {/* <Banner/> */}
      <div className="aboutus-content">
        <div className="aboutus-image-wrapper">
          <img src={memberimage} alt="Team Member" className="aboutus-image" />
        </div>

        <div className="aboutus-text-section">
          <h2 className="aboutus-heading">About Us</h2>
          <h3 className="aboutus-subheading">Dedicated to Your Wellbeing</h3>
          <p className="aboutus-description">
            At Meghmani Lifesciences Ltd, we're more than just a leading name in healthcare.
            We're a collective of innovative minds committed to transforming the way health and
            well-being are perceived and managed. <br /><br />
            Every day, we strive to live up to our promise - to empower everyone to live their
            healthiest life. This is who we are, this is what drives us - Meghmani Lifesciences
            Ltd, nurturing health and wellbeing.
          </p>
          <div className="life-at-meghmani">
            <div className="lottie-placeholder"></div>
            <span className="life-heading">Life at Meghmani Life Sciences LTD</span>
          </div>
        </div>
      </div> 
      </div>
    <Valuesection/>         
    <Recognition/>
    <Management/>
    <Evolution/>
    <Blog/>
    
    </>
  );
};

export default Aboutussection;
