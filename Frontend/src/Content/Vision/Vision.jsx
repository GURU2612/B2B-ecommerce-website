import React from "react";
import "./Vision.css"; // Import the external CSS file

const Vision = () => {
  return (
    <div className="outer-vision-container">
      <h2 className="vision-heading">Vision</h2>
      <h3 className="passion-heading">Our Passion for Progress</h3>

      <div className="vision-card1">
      <h3 className="reshaping-heading">Reshaping Lives</h3>
      <h2 className="expanding-heading">Expanding Horizons</h2>
      <p className="vision-paragraph">
      Our purpose extends beyond mere words – it's deeply ingrained in our daily actions. We are on a mission to ensure good health for all newly diagnosed patients with innovative medicines, we are committed to redraw the healthcare landscape, delivering cutting-edge solutions that significantly uplift the quality of life.
        </p>
        <img src="" alt="Vision" className="vision-image" />
      </div>

      <div className="vision-card2">
      <img src="" alt="Vision" className="vision-card2-image" />
      <div className="vision-card2-subheading">Fostering Collaboration To</div>
      <div className="vision-card2-heading">Ignite Innovation</div>
      <div className="vision-card2-enrich">And Enrich Lives</div>
      <div className="vision-card2-paragraph">
      At Meghmani Lifesciences Ltd , we truly believe in collaborative efforts and fostering the unique ideas, we are constantly evolving through our spirit of cooperation that fuels innovation and nurture new talents. We evolve daily through our customer insights that pushes us to break our own records and setting new benchmark of quality. It's through this collective strength that we continually push the boundaries of what's possible in healthcare & customer management
        </div>
      </div>


    </div>
  );
};

export default Vision;
