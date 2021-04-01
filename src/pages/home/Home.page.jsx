import React from "react";
import MetaTags from "react-meta-tags";
import Category from "../../components/category/Category.component";

import Features from "../../components/features/Features.component";
import Layout from "../../components/layout/Layout.component";
import Services from "../../components/services/Services.component";
import Carousel from "../../components/carousel/Carousel.component";

const Home = () => {
  return (
    <div className="home">
      <MetaTags>
        <title>Shine | New Collection Online</title>
        <meta name="description" content="Shine Online Shop." />
      </MetaTags>

      <Layout>
        <Carousel />
        <Services />
        <Features />
        <Category />
      </Layout>
    </div>
  );
};

export default Home;
