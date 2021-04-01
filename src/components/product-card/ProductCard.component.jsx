import React from "react";
import Button from "../custom-button/Button.component";

const ProductCard = () => {
  return (
    <div className="product-card col-6 col-md-3 mb-5">
      <div className="image-box mb-3">
        <img
          src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fde%2Fc0%2Fdec0350292c9279c416270dd2215d1ab95d1b8d3.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]"
          alt=""
        />
        <div className="special new p-3">New</div>
        <div className="icon-group">
          {/* <i className="bi bi-bag-plus mr-2" /> */}
          <i className="bi bi-heart" />
        </div>

        {/* <div className="add">+</div> */}
        <Button name="Add To Cart" />
      </div>
      <div className="content">
        <h4 className="">Jacket</h4>
        <div>
          <span className="mr-4 old-price">$100</span>
          <span className="sale-price">$80</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
