import React, { useEffect, useState } from 'react';
import advisorImage from '../../assets/images/doctor.png';
import DrCart from "../../Content/DrCart/DrCart.jsx";
import Banner from "../../Content/AboutusBanner/Banner.jsx";
import Blog from "../../Content/Blog/Blog.jsx";
import './Doctors.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BASE_URL from "@src/config.js";

const Doctors = () => {
    const navigate = useNavigate();
    const [doctorList, setDoctors] = useState([]);
    const [loading, setLoading] = useState(true); // <-- Loader state
    const [error, setError] = useState(null);     // <-- Error state (optional)

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

    useEffect(() => {
        const fetchDoctors = async () => {
            setLoading(true);
            setError(null);
            try {
                const res = await axios.get(`${BASE_URL}/api/DoctorList`);
                setDoctors(res.data);
            } catch (err) {
                console.log(err);
                setError("Failed to fetch doctors.");
            } finally {
                setLoading(false);
            }
        };

        fetchDoctors();
    }, []);

    return (
        <>
            <div className="Dr-main">
                <Banner
                    title="Doctors"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
                    breadcrumb="Home > Doctors"
                />

                <div className="doctor-list-wrapper">
                    {loading ? (
                        <div className="loading">Loading doctors...</div>
                    ) : error ? (
                        <div className="error">{error}</div>
                    ) : doctorList.length === 0 ? (
                        <div className="no-doctors">No doctors found.</div>
                    ) : (
                        doctorList.map((doctor, index) => (
                            <DrCart
                                key={index}
                                name={doctor.name}
                                title={doctor.title}
                                image={doctor.image}
                                description={doctor.description}
                                handleClick={() => handleClick(doctor)}
                            />
                        ))
                    )}
                </div>

                <Blog />
            </div>
        </>
    );
};

export default Doctors;
