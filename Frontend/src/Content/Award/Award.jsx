import React from "react";
import "./Awardsection.css"; // Import the CSS file
import i3 from "../../assets/images/Awardimage.png";

const Awardsection = () => {
  return (
    <div className="Awardsection">
      <h2 className="about-us-heading">Enhancing Quality</h2>
      <h3 className="about-us-subheading">Of Life For a Better Tomorrow</h3>
      <img src={i3} alt="About Us" className="about-us-image" />
        {/* Rectangle Box */}
    </div>
  );
};

export default Awardsection;
