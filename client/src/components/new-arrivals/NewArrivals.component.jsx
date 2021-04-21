import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ProductCard from '../product-card/ProductCard.component';

const NewArrival = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    // console.log("fetching");
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/v1/products/new-arrivals`)
      .then((res) => {
        const newProducts = res.data.data;
        setProducts(newProducts);
        // console.log(newProducts);
      });

    return () => {};
  }, []);

  return (
    <div className="section new-arrival">
      <div className="container">
        <div className="section-title py-4 my-5">
          <h2 className="title">New Arrivals</h2>
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
