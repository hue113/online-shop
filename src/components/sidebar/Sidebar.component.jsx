import React from "react";
import SidebarProductCard from "./sub-components/SidebarProductCard.component";
// import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="section sidebar">
      <div className="container">
        <div className="row mb-4">
          <h3 className="title bold">New Product</h3>
          <SidebarProductCard />
          <SidebarProductCard />
          <SidebarProductCard />
        </div>
        <div className="row mb-4">
          <h3 className="title bold">Recent View</h3>
          <SidebarProductCard />
          <SidebarProductCard />
          <SidebarProductCard />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
