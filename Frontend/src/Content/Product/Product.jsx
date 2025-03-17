import React from "react";
import "./Product.css"; // Import the external CSS file

const ProductSection = () => {
  return (
  <>
  <div className="outer-product-container">
      <div className="inner-product-container">
        <h2 className="product-heading">Products</h2>
        <h3 className="product-subheading">Our Wide Range in Every Field</h3>
        {/* Product Cards */}
          <div className="product-card first-card">Card Content 1</div>
          <div className="product-card second-card">Card Content 2</div>
          <div className="product-card third-card">Card Content 3</div>

      </div>
    </div>
  </>
  );
};

export default ProductSection;
