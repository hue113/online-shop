import React from 'react';
import MetaTags from 'react-meta-tags';

import Category from '../../components/category/Category.component';
import Layout from '../../components/layout/Layout.component';

const Favourites = () => {
  return (
    <div className="favourites">
      <MetaTags>
        <title>Shine | Favourites</title>
        <meta name="description" content="Shine Online Shop" />
      </MetaTags>

      <Layout>
        <Category />
      </Layout>
    </div>
  );
};

export default Favourites;
