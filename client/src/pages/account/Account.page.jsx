import React, { useState } from 'react';
import MetaTags from 'react-meta-tags';

import Layout from '../../components/layout/Layout.component';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs.component';
import Dashboard from './sub-components/Dashboard.component';
import AccountMain from './sub-components/AccountMain.componen';

const Account = () => {
  const [selection, setSelection] = useState('orders');

  return (
    <div className="account-page">
      <MetaTags>
        <title>Shine | Account</title>
        <meta name="description" content="Shine Online Shop" />
      </MetaTags>

      <Layout>
        <Breadcrumbs path="home, account" />

        <div className="container">
          <div className="row content-wrapper mb-5 d-flex flex-wrap">
            <Dashboard setSelection={setSelection} />
            <AccountMain selection={selection} />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Account;
