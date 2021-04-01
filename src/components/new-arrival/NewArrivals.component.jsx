import React from "react";
import ProductCard from "../product-card/ProductCard.component";

const NewArrival = () => {
  return (
    <div className="section new-arrival">
      <div className="container">
        <div className="section-title py-4 my-5">
          <h2 className="title">New Arrivals</h2>
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
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
