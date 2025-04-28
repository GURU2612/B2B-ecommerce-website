import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
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
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    threshold: 0.3,
    triggerOnce: false, // this makes sure animation triggers every time it comes into view
  });

  return (
      <div ref={sectionRef} className="area-of-focus">
        <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <SectionHeader />
        </motion.div>

        <div className="cards-container">
          {cardData.map((card, index) => (
              <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: 0.2 * index,
                  }}
              >
                <FocusCard data={card} index={index} />
              </motion.div>
          ))}
        </div>
      </div>
  );
};

export default AreaOfFocus;
