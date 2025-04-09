import React from "react";
import "./Aboutussection.css"; // Import the external CSS file
import memberimage from "../../assets/images/memberimage.png";


const Aboutussection = () => {
  return (
    <>
      <div className="outer-Aboutussection-container">

            <div className="about-image-container">
            <img src={memberimage} alt="Team Member" className="member-image" />
                
            </div>
            <div className="about-heading">About Us</div>
             {/* Dedicated to Your Wellbeing */}
      <div className="about-subheading">Dedicated to Your Wellbeing</div>

        {/* About Description */}
        <p className="about-description">
        At Meghmani Lifesciences Ltd, we're more than just a leading name in healthcare. We're a collective of innovative minds committed to transforming the way health and well-being are perceived and managed. <br></br><br></br>   
        Every day, we strive to live up to our promise - to empower everyone to live their healthiest life. This is who we are, this is what drives us - Meghmani Lifesciences Ltd, nurturing health and wellbeing.
        </p>

        {/* Life at Meghmani Life Sciences LTD */}
      <div className="life-heading">Life at Meghmani Life Sciences LTD</div>
    
      <div className="lottie-animation">
        
      </div>
      </div>
    </>
    );
};
export default Aboutussection;
