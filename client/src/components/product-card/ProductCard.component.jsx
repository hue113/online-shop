import React from 'react';
import ProductCardGrid from './sub-components/ProductCardGrid.component';
import ProductCardSingle from './sub-components/ProductCardSingle.component';

const ProductCard = ({ product, singleColumn, related }) => {
  return (
    <div className="product-card col p-4">
      {singleColumn ? (
        <ProductCardSingle product={product} />
      ) : (
        <ProductCardGrid related product={product} />
      )}
    </div>
  );
};

export default ProductCard;
