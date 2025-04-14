// import React from "react";
// import "./Award.css";

// const Award = () => {
//   return (
//     <div className="award-container">
//       <h2 className="achievements">Achievements</h2>
//       <h2 className="good-hands">You’re in Good Hands</h2>
//       <h2 className="clinic-awards">Clinic Awards</h2>
//       <p className="belief-text">
//         We believe in bringing the most modern techniques and delivering extraordinary care to ailing population with the highest levels of ethics and standards. We are committed to continuing medical education, through our fellowship and DNB programs. We organize at least one conference a month and support research foundation for continued advancement.
//       </p>
//       <div className="awardsimg1"></div>
//       <div className="awardsimg2"></div>

//     </div>
//   );
// };

// export default Award;


import React from "react";
import "./Award.css";

const Award = () => {
  return (
    <div className="award-container">
      {/* Left Section */}
      <div className="left-section">
        <h2 className="achievements">Achievements</h2>
        <h2 className="good-hands">You’re in Good Hands</h2>
        <p className="belief-text">
          We believe in bringing the most modern techniques and delivering extraordinary care to ailing population with the highest levels of ethics and standards. We are committed to continuing medical education, through our fellowship and DNB programs. <br>
          </br><br></br>We organize at least one conference a month and support research foundation for continued advancement.
        </p>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <h2 className="clinic-awards">Clinic Awards</h2>
        <div className="awards-images">
          <img src="/assets/award1.png" alt="Award 1" />
          <img src="/assets/award2.png" alt="Award 2" />
          <img src="/assets/award2.png" alt="Award 2" />
          <img src="/assets/award2.png" alt="Award 2" />

        </div>
      </div>
    </div>
  );
};

export default Award;
