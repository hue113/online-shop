import React from "react";
import Button from "../custom-button/Button.component";
import Countdown from "react-countdown";

const HotDeal = () => {
  const time = Date.now() + 400000000;
  return (
    <div className="section hot-deal">
      <div className="container py-4">
        <div className="row">
          <div className="col-md-5">
            <img src="https://i.imgur.com/rJAQvok.png" alt="" />
          </div>
          <div className="col-md-7 content d-flex flex-column justify-content-center">
            <h2 className="title mb-5">Deal of the day</h2>
            <Countdown date={time} renderer={renderer} />
            <div className="py-4">
              <Button name="Shop Now" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    <div className="countdown row my-4">
      <span>Sorry, Offer already ended!</span>
    </div>;
  } else {
    return (
      <div className="countdown row my-4">
        <Countdown />
        <span className="col-3">
          {days} <p>days</p>
        </span>
        <span className="col-3">
          {hours} <p>hours</p>
        </span>
        <span className="col-3">
          {minutes} <p>minutes</p>
        </span>
        <span className="col-3">
          {seconds} <p>seconds</p>
        </span>
      </div>
    );
  }
};

export default HotDeal;
