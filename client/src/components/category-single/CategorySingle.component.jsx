import React, { useEffect, useState } from 'react';
// import { useParams } from "react-router-dom";
// import { connect } from "react-redux";
// import { createStructuredSelector } from "reselect";

import ProductCard from '../product-card/ProductCard.component';
import DisplayOption from './sub-components/DisplayOption.component';
import SortOption from './sub-components/SortOption.component';

const CategorySingle = ({ categoryProducts }) => {
  const [products, setProducts] = useState(categoryProducts);
  const [grid, setGrid] = useState('row-cols-2 row-cols-md-3');
  const [singleColumn, setSingleColumn] = useState(false);
  const [sortOption, setSortOption] = useState('default');

  const handleSelectGrid = (grid) => {
    setGrid(grid);
    if (grid === 'row-cols-1') setSingleColumn(true);
    else setSingleColumn(false);
  };

  const handleSortOption = (option) => {
    setSortOption(option);
  };

  useEffect(() => {
    switch (sortOption) {
      case 'popular':
        var popularProducts = [...products];
        popularProducts.sort((a, b) => b.saleCount - a.saleCount);
        setProducts(popularProducts);
        break;
      case 'price-lth':
        var lthProducts = [...products];
        lthProducts.sort(
          (a, b) => a.price * (100 - a.discount) - b.price * (100 - b.discount),
        );
        setProducts(lthProducts);
        break;
      case 'price-htl':
        var htlProducts = [...products];
        htlProducts.sort(
          (a, b) => b.price * (100 - b.discount) - a.price * (100 - a.discount),
        );
        setProducts(htlProducts);
        break;
      default:
        setProducts(categoryProducts);
    }
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortOption, categoryProducts]);

  return (
    <div className="section category-single">
      <div className="container mt-5">
        <div className="row my-5">
          <div className="col-lg-6 mb-5 result-numers">
            {products && (
              <>
                Showing 1–
                {products.length < 12 ? products.length : products.length} of{' '}
                {products.length} results{' '}
              </>
            )}
          </div>
          <div className="options col-lg-6 mb-5 d-flex">
            <div className="filter-option mr-5">
              <i className="bi bi-funnel icon mr-2"></i>
              Filter
              {/* <div className="dropdown row">
                <div></div>
              </div> */}
            </div>
            <SortOption handleSortOption={handleSortOption} />
            <DisplayOption handleSelectGrid={handleSelectGrid} />
          </div>
        </div>

        <div className={`row ${grid}`}>
          {products &&
            products.map((product) => (
              <ProductCard
                key={product.sku}
                product={product}
                singleColumn={singleColumn}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

// export default connect()(CategorySingle);
export default CategorySingle;
