import React, { useState } from "react";
import { motion } from "framer-motion";
import "./AdvisorSection.css";
import doctorImage from "../../assets/images/doctor.png";
import advisorImage from "../../assets/images/advisorimage.png";
import extraAdvisor from "../../assets/images/extraadvisor.png";
import { useNavigate } from 'react-router-dom';

const AdvisorSection = () => {
  const navigate = useNavigate();
  // Data for each specialty and corresponding doctor
  const specialties = [
    {
      name: "Respiratory",
      img: extraAdvisor,
      arrow: true,
      doctor: {
        name: "Dr. Mehul Patel",
        title: "Pulmonologist",
        description:
            "Expert in respiratory disorders, treating asthma, bronchitis, and other lung conditions.",
        photo: doctorImage,
      },
    },
    {
      name: "Anti inflammatory",
      img: extraAdvisor,
      doctor: {
        name: "Dr. Rina Desai",
        title: "Rheumatologist",
        description:
            "Specialist in inflammation-related conditions like arthritis and joint pain.",
        photo: doctorImage,
      },
    },
    {
      name: "Neuropathy",
      img: extraAdvisor,
      doctor: {
        name: "Dr. Rajiv Mehta",
        title: "Neurologist",
        description:
            "Focused on nerve damage and neurological treatments for chronic pain and neuropathy.",
        photo: doctorImage,
      },
    },
    {
      name: "Nutraceuticals",
      img: extraAdvisor,
      arrow: true,
      doctor: {
        name: "Dr. Ketki Shah",
        title: "Nutritionist",
        description:
            "Specialist in dietary supplements and therapeutic nutrition for improved health.",
        photo: doctorImage,
      },
    },
  ];

  // State to hold selected doctor info (default: first specialty)
  const [selectedDoctor, setSelectedDoctor] = useState(specialties[0].doctor);

  const handleSpecialtyClick = (doctor) => {
    setSelectedDoctor(doctor);
  };

  return (
      <div className="advisor-section-container">
        {/* Left Doctor Card */}
        <motion.div
            className="advisor-section-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="advisor-section-card">
            <img
                src={selectedDoctor.photo}
                alt={selectedDoctor.name}
                className="advisor-section-doctor-img"
            />
            <div className="advisor-section-card-info">
              <h3>{selectedDoctor.name}</h3>
              <p className="advisor-section-title">{selectedDoctor.title}</p>
              <p className="advisor-section-desc">{selectedDoctor.description}</p>
            </div>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
            className="advisor-section-right"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="advisor-section-top">
            <div className="advisor-section-info">
              <p className="advisor-section-label">Advisors</p>
              <h2 className="advisor-section-header">
                <span>Team of Consultants</span>
              </h2>
              <h3>{selectedDoctor.title}</h3>
              <p className="advisor-section-text">{selectedDoctor.description}</p>
              <button className="advisor-section-read-more" onClick={()=>{navigate('/Doctors')}}>Read More</button>
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
                  <div
                      className="advisor-specialty-clickable"
                      onClick={() => handleSpecialtyClick(item.doctor)}
                      style={{ cursor: "pointer" }}
                  >
                    <img src={item.img} alt={item.name} />
                    <p>{item.name}</p>
                  </div>
                </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
  );
};

export default AdvisorSection;
