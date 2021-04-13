import React from "react";
import CategoryCard from "./sub-components/CategoryCard.component";
import { categories } from "../../data/categories";

const Category = () => {
  return (
    <div className="section category">
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 mb-4">
          {categories.slice(0, 3).map((category, index) => (
            <CategoryCard key={index} category={category} styleClass="small" />
          ))}
        </div>
        <div className="row row-cols-1 row-cols-md-2 mb-2">
          {categories.slice(3, 5).map((category, index) => (
            <CategoryCard key={index} category={category} styleClass="large" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
