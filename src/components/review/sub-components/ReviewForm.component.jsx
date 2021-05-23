import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";

import Button from "../../custom-button/Button.component";
import CustomForm from "../../form/CustomForm.component";

const ReviewForm = () => {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);

  const handleChange = (e) => {
    setReview(e.target.value);
  };

  const ratingChanged = (newRating) => {
    setRating(newRating);
    console.log(newRating);
  };

  const settings = {
    size: 15,
    count: 5,
    color: "#ffc106",
    activeColor: "#ffc106",
    value: rating,
    isHalf: true,
    emptyIcon: <i className="bi bi-star icon" />,
    halfIcon: <i className="bi bi-star-half icon" />,
    filledIcon: <i className="bi bi-star-fill icon" />,
    onChange: ratingChanged,
  };

  return (
    <div className="review-form mt-5 p-5">
      <form>
        <h4 className="mb- bold">Add A Review</h4>
        <div className="pt-3 d-flex">
          <span className="mr-3">Rate It:</span>
          <ReactStars {...settings} />
        </div>
        <CustomForm
          type="text"
          onChange={handleChange}
          value={review}
          label="Your Review"
          required
        />
        <div className="mt-5">
          <Button name="Submit" styleClass="square color" />
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
