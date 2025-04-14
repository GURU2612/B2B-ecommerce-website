// import React from "react";
// import "./Enhance.css"; 

// const Enhance = () => {
//   return (
//     <>
//       <div className="outer-enhance-container">
//         <p className="outer-enhance-heading1">Responsibility</p>
//         <p className="outer-enhance-paragraph1">
//           This is a sample paragraph text that describes the section.This is a sample paragraph text that describes the section.This is a sample paragraph text that describes the section.
//         </p>
//         <p className="outer-enhance-heading2">Careers</p>
//         <p className="outer-enhance-paragraph2">
//           This is a sample paragraph text that describes the section.This is a sample paragraph text that describes the section.This is a sample paragraph text that describes the section.
//         </p>
//         <p className="outer-enhance-heading3">Promise of Quality</p>
//         <p className="outer-enhance-paragraph3">
//           This is a sample paragraph text that describes the section.This is a sample paragraph text that describes the section.This is a sample paragraph text that describes the section.
//         </p>
//         <p className="outer-enhance-heading4">Life at Meghmani Lifesciences</p>
//         <p className="outer-enhance-paragraph4">
//           This is a sample paragraph text that describes the section.This is a sample paragraph text that describes the section.This is a sample paragraph text that describes the section.
//         </p>
//         <div className="outer-enhance-line1"></div>
//         <div className="outer-enhance-line2"></div>
//         <div className="outer-enhance-line3"></div>
//         <div className="outer-enhance-line4"></div>

//         <p className="enhancing-quality-text">Enhancing Quality</p>
//         <p className="better-tomorrow-text">Of Life For a Better Tomorrow</p>
//         <div className="enhance-image"></div>
//       </div>
//     </>
//   );
// };

// export default Enhance;



import React from "react";
import "./Enhance.css";

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
        <div className="enhance-image"></div>
      </div>

      <div className="enhance-right">
        {infoList.map((item, index) => (
          <div key={index} className="enhance-block">
            <div className="enhance-line"></div>
            <p className="enhance-heading">{item.title}</p>
            <p className="enhance-paragraph">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Enhance;
