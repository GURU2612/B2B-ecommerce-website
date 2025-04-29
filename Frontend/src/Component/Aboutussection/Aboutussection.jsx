import React from "react";
import { motion } from "framer-motion";
import "./Aboutussection.css";
import memberimage from "../../assets/images/memberimage.png";
import Banner from "../../Content/AboutusBanner/Banner.jsx";
import Valuesection from "../../Content/ValueSection/Valuesection.jsx";
import Recognition from "../../Content/Recognition/Recognition.jsx";
import Management from "../../Content/Management/Management.jsx";
import Evolution from "../../Content/Evolution/Evolution.jsx";
import Blog from "../../Content/Blog/Blog.jsx";

const Aboutussection = () => {
  return (
      <>
        <Banner
            title="About Us"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
            breadcrumb="Home > About Us"
        />

        <motion.div
            className="aboutus-container"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
          <div className="aboutus-content">
            <motion.div
                className="aboutus-image-wrapper"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
              <img src={memberimage} alt="Team Member" className="aboutus-image" />
            </motion.div>

            <motion.div
                className="aboutus-text-section"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
              <h2 className="aboutus-heading">About Us</h2>
              <h3 className="aboutus-subheading">Dedicated to Your Wellbeing</h3>
              <p className="aboutus-description">
                At Meghmani Lifesciences Ltd, we're more than just a leading name in healthcare.
                We're a collective of innovative minds committed to transforming the way health and
                well-being are perceived and managed. <br /><br />
                Every day, we strive to live up to our promise - to empower everyone to live their
                healthiest life. This is who we are, this is what drives us - Meghmani Lifesciences
                Ltd, nurturing health and wellbeing.
              </p>

              <motion.div
                  className="life-at-meghmani"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
              >
                <div className="lottie-placeholder"></div>
                <span className="life-heading">Life at Meghmani Life Sciences LTD</span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Animated child sections already support scroll-triggered animation */}
        <Valuesection />
        <Recognition />
        <Management />
        <Evolution />
        <Blog />
      </>
  );
};

export default Aboutussection;
