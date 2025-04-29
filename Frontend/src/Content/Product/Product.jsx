
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import "./ProductSection.css";
import nutritionProduct from "/lovable-uploads/798f52e2-1f9c-4378-a104-651985a4f3a9.png";

const ProductSection = () => {
  return (
      <section className="product-section" id="products">
        <div className="container">
          <h2 className="product-category">Products</h2>
          <h3 className="product-title">Our Wide Range in Every Filed</h3>

          <Tabs defaultValue="neuropathic" className="product-tabs">
            <TabsList className="product-tabs-list">
              <TabsTrigger value="neuropathic">Neuropathic Pain Management</TabsTrigger>
              <TabsTrigger value="clinical">Clinical Nutrition</TabsTrigger>
              <TabsTrigger value="gastro">Gastro Intestinal Care</TabsTrigger>
              <TabsTrigger value="pain">Pain Management</TabsTrigger>
            </TabsList>

            <div className="product-content">
              <div className="product-brands">
                <div className="brand-card">
                  <img src="/novamegh-logo.png" alt="Novamegh" className="brand-logo" />
                </div>
                <div className="brand-card">
                  <img src="/respimegh-logo.png" alt="Respimegh" className="brand-logo" />
                </div>
                <div className="brand-card">
                  <img src="/epimegh-logo.png" alt="Epimegh" className="brand-logo" />
                </div>
              </div>

              <div className="product-showcase">
                <TabsContent value="neuropathic" className="tab-content">
                  <div className="product-grid">
                    <Card className="product-card">
                      <CardContent className="product-card-content">
                        <div className="product-info">
                          <h4 className="product-name">Probedita<span>™</span></h4>
                          <Button variant="link" className="know-more-btn">Know More</Button>
                        </div>
                        <div className="product-image">
                          <img src={nutritionProduct} alt="Probedita Product" />
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="product-card">
                      <CardContent className="product-card-content">
                        <div className="product-info">
                          <h4 className="product-name">SarcoBoost<span>™</span></h4>
                          <Button variant="link" className="know-more-btn">Know More</Button>
                        </div>
                        <div className="product-image">
                          <img src={nutritionProduct} alt="SarcoBoost Product" />
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="product-card">
                      <CardContent className="product-card-content">
                        <div className="product-info">
                          <h4 className="product-name">HaloBoost<span>™</span></h4>
                          <Button variant="link" className="know-more-btn">Know More</Button>
                        </div>
                        <div className="product-image">
                          <img src={nutritionProduct} alt="HaloBoost Product" />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="clinical" className="tab-content">
                  <div className="product-grid">
                    <Card className="product-card">
                      <CardContent className="product-card-content">
                        <div className="product-info">
                          <h4 className="product-name">Probedita<span>™</span></h4>
                          <Button variant="link" className="know-more-btn">Know More</Button>
                        </div>
                        <div className="product-image">
                          <img src={nutritionProduct} alt="Probedita Product" />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="gastro" className="tab-content">
                  <div className="product-grid">
                    <Card className="product-card">
                      <CardContent className="product-card-content">
                        <div className="product-info">
                          <h4 className="product-name">HaloBoost<span>™</span></h4>
                          <Button variant="link" className="know-more-btn">Know More</Button>
                        </div>
                        <div className="product-image">
                          <img src={nutritionProduct} alt="HaloBoost Product" />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="pain" className="tab-content">
                  <div className="product-grid">
                    <Card className="product-card">
                      <CardContent className="product-card-content">
                        <div className="product-info">
                          <h4 className="product-name">SarcoBoost<span>™</span></h4>
                          <Button variant="link" className="know-more-btn">Know More</Button>
                        </div>
                        <div className="product-image">
                          <img src={nutritionProduct} alt="SarcoBoost Product" />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </div>

              <div className="product-expert">
                <img src={nutritionProduct} alt="Healthcare Expert" className="expert-image" />
              </div>
            </div>
          </Tabs>
        </div>
      </section>
  );
};

export default ProductSection;
