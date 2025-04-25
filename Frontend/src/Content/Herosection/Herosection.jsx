import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Herosection.css";
import bannerImage from "../../assets/images/bannerimage.png";
import dnaStyle from "../../assets/images/dnastyle.png";
import ellipse from "../../assets/images/Ellipse.png";

const slides = [
    {
        heading: "Health & Happiness",
        subheading: "In the Heart of",
        title: "Trust, We Thrive",
        description: "It is a long established fact that a reader will be distracted.",
    },
    {
        heading: "Innovation & Care",
        subheading: "Driven by Science",
        title: "We Deliver Wellness",
        description: "We blend advanced research with compassionate care.",
    },
    {
        heading: "Integrity & Expertise",
        subheading: "Backed by Experience",
        title: "Health You Can Trust",
        description: "Decades of innovation and patient-first commitment.",
    },
];

const Herosection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000); // every 5 sec
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="hero-section">
            <div className="hero-content">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 40 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="hero-heading">{slides[currentSlide].heading}</h2>
                        <h2 className="hero-subheading">{slides[currentSlide].subheading}</h2>
                        <h1 className="hero-title">{slides[currentSlide].title}</h1>

                        <div className="hero-description-block">
                            <div className="vertical-line" />
                            <p className="hero-description">{slides[currentSlide].description}</p>
                        </div>

                        <button className="hero-button">Contact Us Now</button>
                    </motion.div>
                </AnimatePresence>
            </div>

            <motion.div
                className="hero-image-wrapper"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
            >
                <img src={dnaStyle} alt="DNA style" className="dna-frame" />
                <img src={bannerImage} alt="Product" className="product-image" />
                <img src={ellipse} alt="bg" className="ellipse-image" />
            </motion.div>

            <div className="slider-indicators">
                {slides.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${currentSlide === index ? "active" : ""}`}
                        onClick={() => setCurrentSlide(index)}
                    />
                ))}
            </div>
        </section>
    );
};

export default Herosection;
