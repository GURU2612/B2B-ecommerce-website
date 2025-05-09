import React from "react";
import './Footer.css';
import { FaInstagram, FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import logo from "../../assets/images/meghmanilogo.png";
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="footer-container">
      <div className="footer-top">
        <div className="footer-logo-section">
          <div className="footer-logo">
            <img src={logo} alt="Meghmani Life Sciences" />
          </div>
          <p className="footer-description-text">
            Meghmani Life Sciences fosters a culture of innovation, aiming to improve individual, family, and community well-being through our life-changing healthcare solutions.
          </p>
          <div className="footer-socials">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>
        
        


        <div className="footer-contact-section">
          <h3>Get in Touch</h3>
          <p><IoLocationSharp /> Siddhivinayak Tower, 'B' wing, 7th Floor, (Nr. Kataria Arcade) Makarba, SG Highway, Ahmedabad – 380051, Gujarat</p>
          <a href="/"><IoIosMail /> info@meghmanilife.com</a>
          <a href="/"><FaPhoneVolume className="phonevolume"/> 07926812827</a>

        </div>

        <div className="footer-links-section">
          <h3>Quick Links</h3>
          <a onClick={() => navigate('/')}>Home</a>
          <a onClick={() => navigate('about')}>About Us</a>
          <a onClick={() => navigate('Doctors')}>Doctors</a>
          <a onClick={() => navigate('contectUs')}>Contact Us</a>
          <a onClick={() => navigate('Career')}>Careers</a>
          <a onClick={() => navigate('blogpage')}>Blog</a>
        </div>

        <div className="footer-focus-section">
          <h3>Area of Focus</h3>
          <a onClick={() => navigate('AreaOfFocus')}>Respiratory</a>
          <a onClick={() => navigate('AreaOfFocus')}>Neuropathy</a>
          <a onClick={() => navigate('AreaOfFocus')}>Anti-inflammatory</a>
          <a onClick={() => navigate('AreaOfFocus')}>Nutraceuticals</a>
        </div>
      </div>

      <hr className="footer-divider" />

      <div className="footer-bottom">
        <p>© 2024 Meghmani Life Sciences. All rights reserved.</p>
        <p>Design and developed by Maharshi Patel</p>
      </div>
    </footer>
  );
};

export default Footer;