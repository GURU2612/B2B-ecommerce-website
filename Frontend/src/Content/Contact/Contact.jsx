import React, { useState } from "react";
import axios from "axios"; // Import Axios
import "./Contact.css";
import BASE_URL from "@src/config.js"; // Keep your CSS import
import Contactimage from "../../assets/images/contact.png";

const Contact = () => {
    // Define state to hold form data
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        contact: "",
        subject: "",
        comment: ""
    });

    // Handle form data change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    // Handle form submission
    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent page reload

        try {
            // Send POST request to the backend with the correct headers
            const response = await axios.post(
                `${BASE_URL}/contact`,
                formData,
                {
                    headers: {
                        'Content-Type': 'application/json', // Ensure Content-Type is set to JSON
                    },
                }
            );
            console.log("status:- ", response.status);
            console.log("Form submitted successfully!", response.data);

            // Clear the form fields if the status is 200
            if (response.status === 200) {
                setFormData({
                    name: "",
                    email: "",
                    contact: "",
                    subject: "",
                    comment: ""
                });
            }
        } catch (error) {
            console.error("There was an error submitting the form!", error);
        }
    };



    return (
        <div className="contact-bottom">
            <div className="message-form">
                <h2 className= "Contact-title">Contact</h2>
                <h4 className= "Contact-subtitle">Send a Message </h4>
                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Contact"
                        name="contact"
                        value={formData.contact}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                    />
                    <input
                        placeholder="Comment"
                        name="comment"
                        value={formData.comment}
                        onChange={handleChange}
                        required

                        type="text"

                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
                <img className="map-section" src={Contactimage} alt="Office" />

        </div>
    );
};

export default Contact;
