import React, { useState } from "react";
import "./Enhance.css";

// Import all images you want to use
import image1 from "../../assets/images/Enhancing Quality.png";
import image2 from "../../assets/images/Enhancing2.png";
import image3 from "../../assets/images/Enhancing3.png";


const infoList = [
  {
    title: "Responsibility",
    description:
        "We embrace innovation with sustainable, ethical, and socially conscious actions to enhance our connect with the valued stakeholders.",
    image: image1,
  },
  {
    title: "Careers",
    description:
        "We believe in nurturing talent, be a part of our team for a promising and progressive career.",
    image: image2,
  },
  {
    title: "Promise of Quality",
    description:
        "We are in relentless efforts to provide the unmatched , best quality medicines at the affordable price.",
    image: image3,
  },
  {
    title: "Life at Meghmani Lifesciences",
    description:
        "We are in relentless efforts to provide the unmatched , best quality medicines at the affordable price.",
    image: image1,
  },
];

const Enhance = () => {
  const [currentImage, setCurrentImage] = useState(image1);

  return (
      <div className="outer-enhance-container">
        <div className="enhance-left">
          <p className="enhancing-quality-text">Enhancing Quality</p>
          <p className="better-tomorrow-text">Of Life For a Better Tomorrow</p>
          <div className="enhance-image">
            <img src={currentImage} alt="Enhancing Quality of Life" />
          </div>
        </div>

        <div className="enhance-right">
          {infoList.map((item, index) => (
              <div
                  key={index}
                  className="enhance-block"
                  onMouseEnter={() => setCurrentImage(item.image)}
                  onMouseLeave={() => setCurrentImage(image1)} // Reset to default if needed
              >
                <div className="enhance-line"></div>
                <h3 className="enhance-heading">{item.title}</h3>
                <p className="enhance-paragraph">{item.description}</p>
              </div>
          ))}
        </div>
      </div>
  );
};

export default Enhance;
