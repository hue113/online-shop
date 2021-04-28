import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import ProductCard from '../product-card/ProductCard.component';

const FeaturedProducts = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/v1/shops/popular/products`)
      .then((res) => {
        const popularProducts = res.data.data;
        setProducts(popularProducts);
      });
    // };
    return () => {};
  }, []);

  return (
    <div className="section featured-products">
      <div className="container">
        <div className="section-title py-4 mb-5">
          <Link to="/shop/popular" className="title">
            <h2 className="title">Popular Products</h2>
          </Link>
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
