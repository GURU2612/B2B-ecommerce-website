import React from "react";
import "./Welcomesection.css";
import i3 from "../../assets/images/aboutusimage.png";
import { motion } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const boxVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const textVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.5 },
  }),
};

const Welcomesection = () => {
  return (
      <motion.div
          className="welcomesection"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={containerVariants}
      >
        {/* Left Section */}
        <div className="welcome-left-section">
          <motion.img
              src={i3}
              alt="About Us"
              className="about-us-image"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
          />

          {/* Stat Box 1 */}
          <motion.div className="rectangle-box box1" variants={boxVariant}>
            <motion.p
                className="rectangle-text"
                custom={0.2}
                variants={textVariant}
            >
              100000+
            </motion.p>
            <motion.p
                className="rectangle-subtext"
                custom={0.4}
                variants={textVariant}
            >
              HCPc Connected
            </motion.p>
          </motion.div>

          {/* Stat Box 2 */}
          <motion.div className="rectangle-box box2" variants={boxVariant}>
            <motion.p
                className="rectangle-text"
                custom={0.2}
                variants={textVariant}
            >
              1000+
            </motion.p>
            <motion.p
                className="rectangle-subtext"
                custom={0.4}
                variants={textVariant}
            >
              Distributors
            </motion.p>
          </motion.div>

          {/* Stat Box 3 */}
          <motion.div className="rectangle-box box3" variants={boxVariant}>
            <motion.p
                className="rectangle-text"
                custom={0.2}
                variants={textVariant}
            >
              500+
            </motion.p>
            <motion.p
                className="rectangle-subtext"
                custom={0.4}
                variants={textVariant}
            >
              Employees
            </motion.p>
          </motion.div>

          {/* Stat Box 4 */}
          <motion.div className="rectangle-box box4" variants={boxVariant}>
            <motion.p
                className="rectangle-text"
                custom={0.2}
                variants={textVariant}
            >
              50000+
            </motion.p>
            <motion.p
                className="rectangle-subtext"
                custom={0.4}
                variants={textVariant}
            >
              Retail Counters
            </motion.p>
          </motion.div>
        </div>

        {/* Right Section */}
        <motion.div
            className="welcome-right-section"
            variants={containerVariants}
        >
          <p className="welcome-text">Welcome to</p>
          <h2 className="company-name">Meghmani Lifescience LTD</h2>
          <p className="welcome-description">
            Meghmani Lifesciences Ltd is a subsidiary of Meghmani Group, India’s one of the largest Paracetamol manufacturers with turnover of more than US$ 1 Billion. Meghmani group has global footprints in 75+ countries having dedicated workforce of more than 6000 employees.
            <br /><br />
            As innovators in healthcare, our primary commitment lies in enhancing the well-being of individuals, families, and communities alike. Propelled by our expertise in Lifesciences, we are constantly at the forefront of creating transformative healthcare solutions.
          </p>
          <button className="welcome-button">Read More</button>
        </motion.div>
      </motion.div>
  );
};

export default Welcomesection;
