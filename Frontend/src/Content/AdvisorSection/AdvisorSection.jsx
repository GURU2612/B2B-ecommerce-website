import React from "react";
import "./AdvisorSection.css"
import drimg from "../../assets/images/doctor.png";
import advisorimg from "../../assets/images/advisorimage.png";
import extraadvisorimg from "../../assets/images/extraadvisor.png";






const AdvisorSection = () => {
    return (
      <div className="advisor-section">
        <h2 className="advisor-heading">Advisors</h2>
        <h1 className="team-heading">Team of Consultants</h1>
        <h3 className="dermatologist-heading">Dermatologist</h3>
          <p className="advisor-quote">
            Explain to you how all this mistaken idea of denouncing pleasure and praising pain was born, and I will give you a complete account of the system, and the master-builder of human happiness. Expound the actual teachings of the great explorer of the truth.
          </p>
         <div className="advisor-container">
           <img src={drimg} alt="dr Image"></img>
            <div className="advisor-gradient">
            <h2 className="advisor-name">Dr. Mitesh Shah</h2>
            <p className="advisor-title">Dermatologist</p>
            <p className="advisor-description">
            As a tertiary referral ICU to provide state-of-the-art care with the help of very good professionals and infrastructure.
            </p>
            </div>
         </div>
         <div className="advisor-image">
         <img src={advisorimg} alt="dr Image"></img>
         </div>

         {/* Additional Image */}
      <div className="advisor-extra-image1"><img src={extraadvisorimg} alt="Extra Image"></img>
      

      <div className="extra-image-background">
          <svg className="extra-image-svg" width="24" height="24">
            <rect width="24" height="24" fill="none" />
          </svg>
        </div>
        
      </div>
      <div className="advisor-extra-image2">
      <img src={extraadvisorimg} alt="Extra Image"></img>

      </div>
      <div className="advisor-extra-image3">
      <img src={extraadvisorimg} alt="Extra Image"></img>

      </div>
      <div className="advisor-extra-image4">
      <img src={extraadvisorimg} alt="Extra Image"></img>

      <div className="extra-image-background2">
          <svg className="extra-image-svg2" width="24" height="24">
            <rect width="24" height="24" fill="none" />
          </svg>
        </div>
      </div>


        {/* Cardiologist Section */}
        <h6 className="cardiologist-heading">Cardiologist</h6>
        <h6 class="ophthalmologist-heading">Ophthalmologist</h6>
        <h6 class="Gastrologist-heading">Gastrologist</h6>
        <h6 class="Hepatologist-heading">Hepatologist</h6>


         <button className="advisor-ReadMore-button">Read More</button>

      </div>
    );
  };
  
  export default AdvisorSection;
  