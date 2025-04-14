// import React from "react";
// import "./Evolution.css"; 


// import evolutionimage from "../../assets/images/evolution-image.png";


// const Evolution = () => {
//   return (
//     <>
//       <div className="outer-Evolution-container">
//       <h2 className="evolution-heading">Evolution</h2>
//       <h2 className="professional-journey-heading">Our Professional Journey</h2>
//       <div className="evolution-image">
//         <img src={evolutionimage} alt="evolution-image" />
//       </div>
//       </div>
//     </>
//   );
// };
// export default Evolution;


import React from "react";
import "./Evolution.css"; 
import evolutionimage from "../../assets/images/evolution-image.png";

const Evolution = () => {
  return (
    <section className="evolution-container">
      <div className="evolution-content">
        <h2 className="evolution-subheading">Evolution</h2>
        <h2 className="evolution-heading">Our Professional Journey</h2>
        <div className="evolution-image">
          <img src={evolutionimage} alt="Evolution Journey" />
        </div>
      </div>
    </section>
  );
};

export default Evolution;
