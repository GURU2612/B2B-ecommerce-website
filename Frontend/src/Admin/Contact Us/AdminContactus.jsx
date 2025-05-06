import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BASE_URL from "@src/config.js";

const AdminContactus = () => {
    const [applicants, setApplicants] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch data from backend API
    useEffect(() => {
        const fetchApplicants = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/api/admin/contactus`); // replace with your backend URL
                setApplicants(response.data); // Assuming response.data contains the applicant data
                setLoading(false);
            } catch (err) {
                setError('Error fetching data');
                setLoading(false);
            }
        };

        fetchApplicants();
    }, []); // Empty dependency array to only run once when component mounts

    // Handle delete operation
    const handleDelete = async (id) => {
        try {
            // Make delete request to backend
            await axios.delete(`${BASE_URL}/api/contactus/${id}`); // replace with your backend URL
            setApplicants(applicants.filter(applicant => applicant.id !== id)); // Remove from UI after successful delete
        } catch (err) {
            console.error('Error deleting applicant:', err);
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="career-container">
            <h1 className="career-title">Contact</h1>
            <p className="career-subtitle">View Your Enquiry Here</p>

            <div style={{ overflowX: 'auto' }}>
                <table className="career-table">
                    <thead>
                    <tr>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>Subject</th>
                        <th>Comment</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {applicants.map((applicant) => (
                        <tr key={applicant.id}>
                            <td>{applicant.name}</td>
                            <td>{applicant.email}</td>
                            <td>{applicant.contact}</td>
                            <td>{applicant.subject}</td>
                            <td>{applicant.comment}</td>
                            <td>
                                <button
                                    className="delete-icon"
                                    onClick={() => handleDelete(applicant.id)}
                                >
                                    <DeleteIcon />
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminContactus;

const DeleteIcon = () => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M3 6H5H21"
            stroke="#666"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M19 6V20C19 21.1046 18.1046 22 17 22H7C5.89543 22 5 21.1046 5 20V6M8 6V4C8 2.89543 8.89543 2 10 2H14C15.1046 2 16 2.89543 16 4V6"
            stroke="#666"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M10 11V17"
            stroke="#666"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M14 11V17"
            stroke="#666"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);
