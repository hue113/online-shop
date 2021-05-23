import React from 'react';

import ProductDetail from './sub-components/ProductDetail.component';
import ProductImageGallery from './sub-components/ProductImageGallery.component';

const ProductQuickview = ({ product, onClick }) => {
  return (
    <div className="product-quickview" id="quickview">
      <div className="inner row">
        <div className="image">
          <ProductImageGallery product={product} />
        </div>
        <div className="detail">
          <ProductDetail product={product} />
        </div>
        <div className="close-btn px-4 py-3" onClick={onClick}>
          <i className="bi bi-x-circle" />
        </div>
      </div>
    </div>
  );
};

export default ProductQuickview;
