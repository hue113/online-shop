import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import ProductSlider from '../../../components/product-slider/ProductSlider.component';
import { selectProducts } from '../../../redux/product/product.selectors';

import { shuffleArray } from '../../../utils/helper';

const RelatedProducts = ({ product, allProducts }) => {
  const categoryProducts = allProducts.filter((el) => el.category === product.category);
  let products = shuffleArray(categoryProducts);
  const [relatedProducts, setRelatedProducts] = useState(products);

  useEffect(() => {
    if (allProducts.length === 0) {
      axios
        .get(`${process.env.REACT_APP_API_URL}/api/v1/shops/${product.category}/products`)
        .then((res) => {
          const newProducts = shuffleArray(res.data.data);
          setRelatedProducts(newProducts);
        });
    }
  }, []);

  return (
    <div className="section related-product w-100">
      <h2 className="title text-center mb-4">Related Products</h2>
      <div className="row">
        {relatedProducts && <ProductSlider related products={relatedProducts} />}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  allProducts: selectProducts,
});

export default connect(mapStateToProps)(RelatedProducts);
