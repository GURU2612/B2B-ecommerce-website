import React, { useState } from 'react';
import axios from 'axios';
import './ApplyForm.css';
import Careerimage from "../../assets/images/CareerForm-Image.png";
import BASE_URL from "@src/config.js";

const ApplyForm = React.forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contact: '',
    position: '',
    company: '',
    expectedCTC: '',
  });
  const [resume, setResume] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // NEW

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      if (file.size <= 3 * 1024 * 1024) {
        setResume(file);
        setError('');
      } else {
        setResume(null);
        setError('File size must be under 3 MB');
      }
    } else {
      setResume(null);
      setError('Only PDF files are allowed');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!resume) {
      setError("Please upload a valid PDF resume under 3 MB.");
      return;
    }

    setLoading(true); // Disable button

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });
    data.append("resume", resume);

    try {
      const response = await axios.post(`${BASE_URL}/apply`, data, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      alert("Application submitted successfully!");

      // 🔄 Reset form after successful submission
      setFormData({
        fullName: '',
        email: '',
        contact: '',
        position: '',
        company: '',
        expectedCTC: '',
      });
      setResume(null);
      setError('');

      // Optionally reset file input manually
      document.getElementById("resumeUpload").value = null;

    } catch (err) {
      console.error(err);
      alert("Submission failed. Please try again.");
    } finally {
      setLoading(false); // Re-enable button
    }
  };


  return (
      <div className="applyForm-main" ref={ref}>
        <div className="apply-container">
          <div className="left-section">
            <img src={Careerimage} alt="Office" />
          </div>

          <div className="right-section">
            <h2 className="subtitle">Openings</h2>
            <h1 className="title">Apply Here</h1>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required />
                <input type="email" name="email" placeholder="E-mail" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="form-row">
                <input type="text" name="contact" placeholder="Contact" value={formData.contact} onChange={handleChange} required />
                <input type="text" name="position" placeholder="Applying for Position" value={formData.position} onChange={handleChange} required />
              </div>
              <div className="form-row">
                <input type="text" name="company" placeholder="Current Company" value={formData.company} onChange={handleChange} />
                <input type="text" name="expectedCTC" placeholder="Expected CTC" value={formData.expectedCTC} onChange={handleChange} />
              </div>

              <div className="upload-btn">
                <label htmlFor="resumeUpload" className="custom-upload" style={{ cursor: 'pointer' }}>
                  📁 Upload Resume
                </label>
                <input
                    id="resumeUpload"
                    type="file"
                    accept="application/pdf"
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                />
                {resume && <span className="file-name">{resume.name}</span>}
              </div>


              {error && <p style={{ color: 'red' }}>{error}</p>}

              <div className="send-btn">
                <button type="submit" disabled={loading}>
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
  );
});

export default ApplyForm;
