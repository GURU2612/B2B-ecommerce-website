import React, { useState } from "react";
import { IoSearch} from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import "./Navbar.css";
import logo from "../../assets/images/meghmanilogo.png";
import { useNavigate } from "react-router-dom";
import { useUser } from '../../Context/UserContext';
import Profile from "@src/Content/ProfilePage/Profile.jsx";

const Navbar = () => {
   const [showProfile, setShowProfile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
   
  const navigate = useNavigate();
  const { user, logout } = useUser();
  const handleLogout=()=>{
    logout();
  }
  const handleProfileClick = () => {
    setShowProfile(true);
  };

  return (
<>
      <Profile isOpen={showProfile} onClose={() => setShowProfile(false)} />
    <nav className="navbar-container">
      <img src={logo} alt="Meghmani Life Sciences Logo" className="navbar-logo" />
        
      <div className={`nav-menu ${menuOpen ? "active" : ""}`}>
        <a className="nav-link" onClick={()=>navigate("home")}>Home</a>
        <a  className="nav-link" onClick={()=>navigate("about")}>About</a>
        <a  className="nav-link" onClick={()=>navigate("AreaOfFocus")}>Area of Focus</a>
        <a  className="nav-link" onClick={()=>navigate("Doctors")}>Doctors</a>
        <a  className="nav-link" onClick={()=>navigate("contectUs")}>Contact Us</a>
        <a  className="nav-link" onClick={()=>navigate("Career")}>Career</a>
        <a  className="nav-link" onClick={()=>navigate("BlogPage")}>Blog & News</a>
      </div>

      {/* Search Icon */}
      <div className="nav-icons">
        <div className="search-icon">
          <IoSearch />
        </div>
        <div className="profile-container">
          <div className="profile-icon" >
            <FaUser />
          </div>
          {user ? (
            <div className="user-menu" onClick={handleProfileClick}>
              <span className="user-name">{user.name}</span>
               {/*<button onClick={handleLogout} className="logout-btn">Logout</button>*/}
            </div>
          ) : (
            <a href="/login" className="login-signup">Login/SignUp</a>
          )}
        </div>
      </div>
    </nav>
</>
  );
};

export default Navbar;
