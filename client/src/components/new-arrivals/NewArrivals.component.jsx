import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import ProductCard from '../product-card/ProductCard.component';

const NewArrival = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/v1/shops/new-arrivals/products`)
      .then((res) => {
        const newProducts = res.data.data;
        setProducts(newProducts);
      });
    return () => {};
  }, []);

  return (
    <div className="section new-arrival">
      <div className="container">
        <div className="section-title py-4 my-5">
          <Link to="/shop/new-arrivals" className="title">
            <h2 className="title">New Arrivals</h2>
          </Link>
          <p className="text-desc">
            There are many variations of passages of Lorem Ipsum available, but the
            majority have suffered lebmid alteration in some ledmid form
          </p>
        </div>
        <div className="row row-cols-2 row-cols-md-4">
          {products &&
            products
              .slice(0, 8)
              .map((product) => <ProductCard product={product} key={product.sku} />)}
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
