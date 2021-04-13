import React from "react";

const SortOption = ({ handleSortOption }) => {
  return (
    <div className="sort-option mr-5">
      <i className="bi bi-sort-down icon mr-2" />
      Sort
      <div className="dropdown row d-flex flex-column">
        <div className="item p-4" onClick={() => handleSortOption("default")}>
          Default
        </div>
        <div className="item p-4" onClick={() => handleSortOption("popular")}>
          Popularity
        </div>
        <div className="item p-4" onClick={() => handleSortOption("price-lth")}>
          Price: Low to High
        </div>
        <div className="item p-4" onClick={() => handleSortOption("price-htl")}>
          Price: High to Low
        </div>
      </div>
    </div>
  );
};

export default SortOption;
