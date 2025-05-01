import React, { useEffect, useState } from 'react';
import axios from "axios";
import BASE_URL from "@src/config.js";
import did from "@src/assets/images/def_img.png";
import "./ProductSection.css"

function ProductSection() {
    const [aofList, setAofList] = useState([]);
    const [selectedAof, setSelectedAof] = useState(null);
    const [products, setProducts] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [newProduct, setNewProduct] = useState({
        image: null,
        name: '',
        description: '',
        specialty: '',
        segment: '',
        presentation: '',
        composition: ''
    });
    console.log(selectedAof);
    useEffect(() => {
        axios.get(`${BASE_URL}/aofs`)
            .then(response => {
                const list = response.data;
                setAofList(list);
                if (list.length > 0) {
                    setSelectedAof(list[0]);
                }
            })
            .catch(error => {
                console.error("Error fetching AOF list:", error);
            });
    }, []);

    useEffect(() => {
        if (selectedAof?.a_name) {
            axios.get(`${BASE_URL}/products/${encodeURIComponent(selectedAof.a_name)}`)
                .then(response => {
                    setProducts(response.data);
                })
                .catch(error => {
                    console.error("Error fetching products:", error);
                });
        }
    }, [selectedAof]);

    const addProductSubmit=(e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("image", newProduct.image);
        formData.append("name", newProduct.name);
        formData.append("description", newProduct.description);
        formData.append("specialty", newProduct.specialty);
        formData.append("segment", newProduct.segment);
        formData.append("presentation", newProduct.presentation);
        formData.append("composition", newProduct.composition);
        formData.append("a_name", selectedAof?.a_name); // already there
        formData.append("a_id", selectedAof?.a_id); // 👈 Add this line for AOF ID

        axios.post(`${BASE_URL}/admin/products`, formData)
            .then(response => {
                setProducts(prev => [...prev, response.data]);
                setShowModal(false);
            })
            .catch(error => console.error("Error adding product:", error));
    }

    return (
        <>
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>Add New Product ({selectedAof?.a_name})</h2>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                const formData = new FormData();
                                formData.append("image", newProduct.image);
                                formData.append("name", newProduct.name);
                                formData.append("description", newProduct.description);
                                formData.append("specialty", newProduct.specialty);
                                formData.append("segment", newProduct.segment);
                                formData.append("presentation", newProduct.presentation);
                                formData.append("composition", newProduct.composition);
                                formData.append("a_name", selectedAof?.a_name);

                                axios.post(`${BASE_URL}/products`, formData)
                                    .then(response => {
                                        setProducts(prev => [...prev, response.data]);
                                        setShowModal(false);
                                    })
                                    .catch(error => console.error("Error adding product:", error));
                            }}
                        >
                            {/* Image input with filename display */}
                            <div style={{ marginBottom: "15px" }}>
                                <label style={{ display: "block", marginBottom: "5px" }}>Image</label>
                                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) =>
                                            setNewProduct({ ...newProduct, image: e.target.files[0] })
                                        }
                                        required
                                    />
                                    {newProduct.image && (
                                        <span style={{ fontSize: "14px", color: "#555" }}>
                                {newProduct.image.name}
                            </span>
                                    )}
                                </div>
                            </div>

                            {/* Other inputs */}
                            <input
                                type="text"
                                placeholder="Name"
                                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                                required
                            />
                            <textarea
                                placeholder="Description"
                                onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                                required
                            />
                            <input
                                type="text"
                                placeholder="Specialty"
                                onChange={(e) => setNewProduct({ ...newProduct, specialty: e.target.value })}
                                required
                            />
                            <input
                                type="text"
                                placeholder="Segment"
                                onChange={(e) => setNewProduct({ ...newProduct, segment: e.target.value })}
                                required
                            />
                            <input
                                type="text"
                                placeholder="Presentation"
                                onChange={(e) => setNewProduct({ ...newProduct, presentation: e.target.value })}
                                required
                            />
                            <input
                                type="text"
                                placeholder="Composition"
                                onChange={(e) => setNewProduct({ ...newProduct, composition: e.target.value })}
                                required
                            />

                            {/* Action Buttons */}
                            <div className="modal-actions">
                                <button type="submit">Add Product To {selectedAof?.a_name}</button>
                                <button type="button" onClick={addProductSubmit}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}


            <div className="admin-aof-container">
                <div className="admin-aof-left">
                    <label htmlFor="aof-select" className="admin-aof-label">Area of Focus</label>
                    <button className="admin-add-button">Add</button>
                    <ul className="admin-aof-list" id="aof-select">
                        {aofList.map((aof, index) => (
                            <li
                                key={index}
                                className={`admin-aof-item ${selectedAof?.a_name === aof.a_name ? "active" : ""}`}
                                onClick={() => setSelectedAof(aof)}
                            >
                                <button className="admin-add-btn">{aof.a_name || "Respiratory"}</button>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="admin-aof-details">
                    <button onClick={() => setShowModal(true)}> Add Product</button>

                    <div className="admin-product-container">
                        {products.map((product, index) => (
                            <div key={index} className="admin-product-card">
                                <div className="admin-product-image-section">
                                    <img src={did} alt={product.name} />
                                </div>

                                <div className="admin-product-content">
                                    <div className="admin-product-main-info">
                                        <h3>{product.name || "BILMEGH"}</h3>
                                        <p>
                                            {product.description || "To tackle seasonal allergies patients need non sedating, fast & round the clock relief with safe & tolerable profile"}
                                        </p>

                                    </div>

                                    <div className="admin-product-specs">

                                        <div className="admin-product-spec-item">
                                            <span className="admin-spec-label">Specialty</span>
                                            <span className="admin-spec-value">{product.speciality || "ENT, Chest Physician, Physician"}</span>
                                        </div>
                                        <div className="admin-product-spec-item">
                                            <span className="admin-spec-label">Segment</span>
                                            <span className="admin-spec-value">{product.segment_presentation || "Seasonal Allergy & urticaria"}</span>
                                        </div>
                                        <div className="admin-product-spec-item">
                                            <span className="admin-spec-label">Presentation</span>
                                            <span className="admin-spec-value">{product.presentation || "Strip of 10 Tablets"}</span>
                                        </div>
                                        <div className="admin-product-spec-item">
                                            <span className="admin-spec-label">Composition</span>
                                            <span className="admin-spec-value">{product.composition || "Bilastine 20 mg"}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Fallback content if no products available */}
                        {products.length === 0 && [1, 2, 3].map(index => (
                            <div key={index} className="admin-product-card">
                                <div className="admin-product-image-section">
                                    <img src="/lovable-uploads/92d5fc95-2522-471b-8261-0e16bac56113.png" alt="Product" />
                                </div>

                                <div className="admin-product-content">
                                    <div className="admin-product-main-info">
                                        <h3>BILMEGH</h3>
                                        <p>
                                            To tackle seasonal allergies patients need non sedating, fast & round the clock relief with safe & tolerable profile
                                        </p>
                                        <button className="admin-inquiry-btn">Inquiry Now</button>
                                    </div>

                                    <div className="admin-product-specs">
                                        <div className="admin-product-spec-item">
                                            <span className="admin-spec-label">Specialty</span>
                                            <span className="admin-spec-value">ENT, Chest Physician, Physician</span>
                                        </div>
                                        <div className="admin-product-spec-item">
                                            <span className="admin-spec-label">Segment</span>
                                            <span className="admin-spec-value">Seasonal Allergy & urticaria</span>
                                        </div>
                                        <div className="admin-product-spec-item">
                                            <span className="admin-spec-label">Presentation</span>
                                            <span className="admin-spec-value">Strip of 10 Tablets</span>
                                        </div>
                                        <div className="admin-product-spec-item">
                                            <span className="admin-spec-label">Composition</span>
                                            <span className="admin-spec-value">Bilastine 20 mg</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductSection;