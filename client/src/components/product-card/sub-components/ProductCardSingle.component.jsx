import React from "react";
import { Link } from "react-router-dom";

const ProductCardSingle = ({ product }) => {
  return (
    <div className="product-card-single row">
      <div className="image-box col-sm-4 mb-4">
        <Link
          to={`/products/${product.name.toLowerCase().replaceAll(" ", "-")}.${
            product.sku
          }`}
        >
          <img src={product.image} alt="" />
        </Link>
        {product.new && <div className="special new p-3">New</div>}
        {product.discount !== 0 && (
          <div className="special sale p-3">-{product.discount}%</div>
        )}
      </div>

      <div className="content px-4 col-sm-8 d-flex flex-column">
        {/*  */}
        <h4 className="bold my-3 order-md-1 order-lg-2">{product.name}</h4>

        {/*  */}
        <div className="price mb-3 order-md-2 order-lg-1">
          {product.discount === 0 ? (
            <span className="mr-4">${product.price.toFixed(2)}</span>
          ) : (
            <div>
              <span className="mr-4 old-price">
                ${product.price.toFixed(2)}
              </span>
              <span className="sale-price">
                ${(product.price * (1 - product.discount / 100)).toFixed(2)}
              </span>
            </div>
          )}
        </div>

        {/*  */}
        <div className="icon-group d-flex order-md-3 order-lg-4 mb-3">
          <i className="bi bi-heart icon mr-4" />
          <i className="bi bi-bag-plus icon" />
        </div>

        {/* <h4 className="bold my-4 order-sm-1">{product.name}</h4> */}
        <p className="order-md-4 order-lg-2 mb-4">{product.shortDescription}</p>
      </div>
    </div>
  );
};

export default ProductCardSingle;
