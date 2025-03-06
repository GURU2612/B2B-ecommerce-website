import React from "react";
import { IoSearch } from "react-icons/io5";
import "./Navbar.css";
import logo from "../../assets/Logo/meghmanilogo.png";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      {/* Logo */}
      <img src={logo} alt="Meghmani Life Sciences Logo" className="navbar-logo" />

      {/* Navigation Menu */}
      <div className="nav-menu">
        <a to="/" className="nav-link" activeClassName="nav-link-active">
          Home
        </a>
        <a to="/about" className="nav-link" activeClassName="nav-link-active">
          About
        </a>
        <a to="/services" className="nav-link" activeClassName="nav-link-active">
          Area of Focus
        </a>
        <a to="/doctors" className="nav-link" activeClassName="nav-link-active">
          Doctors
        </a>
        <a to="/contact" className="nav-link" activeClassName="nav-link-active">
          Contact Us
        </a>
        <a to="/career" className="nav-link" activeClassName="nav-link-active">
          Career
        </a>
        <a to="/blog" className="nav-link" activeClassName="nav-link-active">
          Blog & News
        </a>
      </div>

      {/* Search Icon */}
      <div className="nav-icons">
        <div className="icon">
          <IoSearch />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
