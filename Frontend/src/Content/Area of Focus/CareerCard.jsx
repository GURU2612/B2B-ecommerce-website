import React from "react";
import "./Areaoffocus.css"
const CareerCard = ({ data }) => {
    return (
        <div className="careercard">
            <div className="icon">
                <img src={data.icon} alt={`${data.title} icon`} />
            </div>
            <div className="card-title">{data.title}</div>
            <p className="card-description">{data.description}</p>
            {/*<div className="view-more">View More</div>*/}
        </div>
    );
};

export default CareerCard;