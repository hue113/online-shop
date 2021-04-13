import React from "react";

import ProductSlider from "../../../components/product-slider/ProductSlider.component";
import { shop } from "../../../data/shop";
import { shuffleArray } from "../../../utils/helper";

const RelatedProducts = ({ product }) => {
  const relatedProducts = shop.find(
    (el) => el.title.toLowerCase() === product.category.toLowerCase()
  ).items;
  let products = shuffleArray(relatedProducts);
  // let products = relatedProducts;

  return (
    <div className="section related-product w-100">
      <h2 className="title text-center mb-4">Related Products</h2>
      <div className="row">
        <ProductSlider products={products} />
      </div>
    </div>
  );
};

export default RelatedProducts;
