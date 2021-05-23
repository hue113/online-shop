import React, { useEffect } from 'react';
import MetaTags from 'react-meta-tags';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Layout from '../../components/layout/Layout.component';
import ShopPreview from '../../components/shop-preview/ShopPreview.component';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs.component';
import { fetchProductsStartAsync } from '../../redux/product/product.actions';
import {
  selectProducts,
  selectWomenProducts,
  selectMenProducts,
  selectKidsProducts,
  selectAccessoriesProducts,
  selectNewArrivalsProducts,
  selectSaleProducts,
} from '../../redux/product/product.selectors';

const Shop = ({
  fetchProductsStartAsync,
  allProducts,
  womenProducts,
  menProducts,
  kidsProducts,
  accessoriesProducts,
  newArrivalsProducts,
  saleProducts,
}) => {
  useEffect(() => {
    fetchProductsStartAsync();
  }, [fetchProductsStartAsync]);

  return (
    <div className="shop">
      <MetaTags>
        <title>Shine | Shop All Collections </title>
        <meta name="description" content="Shine Online Shop" />
      </MetaTags>

      <Layout>
        <Breadcrumbs path="home, shop" />
        {allProducts && (
          <>
            <ShopPreview
              title="Women Collections"
              link="/shop/women"
              data={womenProducts}
            />
            <ShopPreview title="Men Collections" link="/shop/men" data={menProducts} />
            <ShopPreview title="Kids Collections" link="/shop/kids" data={kidsProducts} />
            <ShopPreview
              title="Shoes & Accessories"
              link="/shop/accessories"
              data={accessoriesProducts}
            />
            <ShopPreview
              title="New Arrivals"
              link="/shop/new-arrivals"
              data={newArrivalsProducts}
            />
            <ShopPreview
              title="All Sale Products"
              link="/shop/sale"
              data={saleProducts}
            />
          </>
        )}
      </Layout>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  allProducts: selectProducts,
  womenProducts: selectWomenProducts,
  menProducts: selectMenProducts,
  kidsProducts: selectKidsProducts,
  accessoriesProducts: selectAccessoriesProducts,
  newArrivalsProducts: selectNewArrivalsProducts,
  saleProducts: selectSaleProducts,
});

const mapDispatchToProps = (dispatch) => ({
  fetchProductsStartAsync: () => dispatch(fetchProductsStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
