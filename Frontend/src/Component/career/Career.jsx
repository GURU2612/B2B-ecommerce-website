import React, { useRef } from 'react';
import Banner from "../../Content/AboutusBanner/Banner.jsx";
import Nurturing from "../../Content/Nurturing/Nurturing.jsx";
import OpportunitySection from "../../Content/OpportunitySection/OpportunitySection.jsx";
import ApplyForm from "../../Content/ApplyForm/ApplyForm.jsx";
import Blog from "../../Content/Blog/Blog.jsx";
import CareerHighlights from "../../Content/CareerHighlights/CareerHighlights.jsx";
import icon1 from "../../assets/images/respiratoryicon.png";
import icon2 from "../../assets/images/Neuropathyicon.png";
import icon3 from "../../assets/images/Anti inflammatoryicon.png";
import './Career.css';
import FocusCard from "@src/Content/Area of Focus/FocusCard.jsx";

function Career() {
    const applyFormRef = useRef(null); // Create ref for ApplyForm

    const cardData = [
        {
            icon: icon1,
            title: "Respiratory",
            description:
                "Providing innovative solutions to manage Allergic Rhinitis, Urticaria & Allergic Rhinitis.",
        },
        {
            icon: icon2,
            title: "Neuropathy",
            description:
                "Neuropathic Pain severely impacts the overall quality of life by hampering the daily activities",
        },
        {
            icon: icon3,
            title: "Anti inflammatory",
            description:
                "We are providing natural anti-inflammatory having safer and better profile over NSAIDs",
        },
        {
            icon: icon3,
            title: "Anti inflammatory",
            description:
                "We are providing natural anti-inflammatory having safer and better profile over NSAIDs",
        },
    ];

    return (
        <div className="career-main">
            <Banner
                title="Career"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
                breadcrumb="Home > Career"
            />
            <Nurturing applyFormRef={applyFormRef} />
            <div className="cards-container">
                <h2></h2>
                {cardData.map((card, index) => (
                    <FocusCard key={index} data={card} index={index} />
                ))}
            </div>
            <OpportunitySection />
            <ApplyForm ref={applyFormRef} /> {/* Pass ref to ApplyForm */}
            <Blog />
        </div>
    );
}

export default Career;
