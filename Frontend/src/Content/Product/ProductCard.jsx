import React from 'react';
import './Product.css';

import Probedia from '../../assets/images/probedia.png';
import ProbediaLogo from '../../assets/images/Prbedialogo.png';

const ProductCard = ({ cta }) => {
    return (
        <div className="product-card">
            <img className="product-img1" src={ProbediaLogo} alt="Brand" />
            <img className="product-img2" src={Probedia} alt="Product" />
            <div className="product-cta">

                    <p>{cta}</p>
                    <hr />

            </div>
        </div>
    );
};

export default ProductCard;
