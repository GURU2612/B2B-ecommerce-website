import React from "react";
import "./Areaoffocus.css";
import icon1 from "../../assets/images/respiratoryicon.png";
import icon2 from "../../assets/images/Neuropathyicon.png";
import icon3 from "../../assets/images/Anti inflammatoryicon.png";
import icon4 from "../../assets/images/Nutraceuticalsicon.png";

import SectionHeader from "./SectionHeader.jsx";
import FocusCard from "./FocusCard.jsx";

const cardData = [
  {
    icon: icon1,
    title: "Respiratory",
    description:
        "Providing innovative solutions to manage Allergic Rhinitis, Urticaria & Allergic Rhinitis.",
  },
  {
    icon: icon2,
    title: "Neuropathy",
    description:
        "Neuropathic Pain severely impacts the overall quality of life by hampering the daily activities",
  },
  {
    icon: icon3,
    title: "Anti inflammatory",
    description:
        "We are providing natural anti-inflammatory having safer and better profile over NSAIDs",
  },
  {
    icon: icon4,
    title: "Nutraceuticals",
    description:
        "Shift towards the consumption of more plant based proteins was associated with significant improvement in Type2 Diabetes",
  },
];

const AreaOfFocus = () => {
  return (
      <div className="area-of-focus">
        <SectionHeader />
        <div className="cards-container">
          {cardData.map((card, index) => (
              <FocusCard key={index} data={card} index={index} />
          ))}
        </div>
      </div>
  );
};

export default AreaOfFocus;