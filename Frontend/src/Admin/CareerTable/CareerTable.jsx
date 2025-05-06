
import React, {useEffect, useState} from 'react';
import './CareerTable.css';
import BASE_URL from "@src/config.js";
import axios from "axios";
const CareerTable = () => {
    const [applicants, setApplicants] = useState([]);

    useEffect(() => {
        const fetchApplicants = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/api/applications`);
                setApplicants(response.data); // or response.data based on backend
            } catch (error) {
                console.error('Error fetching applicants:', error);
            }
        };

        fetchApplicants();
    }, []);
    const handleDelete = async (id) => {
        const confirmed = window.confirm("Are you sure you want to delete someone Career?");
        if (!confirmed) return;

        try {
            await axios.delete(`${BASE_URL}/api/applications/${id}`);
            setApplicants((prev) => prev.filter((applicant) => applicant.id !== id));
        } catch (error) {
            console.error("Error deleting application:", error);
        }
    };

    const handleResumeDownload = async (id, filename) => {
        try {
            const response = await axios.get(`${BASE_URL}/api/applications/resume/${id}`, {
                responseType: 'blob', // IMPORTANT
            });

            const blob = new Blob([response.data], { type: 'application/pdf' }); // or generic type if needed
            const url = window.URL.createObjectURL(blob);

            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', filename); // Set filename
            document.body.appendChild(link);
            link.click();

            // Cleanup
            link.remove();
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Error downloading resume:', error);
        }
    };

    console.log(applicants);
    return (
        <div className="career-container">
            <h1 className="career-title">Career</h1>
            <p className="career-subtitle">View Your Enquiry Here</p>

            <div style={{ overflowX: 'auto' }}>
                <table className="career-table">
                    <thead>
                    <tr>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>Position</th>
                        <th>Current Company</th>
                        <th>Expected CTC</th>
                        <th>Resume</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {applicants.map((applicant) => (
                        <tr key={applicant.id}>
                            <td>{applicant.full_name}</td>
                            <td>{applicant.email}</td>
                            <td>{applicant.contact}</td>
                            <td>{applicant.position}</td>
                            <td>{applicant.company}</td>
                            <td>{applicant.expected_ctc}</td>
                            <td>
                                <td>
                                    <button
                                        className="doc-icon"
                                        onClick={() => handleResumeDownload(applicant.id, applicant.resume_name)}
                                    >
                                        <DocumentIcon />
                                    </button>
                                </td>
                            </td>
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
// Document icon component
const DocumentIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
            stroke="#666"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"/>
        <path
            d="M14 2V8H20"
            stroke="#666"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"/>
    </svg>
);

// Ellipsis icon component
// Delete icon component
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

export default CareerTable;