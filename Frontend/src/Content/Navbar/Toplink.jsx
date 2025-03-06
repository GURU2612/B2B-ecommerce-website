import { useState } from "react";

import { FaInstagram, FaLinkedinIn,  FaFacebookF, FaTwitter } from "react-icons/fa";
import "./Toplink.css";


const Navbar = () => {
    
  
    return (
      <header>
        {/* Top Bar */}
        <div className="top-bar">
        <div className="social-links">
            <a href="#" className="icon-wrapper"><FaInstagram className="top-icon" /></a>
            <a href="#" className="icon-wrapper"><FaLinkedinIn className="top-icon" /></a>
            <a href="#" className="icon-wrapper">< FaFacebookF className="top-icon" /></a>
            <a href="#" className="icon-wrapper"><FaTwitter className="top-icon" /></a>
        </div>
        <div className="top-links">
          <a href="#">Blogs</a>
          <a href="#">Careers</a>
          <a href="#">Contact Us</a>
        </div>
      </div>
      </header>
  );
};

export default Navbar;
