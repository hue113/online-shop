import React from 'react';
import ImageGallery from 'react-image-gallery';

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
    <div className="image-gallery-wrapper">
      <ImageGallery {...settings} items={images} />
    </div>
  );
};

export default ProductImageGallery;
