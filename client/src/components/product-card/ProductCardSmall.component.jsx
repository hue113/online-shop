import React from 'react';
import { Link } from 'react-router-dom';

import { calculatePrice } from '../../utils/helper';

const ProductCardSmall = ({ product }) => {
  const { name, image, sku, price, discount } = product;

  return (
    <div className="product-card-small p-4">
      <div className="row">
        <div className="col-4 pr-0 image">
          <Link to={`/products/${name.toLowerCase().replace(/ /g, '-')}.${sku}`}>
            <img src={image[0]} alt={name} />
          </Link>
        </div>
        <div className="price col-8 pr-0 my-auto">
          <Link to={`/products/${name.toLowerCase().replace(/ /g, '-')}.${sku}`}>
            <h5 className="product-title bold">{name}</h5>
          </Link>
          {discount === 0 ? (
            <span className="mr-3">${price.toFixed(2)}</span>
          ) : (
            <div>
              <span className="mr-3 old-price">${price.toFixed(2)}</span>
              <span className="sale-price">${calculatePrice(price, discount)}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCardSmall;
