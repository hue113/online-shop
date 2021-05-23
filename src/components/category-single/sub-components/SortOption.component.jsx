import React from 'react';

const SortOption = ({ setSortFilterOption }) => {
  return (
    <div className="sort-option mr-5">
      <span className="icon-wrapper">
        <i className="bi bi-sort-down icon mr-2" />
        Sort
      </span>

      <div className="dropdown row d-flex flex-column">
        <div className="item" onClick={() => setSortFilterOption('default')}>
          Default
        </div>
        <div className="item" onClick={() => setSortFilterOption('popular')}>
          Popularity
        </div>
        <div className="item" onClick={() => setSortFilterOption('price-lth')}>
          Price: Low to High
        </div>
        <div className="item" onClick={() => setSortFilterOption('price-htl')}>
          Price: High to Low
        </div>
      </div>
    </div>
  );
};

export default SortOption;
