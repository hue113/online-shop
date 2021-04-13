import React from "react";
import MetaTags from "react-meta-tags";

import Layout from "../../components/layout/Layout.component";
import ShopPreview from "../../components/shop-preview/ShopPreview.component";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs.component";
import { shop } from "../../data/shop.js";

const Shop = () => {
  return (
    <div className="shop">
      <MetaTags>
        <title>Shine | Shop All Collections </title>
        <meta name="description" content="Shine Online Shop" />
      </MetaTags>

      <Layout>
        <Breadcrumbs path="home, shop" />
        {shop.map((category) => (
          <ShopPreview key={category.id} data={category} />
        ))}
      </Layout>
    </div>
  );
};

export default Shop;
