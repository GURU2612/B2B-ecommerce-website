import React from "react";
import "./Aboutussection.css";
import memberimage from "../../assets/images/memberimage.png";
import Navbar from "../Navbar/Navbar.jsx";
import Banner from "../../Content/AboutusBanner/Banner.jsx";
import Valuesection from "../../Content/ValueSection/Valuesection.jsx";
import Recognition from "../../Content/Recognition/Recognition.jsx";
import Management from "../../Content/Management/Management.jsx";
import Evolution from "../../Content/Evolution/Evolution.jsx";
import Blog from "../../Content/Blog/Blog.jsx";
import rocket from "@src/assets/images/rocketicon.png";
import value from "@src/assets/images/valueicon.png";
import eye from "@src/assets/images/eyeicon.png";
import { motion } from "framer-motion";

const fadeIn = {

    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: index * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),

};


const Aboutussection = () => {
  const valuesData = [
    {
      icon: rocket,
      title: "Mission",
      description: "To ensure good health for all newly diagnosed patients with innovative medicines.",
      altText: "Mission Icon",
    },
    {
      icon: eye,
      title: "Vision",
      description: "To be amongst Top 150 leading healthcare company by 2027 in Indian Pharmaceutical market.",
      altText: "Vision Icon",
    },
    {
      icon: value,
      title: "Value",
      description: "To be amongst Top 150 leading healthcare company by 2027 in Indian Pharmaceutical market.",
      altText: "Value Icon",
    },
  ];

  return (
      <>
        <Banner
            title="About Us"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
            breadcrumb="Home > About Us"
        />

        <div className="aboutus-container">
          <div className="aboutus-content">
            <motion.div
                className="aboutus-image-wrapper"
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}

            >
              <img src={memberimage} alt="Team Member" className="aboutus-image" />
            </motion.div>

            <motion.div
                className="aboutus-text-section"
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}

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
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeIn}
              >

              </motion.div>
            </motion.div>
          </div>
        </div>

        <Valuesection
            heading="Discover Our Values"
            subheading="Quality, Safety & Security"
            values={valuesData}
        />
        <Recognition />
        <Management />
        <Evolution />
        <Blog />
      </>
  );
};

export default Aboutussection;
