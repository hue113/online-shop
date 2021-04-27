import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OrderItem = ({ item }) => {
  const [product, setProduct] = useState();

  useEffect(() => {
    const jwt = document.cookie.split('=')[1];
    if (jwt) {
      axios
        .get(`${process.env.REACT_APP_API_URL}/api/v1/products/${item.product}`, {
          headers: {
            Authorization: 'Bearer ' + jwt,
          },
        })
        .then((res) => {
          setProduct(res.data.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
    return () => {};
  }, [item.product]);

  return (
    <>
      {product && (
        <div className="item my-4 d-md-flex">
          <div className="image mr-5">
            <img src={product.image[0]} alt={product.name} />
          </div>
          <div className="">
            <h5 className="bold my-3">{product.name}</h5>
            <div className="description">
              <span className="mr-2">Color:</span>
              <span className="mr-5">{item.color}</span>
              <span className="mr-2">Size:</span>
              <span className="mr-5">{item.size.toUpperCase()}</span>
              <span className="mr-2">Quantity:</span>
              <span className="">{item.quantity}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderItem;
