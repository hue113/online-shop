import React from "react";
import { Link } from "react-router-dom";

import ProductCard from "../product-card/ProductCard.component";
import { shop } from "../../data/shop.js";

const NewArrival = () => {
  const data = shop.filter((el) => el.link.substr(6) === "new-arrivals")[0];

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
        <div className="row row-cols-2 row-cols-md-4">
          {data.items.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id}>
              <ProductCard product={product} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
