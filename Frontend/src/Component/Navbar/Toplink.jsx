import { FaInstagram, FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa";
import "./Toplink.css";

const socialIcons = [
  { icon: <FaInstagram />, url: "#" },
  { icon: <FaLinkedinIn />, url: "#" },
  { icon: <FaFacebookF />, url: "#" },
  { icon: <FaTwitter />, url: "#" },
];

const topLinks = [
  { label: "Blogs", url: "#" },
  { label: "Careers", url: "#" },
  { label: "Contact Us", url: "#" },
];

const Toplink = () => {
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
            <a key={index} href={link.url}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Toplink;
