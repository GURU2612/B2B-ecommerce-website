import React from 'react';
import './Product.css';

const Tabs = ({ activeTab, onTabChange }) => {
    const tabs = [
        "Respiratory",
        "Neuropathy",
        "Anti inflammatory",
        "Nutraceuticals"
    ];

    return (
        <div className="tabs-container">
            {tabs.map((tab, index) => (
                <a
                    key={index}
                    className={`tab ${activeTab === tab ? 'active' : ''}`}
                    onClick={() => onTabChange(tab)}
                    role="button"
                >
                    {tab}
                </a>
            ))}
        </div>
    );
};

export default Tabs;
