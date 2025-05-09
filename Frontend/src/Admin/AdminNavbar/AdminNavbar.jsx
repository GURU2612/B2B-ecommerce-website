import React, { useState } from "react";
import { IoSearch} from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import "./AdminNavbar.css";
import logo from "../../assets/images/meghmanilogo.png";
import { useNavigate } from "react-router-dom";

const AdminNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate()
  
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar-container">
      {/* Logo */}
      <img src={logo} alt="Meghmani Life Sciences Logo" className="navbar-logo" />

      {/* Navigation Menu */}
      <div className={`nav-menu ${menuOpen ? "active" : ""}`}>
        <a className="nav-link" onClick={()=>navigate("/admin")}>Product</a>
        <a className="nav-link" onClick={()=>navigate("career")}>Career</a>
        <a className="nav-link" onClick={()=>navigate("contact")}>Contact</a>
        <a className="nav-link" onClick={()=>navigate("doctor")}>Doctor</a>
        <a className="nav-link" onClick={()=>navigate("blogs")}>Blogs</a>
        {/*<a className="nav-link" onClick={()=>navigate("edit")}>edit</a>*/}
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

export default AdminNavbar;
