import React from "react";
import { Link } from "react-router-dom";

import ProductSlider from "../product-slider/ProductSlider.component";

const ShopPreview = ({ data, title, link }) => {
  // console.log(data);
  return (
    <div className="section shop-preview">
      <div className="container">
        <div className="section-title d-flex align-items-baseline pb-4 mb-4">
          <h2 className="ml-5">{title}</h2>
          <Link to={link} className="text-link ml-auto mr-5">
            View all <i className="bi bi-arrow-right" />
          </Link>
        </div>
        <div className="row">
          <ProductSlider products={data} />
        </div>
      </div>
    </div>
  );
};

export default ShopPreview;
