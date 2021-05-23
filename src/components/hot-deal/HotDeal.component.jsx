import React from 'react';
import Countdown from 'react-countdown';
import { Link } from 'react-router-dom';

import Button from '../custom-button/Button.component';

const HotDeal = () => {
  const time = Date.now() + 400000000;
  return (
    <div className="section hot-deal">
      <div className="container py-4">
        <div className="row">
          <div className="col-md-5">
            <Link to="/products/denim-shirt.m201">
              <img src="https://i.imgur.com/yvqOm6V.png" alt="hot sale product" />
            </Link>
          </div>
          <div className="col-md-7 content d-flex flex-column justify-content-center">
            <h2 className="title">Deal of the day</h2>
            <span className="mt-4 mb-5">
              Get <span className="color bold">50%</span> off to your order
            </span>
            <Countdown date={time} renderer={renderer} />
            <div className="py-4">
              <Button
                name="Shop Now"
                link="/products/denim-shirt.m201"
                styleClass="color slide"
              />
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
