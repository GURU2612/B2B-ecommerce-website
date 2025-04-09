import React, { useState } from "react";
import { IoSearch} from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import "./Navbar.css";
import logo from "../../assets/images/meghmanilogo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar-container">
      {/* Logo */}
      <img src={logo} alt="Meghmani Life Sciences Logo" className="navbar-logo" />

      {/* Navigation Menu */}
      <div className={`nav-menu ${menuOpen ? "active" : ""}`}>
        <a href="/" className="nav-link" onClick={closeMenu}>Home</a>
        <a href="/about" className="nav-link" onClick={closeMenu}>About</a>
        <a href="/services" className="nav-link" onClick={closeMenu}>Area of Focus</a>
        <a href="/doctors" className="nav-link" onClick={closeMenu}>Doctors</a>
        <a href="/contact" className="nav-link" onClick={closeMenu}>Contact Us</a>
        <a href="/career" className="nav-link" onClick={closeMenu}>Career</a>
        <a href="/blog" className="nav-link" onClick={closeMenu}>Blog & News</a>
      </div>

      {/* Search Icon */}
      <div className="nav-icons">
       
        <div className="search-icon">
          <IoSearch />
        </div>
        <div className="profile-container">
        <div className="profile-icon">
        <FaUser />
        </div>
        <a href="/login" className="login-signup">Login/SignUp</a>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
