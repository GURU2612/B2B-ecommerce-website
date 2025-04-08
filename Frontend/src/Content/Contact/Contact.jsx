import React from "react";
import "./Contact.css"; // Import the external CSS file
import { FaLinkedinIn,  FaFacebookF, FaTwitter } from "react-icons/fa";

// import Recognitionimg from "../../assets/images/Recognitionimg.png";


const Contact = () => {
  return (
    <>
      <div className="outer-Contact-container">
      <h2 className="contact-title">Contact</h2>
      <h2 className="get-in-touch">Get in Touch</h2>

        <button className="email-box">
              <div className="email-icon">
              {/* <img src={rocket}></img> */}
                </div>
                <h3 className="email-title">Email Us</h3>
                <h6 className="email-description">
                    info@meghmanilife.com
                </h6>
        </button>

        <button className="location-box">
              <div className="location-icon">
              {/* <img src={rocket}></img> */}
                </div>
                <h3 className="location-title">Location</h3>
                <h6 className="location-description">
                Siddhivinayak Tower, 'B' wing, 7th Floor, (Nr. Kataria Arcade) Makarba, SG Highway, Ahmedabad – 380051, Gujarat
                </h6>
        </button>

        <button className="phone-box">
              <div className="phone-icon">
              {/* <img src={rocket}></img> */}
                </div>
                <h3 className="phone-title">Call Us</h3>
                <h6 className="phone-description">
                07926812827
                </h6>
        </button>

        <div className="map-section">
            
        </div>

        <div className="message-form">
            
        </div>

      </div>
    </>
  );
};

export default Contact;