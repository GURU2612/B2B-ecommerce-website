
import React from 'react';
import { useLocation } from 'react-router-dom';
import Banner from "../../Content/AboutusBanner/Banner.jsx";
import im2 from "../../assets/images/bannerimage.png";
import './DrDetails.css';

function DrDetails() {
    const location = useLocation();
    const { name, title, image, description } = location.state || {};

    return (
        <div className="dr-details-container">
            <Banner
                title={name}
                description={title}
                breadcrumb={`Home > ${name}`}
            />

            <div className="doctor-header">
                <img src={image} alt="Doctor" className='doctor-image' />
                <div className="doctor-info">
                    <h2>{name}</h2>
                    <h4>{title}</h4>
                    <p className='doctor-details'>{description}</p>
                    <div className="social-icons">
                        <i className="fab fa-linkedin-in"></i>
                        <i className="fab fa-facebook-f"></i>
                    </div>
                </div>
            </div>

            <div className="skills-section">
                <div className="skills-text">
                    <h3>Skills</h3>
                    <h2>My Skills</h2>
                    <div className="skill">
                        <h5 className="skill-bar-text">Clinical Diagnosis</h5>
                        <div className="skill-bar">
                            <div className="skill-fill" style={{ width: "90%" }} />
                        </div>
                    </div>
                    <div className="skill">
                        <h5 className="skill-bar-text">Surgical Expertise</h5>
                        <div className="skill-bar">
                            <div className="skill-fill" style={{ width: "80%" }} />
                        </div>
                    </div>
                    <div className="skill">
                        <h5 className="skill-bar-text">Public Health Knowledge</h5>
                        <div className="skill-bar">
                            <div className="skill-fill" style={{ width: "75%" }} />
                        </div>
                    </div>
                </div>
                <div className="skills-image">
                    <img src={im2} alt="Medical"  className="skills-image"/>
                </div>
            </div>
        </div>
    );
}

export default DrDetails;

