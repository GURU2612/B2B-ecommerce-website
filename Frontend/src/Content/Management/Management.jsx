import React, { useState } from "react";
import "./Management.css";
import { FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa";
import Chairmain from "../../assets/images/chairmainimg.png";
import Teammember1 from "../../assets/images/teammember1.png";
import Teammember2 from "../../assets/images/teammember2.png";
import Teammember3 from "../../assets/images/teammember3.png";
import Teammember4 from "../../assets/images/teammember4.png";

const initialChairman = {
  name: "Natu M Patel",
  title: "Chairman",
  description:
      "At Meghmani Lifesciences Ltd, we're more than just a leading name in healthcare. We're a collective of innovative minds committed to transforming the way health and well-being are perceived and managed.\n\nEvery day, we strive to live up to our promise - to empower everyone to live their healthiest life. This is who we are, this is what drives us - Meghmani Lifesciences Ltd, nurturing health and wellbeing.",
  img: Chairmain,
};

const initialTeam = [
  {
    name: "Member 1",
    title: "Director",
    description: "Bio for Team Member 1",
    img: Teammember1,
  },
  {
    name: "Member 2",
    title: "Co-Founder",
    description: "Bio for Team Member 2",
    img: Teammember2,
  },
  {
    name: "Member 3",
    title: "HR Head",
    description: "Bio for Team Member 3",
    img: Teammember3,
  },
  {
    name: "Member 4",
    title: "Finance Lead",
    description: "Bio for Team Member 4",
    img: Teammember4,
  },
];

const Management = () => {
  const [chairman, setChairman] = useState(initialChairman);
  const [teamMembers, setTeamMembers] = useState(initialTeam);

  const handleSwap = (index) => {
    const selected = teamMembers[index];
    const updatedTeam = [...teamMembers];
    updatedTeam[index] = chairman;
    setTeamMembers(updatedTeam);
    setChairman(selected);
  };

  return (
      <div className="management-wrapper">
        <div className="management-header">
          <h2 className="leadership-heading">Leadership Team</h2>
          <h2 className="direction-heading">Direction & Management</h2>
        </div>

        <div className="chairman-section">
          <div className="chairman-card swap-anim">
            <img className="chairman-img" src={chairman.img} alt="Chairman" />
          </div>
          <div className="chairman-info">
            <h4 className="natu-name">{chairman.name}</h4>
            <h6 className="chairman-title">{chairman.title}</h6>
            <p className="chairman-description">{chairman.description}</p>
            <div className="social-links-management">
              <a href="#" className="icon-wrapper"><FaLinkedinIn className="top-icon" /></a>
              <a href="#" className="icon-wrapper"><FaFacebookF className="top-icon" /></a>
              <a href="#" className="icon-wrapper"><FaTwitter className="top-icon" /></a>
            </div>
          </div>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
              <div
                  key={index}
                  className="teammember-card clickable swap-anim"
                  onClick={() => handleSwap(index)}
              >
                <img src={member.img} alt={`Teammember ${index + 1}`} />
              </div>
          ))}
        </div>
      </div>
  );
};

export default Management;
