// src/Content/DoctorList/DoctorList.jsx
import React from 'react';
import DoctorCard from "./DoctorCard";

import doctorImage from "../../assets/images/doctor.png";

const DoctorList = () => {
    const doctors = [
      { name: 'Dr. Mitesh Shah', specialty: 'Dermatologist', imageUrl: doctorImage },
      { name: 'Dr. Neha Patel', specialty: 'Cardiologist', imageUrl: doctorImage },
      { name: 'Dr. Anil Mehta', specialty: 'Neurologist', imageUrl: doctorImage },
      { name: 'Dr. Riya Singh', specialty: 'Pediatrician', imageUrl: doctorImage },
    ];
  
    return (
      <div className="doctor-list-container">
        {doctors.map((doc, index) => (
          <DoctorCard
            key={index}
            name={doc.name}
            specialty={doc.specialty}
            imageUrl={doc.imageUrl}
          />
        ))}
      </div>
    );
  };

export default DoctorList;
