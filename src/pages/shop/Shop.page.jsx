import React from "react";
import MetaTags from "react-meta-tags";

import Layout from "../../components/layout/Layout.component";

const Shop = () => {
  return (
    <div className="shop">
      <MetaTags>
        <title>Shine | New Collection Online</title>
        <meta name="description" content="Shine Online Shop." />
      </MetaTags>

      <Layout></Layout>
    </div>
  );
};

export default Shop;
