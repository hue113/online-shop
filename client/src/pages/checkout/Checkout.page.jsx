import React from 'react';
import MetaTags from 'react-meta-tags';

import Layout from '../../components/layout/Layout.component';
import CheckoutItem from './sub-component/CheckoutItem.component';

const Checkout = () => {
  return (
    <div className="checkout">
      <MetaTags>
        <title>Shine | Checkout</title>
        <meta name="description" content="Shine Online Shop" />
      </MetaTags>

      <Layout>
        <div className="row">
          <div className="col-8">
            <CheckoutItem />
            <CheckoutItem />
          </div>
          <div className="col-4">Price</div>
        </div>
      </Layout>
    </div>
  );
};

export default Checkout;
