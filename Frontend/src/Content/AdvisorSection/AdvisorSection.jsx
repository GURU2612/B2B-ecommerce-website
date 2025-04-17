import React from "react";
import "./AdvisorSection.css";
import doctorImage from "../../assets/images/doctor.png";
import advisorImage from "../../assets/images/advisorimage.png";
import extraAdvisor from "../../assets/images/extraadvisor.png";

const AdvisorSection = () => {
  return (
      <div className="advisor-section-container">
        {/* Left Doctor Card */}
        <div className="advisor-section-left">
          <div className="advisor-section-card">
            <img src={doctorImage} alt="Doctor" className="advisor-section-doctor-img" />
            <div className="advisor-section-card-info">
              <h3>Dr. Mitesh Shah</h3>
              <p className="advisor-section-title">Dermatologist</p>
              <p className="advisor-section-desc">
                As a tertiary referral ICU to provide state of the art care with the help of very good professionals and infrastructure.
              </p>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="advisor-section-right">
          <div className="advisor-section-top">
            <div className="advisor-section-info">
              <p className="advisor-section-label">Advisors</p>
              <h2 className="advisor-section-header">
                <span>Team of Consultants</span>
              </h2>
              <h3>Dermatologist</h3>
              <p className="advisor-section-text">
                Explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and the master-builder of human happiness. Expound the actual teachings of the great explorer of the truth.
              </p>
              <button className="advisor-section-read-more">Read More</button>
            </div>
            <div className="advisor-section-image-box">
              <img src={advisorImage} alt="Advisor" className="advisor-section-side-img" />
            </div>
          </div>
          <div className="advisor-section-specialties">
            {[
              { name: "Cardiologist", img: extraAdvisor, arrow: true },
              { name: "Ophthalmologist", img: extraAdvisor },
              { name: "Gastroologist", img: extraAdvisor },
              { name: "Hepatologist", img: extraAdvisor, arrow: true },
            ].map((item, index) => (
                <div className="advisor-section-specialty-card" key={index}>
                  <img src={item.img} alt={item.name} />
                  {item.arrow && <button className="advisor-section-arrow">&gt;</button>}
                  <p>{item.name}</p>
                </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default AdvisorSection;