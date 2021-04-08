import React from "react";

const SidebarProductCard = () => {
  return (
    <div className="sidebar-product-card my-3">
      <div className="row">
        <div className="col-4 pr-0 image">
          <img
            src="https://images.unsplash.com/photo-1617178388553-a9d022974a5c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80"
            alt=""
          />
        </div>
        <div className="col-8 pr-0 my-auto">
          <h5 className="bold">Jumpsuit Summer</h5>
          <p>$32</p>
        </div>
      </div>
    </div>
  );
};

export default SidebarProductCard;
