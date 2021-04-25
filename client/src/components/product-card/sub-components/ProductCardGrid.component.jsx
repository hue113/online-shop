import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { createPortal } from 'react-dom';

import { addItemToFavourite } from '../../../redux/favourite/favourite.actions';
import ProductQuickview from '../../product-quickview/ProductQuickview.component';
import { calculatePrice } from '../../../utils/helper';
import { toggleProductModal } from '../../../redux/toggle/toggle.actions';
import { selectProductModalHidden } from '../../../redux/toggle/toggle.selectors';

const productModalContainer = document.getElementById('product_modal');

const ProductCardGrid = ({ product, addItemToFavourite }) => {
  const [showModal, setShowModal] = useState(false);
  const isMobile = window.screen.width < 600; // not show product modal on mobile devices
  const { name, image, sku, price, discount } = product;

  return (
    <>
      <div className="product-card-grid">
        <div className="image-box mb-3">
          <Link to={`/products/${name.toLowerCase().replace(/ /g, '-')}.${sku}`}>
            <img src={image} alt={name} />
          </Link>
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

            {isMobile === true ? (
              <div className="box cart px-3 py-2">
                <Link to={`/products/${name.toLowerCase().replace(/ /g, '-')}.${sku}`}>
                  <i className="bi bi-bag-plus icon" />
                </Link>
              </div>
            ) : (
              <div className="box cart px-3 py-2" onClick={() => setShowModal(true)}>
                <i className="bi bi-bag-plus icon" />
              </div>
            )}
          </div>
        </div>
        <div className="content">
          <Link to={`/products/${name.toLowerCase().replace(/ /g, '-')}.${sku}`}>
            <h4 className="name">{name}</h4>
          </Link>
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

      {showModal && isMobile === false
        ? createPortal(
            <ProductQuickview product={product} onClick={() => setShowModal(false)} />,
            productModalContainer,
          )
        : ''}
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  showProductModal: selectProductModalHidden,
});

const mapDispatchToProps = (dispatch) => ({
  addItemToFavourite: (item) => dispatch(addItemToFavourite(item)),
  toggleProductModal: () => dispatch(toggleProductModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductCardGrid);
