import React, { useEffect, useState } from 'react';
import axios from "axios";
import BASE_URL from "@src/config.js";
import did from "@src/assets/images/def_img.png"; // Default image
import "./ProductSection.css";

function ProductSection() {
    const [aofList, setAofList] = useState([]);
    const [selectedAof, setSelectedAof] = useState(null);
    const [products, setProducts] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [showAofModal, setShowAofModal] = useState(false);
    const [newProduct, setNewProduct] = useState({
        image: null,
        name: '',
        description: '',
        specialty: '',
        segment: '',
        presentation: '',
        composition: ''
    });
    const [newAof, setNewAof] = useState('');
    const [newAofDes, setNewAofDes] = useState('');
    const [aofError, setAofError] = useState('');
    const [aofLoading, setAofLoading] = useState(false);

    // Add Area of Focus function
    const addAreaOfFocus = (e) => {
        e.preventDefault();
        setAofError('');
        setAofLoading(true);

        // Validate input
        if (!newAof || newAof.trim() === '') {
            setAofError('Area of Focus name is required');
            setAofLoading(false);
            return;
        }

        // Call the backend API to add a new AOF
        axios.post(`${BASE_URL}/addAof`, {
            a_name: newAof,
            description: newAofDes
        })
            .then(response => {
                // Add the new AOF to the list
                const newAofItem = response.data;
                setAofList([...aofList, newAofItem]);

                // Select the newly added AOF
                setSelectedAof(newAofItem);

                // Reset the form and close the modal
                setNewAof('');
                setNewAofDes('');
                setShowAofModal(false);
                setAofLoading(false);
            })
            .catch(error => {
                console.error("Error adding AOF:", error);
                if (error.response && error.response.status === 409) {
                    setAofError('Area of Focus with this name already exists');
                } else {
                    setAofError('Failed to add Area of Focus. Please try again.');
                }
                setAofLoading(false);
            });
    };

    // Convert byte array to base64 string
    const bufferToBase64 = (bufferData) => {
        if (!bufferData || !bufferData.length) return null;
        const binary = Array.from(bufferData).map(byte => String.fromCharCode(byte)).join('');
        return window.btoa(binary);
    };

    // State for loading indicators
    const [isLoadingAofs, setIsLoadingAofs] = useState(true);
    const [isLoadingProducts, setIsLoadingProducts] = useState(false);

    // Fetch AOFs on component mount
    useEffect(() => {
        setIsLoadingAofs(true);
        axios.get(`${BASE_URL}/aofs`)
            .then(response => {
                const list = response.data;
                setAofList(list);
                if (list.length > 0) {
                    setSelectedAof(list[0]);
                }
                setIsLoadingAofs(false);
            })
            .catch(error => {
                console.error("Error fetching AOF list:", error);
                setIsLoadingAofs(false);
            });
    }, []);

    // Fetch products when selected AOF changes
    useEffect(() => {
        if (selectedAof?.a_name) {
            setIsLoadingProducts(true);
            setProducts([]); // Clear previous products when loading new ones

            axios.get(`${BASE_URL}/products/${encodeURIComponent(selectedAof.a_name)}`)
                .then(response => {
                    const processedProducts = response.data.map(product => {
                        // Process image data if it exists
                        if (product.image && product.image.data) {
                            const base64String = bufferToBase64(product.image.data);
                            return {
                                ...product,
                                imageUrl: `data:image/jpeg;base64,${base64String}`
                            };
                        }
                        return product;
                    });
                    setProducts(processedProducts);
                    setIsLoadingProducts(false);
                })
                .catch(error => {
                    console.error("Error fetching products:", error);
                    setProducts([]);
                    setIsLoadingProducts(false);
                });
        }
    }, [selectedAof]);

    // Handle form submission for new product
    const addProductSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("image", newProduct.image);
        formData.append("name", newProduct.name);
        formData.append("description", newProduct.description);
        formData.append("speciality", newProduct.specialty);
        formData.append("segment", newProduct.segment);
        formData.append("presentation", newProduct.presentation);
        formData.append("composition", newProduct.composition);
        formData.append("a_name", selectedAof?.a_name);
        formData.append("a_id", selectedAof?.id); // Using "id" instead of "a_id"

        axios.post(`${BASE_URL}/products`, formData)
            .then(response => {
                // Refresh products after adding a new one
                if (selectedAof?.a_name) {
                    axios.get(`${BASE_URL}/products/${encodeURIComponent(selectedAof.a_name)}`)
                        .then(response => {
                            const processedProducts = response.data.map(product => {
                                if (product.image && product.image.data) {
                                    const base64String = bufferToBase64(product.image.data);
                                    return {
                                        ...product,
                                        imageUrl: `data:image/jpeg;base64,${base64String}`
                                    };
                                }
                                return product;
                            });
                            setProducts(processedProducts);
                        });
                }
                setShowModal(false);
                setNewProduct({
                    image: null,
                    name: '',
                    description: '',
                    specialty: '',
                    segment: '',
                    presentation: '',
                    composition: ''
                });
            })
            .catch(error => console.error("Error adding product:", error));
    };


    return (
        <>
            {/* Modal for adding a new product */}
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>Add New Product ({selectedAof?.a_name})</h2>
                        <form onSubmit={addProductSubmit}>
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
                                value={newProduct.name}
                                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                                required
                            />
                            <textarea
                                placeholder="Description"
                                value={newProduct.description}
                                onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                                required
                            />
                            <input
                                type="text"
                                placeholder="Specialty"
                                value={newProduct.specialty}
                                onChange={(e) => setNewProduct({ ...newProduct, specialty: e.target.value })}
                                required
                            />
                            <input
                                type="text"
                                placeholder="Segment"
                                value={newProduct.segment}
                                onChange={(e) => setNewProduct({ ...newProduct, segment: e.target.value })}
                                required
                            />
                            <input
                                type="text"
                                placeholder="Presentation"
                                value={newProduct.presentation}
                                onChange={(e) => setNewProduct({ ...newProduct, presentation: e.target.value })}
                                required
                            />
                            <input
                                type="text"
                                placeholder="Composition"
                                value={newProduct.composition}
                                onChange={(e) => setNewProduct({ ...newProduct, composition: e.target.value })}
                                required
                            />

                            {/* Action Buttons */}
                            <div className="modal-actions">
                                <button type="submit">Add Product</button>
                                <button type="button" onClick={() => setShowModal(false)}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Modal for adding a new Area of Focus */}
            {showAofModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>Add New Area of Focus</h2>
                        <form onSubmit={addAreaOfFocus}>
                            {aofError && (
                                <div className="error-message" style={{ color: 'red', marginBottom: '10px' }}>
                                    {aofError}
                                </div>
                            )}
                            <input
                                type="text"
                                placeholder="Area of Focus Name"
                                value={newAof}
                                onChange={(e) => setNewAof(e.target.value)}
                                required
                            />
                            <textarea
                                placeholder="Description (Optional)"
                                value={newAofDes}
                                onChange={(e) => setNewAofDes(e.target.value)}
                            />

                            {/* Action Buttons */}
                            <div className="modal-actions">
                                <button type="submit" disabled={aofLoading}>
                                    {aofLoading ? 'Adding...' : 'Add Area of Focus'}
                                </button>
                                <button type="button" onClick={() => setShowAofModal(false)} disabled={aofLoading}>
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <div className="admin-aof-container">
                <div className="admin-aof-left">
                    <label htmlFor="aof-select" className="admin-aof-label">Area of Focus</label>
                    <button className="admin-add-button" onClick={() => setShowAofModal(true)}>Add</button>

                    {isLoadingAofs ? (
                        <div className="loading-spinner" style={{ padding: "20px", textAlign: "center" }}>
                            <div style={{
                                width: "30px",
                                height: "30px",
                                border: "3px solid rgba(0, 0, 0, 0.1)",
                                borderRadius: "50%",
                                borderTopColor: "#3498db",
                                animation: "spin 1s linear infinite",
                                margin: "0 auto"
                            }}></div>
                            <style jsx>{`
                                @keyframes spin {
                                    to { transform: rotate(360deg); }
                                }
                            `}</style>
                            <p style={{ marginTop: "10px", fontSize: "14px" }}>Loading areas of focus...</p>
                        </div>
                    ) : aofList.length > 0 ? (
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
                    ) : (
                        <div style={{ padding: "20px", textAlign: "center" }}>
                            <p>No areas of focus available. Please add one.</p>
                        </div>
                    )}
                </div>

                <div className="admin-aof-details">
                    <button onClick={() => setShowModal(true)}>Add Product</button>

                    <div className="admin-product-container">
                        {isLoadingProducts ? (
                            <div className="loading-spinner" style={{
                                padding: "40px",
                                textAlign: "center",
                                width: "100%",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                                <div style={{
                                    width: "40px",
                                    height: "40px",
                                    border: "4px solid rgba(0, 0, 0, 0.1)",
                                    borderRadius: "50%",
                                    borderTopColor: "#3498db",
                                    animation: "spin 1s linear infinite"
                                }}></div>
                                <style jsx>{`
                                    @keyframes spin {
                                        to { transform: rotate(360deg); }
                                    }
                                `}</style>
                                <p style={{ marginTop: "15px", fontSize: "16px" }}>Loading products...</p>
                            </div>
                        ) : products.length > 0 ? (
                            products.map((product, index) => (
                                <div key={index} className="admin-product-card">
                                    <div className="admin-product-image-section">
                                        {/* Use product.imageUrl if available, fall back to default image */}
                                        <img
                                            src={product.imageUrl || did}
                                            alt={product.name}
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = did;
                                            }}
                                        />
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
                            ))
                        ) : (
                            // "No data" message when no products are available
                            <div style={{
                                width: "100%",
                                padding: "50px 20px",
                                textAlign: "center",
                                backgroundColor: "#f8f9fa",
                                borderRadius: "8px",
                                margin: "20px 0"
                            }}>
                                <div style={{ fontSize: "60px", color: "#ccc", marginBottom: "15px" }}>
                                    📦
                                </div>
                                <h3 style={{ fontSize: "22px", color: "#555", marginBottom: "10px" }}>
                                    No Products Found
                                </h3>
                                <p style={{ color: "#777", maxWidth: "500px", margin: "0 auto 20px" }}>
                                    There are no products available for {selectedAof?.a_name || "this area of focus"}.
                                </p>
                                <button
                                    onClick={() => setShowModal(true)}
                                    style={{
                                        background: "#4a90e2",
                                        color: "white",
                                        border: "none",
                                        padding: "10px 20px",
                                        borderRadius: "4px",
                                        cursor: "pointer",
                                        fontWeight: "bold"
                                    }}
                                >
                                    Add Your First Product
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductSection;