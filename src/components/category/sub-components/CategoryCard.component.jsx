import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ name, image, price, link }) => {
  return (
    <div className="category-card col mb-4">
      <Link to={link}>
        <img src={image} alt="" />
      </Link>
      <div className="content">
        <h2>{name}</h2>
        <h4 className="mb-5">
          Starting at <span>${price.toFixed(2)}</span>
        </h4>
        <Link to={link}>
          <i className="bi bi-arrow-right-circle" />
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
