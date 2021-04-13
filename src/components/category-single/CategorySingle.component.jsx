import React, { useState, useEffect, useMemo, useCallback } from "react";
import { useParams } from "react-router-dom";

import ProductCard from "../product-card/ProductCard.component";
import { shop } from "../../data/shop.js";
import DisplayOption from "./sub-components/DisplayOption.component";
import SortOption from "./sub-components/SortOption.component";

const CategorySingle = () => {
  const { category } = useParams();
  let data;
  if (category === "sale") {
    let allProducts = [];
    shop.map((el) => el.items.map((el) => allProducts.push(el)));
    data.items = allProducts.filter((product) => product.discount !== 0);
  } else {
    data = shop.find((el) => el.link.substr(6) === category);
  }

  const [products, setProducts] = useState(data.items);
  const [grid, setGrid] = useState("row-cols-2 row-cols-md-3");
  const [singleColumn, setSingleColumn] = useState(false);
  const [sortOption, setSortOption] = useState("default");

  const handleSelectGrid = (grid) => {
    setGrid(grid);
    if (grid === "row-cols-1") setSingleColumn(true);
    else setSingleColumn(false);
  };

  const handleSortOption = (option) => {
    setSortOption(option);
  };

  useEffect(() => {
    console.log("products", products);
    console.log("data", data);
    switch (sortOption) {
      case "popular":
        // var copyData = [...products];
        // copyData.sort((a, b) => b.saleCount - a.saleCount);
        // console.log("copyData", copyData);
        // setProducts(copyData);
        console.log("popular");
        break;
      case "price-lth":
        console.log("price-lth");
        break;
      case "price-htl":
        console.log("price-htl");
        break;
      default:
        console.log("default");
        setProducts(data.items);
    }
    return () => {};
  }, [sortOption, data, products]);

  return (
    <div className="section category-single">
      <div className="container mt-5">
        <div className="row my-5">
          <div className="col-lg-6 mb-5 result-numers">
            Showing 1–
            {products.length < 12 ? products.length : products.length} of{" "}
            {products.length} results
          </div>
          <div className="options col-lg-6 mb-5 d-flex">
            <div className="filter-option mr-5">
              <i className="bi bi-funnel icon mr-2"></i>
              Filter
              {/* <div className="dropdown row">
                <div></div>
              </div> */}
            </div>
            <SortOption handleSortOption={handleSortOption} />
            <DisplayOption handleSelectGrid={handleSelectGrid} />
          </div>
        </div>

        <div className={`row ${grid}`}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              singleColumn={singleColumn}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(CategorySingle);
