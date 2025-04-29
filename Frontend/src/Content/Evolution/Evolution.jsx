import React from "react";
import { motion } from "framer-motion";
import "./Evolution.css";
import evolutionimage from "../../assets/images/evolution-image.png";

const Evolution = () => {
    return (
        <motion.section
            className="evolution-container"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}

        >
            <motion.div
                className="evolution-content"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}

            >
                <h2 className="evolution-subheading">Evolution</h2>
                <h2 className="evolution-heading">Our Professional Journey</h2>

                <motion.div
                    className="evolution-image"
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}

                >
                    <img src={evolutionimage} alt="Evolution Journey" />
                </motion.div>
            </motion.div>
        </motion.section>
    );
};

export default Evolution;
