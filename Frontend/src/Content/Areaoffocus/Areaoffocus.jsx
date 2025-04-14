// import React from "react";
// import "./Areaoffocus.css"; 
// import icon1 from "../../assets/images/respiratoryicon.png";
// import icon4 from "../../assets/images/Nutraceuticalsicon.png";
// import icon2 from "../../assets/images/Neuropathyicon.png";
// import icon3 from "../../assets/images/Anti inflammatoryicon.png";



// const Areaoffocus = () => {
//   return (
//     <div className="area-of-focus">
//       <div className="therapy">Therapy</div>
//       <div className="areas-of-focus">Areas of Focus</div>
//       <div className="description">
//         Our pursuit of excellence enables us to offer advanced solutions tailored to each therapy & focused specialty.
//       </div>
//       <div className="card-1">
//         <div className="icon">
//             <img src={icon1} alt="Respiratory icon" />
//         </div>
//         <div className="card-title1">Respiratory</div>
//         <p className="card-description">
//           Providing innovative solutions to manage Allergic Rhinitis, Urticaria & Allergic Rhinitis 
//           Co-morbid with Asthma effectively, helping patients for uninterrupted breathing.
//         </p>
//         <div className="view-more">View More</div>

//       </div>
//       <div className="card-2">
//         <div className="icon">
//             <img src={icon2} alt="Neuropathy icon" />
//         </div>
//         <div className="card-title2">Neuropathy</div>
//         <p className="card-description">
//         Neuropathic Pain severely impacts the overall quality of life by hampering the daily activities
//         </p>
//         <div className="view-more">View More</div>
//       </div>
//       <div className="card-3">
//         <div className="icon">
//             <img src={icon3} alt="Anti inflammatory icon" />
//         </div>
//         <div className="card-title3">Anti inflammatory</div>
//         <p className="card-description">
//         We are providing natural anti-inflammatory having safer and better profile over NSAIDs
//         </p>
//         <div className="view-more">View More</div>
//       </div>
//       <div className="card-4">
//         <div className="icon">
//             <img src={icon4} alt="Nutraceuticals icon" />
//         </div>
//         <div className="card-title4">Nutraceuticals</div>
//         <p className="card-description">
//         Shift towards the consumption of more plant based proteins was associated with significant improvement in Type2 Diabetes
//         </p>
//         <div className="view-more">View More</div>
//       </div>
//       {/* Slider Indicator */}
//       <div className="slider-indicator1">
//         <div className="slider-dot1"></div>
//         <div className="slider-dot1 active"></div>
//         <div className="slider-dot1"></div>
//         </div>
//     </div>
//   );
// };

// export default Areaoffocus;



import React from "react";
import "./AreaOfFocus.css";
import icon1 from "../../assets/images/respiratoryicon.png";
import icon2 from "../../assets/images/Neuropathyicon.png";
import icon3 from "../../assets/images/Anti inflammatoryicon.png";
import icon4 from "../../assets/images/Nutraceuticalsicon.png";

// import SectionHeader from "./SectionHeader";
import FocusCard from "./FocusCard";


const cardData = [
  {
    icon: icon1,
    title: "Respiratory",
    description: "Providing innovative solutions to manage Allergic Rhinitis, Urticaria & Allergic Rhinitis Co-morbid with Asthma effectively, helping patients for uninterrupted breathing."
  },
  {
    icon: icon2,
    title: "Neuropathy",
    description: "Neuropathic Pain severely impacts the overall quality of life by hampering the daily activities"
  },
  {
    icon: icon3,
    title: "Anti inflammatory",
    description: "We are providing natural anti-inflammatory having safer and better profile over NSAIDs"
  },
  {
    icon: icon4,
    title: "Nutraceuticals",
    description: "Shift towards the consumption of more plant based proteins was associated with significant improvement in Type2 Diabetes"
  }
];

const AreaOfFocus = () => {
  return (
    <>
    <div className="area-of-focus">
      {/* <SectionHeader /> */}
      {cardData.map((card, index) => (
        <FocusCard key={index} data={card} index={index} />
      ))}
    
    </div>
    </>
  );
};

export default AreaOfFocus;
