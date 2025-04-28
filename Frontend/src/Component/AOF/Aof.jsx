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
    console.log(products);
    return (
        <>{showModal && selectedProduct && (
            <div className="inquiry-modal-overlay" onClick={() => setShowModal(false)}>
                <div className="inquiry-modal" onClick={e => e.stopPropagation()}>
                    <h2>Inquiry Form</h2>
                    <img src={did} alt={selectedProduct.name} className="modal-product-image" />
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
                {products.map((product, index) => (
                    <div key={index} className="product-card">
                        <div className="product-image-section">
                            <img src={did} alt={product.name}  />
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
                ))}
            </div>




            <Blog products={products}/>
        </>
    );
}

export default Aof;
