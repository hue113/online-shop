import React from 'react';

const FilterOption = ({ setSortFilterOption, setShowFilter }) => {
  return (
    <div className="filter-dropdown pb-4 mb-4 d-flex justify-content-center">
      <div className="close-btn" onClick={() => setShowFilter(false)}>
        <i className="bi bi-x-circle" />
      </div>
      <div className="price-filter">
        <h4 className="choice bold">By Price</h4>
        <div className="d-flex flex-column">
          <span className="item" onClick={() => setSortFilterOption('0-20')}>
            $0.00 - $20.00
          </span>
          <span className="item" onClick={() => setSortFilterOption('21-50')}>
            $21.00 - $50.00
          </span>
          <span className="item" onClick={() => setSortFilterOption('51-100')}>
            $51.00 - $100.00
          </span>
          <span className="item" onClick={() => setSortFilterOption('101-above')}>
            Above $101.00
          </span>
        </div>
      </div>
      <div className="color-filter">
        <h4 className="choice bold">By Color</h4>
        <div className="d-flex flex-wrap">
          <span className="item red" onClick={() => setSortFilterOption('red')}></span>
          <span className="item blue" onClick={() => setSortFilterOption('blue')}></span>
          <span
            className="item yellow"
            onClick={() => setSortFilterOption('yellow')}
          ></span>
          <span className="item pink" onClick={() => setSortFilterOption('pink')}></span>
          <span
            className="item brown"
            onClick={() => setSortFilterOption('brown')}
          ></span>
          <span
            className="item green"
            onClick={() => setSortFilterOption('green')}
          ></span>
          <span
            className="item orange"
            onClick={() => setSortFilterOption('orange')}
          ></span>
          <span
            className="item white"
            onClick={() => setSortFilterOption('white')}
          ></span>
          <span
            className="item black"
            onClick={() => setSortFilterOption('black')}
          ></span>
          <span
            className="item purple"
            onClick={() => setSortFilterOption('purple')}
          ></span>
        </div>
      </div>

      {/* <div className="">
        <h4 className="choice bold">By Size</h4>
        <div className="d-flex flex-column">
          <span className="item">$0.00 - $19.00</span>
          <span className="item">$21.00 - $50.00</span>
          <span className="item">$51.00 - $100.00</span>
          <span className="item">Above $101.00</span>
        </div>
      </div> */}
    </div>
  );
};

export default FilterOption;
