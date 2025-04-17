import React from "react";
import CareerCard from "./CareerCard";
import { FaHandsHelping, FaUsers, FaChartBar, FaBalanceScale } from "react-icons/fa";
import "./CareerHighlights.css";

const CareerHighlights = () => {
  const highlights = [
    {
      icon: <FaHandsHelping size={30} />,
      title: "Teamwork",
      description: "Teamwork is at the heart of our organization.",
    },
    {
      icon: <FaUsers size={30} />,
      title: "Culture",
      description: "Our purpose is to provide healthy environment to grow personally & professionally",
    },
    {
      icon: <FaChartBar size={30} />,
      title: "Growth",
      description: "We provide equal growth environment to recognize and nurture talent",
    },
    {
      icon: <FaBalanceScale size={30} />,
      title: "Work Life Balance",
      description: "We provide equal growth environment to recognize and nurture talent",
    },
  ];

  return (
    <section className="career-highlights">
      {highlights.map((item, index) => (
        <CareerCard
          key={index}
          icon={item.icon}
          title={item.title}
          description={item.description}
        />
      ))}
    </section>
  );
};

export default CareerHighlights;
