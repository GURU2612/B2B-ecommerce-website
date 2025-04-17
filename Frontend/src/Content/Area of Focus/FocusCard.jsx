import React from "react";

const FocusCard = ({ data }) => {
    return (
        <div className="card">
            <div className="icon">
                <img src={data.icon} alt={`${data.title} icon`} />
            </div>
            <div className="card-title">{data.title}</div>
            <p className="card-description">{data.description}</p>
            <div className="view-more">View More</div>
        </div>
    );
};

export default FocusCard;