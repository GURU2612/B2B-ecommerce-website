// import React from "react";
// import "./Enhance.css"; 



import React from "react";
import "./Enhance.css";
import enhanceimage from "../../assets/images/Enhancing Quality.png";

const infoList = [
  {
    title: "Responsibility",
    description:
      "This is a sample paragraph text that describes the section. This is a sample paragraph text that describes the section.",
  },
  {
    title: "Careers",
    description:
      "This is a sample paragraph text that describes the section. This is a sample paragraph text that describes the section.",
  },
  {
    title: "Promise of Quality",
    description:
      "This is a sample paragraph text that describes the section. This is a sample paragraph text that describes the section.",
  },
  {
    title: "Life at Meghmani Lifesciences",
    description:
      "This is a sample paragraph text that describes the section. This is a sample paragraph text that describes the section.",
  },
];

const Enhance = () => {
  return (
    <div className="outer-enhance-container">
      <div className="enhance-left">
        <p className="enhancing-quality-text">Enhancing Quality</p>
        <p className="better-tomorrow-text">Of Life For a Better Tomorrow</p>
        <div className="enhance-image">
          <img src={enhanceimage} alt="Enhancing Quality of Life" />
        </div>
      </div>

      <div className="enhance-right">
        {infoList.map((item, index) => (
          <div key={index} className="enhance-block">
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
