import React, { useState } from 'react';
import './Product.css';
import { motion } from "framer-motion";
import Tabs from './Tabs';
import ServiceCard from './ProductServiceCard.jsx';
import ProductCard from './ProductCard';
import Novamegh from '../../assets/images/Novameghimg.png';
import ProductMainImg from '../../assets/images/product_mian_img.png';

// Mock data for each tab
const tabProducts = {
    "Neuropathic Pain Management": [
        { img1: 'NeuroLogo1', img2: 'Neuro1', cta: 'Know More' },
        { img1: 'NeuroLogo2', img2: 'Neuro2', cta: 'Know More' }
    ],
    "Clinical Nutrition": [
        { img1: 'ProbediaLogo', img2: 'Probedia', cta: 'Know More' },
        { img1: 'NutraLogo', img2: 'Nutra', cta: 'Know More' },
        { img1: 'VitaLogo', img2: 'Vita', cta: 'Know More' }
    ],
    "Gastro Intestinal Care": [
        { img1: 'Gastro1Logo', img2: 'Gastro1', cta: 'Know More'}
    ],
    "Pain Management": [
        { img1: 'PainXLogo', img2: 'PainX', cta: 'Know More' },
        { img1: 'ReliefLogo', img2: 'Relief', cta: 'Know More' }
    ]
};

const Product = () => {
    const [activeTab, setActiveTab] = useState("Clinical Nutrition");

    return (
        <section className="products-section">
            <motion.div
                className="products-header"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <p className="sub-heading">Products</p>
                <h2 className="main-heading">Our Wide Range in Every Field</h2>
            </motion.div>

            <Tabs activeTab={activeTab} onTabChange={setActiveTab} />

            <div className="products-content">
                <motion.div
                    className="services"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}

                >
                    <ServiceCard imgSrc={Novamegh} />
                    <ServiceCard imgSrc={Novamegh} />
                    <ServiceCard imgSrc={Novamegh} />
                </motion.div>

                <motion.div
                    className="product-showcase"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}

                >
                    {tabProducts[activeTab]?.map((product, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <ProductCard
                                img1={product.img1}
                                img2={product.img2}
                                cta={product.cta}
                                ctaLink={product.ctaLink}
                            />
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="product-main-image"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}

                >
                    <img src={ProductMainImg} alt="Main Product" />
                </motion.div>
            </div>
        </section>

    );
};

export default Product;
