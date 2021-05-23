import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ category, styleClass }) => {
  const { title, startPrice, link, image } = category;

  return (
    <div className="category-card col mb-4">
      <div className="image-box">
        <img src={image} alt="" className={`${styleClass} background-image}`} />
      </div>
      <Link to={link}>
        <div className="content">
          <h3 className="title bold mb-2">{title}</h3>
          <h4 className="price">
            Starting at <span>${startPrice.toFixed(2)}</span>
          </h4>
          <i className="bi bi-arrow-right-circle" />
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;
