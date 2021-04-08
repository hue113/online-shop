import React from "react";
import { Link } from "react-router-dom";

import ProductSlider from "./ProductSlider.component";

const ShopPreview = ({ data }) => {
  return (
    <div className="section shop-preview">
      <div className="container">
        <div className="section-title d-flex align-items-baseline pb-4 mb-4">
          <h1 className="">{data.title}</h1>
          <Link to={data.link} className="text-link ml-auto">
            <span className="mr-2">View all</span>{" "}
            <i className="bi bi-arrow-right" />
          </Link>
        </div>
        <div className="row">
          <ProductSlider products={data.items} />
        </div>
      </div>
    </div>
  );
};

export default ShopPreview;
