import React from "react";
import DoctorCard from "./DoctorCard";
import "./DoctorGrid.css";
import drimg from "../../assets/images/doctor.png";


const doctors = Array(9).fill({
  name: "Dr. Mitesh Shah",
  specialization: "Dermatologist",
  image: drimg, // Use the correct image path
});

const DoctorGrid = () => {
  return (
    <div className="doctor-grid">
      {doctors.map((doc, index) => (
        <DoctorCard
          key={index}
          name={doc.name}
          specialization={doc.specialization}
          image={doc.image}
        />
      ))}
    </div>
  );
};

export default DoctorGrid;
