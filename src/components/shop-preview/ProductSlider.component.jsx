import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import TinySlider from "tiny-slider-react";

import ProductCard from "../product-card/ProductCard.component";

const settings = {
  lazyload: true,
  mouseDrag: true,
  nav: false,
  loop: true,
  items: 1,
  gutter: 10,
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

// const clickEvent = (slide) => {
//   // console.log(slide);
// };
const ProductSlider = ({ products }) => {
  useEffect(() => {
    document.querySelectorAll('button[data-controls="next"]').forEach((el) => {
      el.innerHTML = `<i class="bi bi-chevron-right" />`;
    });
    document.querySelectorAll('button[data-controls="prev"]').forEach((el) => {
      el.innerHTML = `<i class="bi bi-chevron-left" />`;
    });

    return () => {};
  }, []);

  return (
    <div className="product-slider">
      {/* <TinySlider settings={settings} onInit={clickEvent} className="row m-2"> */}
      <TinySlider settings={settings} className="row mx-1 my-2">
        {products.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <ProductCard product={product} />
          </Link>
        ))}
      </TinySlider>
    </div>
  );
};
export default ProductSlider;
