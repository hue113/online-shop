import React from "react";
import ProductCard from "../product-card/ProductCard.component";

const FeaturedProducts = () => {
  return (
    <div className="section featured-products">
      <div className="container">
        <div className="section-title py-4 mb-5">
          <h2 className="title">Featured Product</h2>
          <p className="text-desc">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered lebmid alteration in some ledmid form
          </p>
        </div>
        <div className="row">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
