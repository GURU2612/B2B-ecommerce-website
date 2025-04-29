import React, { useState } from "react";
import "./Product.css";
import im1 from "@src/assets/images/def_img.png";

const Product = () => {
  const [activeTab, setActiveTab] = useState("neuropathic");

  const handleTabChange = (tabValue) => {
    setActiveTab(tabValue);
  };

  return (
      <div className="product_unique_container_xz429">
        <div className="product_unique_header_section_ab782">
          <h2 className="product_unique_title_p493">Products</h2>
          <h3 className="product_unique_subtitle_m672">Our Wide Range in Every Filed</h3>
        </div>

        <div className="product_unique_content_wrapper_ij235">
          <div className="product_unique_left_column_gh456">
            <div className="product_unique_brand_card_qw321">
              <div className="product_unique_brand_logo_vt789">
                <span style={{ color: '#F97316', fontWeight: 'bold', fontSize: '24px' }}>NOVA</span>
                <span style={{ color: '#7E69AB', fontWeight: 'bold', fontSize: '24px' }}>MEGH</span>
              </div>
            </div>

            <div className="product_unique_brand_card_qw321">
              <div className="product_unique_brand_logo_vt789">
                <span style={{ color: '#F97316', fontWeight: 'bold', fontSize: '24px' }}>RESPI</span>
                <span style={{ color: '#7E69AB', fontWeight: 'bold', fontSize: '24px' }}>MEGH</span>
              </div>
            </div>

            <div className="product_unique_brand_card_qw321">
              <div className="product_unique_brand_logo_vt789">
                <span style={{ color: '#7E69AB', fontWeight: 'bold', fontSize: '24px' }}>Epimegh</span>
              </div>
            </div>
          </div>

          <div className="product_unique_middle_column_ty678">
            <div className="product_unique_categories_bar_op543">
              <div
                  className={`product_unique_category_item_nm432 ${activeTab === "neuropathic" ? "product_unique_active_lk098" : ""}`}
                  onClick={() => handleTabChange("neuropathic")}
              >
                <span>Neuropathic Pain Management</span>
              </div>
              <div
                  className={`product_unique_category_item_nm432 ${activeTab === "clinical" ? "product_unique_active_lk098" : ""}`}
                  onClick={() => handleTabChange("clinical")}
              >
                <span>Clinical Nutrition</span>
              </div>
              <div
                  className={`product_unique_category_item_nm432 ${activeTab === "gastro" ? "product_unique_active_lk098" : ""}`}
                  onClick={() => handleTabChange("gastro")}
              >
                <span>Gastro Intestinal Care</span>
              </div>
              <div
                  className={`product_unique_category_item_nm432 ${activeTab === "pain" ? "product_unique_active_lk098" : ""}`}
                  onClick={() => handleTabChange("pain")}
              >
                <span>Pain Management</span>
              </div>
            </div>

            <div className="product_unique_products_grid_fg743">
              {activeTab === "neuropathic" && (
                  <>
                    <div className="product_unique_product_card_rt654">
                      <div className="product_unique_product_info_yu876">
                        <div className="product_unique_product_logo_sd234">Probedia</div>
                        <button className="product_unique_know_more_btn_hj765">Know More</button>
                      </div>
                      <div className="product_unique_product_image_container_kl321">
                        <img src={im1} alt="Probedia Product" className="product_unique_product_image_zx098" />
                      </div>
                    </div>

                    <div className="product_unique_product_card_rt654">
                      <div className="product_unique_product_info_yu876">
                        <div className="product_unique_product_logo_sd234">SarcoBoost</div>
                        <button className="product_unique_know_more_btn_hj765">Know More</button>
                      </div>
                      <div className="product_unique_product_image_container_kl321">
                        <img src={im1} alt="SarcoBoost Product" className="product_unique_product_image_zx098" />
                      </div>
                    </div>

                    <div className="product_unique_product_card_rt654">
                      <div className="product_unique_product_info_yu876">
                        <div className="product_unique_product_logo_sd234">HaloBoost</div>
                        <button className="product_unique_know_more_btn_hj765">Know More</button>
                      </div>
                      <div className="product_unique_product_image_container_kl321">
                        <img src={im1} alt="HaloBoost Product" className="product_unique_product_image_zx098" />
                      </div>
                    </div>
                  </>
              )}

              {activeTab === "clinical" && (
                  <div className="product_unique_product_card_rt654">
                    <div className="product_unique_product_info_yu876">
                      <div className="product_unique_product_logo_sd234">Probedia</div>
                      <button className="product_unique_know_more_btn_hj765">Know More</button>
                    </div>
                    <div className="product_unique_product_image_container_kl321">
                      <img src={im1} alt="Probedia Product" className="product_unique_product_image_zx098" />
                    </div>
                  </div>
              )}

              {activeTab === "gastro" && (
                  <div className="product_unique_product_card_rt654">
                    <div className="product_unique_product_info_yu876">
                      <div className="product_unique_product_logo_sd234">HaloBoost</div>
                      <button className="product_unique_know_more_btn_hj765">Know More</button>
                    </div>
                    <div className="product_unique_product_image_container_kl321">
                      <img src={im1} alt="HaloBoost Product" className="product_unique_product_image_zx098" />
                    </div>
                  </div>
              )}

              {activeTab === "pain" && (
                  <div className="product_unique_product_card_rt654">
                    <div className="product_unique_product_info_yu876">
                      <div className="product_unique_product_logo_sd234">SarcoBoost</div>
                      <button className="product_unique_know_more_btn_hj765">Know More</button>
                    </div>
                    <div className="product_unique_product_image_container_kl321">
                      <img src={im1} alt="SarcoBoost Product" className="product_unique_product_image_zx098" />
                    </div>
                  </div>
              )}
            </div>
          </div>

          <div className="product_unique_right_column_ws987">
            <div className="product_unique_doctor_image_container_qr765">
              <img src={im1} alt="Doctor with fruits" className="product_unique_doctor_image_bn432" />
            </div>
          </div>
        </div>
      </div>
  );
};

export default Product;