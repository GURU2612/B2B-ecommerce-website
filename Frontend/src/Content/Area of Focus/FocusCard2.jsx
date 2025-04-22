import React from "react";

const FocusCard2= ({ data }) => {
    return (
        <div className="card">
            <div className="icon">
                <img src={data.icon} alt={`${data.title} icon`} />
            </div>
            <div className="card-title">{data.title}</div>
            <p className="card-description">{data.description}</p>

        </div>
    );
};

export default FocusCard2;