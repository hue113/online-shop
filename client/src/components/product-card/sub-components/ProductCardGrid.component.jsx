import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { addItemToFavourite } from '../../../redux/favourite/favourite.actions';
import { addItemToCart } from '../../../redux/cart/cart.actions';

const ProductCardGrid = ({ product, addItemToFavourite, addItemToCart }) => {
  // console.log(product);
  return (
    <div className="product-card-grid">
      <div className="image-box mb-3">
        <a
          href={`/products/${product.name.toLowerCase().replace(/ /g, '-')}.${
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
          {/*  */}
          <div
            className="box favourite mb-2 px-3 py-2"
            onClick={() => addItemToFavourite(product)}
          >
            <i className="bi bi-heart icon" />
            {/* <i className="bi bi-heart-fill favourite-icon"></i> */}
          </div>
          <div className="box cart px-3 py-2" onClick={() => addItemToCart(product)}>
            {/* <div className="box cart px-3 py-2" onClick={() => console.log('click')}> */}
            <i className="bi bi-bag-plus icon" />
          </div>
        </div>
      </div>
      <div className="content">
        <a
          href={`/products/${product.name.toLowerCase().replace(/ /g, '-')}.${
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

const mapDispatchToProps = (dispatch) => ({
  addItemToFavourite: (item) => dispatch(addItemToFavourite(item)),
  addItemToCart: (item) => dispatch(addItemToCart(item)),
});

export default connect(null, mapDispatchToProps)(ProductCardGrid);
// export default ProductCardGrid;
