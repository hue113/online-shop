import React from "react";
import MetaTags from "react-meta-tags";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs.component";

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
        <Breadcrumbs path="home, stores" />
        <Map />
      </Layout>
    </div>
  );
};

export default StoreLocator;
