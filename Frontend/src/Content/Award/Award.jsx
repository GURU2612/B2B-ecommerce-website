import React from "react";
import { motion } from "framer-motion";
import "./Award.css";
import award1 from "../../assets/images/Awardimg1.png";
import award2 from "../../assets/images/Awardimg2.png";

const Award = () => {
    return (
        <div className="award-container">
            {/* Left Section */}
            <motion.div
                className="award-left-section"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: false }}
            >
                <motion.h2 className="achievements" whileInView={{ scale: 1, opacity: 1 }} initial={{ scale: 0.8, opacity: 0 }} transition={{ delay: 0.1 }}>
                    Achievements
                </motion.h2>
                <motion.h2 className="good-hands" whileInView={{ y: 0, opacity: 1 }} initial={{ y: 30, opacity: 0 }} transition={{ delay: 0.2 }}>
                    You’re in Good Hands
                </motion.h2>
                <motion.p
                    className="belief-text"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    We believe in bringing the most modern techniques and delivering extraordinary care to ailing population with the highest levels of ethics and standards. We are committed to continuing medical education, through our fellowship and DNB programs. <br /><br />
                    We organize at least one conference a month and support research foundation for continued advancement.
                </motion.p>
            </motion.div>

            {/* Right Section */}
            <motion.div
                className="award-right-section"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: false }}
            >
                <motion.h2
                    className="clinic-awards"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    Clinic Awards
                </motion.h2>

                <div className="awards-images">
                    {[award1, award2, award2, award1].map((img, index) => (
                        <motion.img
                            key={index}
                            src={img}
                            alt={`Award ${index + 1}`}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: 0.2 * index }}
                        />
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default Award;
