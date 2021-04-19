import React from "react";

import { renderRatingStars } from "../../../utils/helper";

const ReviewCard = ({ name, rating, review, imageUrl }) => {
  return (
    <div className="row review-card p-4">
      <div className="avatar mr-4">
        <img src={imageUrl} alt="" />
      </div>
      <div className="content px-2">
        <div className="">
          <span className="author-name bold mr-4">{name}</span>
          <span className="star">{renderRatingStars(rating)}</span>
        </div>
        <p className="author-review mt-2">{review}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
