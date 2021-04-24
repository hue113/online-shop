import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createPortal } from 'react-dom';

import { addItemToFavourite } from '../../../redux/favourite/favourite.actions';
import ProductQuickview from '../../product-quickview/ProductQuickview.component';
import { calculatePrice } from '../../../utils/helper';

const productModalContainer = document.getElementById('product_modal');

const RelatedProductCard = ({ product, addItemToFavourite }) => {
  const [showModal, setShowModal] = useState(false);
  const { name, image, sku, price, discount } = product;

  return (
    <>
      <div className="product-card-grid">
        <div className="image-box mb-3">
          <img src={image} alt="" />

          {product.new && <div className="special new p-3">New</div>}
          {discount !== 0 && <div className="special sale p-3">-{discount}%</div>}

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
          <h4 className="">{name}</h4>

          {discount === 0 ? (
            <div>
              <span className="mr-4">${price.toFixed(2)}</span>
            </div>
          ) : (
            <div>
              <span className="mr-4 old-price">${price.toFixed(2)}</span>
              <span className="sale-price">${calculatePrice(price, discount)}</span>
            </div>
          )}
        </div>
      </div>

      {showModal
        ? createPortal(
            <ProductQuickview product={product} onClick={() => setShowModal(false)} />,
            productModalContainer,
          )
        : ''}
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItemToFavourite: (item) => dispatch(addItemToFavourite(item)),
});

export default connect(null, mapDispatchToProps)(RelatedProductCard);
