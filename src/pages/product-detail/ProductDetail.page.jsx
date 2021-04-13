import React, { useEffect } from "react";
import MetaTags from "react-meta-tags";
import { useParams } from "react-router-dom";

import Layout from "../../components/layout/Layout.component";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs.component";
import ProductImageGallery from "./sub-components/ProductImageGallery.component";
import MainInfo from "./sub-components/MainInfo.component";
import AdditionalInfo from "./sub-components/AdditionalInfo.component";
import { shop } from "../../data/shop";
import RelatedProducts from "./sub-components/RelatedProducts.component";

const ProductDetail = () => {
  const { id } = useParams();
  let product;
  shop.filter((category) =>
    category.items.find((i) => (i.id === id ? (product = i) : ""))
  );

  useEffect(() => {
    // store to localstorage & slice the array to save storage
    // let recentViewed = JSON.parse(localStorage.getItem("recentViewed") || "[]");
    // const isExisted = recentViewed.some((el) => el.id === product.id);
    // if (!isExisted) {
    //   if (recentViewed.length > 3) {
    //     const newRecent = recentViewed.slice(-3);
    //     recentViewed = newRecent;
    //   }
    //   localStorage.setItem(
    //     "recentViewed",
    //     JSON.stringify([...recentViewed, product])
    //   );
    // }
    let recentViewed = JSON.parse(
      localStorage.getItem("recentViewed") || "new Set"
    );
    const isExisted = recentViewed.some((el) => el.id === product.id);
    if (!isExisted) {
      if (recentViewed.length > 3) {
        const newRecent = recentViewed.slice(-3);
        recentViewed = newRecent;
      }
      localStorage.setItem(
        "recentViewed",
        JSON.stringify([...recentViewed, product])
      );
    }
  }, [product, id]);

  return (
    <div className="product-detail">
      <MetaTags>
        <title>Shine | {product.name} </title>
        <meta name="description" content="Shine Online Shop" />
      </MetaTags>

      <Layout>
        <Breadcrumbs
          path={`home, shop, ${product.category}`}
          productName={product.name}
          productPath={`/products/${product.id}`}
        />
        <div className="container">
          <div className="row">
            <div className="col-md-6 pr-md-5">
              <ProductImageGallery product={product} />
            </div>
            <div className="col-md-6">
              <MainInfo product={product} />
            </div>
          </div>
          <div className="row">
            <AdditionalInfo product={product} />
          </div>
          <div className="row">
            <RelatedProducts product={product} />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default ProductDetail;
