import React from 'react';
import Banner from "../../Content/AboutusBanner/Banner.jsx";
import Valuesection from "../../Content/ValueSection/Valuesection.jsx";
import rocket from '@src/assets/images/rocketicon.png';
import eye from '@src/assets/images/eyeicon.png';
import value from '@src/assets/images/valueicon.png';
import Contact from "@src/Content/Contact/Contact.jsx";

const ContactUs = () => {
    const valuesData = [
        {
            icon: rocket,
            title: "Support",
            description: "We are always here to assist you with your queries and support needs.",
            altText: "Support Icon",
        },
        {
            icon: eye,
            title: "Vision",
            description: "Helping people connect better through clear communication and dedicated service.",
            altText: "Vision Icon",
        },
        {
            icon: value,
            title: "Value",
            description: "Trust, Transparency, and Commitment towards our clients and partners.",
            altText: "Value Icon",
        },
    ];
    const onSubmit = () => {
        console.log("dd")
    }

    return (
        <div>
            <Banner
                title="Contact Us"
                description="Get in touch with us for any queries, support, or information. We are here to help you."
                breadcrumb="Home > Contact Us"
            />

            <Valuesection
                heading="Contect"
                subheading="Get in Touch"
                values={valuesData}
            />
            <div className="contect-info">
                <Contact/>
            </div>

        </div>
    );
}

export default ContactUs;
