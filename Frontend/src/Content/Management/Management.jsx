// import React from "react";
// import "./Management.css";
// import { FaLinkedinIn,  FaFacebookF, FaTwitter } from "react-icons/fa";




// const Management = () => {
//   return (
//     <>
//       <div className="outer-Management-container">
//       <div className="social-links-management">
            
//             <a href="#" className="icon-wrapper"><FaLinkedinIn className="top-icon" /></a>
//             <a href="#" className="icon-wrapper">< FaFacebookF className="top-icon" /></a>
//             <a href="#" className="icon-wrapper"><FaTwitter className="top-icon" /></a>
//         </div>
//       <h2 className="leadership-heading">Leadership Team</h2>
//       <h2 className="direction-heading">Direction & Management</h2>
//       <h4 className="natu-name">Natu M Patel</h4>
//       <h6 className="chairman-title">Chairman</h6>
//       <p className="chairmain-description">
//         At Meghmani Lifesciences Ltd, we're more than just a leading name in healthcare. 
//         We're a collective of innovative minds committed to transforming the way health 
//         and well-being are perceived and managed. <br></br><br></br>Every day, we strive to live up to our promise - 
//         to empower everyone to live their healthiest life. This is who we are, this is what drives us - 
//         Meghmani Lifesciences Ltd, nurturing health and wellbeing.
//       </p>
//       <div className="chairmain-container"></div>
//       <div className="teammember-container1 "></div>
//       <div className="teammember-container2 "></div>
//       <div className="teammember-container3 "></div>
//       <div className="teammember-container4 "></div>

        

//       </div>
      
//     </>
//   );
// };

// export default Management;


import React from "react";
import "./Management.css";
import { FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa";

const Management = () => {
  return (
    <div className="management-wrapper">
      <div className="management-header">
        <h2 className="leadership-heading">Leadership Team</h2>
        <h2 className="direction-heading">Direction & Management</h2>
      </div>

      <div className="chairman-section">
        <div className="chairman-card"></div>
        <div className="chairman-info">
          <h4 className="natu-name">Natu M Patel</h4>
          <h6 className="chairman-title">Chairman</h6>
          <p className="chairman-description">
            At Meghmani Lifesciences Ltd, we're more than just a leading name in healthcare.
            We're a collective of innovative minds committed to transforming the way health
            and well-being are perceived and managed. <br /><br />
            Every day, we strive to live up to our promise - to empower everyone to live their healthiest life.
            This is who we are, this is what drives us - Meghmani Lifesciences Ltd, nurturing health and wellbeing.
          </p>
          <div className="social-links-management">
            <a href="#" className="icon-wrapper"><FaLinkedinIn className="top-icon" /></a>
            <a href="#" className="icon-wrapper"><FaFacebookF className="top-icon" /></a>
            <a href="#" className="icon-wrapper"><FaTwitter className="top-icon" /></a>
          </div>
        </div>
      </div>

      <div className="team-grid">
        <div className="teammember-card"></div>
        <div className="teammember-card"></div>
        <div className="teammember-card"></div>
        <div className="teammember-card"></div>
      </div>
    </div>
  );
};

export default Management;
