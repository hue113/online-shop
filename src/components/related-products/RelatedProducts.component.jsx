import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import RelatedProductSlider from './sub-components/RelatedProductSlider.component';
import { selectProducts } from '../../redux/product/product.selectors';

import { shuffleArray } from '../../utils/helper';

const RelatedProducts = ({ product, allProducts }) => {
  // console.log("product", product);
  // console.log("allProducts", allProducts);
  const relatedProducts = allProducts.filter((el) => el.category === product.category);
  let products = shuffleArray(relatedProducts);
  // let products = relatedProducts;

  return (
    <div className="section related-product w-100">
      <h2 className="title text-center mb-4">Related Products</h2>
      <div className="row">
        {products && <RelatedProductSlider products={products} />}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  allProducts: selectProducts,
});

// const mapDispatchToProps = (dispatch) => ({
//   fetchProductsStartAsync: () => dispatch(fetchProductsStartAsync()),
// });

export default connect(mapStateToProps)(RelatedProducts);
