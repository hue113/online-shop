import React, { useEffect, useState } from 'react';
import axios from 'axios';

import ProductCard from '../product-card/ProductCard.component';

const FeaturedProducts = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    // console.log('fetching');
    axios.get(`${process.env.REACT_APP_API_URL}/api/v1/products/8popular`).then((res) => {
      const popularProducts = res.data.data;
      setProducts(popularProducts);
      // console.log(popularProducts);
    });
    // };
    return () => {};
  }, []);

  return (
    <div className="section featured-products">
      <div className="container">
        <div className="section-title py-4 mb-5">
          <h2 className="title">Popular Products</h2>
          <p className="text-desc">
            There are many variations of passages of Lorem Ipsum available, but the
            majority have suffered lebmid alteration in some ledmid form
          </p>
        </div>
        <div className="row row-cols-2 row-cols-md-4">
          {products &&
            products.map((product) => (
              <ProductCard product={product} key={product.sku} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
