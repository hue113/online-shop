import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPortal } from 'react-dom';

import { addItemToFavourite } from '../../../redux/favourite/favourite.actions';
import ProductQuickview from '../../product-quickview/ProductQuickview.component';
import { calculatePrice } from '../../../utils/helper';

const productModalContainer = document.getElementById('product_modal');

const ProductCardSingle = ({ product, addItemToFavourite }) => {
  const [showModal, setShowModal] = useState(false);
  const { name, image, sku, price, discount, shortDescription } = product;

  return (
    <div className="product-card-single row">
      <div className="image-box col-sm-4 mb-4">
        <Link to={`/products/${name.toLowerCase().replace(/ /g, '-')}.${sku}`}>
          <img src={image} alt="" />
        </Link>
        {product.new && <div className="special new p-3">New</div>}
        {discount !== 0 && <div className="special sale p-3">-{discount}%</div>}
      </div>

      <div className="content px-4 col-sm-8 d-flex flex-column">
        <Link
          to={`/products/${name.toLowerCase().replace(/ /g, '-')}.${sku}`}
          className="my-3 order-md-1 order-lg-2"
        >
          <h4 className="bold">{name}</h4>
        </Link>
        <div className="price mb-3 order-md-2 order-lg-1">
          {discount === 0 ? (
            <span className="mr-4">${price.toFixed(2)}</span>
          ) : (
            <div>
              <span className="mr-4 old-price">${price.toFixed(2)}</span>
              <span className="sale-price">${calculatePrice(price, discount)}</span>
            </div>
          )}
        </div>
        <div className="icon-group d-flex order-md-3 order-lg-4 mb-3">
          <i
            className="bi bi-heart icon mr-5"
            onClick={() => addItemToFavourite(product)}
          />
          <i className="bi bi-bag-plus icon" onClick={() => setShowModal(true)} />
        </div>
        <p className="description order-md-4 order-lg-2 mb-4">{shortDescription}</p>
      </div>

      {showModal
        ? createPortal(
            <ProductQuickview product={product} onClick={() => setShowModal(false)} />,
            productModalContainer,
          )
        : ''}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItemToFavourite: (item) => dispatch(addItemToFavourite(item)),
});

export default connect(null, mapDispatchToProps)(ProductCardSingle);
