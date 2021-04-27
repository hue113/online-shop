import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../../../redux/user/user.selectors';
import MyOrders from '../../../components/my-orders/MyOrders.components';
import Settings from '../../../components/settings/Settings.component';
import MyPayment from '../../../components/my-payment/MyPayment.component';
import MyReviews from '../../../components/my-reviews/MyReviews.component';

const AccountMain = ({ selection, currentUser }) => {
  return (
    <div className="account-main p-0 flex-grow-1">
      <div className="account-main-wrapper">
        {selection === 'orders' && <MyOrders user={currentUser} />}
        {selection === 'reviews' && <MyReviews user={currentUser} />}
        {selection === 'payment' && <MyPayment user={currentUser} />}
        {selection === 'settings' && <Settings user={currentUser} />}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

// export default Dashboard;
export default connect(mapStateToProps)(AccountMain);
