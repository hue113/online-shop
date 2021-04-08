import React from "react";
import MetaTags from "react-meta-tags";

import Layout from "../../components/layout/Layout.component";
import CategorySingle from "../../components/category-single/CategorySingle.component";
import Sidebar from "../../components/sidebar/Sidebar.component";

const ShopSingle = () => {
  return (
    <div className="shop-single">
      <MetaTags>
        <title>Shine | New Spring Collection</title>
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
