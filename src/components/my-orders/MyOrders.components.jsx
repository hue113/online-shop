import React, { useState, useEffect } from 'react';
import axios from 'axios';

import MyOrderCard from './sub-components/MyOrderCard.component';

const MyOrders = ({ user }) => {
  const [orders, setOrders] = useState();

  useEffect(() => {
    const jwt = document.cookie.split('=')[1];
    if (jwt) {
      return axios
        .get(`${process.env.REACT_APP_API_URL}/api/v1/users/${user._id}/orders`, {
          headers: {
            Authorization: 'Bearer ' + jwt,
          },
        })
        .then((res) => {
          setOrders(res.data.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
    return () => {};
  }, [user._id]);
  return (
    <div className="my-orders">
      <h2 className="title bold py-5 mb-5">My Orders</h2>
      {orders && orders.map((order, i) => <MyOrderCard key={i} order={order} />)}

      <div className="py-4 mb-3 text-md-right text-sm-center"></div>
    </div>
  );
};

export default MyOrders;
