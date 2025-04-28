import React from "react";
import { motion } from "framer-motion";
import "./AdvisorSection.css";
import doctorImage from "../../assets/images/doctor.png";
import advisorImage from "../../assets/images/advisorimage.png";
import extraAdvisor from "../../assets/images/extraadvisor.png";

const AdvisorSection = () => {
  const specialties = [
    { name: "Cardiologist", img: extraAdvisor, arrow: true },
    { name: "Ophthalmologist", img: extraAdvisor },
    { name: "Gastrologist", img: extraAdvisor },
    { name: "Hepatologist", img: extraAdvisor, arrow: true },
  ];

  return (
      <div className="advisor-section-container">
        {/* Left Doctor Card */}
        <motion.div
            className="advisor-section-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false }}
        >
          <div className="advisor-section-card">
            <img
                src={doctorImage}
                alt="Doctor"
                className="advisor-section-doctor-img"
            />
            <div className="advisor-section-card-info">
              <h3>Dr. Mitesh Shah</h3>
              <p className="advisor-section-title">Dermatologist</p>
              <p className="advisor-section-desc">
                As a tertiary referral ICU to provide state of the art care with
                the help of very good professionals and infrastructure.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
            className="advisor-section-right"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false }}
        >
          <div className="advisor-section-top">
            <div className="advisor-section-info">
              <p className="advisor-section-label">Advisors</p>
              <h2 className="advisor-section-header">
                <span>Team of Consultants</span>
              </h2>
              <h3>Dermatologist</h3>
              <p className="advisor-section-text">
                Explain to you how all this mistaken idea of denouncing pleasure
                and praising pain was born and I will give you a complete account
                of the system, and the master-builder of human happiness. Expound
                the actual teachings of the great explorer of the truth.
              </p>
              <button className="advisor-section-read-more">Read More</button>
            </div>
            <div className="advisor-section-image-box">
              <img
                  src={advisorImage}
                  alt="Advisor"
                  className="advisor-section-side-img"
              />
            </div>
          </div>

          {/* Specialty Cards with animation */}
          <div className="advisor-section-specialties">
            {specialties.map((item, index) => (
                <motion.div
                    className="advisor-section-specialty-card"
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.2,
                      ease: "easeOut",
                    }}
                    viewport={{ once: false }}
                >
                  <img src={item.img} alt={item.name} />

                  <p>{item.name}</p>
                </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
  );
};

export default AdvisorSection;
