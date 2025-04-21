import React from "react";
import "./Banner.css";

const Banner = ({ title, description, breadcrumb }) => {
    return (
        <>
            <div className="aboutus-banner-container">
                <div className="aboutus-title">{title}</div>
                <p className="aboutus-description">{description}</p>
            </div>

            <div className="breadcrumb">
                <div className="breadcrumb-text">{breadcrumb}</div>
            </div>
        </>
    );
};

export default Banner;
