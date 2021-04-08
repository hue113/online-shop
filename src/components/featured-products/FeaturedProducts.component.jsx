import React from "react";

import ProductCard from "../product-card/ProductCard.component";
import { shop } from "../../data/shop.js";

const FeaturedProducts = () => {
  let allProducts = [];
  shop.map((el) => el.items.map((el) => allProducts.push(el)));
  const popularProducts = allProducts.filter(
    (product) => product.saleCount < 30
  );
  // console.log("popularProducts", popularProducts);

  return (
    <div className="section featured-products">
      <div className="container">
        <div className="section-title py-4 mb-5">
          <h2 className="title">Popular Products</h2>
          <p className="text-desc">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered lebmid alteration in some ledmid form
          </p>
        </div>
        <div className="row row-cols-2 row-cols-md-4">
          {popularProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
