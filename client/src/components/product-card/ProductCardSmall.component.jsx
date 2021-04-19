import React from "react";
import { Link } from "react-router-dom";

const ProductCardSmall = ({ product }) => {
  // console.log(product);
  return (
    <div className="product-card-small p-4">
      {/* <div className="sidebar-product-card p-4"> */}
      <div className="row">
        <div className="col-4 pr-0 image">
          <Link
            to={`/products/${product.name.toLowerCase().replace(" ", "-")}.${
              product.sku
            }`}
          >
            <img src={product.image[0]} alt="" />
          </Link>
        </div>
        <div className="col-8 pr-0 my-auto">
          <Link
            to={`/products/${product.name.toLowerCase().replace(" ", "-")}.${
              product.sku
            }`}
          >
            <h5 className="product-title bold">{product.name}</h5>
          </Link>
          {product.discount === 0 ? (
            <span className="mr-3">${product.price.toFixed(2)}</span>
          ) : (
            <div>
              <span className="mr-3 old-price">
                ${product.price.toFixed(2)}
              </span>
              <span className="sale-price">
                ${(product.price * (1 - product.discount / 100)).toFixed(2)}
              </span>
            </div>
          )}
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default ProductCardSmall;
