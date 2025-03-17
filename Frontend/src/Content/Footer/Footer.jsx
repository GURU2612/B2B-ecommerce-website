import React from "react";
import './Footer.css';
import { FaInstagram, FaLinkedinIn,  FaFacebookF, FaTwitter } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import logo from "../../assets/images/meghmanilogo.png";
import { IoLocationSharp } from "react-icons/io5";  
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className="outer-footer-container">
      <div className="footer-logo">
        <img src={logo} alt="Footer Logo" />
      </div>
      <p className="footer-text">
        Meghmani Life Sciences fosters a culture of innovation, aiming to improve individual, family, and community well-being through our life-changing healthcare solutions.
      </p>

              <div className="footer-social-links">
                  <a href="#" className="icon-wrapper"><FaInstagram className="top-icon" /></a>
                  <a href="#" className="icon-wrapper"><FaLinkedinIn className="top-icon" /></a>
                  <a href="#" className="icon-wrapper">< FaFacebookF className="top-icon" /></a>
                  <a href="#" className="icon-wrapper"><FaTwitter className="top-icon" /></a>
              </div>

        <div className="quick-contact">Quick Contact</div>
        <div className="frame-phone" ><FaPhoneVolume className="frame-phone" /></div> {/* Add an icon or leave it blank */}
        <div className="phone-number">07926812827</div>
        <div className="get-in-touch">GET IN TOUCH</div>
        <p className="footer-description">
        Siddhivinayak Tower, 'B' wing, 7th Floor, (Nr. Kataria Arcade) Makarba, SG Highway, Ahmedabad – 380051, Gujarat
        </p>
        <div className="frame-location">
        <IoLocationSharp className="frame-location"/>
      </div>

        {/* Quick Links */}
        <div className="footer-quick-links">Quick Links</div>

        <a href="/" className="footer-home">Home</a>
        <a href="/" className="footer-aboutus">About Us</a>
        <a href="/" className="footer-doctors">Doctors</a>
        <a href="/" className="footer-contactus">Contact Us</a>
        <a href="/" className="footer-careers">Careers</a>
        <a href="/" className="footer-blog">Blog</a>

        <div className="footer-areaoffocus">Area Of Focus</div>
        <div className="footer-respiratory">Respiratory</div>
        <div className="footer-neuropathy">Neuropathy</div>
        <div className="footer-antiinflammatory">Anti inflammatory</div>
        <div className="footer-nutraceuticals">Nutraceuticals</div>



      {/* Email Address */}
      <p className="email-address">info@meghmanilife.com</p>

      <div className="frame-email">
      <IoIosMail className="frame-email"/>
      </div>


      <div className="phone-number-bottom">07926812827</div>
      <div className="frame-phone-bottom" ><FaPhoneVolume className="frame-phone-bottom" /></div> {/* Add an icon or leave it blank */}

        {/* Horizontal Line */}
        <div className="footer-line"></div>
         {/* Copyright Text */}
      <p className="footer-copyright">Copyright © 2024 - All rights reserved</p>
       {/* Developed by Text */}
       <p className="footer-developed">Design and developed by Maharshi Patel</p>

    </div>
    
    
  );
};

export default Footer;
