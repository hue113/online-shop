import React from 'react';
import ProductCardSmall from '../../product-card/ProductCardSmall.component';

const ResultItem = ({ product }) => {
  return (
    <div className="result-item">
      <ProductCardSmall product={product} />
    </div>
  );
};

export default ResultItem;
