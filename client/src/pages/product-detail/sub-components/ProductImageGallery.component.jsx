import React from "react";
import ImageGallery from "react-image-gallery";

const settings = {
  lazyLoad: true,
  showBullets: true,
  showPlayButton: false,
  showFullscreenButton: false,
};

const ProductImageGallery = ({ product }) => {
  let images = [];
  product.image.map((e) => images.push({ original: e, thumbnail: e }));

  return (
    <div className="section product-image-gallery">
      <div className="container">
        <ImageGallery {...settings} items={images} />
      </div>
    </div>
  );
};

export default ProductImageGallery;
