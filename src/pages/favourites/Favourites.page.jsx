import React from 'react';
import MetaTags from 'react-meta-tags';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Layout from '../../components/layout/Layout.component';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs.component';
import FavouriteItem from './sub-components/FavouriteItem.component';
import Button from '../../components/custom-button/Button.component';
import { selectFavouriteItems } from '../../redux/favourite/favourite.selectors';

const Favourites = ({ favourites, removeItemFromFavourite }) => {
  return (
    <div className="favourites">
      <MetaTags>
        <title>Shine | Favourites</title>
        <meta name="description" content="Shine Online Shop" />
      </MetaTags>

      <Layout>
        <Breadcrumbs path="home, favourites" />

        <div className="container favourites-wrapper">
          {favourites && (
            <p className="favourites-count px-2">
              Showing 1–
              {favourites.length < 12 ? favourites.length : 12} of {favourites.length}{' '}
              results{' '}
            </p>
          )}

          {favourites.length === 0 ? (
            <div className="empty text-center">
              <p className="my-5">Your wishlist is empty</p>
              <Button
                name="Shop Now"
                styleClass="square color lighter my-5"
                link="/shop"
              />
            </div>
          ) : (
            <div className="row row-cols-1 row-cols-md-2">
              {favourites.map((item) => (
                <div key={item.sku}>
                  <FavouriteItem product={item} />
                </div>
              ))}
            </div>
          )}
        </div>
      </Layout>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  favourites: selectFavouriteItems,
});

export default connect(mapStateToProps)(Favourites);
