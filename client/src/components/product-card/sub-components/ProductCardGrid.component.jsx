import React from "react";
// import { Link } from "react-router-dom";

const ProductCardGrid = ({ product }) => {
  return (
    <div className="product-card-grid">
      <div className="image-box mb-3">
        <a
          href={`/products/${product.name.toLowerCase().replaceAll(" ", "-")}.${
            product.sku
          }`}
        >
          <img src={product.image} alt="" />
        </a>
        {product.new && <div className="special new p-3">New</div>}
        {product.discount !== 0 && (
          <div className="special sale p-3">-{product.discount}%</div>
        )}

        <div className="icon-group">
          <div className="box favourite mb-2 px-3 py-2">
            <i className="bi bi-heart" />
          </div>
          <div className="box cart px-3 py-2">
            <i className="bi bi-bag-plus" />
          </div>
        </div>
      </div>

      <div className="content">
        <a
          href={`/products/${product.name.toLowerCase().replaceAll(" ", "-")}.${
            product.sku
          }`}
        >
          <h4 className="">{product.name}</h4>
        </a>
        {product.discount === 0 ? (
          <div>
            <span className="mr-4">${product.price.toFixed(2)}</span>
          </div>
        ) : (
          <div>
            <span className="mr-4 old-price">${product.price.toFixed(2)}</span>
            <span className="sale-price">
              ${(product.price * (1 - product.discount / 100)).toFixed(2)}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCardGrid;
