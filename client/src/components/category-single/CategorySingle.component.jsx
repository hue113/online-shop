import React, { useEffect, useState } from 'react';

import ProductCard from '../product-card/ProductCard.component';
import DisplayOption from './sub-components/DisplayOption.component';
import FilterOption from './sub-components/FilterOption.component';
import SortOption from './sub-components/SortOption.component';
import { sortFilterProducts, getSortFilterName } from '../../utils/helper';

const CategorySingle = ({ categoryProducts }) => {
  const [products, setProducts] = useState(categoryProducts);
  const [grid, setGrid] = useState('row-cols-2 row-cols-md-3');
  const [singleColumn, setSingleColumn] = useState(false);
  const [sortFilterOption, setSortFilterOption] = useState('default');
  const [showFilter, setShowFilter] = useState(false);

  const handleSelectGrid = (grid) => {
    setGrid(grid);
    if (grid === 'row-cols-1') setSingleColumn(true);
    else setSingleColumn(false);
  };

  useEffect(() => {
    if (sortFilterOption) {
      const result = sortFilterProducts(sortFilterOption, categoryProducts);
      setProducts(result);
    }

    return () => {};
  }, [sortFilterOption, categoryProducts]);

  return (
    <div className="section category-single">
      <div className="wrapper container mt-5">
        <div className="row my-5">
          <div className="col-lg-6 mb-4 result-numbers">
            {products && (
              <>
                {products.length <= 1
                  ? `Showing ${products.length} result`
                  : `Showing ${products.length} results`}
              </>
            )}
          </div>
          <div className="options col-lg-6 mb-4 d-flex">
            <div
              className="filter-option mr-5"
              onClick={() => setShowFilter(!showFilter)}
            >
              <span className="icon-wrapper">
                <i className="bi bi-funnel icon mr-2"></i>
                Filter
              </span>
            </div>
            <SortOption setSortFilterOption={setSortFilterOption} />
            <DisplayOption handleSelectGrid={handleSelectGrid} />
          </div>
          {sortFilterOption !== 'default' && (
            <div className="mx-4 mb-5 d-flex justify-content-center">
              {getSortFilterName(sortFilterOption)}
              <i
                className="bi bi-x-circle clear-filter-icon ml-4"
                onClick={() => setSortFilterOption('default')}
              />
            </div>
          )}
        </div>

        {showFilter && (
          <FilterOption
            setSortFilterOption={setSortFilterOption}
            setShowFilter={setShowFilter}
          />
        )}

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

export default CategorySingle;
