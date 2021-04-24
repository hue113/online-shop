import React, { useState, useEffect } from 'react';
import MetaTags from 'react-meta-tags';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import Layout from '../../components/layout/Layout.component';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs.component';
import ProductImageGallery from './sub-components/ProductImageGallery.component';
import MainInfo from './sub-components/MainInfo.component';
import AdditionalInfo from './sub-components/AdditionalInfo.component';
// import RelatedProducts from '../../components/related-products/RelatedProducts.component';
import RelatedProducts from './sub-components/RelatedProducts.component';

const ProductDetail = () => {
  const { name } = useParams();
  const [product, setProduct] = useState();
  const [category, setCategory] = useState();

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/v1/products/${name}`).then((res) => {
      const product = res.data.data[0];
      setProduct(product);

      // store to localstorage & slice the array to save storage
      let recentViewed = JSON.parse(localStorage.getItem('recentViewed') || '[]');
      const isExisted = recentViewed.some((el) => el._id === product._id);
      // const isExisted = false;

      if (!isExisted) {
        if (recentViewed.length > 3) {
          const newRecent = recentViewed.slice(-3);
          recentViewed = newRecent;
        }
        localStorage.setItem('recentViewed', JSON.stringify([...recentViewed, product]));
      }
      return axios
        .get(`${process.env.REACT_APP_API_URL}/api/v1/shops/${product.category}`)
        .then((res) => {
          const matchCategory = res.data.data.slug;
          setCategory(matchCategory);
        });
    });
  }, [name]);

  return (
    <div className="product-detail">
      <MetaTags>
        <title>Shine | {product && product.name} </title>
        <meta name="description" content="Shine Online Shop" />
      </MetaTags>

      <Layout>
        {category && (
          <Breadcrumbs
            path={`home, shop, ${category}`}
            productName={product.name}
            productPath={`/products/${product.name.toLowerCase().replaceAll(' ', '-')}.${
              product.sku
            }`}
          />
        )}
        <div className="container">
          <div className="row">
            <div className="col-md-6 pr-md-5">
              {product && <ProductImageGallery product={product} />}
            </div>
            <div className="col-md-6">{product && <MainInfo product={product} />}</div>
          </div>
          <div className="row">{product && <AdditionalInfo product={product} />}</div>
          <div className="row">{product && <RelatedProducts product={product} />}</div>
        </div>
      </Layout>
    </div>
  );
};

export default ProductDetail;
