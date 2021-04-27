import React, { useState, useEffect } from 'react';
import axios from 'axios';

// import { shop } from "../../data/shop";
import { shuffleArray } from '../../utils/helper';
import ProductCardSmall from '../product-card/ProductCardSmall.component';

const Sidebar = () => {
  const [newArrivals, setNewArrivals] = useState();
  let recentViewed = JSON.parse(localStorage.getItem('recentViewed') || '[]');

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/v1/shops/new-arrivals/products`)
      .then((res) => {
        const products = res.data.data;
        setNewArrivals(shuffleArray(products).slice(0, 4));
      });
    // };
    return () => {};
  }, []);

  return (
    <div className="sidebar">
      <div className="wrapper container">
        {recentViewed.length !== 0 && (
          <div className="row mb-4">
            <h3 className="title bold px-4">Recently Viewed</h3>
            {recentViewed.reverse().map((p) => (
              <ProductCardSmall key={p._id} product={p} />
            ))}
          </div>
        )}
        <div className="row mb-4">
          <h3 className="title bold px-4">New Products</h3>
          {newArrivals &&
            newArrivals.map((p) => <ProductCardSmall key={p.sku} product={p} />)}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
