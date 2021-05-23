import React, { useState } from 'react';
import QRCode from 'react-qr-code';

import OrderItem from './OrderItem.component';

const MyOrderCard = ({ order }) => {
  const [toggle, setToggle] = useState(false);
  const { createdAt, items, total, _id } = order;
  const date = new Date(createdAt);

  return (
    <div
      className="order-card d-md-flex justify-content-between"
      onClick={() => setToggle(!toggle)}
    >
      <div className="content">
        <div className="">
          <h4 className="date  mr-4 mb-4">Order Placed:</h4>
          {date.toDateString()}
        </div>
        <div className="">
          <h4 className="total mr-4 mb-3">Total:</h4>${total}
        </div>
        <div className="">
          <h4 className="items mr-4 mb-4">Items:</h4>
          {items.length}
        </div>
        <h5 className="view-details color">View details</h5>
        <div className="">
          {toggle ? items.map((item, i) => <OrderItem key={i} item={item} />) : ''}
        </div>
      </div>
      <div className="">
        <QRCode value={_id} size={90} />
      </div>
    </div>
  );
};

export default MyOrderCard;
