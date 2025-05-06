import React from 'react';

const AdminContectus=()=> {
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
                        <th>Contect</th>
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
}

export default AdminContectus;