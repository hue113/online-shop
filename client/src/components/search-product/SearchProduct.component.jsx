import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectProducts } from '../../redux/product/product.selectors';
import { fetchProductsStartAsync } from '../../redux/product/product.actions';
import ProductCardSmall from '../product-card/ProductCardSmall.component';

const SearchProduct = ({ allProducts, fetchProductsStartAsync, toggleSearch }) => {
  const [searchTerm, setSearchTerm] = useState();
  const [result, setResult] = useState();

  useEffect(() => {
    if (allProducts.length === 0 && searchTerm) {
      console.log('fetching for search');
      fetchProductsStartAsync();
    }
    if (searchTerm === '') setResult(null);
    if (searchTerm && searchTerm !== '') {
      const filteredProducts = allProducts.filter((product) => {
        const tags = product.tag.join('').toLowerCase();
        return (
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          tags.includes(searchTerm.toLowerCase())
        );
      });
      setResult(filteredProducts);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  return (
    <div className="search-product">
      <div className="wrapper d-flex flex-column px-4 pb-5 pt-4 mx-auto">
        <input
          className="input py-3"
          type="search"
          placeholder="Search product ..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="close-btn py-3" onClick={toggleSearch}>
          <i className="bi bi-x-circle" />
        </div>
        {result && (
          <>
            <span className="result-count">Found {result.length} matched products</span>
            <div className="result w-100">
              {result.map((item) => (
                <div key={item.sku} onClick={toggleSearch}>
                  <ProductCardSmall product={item} key={item.sku} />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  allProducts: selectProducts,
});

const mapDispatchToProps = (dispatch) => ({
  fetchProductsStartAsync: () => dispatch(fetchProductsStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchProduct);
