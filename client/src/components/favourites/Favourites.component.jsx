import React from "react";

import { shop } from "../../data/shop";
import Button from "../custom-button/Button.component";
import ProductCardSmall from "../product-card/ProductCardSmall.component";

const Favourites = () => {
  const mockProducts = shop[0].items.slice(0, 4);
  return (
    <div className="favourites-dropdown d-flex  justify-content-between">
      <div className="items">
        {mockProducts.length ? (
          mockProducts.map((product) => (
            <ProductCardSmall key={product.id} product={product} />
          ))
        ) : (
          <span className="empty-message">Your wishlist is empty.</span>
        )}
      </div>
      <Button name="View All" styleClass="square color" />
    </div>
  );
};

export default Favourites;
