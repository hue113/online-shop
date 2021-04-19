import React from "react";
import ReviewCard from "./sub-components/ReviewCard.component";
import ReviewForm from "./sub-components/ReviewForm.component";

const Review = () => {
  return (
    <div className="review">
      <ReviewCard
        name="Arnold Mckenzie"
        rating="4.3"
        review="Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque"
        imageUrl="https://i.ibb.co/55z32tw/long-sleeve.png"
      />
      <ReviewCard
        name="Arnold Mckenzie"
        rating="4.3"
        review="Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque"
        imageUrl="https://i.ibb.co/55z32tw/long-sleeve.png"
      />

      <ReviewForm />
    </div>
  );
};

export default Review;
