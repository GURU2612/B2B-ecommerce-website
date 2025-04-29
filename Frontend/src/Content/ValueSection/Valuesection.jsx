import React from "react";
import { motion } from "framer-motion";
import "./Valuesection.css";
import rocket from "../../assets/images/rocketicon.png";
import value from "../../assets/images/valueicon.png";
import eye from "../../assets/images/eyeicon.png";

const Valuesection = () => {
  return (
      <motion.div
          className="outer-Valuesection-container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
      >
        <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
          Discover Our Values
        </motion.h2>

        <motion.h1
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
        >
          Quality, Safety & Security
        </motion.h1>

        <div className="values-box-container">
          {[{
            icon: rocket,
            title: "Mission",
            desc: "To ensure good health for all newly diagnosed patients with innovative medicines."
          }, {
            icon: eye,
            title: "Vision",
            desc: "To be amongst Top 150 leading healthcare company by 2027 in Indian Pharmaceutical market."
          }, {
            icon: value,
            title: "Value",
            desc: "To be amongst Top 150 leading healthcare company by 2027 in Indian Pharmaceutical market."
          }].map((item, index) => (
              <motion.div
                  key={index}
                  className="value-box-common"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="icon-circle">
                  <img src={item.icon} alt={`${item.title} Icon`} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
          ))}
        </div>
      </motion.div>
  );
};

export default Valuesection;
