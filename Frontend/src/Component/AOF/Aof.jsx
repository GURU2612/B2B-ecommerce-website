import React, {useEffect, useState} from "react";
import axios from "axios";
import BASE_URL from "../../config";
import Blog from "../../Content/Blog/Blog.jsx";
import Banner from "../../Content/AboutusBanner/Banner.jsx";
import "./Aof.css";
import im from '../../assets/images/aof.png';
import did from "../../assets/images/def_img.png";

function Aof() {
    const [aofList, setAofList] = useState([]);
    const [selectedAof, setSelectedAof] = useState(null);
    const [products, setProducts] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isLoadingProducts, setIsLoadingProducts] = useState(false);

    // Convert byte array to base64 string
    const bufferToBase64 = (bufferData) => {
        if (!bufferData || !bufferData.data || !bufferData.data.length) return null;
        const binary = Array.from(bufferData.data).map(byte => String.fromCharCode(byte)).join('');
        return window.btoa(binary);
    };

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
            setIsLoadingProducts(true);
            axios.get(`${BASE_URL}/products/${encodeURIComponent(selectedAof.a_name)}`)
                .then(response => {
                    // Process products with image data
                    const processedProducts = response.data.map(product => {
                        // Process image data if it exists
                        if (product.image && product.image.data) {
                            const base64String = bufferToBase64(product.image);
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
                    setIsLoadingProducts(false);
                });
        }
    }, [selectedAof]);

    return (
        <>{showModal && selectedProduct && (
            <div className="inquiry-modal-overlay" onClick={() => setShowModal(false)}>
                <div className="inquiry-modal" onClick={e => e.stopPropagation()}>
                    <h2>Inquiry Form</h2>
                    {/* Use imageUrl if available, fall back to default image */}
                    <img
                        src={selectedProduct.imageUrl || did}
                        alt={selectedProduct.name}
                        className="modal-product-image"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = did;
                        }}
                    />
                    <h3>{selectedProduct.name}</h3>

                    <form className="inquiry-form">
                        <input type="text" placeholder="Your Name" required />
                        <input type="email" placeholder="Your Email" required />
                        <input type="text" placeholder="Contact Number" required />
                        <button type="submit" className="Inquiry-btn">Submit Inquiry</button>
                    </form>
                </div>
            </div>
        )}

            <Banner
                title={selectedAof?.a_name || ""}
                description={
                    (selectedAof?.description?.slice(0, 200)) +
                    (selectedAof?.description?.length > 50 ? "..." : "")
                }
                breadcrumb={`Home > ${selectedAof?.a_name || ""}`}
            />

            <div className="aof-container">
                <div>
                    <label htmlFor="aof-select" className="aof-label">Area Of Focus</label>
                    <ul className="aof-list" id="aof-select">
                        {aofList.map((aof, index) => (
                            <li
                                key={index}
                                className={`aof-item ${selectedAof?.a_name === aof.a_name ? "active" : ""}`}
                                onClick={() => setSelectedAof(aof)}
                            >
                                <span>{aof.a_name}</span>
                                <button className="add-btn">+</button>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="aof-details">
                    <img src={im} alt="AOF Visual" className="aof-image"/>
                    <p className="aof-description">{selectedAof?.description}</p>
                </div>
            </div>

            <div className="product-container">
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
                        <div key={index} className="product-card">
                            <div className="product-image-section">
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

                            <div className="product-main-info">
                                <h3>{product.name}</h3>
                                <p>{product.description}</p>
                                <button
                                    className="Inquiry-btn"
                                    onClick={() => {
                                        setSelectedProduct(product);
                                        setShowModal(true);
                                    }}
                                >
                                    Inquiry Now
                                </button>
                            </div>

                            <div className="product-details">
                                <p><strong>Specialty:</strong> {product.speciality}</p>
                                <p><strong>Segment Presentation:</strong> {product.segment_presentation}</p>
                                <p><strong>Presentation:</strong> {product.presentation}</p>
                                <p><strong>Composition:</strong> {product.composition}</p>
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
                    </div>
                )}
            </div>

            <Blog products={products}/>
        </>
    );
}

export default Aof;