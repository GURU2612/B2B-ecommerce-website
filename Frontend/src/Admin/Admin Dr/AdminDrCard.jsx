import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import "./AdminDrCard.css";

const DoctorCard = ({ name, specialization, image, handleDelete, handleEdit }) => {
    return (
        <div className="doctor-card">
            <img src={image} alt={name} className="doctor-image" />

            <div className="doctor-details">
                <h3 className="doctor-name">{name}</h3>
                <p className="doctor-specialization">{specialization}</p>

                <div className="doctor-actions">
                    <button className="edit-btn" onClick={handleEdit}>
                        <FaEdit className="icon" /> Edit
                    </button>
                    <button className="delete-btn" onClick={handleDelete}>
                        <FaTrash className="icon" /> Delete
                    </button>
                </div>
            </div>
        </div>
    );
};
export default DoctorCard;