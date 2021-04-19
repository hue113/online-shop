import React, { useEffect, useState } from "react";
import axios from "axios";
import MetaTags from "react-meta-tags";
import { useParams } from "react-router-dom";
// import { connect } from "react-redux";
// import { createStructuredSelector } from "reselect";

import Layout from "../../components/layout/Layout.component";
import CategorySingle from "../../components/category-single/CategorySingle.component";
import Sidebar from "../../components/sidebar/Sidebar.component";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs.component";
import { capitalizeFirstLetterEachWord } from "../../utils/helper";

const ShopSingle = () => {
  const { category } = useParams();
  const [products, setProducts] = useState();

  useEffect(() => {
    console.log("fetching");
    axios
      .get(`http://localhost:3030/api/v1/products/${category}`)
      .then((res) => {
        const products = res.data.data;
        console.log(products);
        setProducts(products);
      });
    // };
    return () => {};
  }, [category]);

  return (
    <div className="shop-single">
      <MetaTags>
        <title>Shine | {capitalizeFirstLetterEachWord(category)}</title>
        <meta name="description" content="Shine Online Shop" />
      </MetaTags>

      <Layout>
        <Breadcrumbs path={`home, shop, ${category}`} name="Shop Page" />
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              {products && <CategorySingle categoryProducts={products} />}
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

// const mapStateToProps = createStructuredSelector({
//   categories: selectCategories,
// });

// export default connect(mapStateToProps)(ShopSingle);
export default ShopSingle;
