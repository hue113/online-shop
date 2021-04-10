import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card col p-4">
      <div className="image-box mb-3">
        <img
          src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fde%2Fc0%2Fdec0350292c9279c416270dd2215d1ab95d1b8d3.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]"
          alt=""
        />
        {product.new && <div className="special new p-3">New</div>}
        {product.discount !== 0 && (
          <div className="special sale p-3">-{product.discount}%</div>
        )}

        <div className="icon-group">
          <div className="box favourite mb-2 px-3 py-2">
            <i className="bi bi-heart" />
          </div>
          <div className="box cart px-3 py-2">
            <i className="bi bi-bag-plus" />
          </div>
        </div>
      </div>

      <div className="content">
        <h4 className="">{product.name}</h4>
        {product.discount === 0 ? (
          <div>
            <span className="mr-4">${product.price.toFixed(2)}</span>
          </div>
        ) : (
          <div>
            <span className="mr-4 old-price">${product.price.toFixed(2)}</span>
            <span className="sale-price">
              ${(product.price * (1 - product.discount / 100)).toFixed(2)}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
