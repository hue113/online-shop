import React from "react";
import MetaTags from "react-meta-tags";
import { useParams } from "react-router-dom";

import Layout from "../../components/layout/Layout.component";
import CategorySingle from "../../components/category-single/CategorySingle.component";
import Sidebar from "../../components/sidebar/Sidebar.component";
// import { shop } from "../../data/shop.js";
import { categories } from "../../data/categories.js";

const ShopSingle = () => {
  const { category } = useParams();

  return (
    <div className="shop-single">
      <MetaTags>
        <title>
          Shine |{" "}
          {category === "sale"
            ? "Sale"
            : categories.filter(
                (el) => el.link.split("/shop/")[1] === category
              )[0].title}
        </title>
        <meta name="description" content="Shine Online Shop" />
      </MetaTags>

      <Layout>
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <CategorySingle />
            </div>
            <div className="col-md-3">
              <Sidebar />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default ShopSingle;
