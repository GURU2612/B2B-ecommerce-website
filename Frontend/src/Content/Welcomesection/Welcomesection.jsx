// import React from "react";
// import "./Welcomesection.css"; 
// import i3 from "../../assets/images/aboutusimage.png";

// const Welcomesection = () => {
//   return (
//     <div className="welcomesection">
//       <img src={i3} alt="About Us" className="about-us-image" />
        
//         <div className="rectangle-box1">
//         <p className="rectangle-text">500+</p>
//         <p className="rectangle-subtext">Employees</p>
//         </div>
//         <div className="rectangle-box2"><p className="rectangle-text">100000+</p>
//         <p className="rectangle-subtext">HCPc Connected</p></div>
//         <div className="rectangle-box3"><p className="rectangle-text">50000+</p>
//         <p className="rectangle-subtext">Retail Counters</p></div>
//         <div className="rectangle-box4"><p className="rectangle-text">1000+</p>
//         <p className="rectangle-subtext">Distributors</p></div>

//         <div className="about-content">
//         <p className="welcome-text">Welcome to</p>
//         <h2 className="company-name">Meghmani Lifescience LTD</h2>
//         <p className="welcome-description">
//           Meghmani Lifesciences Ltd is a subsidiary of Meghmani Group, one of
//           India’s largest Paracetamol manufacturers with a turnover of more than
//           US$ 1 Billion. Meghmani Group has global footprints in 75+ countries
//           with a dedicated workforce of more than 6000 employees. <br />
//           <br />
//           As innovators in healthcare, our primary commitment lies in enhancing
//           the well-being of individuals, families, and communities alike.
//           Propelled by our expertise in Lifesciences, we are constantly at the
//           forefront of creating transformative healthcare solutions.
//         </p>
         
//          <button className="welcome-button">About Us</button>
//         </div>
//     </div>
//   );
// };

// export default Welcomesection;



import React from "react";
import "./Welcomesection.css";
import i3 from "../../assets/images/aboutusimage.png";

const Welcomesection = () => {
  return (
    <div className="welcomesection">
      <div className="left-section">
        <img src={i3} alt="About Us" className="about-us-image" />
        <div className="rectangle-box box1">
          <p className="rectangle-text">100000+</p>
          <p className="rectangle-subtext">HCPc Connected</p>
        </div>
        <div className="rectangle-box box2">
          <p className="rectangle-text">1000+</p>
          <p className="rectangle-subtext">Distributors</p>
        </div>
        <div className="rectangle-box box3">
          <p className="rectangle-text">500+</p>
          <p className="rectangle-subtext">Employees</p>
        </div>
        <div className="rectangle-box box4">
          <p className="rectangle-text">50000+</p>
          <p className="rectangle-subtext">Retail Counters</p>
        </div>
      </div>

      <div className="right-section">
        <p className="welcome-text">Welcome to</p>
        <h2 className="company-name">Meghmani Lifescience LTD</h2>
        <p className="welcome-description">
          Meghmani Lifesciences Ltd is a subsidiary of Meghmani Group, India’s one of the largest Paracetamol manufacturers with turnover of more than US$ 1 Billion. Meghmani group has global footprints in 75+ countries having dedicated workforce of more than 6000 employees.
          <br /><br />
          As innovators in healthcare, our primary commitment lies in enhancing the well-being of individuals, families, and communities alike. Propelled by our expertise in Lifesciences, we are constantly at the forefront of creating transformative healthcare solutions.
        </p>
        <button className="welcome-button">Read More</button>
      </div>
    </div>
  );
};

export default Welcomesection;
