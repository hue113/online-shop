import React, { useState } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import { createPortal } from 'react-dom';

import { addItemToFavourite } from '../../../redux/favourite/favourite.actions';
import ProductQuickview from '../../product-quickview/ProductQuickview.component';

const modalContainer = document.getElementById('product_modal');

const ProductCardGrid = ({ product, addItemToFavourite }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
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
            <div className="box cart px-3 py-2" onClick={() => setShowModal(true)}>
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

      {showModal
        ? createPortal(
            <ProductQuickview product={product} onClick={() => setShowModal(false)} />,
            modalContainer,
          )
        : ''}
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItemToFavourite: (item) => dispatch(addItemToFavourite(item)),
  // addItemToCart: (item) => dispatch(addItemToCart(item)),
});

export default connect(null, mapDispatchToProps)(ProductCardGrid);
