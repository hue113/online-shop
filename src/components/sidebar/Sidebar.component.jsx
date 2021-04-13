import React from "react";
import SidebarProductCard from "./sub-components/SidebarProductCard.component";

import { shop } from "../../data/shop";
import { shuffleArray } from "../../utils/helper";

const Sidebar = () => {
  const newArrivals = shuffleArray(shop[4].items).slice(0, 4);
  let recentViewed = JSON.parse(localStorage.getItem("recentViewed") || "[]");

  return (
    <div className="sidebar">
      <div className="container">
        {recentViewed.length !== 0 && (
          <div className="row mb-4">
            <h3 className="title bold px-4">Recently Viewed</h3>
            {recentViewed.reverse().map((p) => (
              <SidebarProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
        <div className="row mb-4">
          <h3 className="title bold px-4">New Products</h3>
          {newArrivals.map((p) => (
            <SidebarProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
