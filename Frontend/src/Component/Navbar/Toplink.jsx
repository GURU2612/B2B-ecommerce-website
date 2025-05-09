import { FaInstagram, FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa";
import "./Toplink.css";
import { useNavigate } from 'react-router-dom';

const Toplink = () => {
  const navigate = useNavigate();

  const socialIcons = [
    { icon: <FaInstagram />, url: "#" },
    { icon: <FaLinkedinIn />, url: "#" },
    { icon: <FaFacebookF />, url: "#" },
    { icon: <FaTwitter />, url: "#" },
  ];

  const topLinks = [
    { label: "Blogs", onClick: () => navigate('/blogpage') },
    { label: "Careers", onClick: () => navigate('/Career') },
    { label: "Contact Us", onClick: () => navigate('/contectUs') },
  ];

  return (
    <header>
      <div className="top-bar">
        <div className="social-links">
          {socialIcons.map((item, index) => (
            <a key={index} href={item.url} className="icon-wrapper">
              <span className="top-icon">{item.icon}</span>
            </a>
          ))}
        </div>

        <div className="top-links">
          {topLinks.map((link, index) => (
            <a key={index} onClick={link.onClick} style={{ cursor: 'pointer' }}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Toplink;
