import React, { useEffect } from 'react';

import TinySlider from 'tiny-slider-react';
import ProductCard from '../product-card/ProductCard.component';

const settings = {
  container: '.my-slider',
  lazyload: true,
  mouseDrag: true,
  loop: true,
  items: 1,
  gutter: 10,
  controlsText: ['<', '>'],
  arrowKeys: true,
  nav: true,
  navPosition: 'bottom',
  navContainer: false,
  navAsThumbnails: true,
  responsive: {
    350: {
      items: 2,
      controls: true,
      edgePadding: 10,
    },
    700: {
      items: 4,
      edgePadding: 10,
    },
  },
};

const ProductSlider = ({ products }) => {
  useEffect(() => {
    document.querySelectorAll('button[data-controls="next"]').forEach((el) => {
      el.innerHTML = `<i class="bi bi-chevron-right icon" />`;
    });
    document.querySelectorAll('button[data-controls="prev"]').forEach((el) => {
      el.innerHTML = `<i class="bi bi-chevron-left icon" />`;
    });

    return () => {};
  }, []);

  return (
    <div className="product-slider">
      <TinySlider settings={settings} className="row mx-1 my-2">
        {products.map((product) => (
          <ProductCard product={product} key={product.sku} />
        ))}
      </TinySlider>
    </div>
  );
};
export default ProductSlider;
