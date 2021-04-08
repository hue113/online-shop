import React from "react";
import MetaTags from "react-meta-tags";

import Category from "../../components/category/Category.component";
import FeaturedProducts from "../../components/featured-products/FeaturedProducts.component";
import Layout from "../../components/layout/Layout.component";
import Services from "../../components/services/Services.component";
import ImageSlider from "../../components/image-slider/ImageSlider.component";
import NewArrival from "../../components/new-arrival/NewArrivals.component";
import HotDeal from "../../components/hot-deal/HotDeal.component";
import Stores from "../../components/stores/Stores.component";

const Home = () => {
  return (
    <div className="home">
      <MetaTags>
        <title>Shine | New Clothes, New Passion</title>
        <meta name="description" content="Shine Online Shop" />
      </MetaTags>

      <Layout>
        <ImageSlider />
        <Services />
        <Category />
        <FeaturedProducts />
        <HotDeal />
        <NewArrival />
        <Stores />
      </Layout>
    </div>
  );
};

export default Home;
