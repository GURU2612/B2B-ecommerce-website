import React from "react";
import { motion } from "framer-motion";
import "./Valuesection.css";

const boxVariants = {
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

const Valuesection = ({ heading, subheading, values }) => {
    return (
        <div className="outer-Valuesection-container">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}

            >
                {heading}
            </motion.h2>

            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}

            >
                {subheading}
            </motion.h1>

            <div className="values-box-container">
                {values.map((item, index) => (
                    <motion.div
                        key={index}
                        className="value-box-common"
                        variants={boxVariants}
                        initial="hidden"
                        whileInView="visible"
                        custom={index}

                    >
                        <div className="icon-circle">
                            <img src={item.icon} alt={item.altText} />
                        </div>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Valuesection;
