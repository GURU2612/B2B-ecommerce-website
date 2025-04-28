import React from "react";
import "./Valuesection.css";

const Valuesection = ({ heading, subheading, values }) => {
  return (
      <div className="outer-Valuesection-container">
        <h2>{heading}</h2>
        <h1>{subheading}</h1>

        <div className="values-box-container">
          {values.map((item, index) => (
              <div key={index} className="value-box-common">
                <div className="icon-circle">
                  <img src={item.icon} alt={item.altText} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
          ))}
        </div>
      </div>
  );
};

export default Valuesection;
