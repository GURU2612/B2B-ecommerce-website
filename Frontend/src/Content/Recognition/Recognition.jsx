import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Recognition.css";
import Recognitionimg from "../../assets/images/Recognitionimg.png";
import Award1 from "../../assets/images/Awardimg1.png";
import Award2 from "../../assets/images/Awardimg2.png";

const Recognition = () => {
  const [selectedValue, setSelectedValue] = useState("default");

  const valueDescriptions = {
    default: "At Meghmani Lifesciences Ltd, we're more than just a leading name in healthcare. We're a collective of innovative minds committed to transforming the way health and well-being are perceived and managed. \n\nEvery day, we strive to live up to our promise - to empower everyone to live their healthiest life. This is who we are, this is what drives us - Meghmani Lifesciences Ltd, nurturing health and wellbeing.",
    ethics: "Ethics and Integrity form the cornerstone of everything we do at Meghmani Lifesciences. We believe in conducting business with the highest ethical standards, ensuring transparency in all our dealings, and maintaining integrity in every aspect of our operations. \n\nOur commitment to ethical practices extends beyond compliance with regulations to embody a culture where honesty, fairness, and respect guide our interactions with patients, healthcare providers, employees, and stakeholders.",
    quality: "Quality is not just a standard at Meghmani Lifesciences – it's our promise. We are dedicated to delivering products and services that meet or exceed the highest quality benchmarks. \n\nFrom research and development to manufacturing and distribution, our rigorous quality control processes ensure that every product that bears our name contributes positively to human health and wellbeing. We continuously strive for excellence, understanding that quality in healthcare directly impacts lives.",
    innovation: "Innovation drives our progress at Meghmani Lifesciences. We foster a culture that encourages creative thinking, exploration of new ideas, and embraces technological advancements. \n\nOur research teams are constantly working to develop breakthrough solutions that address unmet medical needs. By combining scientific expertise with forward-thinking approaches, we aim to pioneer advancements that improve treatment outcomes and enhance quality of life for patients worldwide.",
    consistency: "Consistency in delivering excellence defines our operational philosophy at Meghmani Lifesciences. We understand the importance of reliability in healthcare, where consistent quality and service can make a critical difference. \n\nWe maintain unwavering standards across all our processes, ensuring that our stakeholders can depend on us for the same high level of quality, service, and commitment at all times. This steadfast approach has earned us the trust of healthcare professionals and patients alike."
  };

  const handleValueClick = (value, e) => {
    e.preventDefault();
    setSelectedValue(value);
  };

  return (
      <div className="recognition-section">
        <motion.div
            className="text-content"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}

        >
          <motion.h2
              className="recognition-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}

          >
            Values
          </motion.h2>

          <motion.h2
              className="core-values-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}

          >
            Our Core Values
          </motion.h2>

          <div className="button-group">
            {["ethics", "quality", "innovation", "consistency"].map((val) => (
                <a
                    key={val}
                    href={`#${val}`}
                    className={`value-link ${selectedValue === val ? 'active' : ''}`}
                    onClick={(e) => handleValueClick(val, e)}
                >
                  {val.charAt(0).toUpperCase() + val.slice(1).replace("&", " & ")}
                </a>
            ))}
          </div>

          <motion.p
              className="meghmani-description-about"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}

          >
            {valueDescriptions[selectedValue].split('\n\n').map((paragraph, index) => (
                <React.Fragment key={index}>
                  {paragraph}
                  {index < valueDescriptions[selectedValue].split('\n\n').length - 1 && (
                      <>
                        <br /><br />
                      </>
                  )}
                </React.Fragment>
            ))}
          </motion.p>

          <motion.h3
              className="awards-heading-about"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}

          >
            Awards & Recognition
          </motion.h3>

          <div className="award-images">
            {[Award1, Award2].map((img, i) => (
                <motion.div
                    className="award-image-placeholder"
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 * i }}

                >
                  <img src={img} alt={`Award${i + 1}`} />
                </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
            className="image-container"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}

        >
          <img
              src={Recognitionimg}
              alt="Recognition"
              className="recognition-img"
              loading="lazy"
          />
        </motion.div>
      </div>
  );
};

export default Recognition;
