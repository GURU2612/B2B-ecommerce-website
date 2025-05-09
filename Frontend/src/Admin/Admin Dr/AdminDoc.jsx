import React, { useEffect, useState } from 'react';
    import axios from "axios";
    import BASE_URL from "@src/config.js";
    import DrCart from "@src/Content/DrCart/DrCart.jsx";
    import { useNavigate } from "react-router-dom";
import './AdminDoc.css'
    import AdminDrCard from "@src/Admin/Admin Dr/AdminDrCard.jsx";

    const AdminDoc = () => {
        const [doctorList, setDoctorList] = useState([]);
        const [showModal, setShowModal] = useState(false);
        const [isEditMode, setIsEditMode] = useState(false);
        const [currentDoctorId, setCurrentDoctorId] = useState(null);
        const [formData, setFormData] = useState({
            name: '',
            title: '',
            description: ''
        });
        const [imageFile, setImageFile] = useState(null);
        const [isLoading, setIsLoading] = useState(false);
        const [error, setError] = useState(null);

        const navigate = useNavigate();

        useEffect(() => {
            fetchDoctors();
        }, []);

        const fetchDoctors = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const response = await axios.get(`${BASE_URL}/api/DoctorList`);
                console.log(response.data)
                setDoctorList(response.data);
            } catch (err) {
                console.error("Error fetching doctors:", err);
                setError("Failed to fetch doctors. Please try again.");
            } finally {
                setIsLoading(false);
            }
        };

        const handleClick = (doctor) => {
            navigate('/doctor-details', {
                state: {
                    name: doctor.name,
                    title: doctor.title,
                    image: doctor.image,
                    description: doctor.description
                }
            });
        };

        const handleInputChange = (e) => {
            const { name, value } = e.target;
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        };

        const handleImageChange = (e) => {
            const file = e.target.files[0];
            if (file && file.size > 3 * 1024 * 1024) {
                alert("Image size must be less than 3MB");
                return;
            }
            setImageFile(file);
        };

        const validateForm = () => {
            if (!formData.name.trim()) {
                alert("Please enter doctor's name");
                return false;
            }
            if (!formData.title.trim()) {
                alert("Please enter doctor's title");
                return false;
            }
            if (!formData.description.trim()) {
                alert("Please enter doctor's description");
                return false;
            }
            if (!isEditMode && !imageFile) {
                alert("Please upload an image");
                return false;
            }
            return true;
        };

        const handleDeleteDoctor = async (doctorId) => {
            const confirmDelete = window.confirm("Are you sure you want to delete this doctor?");
            if (!confirmDelete) return;

            try {
                await axios.delete(`${BASE_URL}/api/deleteDoctor/${doctorId}`);
                fetchDoctors(); // Refresh list after delete
            } catch (err) {
                console.error("Error deleting doctor:", err);
                setError("Failed to delete doctor. Please try again.");
            }
        };

        const handleEditDoctor = (doctor) => {
            setIsEditMode(true);
            setCurrentDoctorId(doctor.id);
            setFormData({
                name: doctor.name,
                title: doctor.title,
                description: doctor.description
            });
            setShowModal(true);
        };

        const handleAddDoctor = async () => {
            if (!validateForm()) return;

            setIsLoading(true);
            setError(null);

            const data = new FormData();
            data.append("name", formData.name);
            data.append("title", formData.title);
            data.append("description", formData.description);
            
            if (imageFile) {
                data.append("image", imageFile);
            }

            try {
                if (isEditMode) {
                    await axios.put(`${BASE_URL}/api/updateDoctor/${currentDoctorId}`, data, {
                        headers: {
                            "Content-Type": "multipart/form-data"
                        }
                    });
                } else {
                    await axios.post(`${BASE_URL}/api/addDoctor`, data, {
                        headers: {
                            "Content-Type": "multipart/form-data"
                        }
                    });
                }
                
                setShowModal(false);
                resetForm();
                fetchDoctors();
            } catch (err) {
                console.error("Error saving doctor:", err);
                setError(err.response?.data?.message || "Failed to save doctor. Please try again.");
            } finally {
                setIsLoading(false);
            }
        };

        const resetForm = () => {
            setFormData({ name: '', title: '', description: '' });
            setImageFile(null);
            setError(null);
            setIsEditMode(false);
            setCurrentDoctorId(null);
        };

        return (
            <div className="admin-doctor-container">
                <div className="admin-header">
                    <h1>Doctor Management</h1>
                    <button
                        className="add-doctor-btn"
                        onClick={() => {
                            resetForm();
                            setShowModal(true);
                        }}
                    >
                        Add New Doctor
                    </button>
                </div>

                {error && <div className="error-message">{error}</div>}

                {isLoading && !showModal ? (
                    <div className="loading">Loading doctors...</div>
                ) : (
                    <div className="doctor-list-wrapper">
                        {doctorList.length === 0 ? (
                            <p>No doctors found. Add your first doctor!</p>
                        ) : (
                            doctorList.map((doctor, index) => (
                                <div className="doctor-card-wrapper" key={index}>
                                    <AdminDrCard
                                        name={doctor.name}
                                        specialization={doctor.title}
                                        image={doctor.image}
                                        description={doctor.description}
                                        handleClick={() => handleClick(doctor)}
                                        handleDelete={() => handleDeleteDoctor(doctor.id)}
                                        handleEdit={() => handleEditDoctor(doctor)}
                                    />
                                </div>
                            ))
                        )}
                    </div>
                )}

                {showModal && (
                    <div className="modal-overlay">
                        <div className="modal">
                            <h2>{isEditMode ? 'Edit Doctor' : 'Add New Doctor'}</h2>
                            {error && <div className="error-message">{error}</div>}
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    placeholder="Doctor's full name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <input
                                    id="title"
                                    type="text"
                                    name="title"
                                    placeholder="e.g. Cardiologist, Surgeon"
                                    value={formData.title}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="image">Profile Image {isEditMode && "(Leave empty to keep current image)"}</label>
                                <input
                                    id="image"
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    required={!isEditMode}
                                />
                                <small>Max size: 3MB</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <textarea
                                    id="description"
                                    name="description"
                                    placeholder="Doctor's biography and specialties"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    rows="4"
                                    required
                                />
                            </div>
                            <div className="modal-actions">
                                <button
                                    className="submit-btn"
                                    onClick={handleAddDoctor}
                                    disabled={isLoading}
                                >
                                    {isLoading ? "Saving..." : (isEditMode ? "Update Doctor" : "Save Doctor")}
                                </button>
                                <button
                                    className="cancel-btn"
                                    onClick={() => setShowModal(false)}
                                    disabled={isLoading}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    };

    export default AdminDoc;