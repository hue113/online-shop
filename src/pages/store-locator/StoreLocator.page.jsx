import React from "react";
import MetaTags from "react-meta-tags";

import Layout from "../../components/layout/Layout.component";
import Map from "./sub-components/Map.component";

const StoreLocator = () => {
  return (
    <div className="store-locator">
      <MetaTags>
        <title>Shine | Find A Store </title>
        <meta name="description" content="Shine Online Shop" />
      </MetaTags>

      <Layout>
        <Map />
      </Layout>
    </div>
  );
};

export default StoreLocator;
