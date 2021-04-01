import React from "react";
import { Link } from "react-router-dom";

import { stores } from "../../data/stores";

const Stores = () => {
  return (
    <div className="section stores py-5">
      <div className="container">
        <div className="section-title py-4 my-5">
          <h2 className="title">Store Locator</h2>
          <p className="text-desc">
            There are many variations of passages of Lorem Ipsum available.{" "}
            <Link to="/" className="text-link">
              Find a store.
            </Link>
          </p>
        </div>
        <div className="content row row-cols-md-4 row-cols-2 pb-4">
          {stores.map((store) => (
            <div className="col py-3" key={store.id}>
              <h5>{store.name}</h5>
              <h6>{store.address1}</h6>
              <h6>
                {store.address2} {store.postalCode}
              </h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stores;
