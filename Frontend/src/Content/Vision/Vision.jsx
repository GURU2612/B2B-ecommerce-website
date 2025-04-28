import React from "react";
import { motion } from "framer-motion";
import "./Vision.css";
import v1 from "../../assets/images/vision1.png";
import v2 from "../../assets/images/vision2.png";

const Vision = () => {
  return (
      <div className="outer-vision-container">
        {/* Header */}
        <motion.div
            className="vision-header"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
        >
          <motion.h2 className="vision-heading">Vision</motion.h2>
          <motion.h3 className="passion-heading">Our Passion for Progress</motion.h3>
        </motion.div>

        {/* Cards Container */}
        <div className="vision-cards-container">
          {/* Card 1 */}
          <motion.div
              className="vision-card vision-card1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
          >
            <motion.h3 className="reshaping-heading">Reshaping Lives</motion.h3>
            <motion.h2 className="expanding-heading">Expanding Horizons</motion.h2>
            <motion.p
                className="vision-paragraph"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
              Our purpose extends beyond mere words – it's deeply ingrained in our daily actions.
              We are on a mission to ensure good health for all newly diagnosed patients with innovative
              medicines. We are committed to redrawing the healthcare landscape, delivering cutting-edge
              solutions that significantly uplift the quality of life.
            </motion.p>
            <motion.img
                src={v1}
                alt="Vision"
                className="vision-image"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            />
          </motion.div>

          {/* Card 2 */}
          <motion.div
              className="vision-card vision-card2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
          >
            <motion.img
                src={v2}
                alt="Vision"
                className="vision-card2-image"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            />
            <div className="vision-card2-text">
              <motion.div
                  className="vision-card2-subheading"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
              >
                Fostering Collaboration To
              </motion.div>
              <motion.div
                  className="vision-card2-heading"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
              >
                Ignite Innovation
              </motion.div>
              <motion.div
                  className="vision-card2-enrich"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
              >
                And Enrich Lives
              </motion.div>
              <motion.p
                  className="vision-card2-paragraph"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
              >
                At Meghmani Lifesciences Ltd, we truly believe in collaborative efforts and fostering
                unique ideas. We are constantly evolving through our spirit of cooperation that fuels
                innovation and nurtures new talents. Customer insights push us to break records and set
                new benchmarks in healthcare and customer management.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
  );
};

export default Vision;
