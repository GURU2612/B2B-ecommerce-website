import React from 'react';
import './Product.css';

const ProductCard = ({ img1, img2, cta }) => {
    return (
        <div className="product-card">
            <img className="product-img1" src={img1} alt="Brand Logo" />
            <img className="product-img2" src={img2} alt="Product Image" />
            <div className="product-cta">
                <p>{cta}</p>
                <hr />
            </div>
        </div>
    );
};


export default ProductCard;
