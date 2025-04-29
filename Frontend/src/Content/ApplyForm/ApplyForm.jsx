import React from 'react';
import './ApplyForm.css';
import Careerimage from "../../assets/images/CareerForm-Image.png";

const ApplyForm = React.forwardRef((props, ref) => { // Forward ref to allow external reference
  return (
      <div className="applyForm-main" ref={ref}>
        <div className="apply-container">
          {/* Left Side - Image */}
          <div className="left-section">
            <img src={Careerimage} alt="Office" />
          </div>

          {/* Right Side - Form */}
          <div className="right-section">
            <h2 className="subtitle">Openings</h2>
            <h1 className="title">Apply Here</h1>
            <form>
              <div className="form-row">
                <input type="text" placeholder="Full Name" />
                <input type="email" placeholder="E-mail" />
              </div>
              <div className="form-row">
                <input type="text" placeholder="Contact" />
                <input type="text" placeholder="Applying for Position" />
              </div>
              <div className="form-row">
                <input type="text" placeholder="Current Company" />
                <input type="text" placeholder="Expected CTC" />
              </div>
              <div className="upload-btn">
                <button type="button">📁 Upload Resume</button>
              </div>
              <div className="send-btn">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
  );
});

export default ApplyForm;
