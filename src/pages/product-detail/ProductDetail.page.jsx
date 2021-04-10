import React from "react";
import MetaTags from "react-meta-tags";

import Layout from "../../components/layout/Layout.component";
import ProductDetailLeftSide from "./sub-components/ProductDetailLeftSide.component";
import ProductDetailRightSide from "./sub-components/ProductDetailRightSide.component";
import { shop } from "../../data/shop";
import ProductDetailBottomTab from "./sub-components/ProductDetailBottomTab.component";

const ProductDetail = () => {
  const product = shop[0].items[0];
  console.log(product);

  return (
    <div className="product-detail">
      <MetaTags>
        <title>Shine | {product.name} </title>
        <meta name="description" content="Shine Online Shop" />
      </MetaTags>

      <Layout>
        <div className="container">
          <div className="row section center-block d-flex align-items-center justify-content-center">
            BreadCrumb
          </div>
          <div className="row">
            <div className="col-md-6 pr-md-5">
              <ProductDetailLeftSide product={product} />
            </div>
            <div className="col-md-6">
              <ProductDetailRightSide product={product} />
            </div>
          </div>
          <div className="row">
            <ProductDetailBottomTab product={product} />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default ProductDetail;
