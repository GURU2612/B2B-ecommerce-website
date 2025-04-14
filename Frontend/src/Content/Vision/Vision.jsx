// import React from "react";
// import "./Vision.css";

// const Vision = () => {
//   return (
//     <div className="outer-vision-container">
//       <h2 className="vision-heading">Vision</h2>
//       <h3 className="passion-heading">Our Passion for Progress</h3>

//       <div className="vision-card1">
//       <h3 className="reshaping-heading">Reshaping Lives</h3>
//       <h2 className="expanding-heading">Expanding Horizons</h2>
//       <p className="vision-paragraph">
//       Our purpose extends beyond mere words – it's deeply ingrained in our daily actions. We are on a mission to ensure good health for all newly diagnosed patients with innovative medicines, we are committed to redraw the healthcare landscape, delivering cutting-edge solutions that significantly uplift the quality of life.
//         </p>
//         <img src="" alt="Vision" className="vision-image" />
//       </div>

//       <div className="vision-card2">
//       <img src="" alt="Vision" className="vision-card2-image" />
//       <div className="vision-card2-subheading">Fostering Collaboration To</div>
//       <div className="vision-card2-heading">Ignite Innovation</div>
//       <div className="vision-card2-enrich">And Enrich Lives</div>
//       <div className="vision-card2-paragraph">
//       At Meghmani Lifesciences Ltd , we truly believe in collaborative efforts and fostering the unique ideas, we are constantly evolving through our spirit of cooperation that fuels innovation and nurture new talents. We evolve daily through our customer insights that pushes us to break our own records and setting new benchmark of quality. It's through this collective strength that we continually push the boundaries of what's possible in healthcare & customer management
//         </div>
//       </div>


//     </div>
//   );
// };

// export default Vision;


import React from "react";
import "./Vision.css";
import v1 from "../../assets/images/vision1.png";
import v2 from "../../assets/images/vision2.png";



const Vision = () => {
  return (
    <div className="outer-vision-container">
      <div className="vision-header">
        <h2 className="vision-heading">Vision</h2>
        <h3 className="passion-heading">Our Passion for Progress</h3>
      </div>

      <div className="vision-cards-container">
        {/* Card 1 */}
        <div className="vision-card vision-card1">
          <h3 className="reshaping-heading">Reshaping Lives</h3>
          <h2 className="expanding-heading">Expanding Horizons</h2>
          <p className="vision-paragraph">
            Our purpose extends beyond mere words – it's deeply ingrained in our daily actions. 
            We are on a mission to ensure good health for all newly diagnosed patients with innovative 
            medicines. We are committed to redrawing the healthcare landscape, delivering cutting-edge 
            solutions that significantly uplift the quality of life.
          </p>
          <img src={v1} alt="Vision" className="vision-image" />
        </div>

        {/* Card 2 */}
        <div className="vision-card vision-card2">
          <img src={v2} alt="Vision" className="vision-card2-image" />
          <div className="vision-card2-text">
            <div className="vision-card2-subheading">Fostering Collaboration To</div>
            <div className="vision-card2-heading">Ignite Innovation</div>
            <div className="vision-card2-enrich">And Enrich Lives</div>
            <p className="vision-card2-paragraph">
              At Meghmani Lifesciences Ltd, we truly believe in collaborative efforts and fostering 
              unique ideas. We are constantly evolving through our spirit of cooperation that fuels 
              innovation and nurtures new talents. Customer insights push us to break records and set 
              new benchmarks in healthcare and customer management.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
