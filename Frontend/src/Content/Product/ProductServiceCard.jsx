import React from 'react';
import './Product.css';

const ProductServiceCard = ({ imgSrc }) => {
    return (
        <div className="service-card">
            <img src={imgSrc} alt="Service" />
        </div>
    );
};

export default ProductServiceCard;
