import React from 'react';
import MetaTags from 'react-meta-tags';

import Layout from '../../components/layout/Layout.component';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs.component';
import BillingDetails from './sub-component/BillingDetails.component';
import OrderSummary from './sub-component/OrderSummary.component';

const Checkout = () => {
  return (
    <div className="checkout">
      <MetaTags>
        <title>Shine | Checkout</title>
        <meta name="description" content="Shine Online Shop" />
      </MetaTags>

      <Layout>
        <Breadcrumbs path="home, checkout" />
        <div className="container">
          <div className="row"></div>
          <div className="row">
            <div className="col-md-6">
              <BillingDetails />
            </div>
            <div className="col-md-6">
              <OrderSummary />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Checkout;
