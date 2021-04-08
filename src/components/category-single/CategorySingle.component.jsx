import React from "react";
import { useParams } from "react-router-dom";

import ProductCard from "../product-card/ProductCard.component";
import { shop } from "../../data/shop.js";

const CategorySingle = () => {
  const { category } = useParams();
  let data = [];
  if (category === "sale") {
    let allProducts = [];
    shop.map((el) => el.items.map((el) => allProducts.push(el)));
    data.items = allProducts.filter((product) => product.discount !== 0);
  } else {
    data = shop.filter((el) => el.link.substr(6) === category)[0];
  }

  return (
    <div className="section category-single">
      <div className="container">
        <div className="section-title d-flex align-items-baseline pb-4 mb-4">
          {category === "sale" ? (
            <h1 className="">All Sale Products</h1>
          ) : (
            <h1 className="">{data.title}</h1>
          )}
        </div>
        <div className="row row-cols-2 row-cols-md-3">
          {data.items.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          {data.items.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySingle;
