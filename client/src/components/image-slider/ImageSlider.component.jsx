import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from '../custom-button/Button.component';

const ImageSlider = () => {
  return (
    <div className="ImageSlider">
      <Carousel fade>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100 image"
            src="https://i.imgur.com/pdfQDik.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h1 className="title p-2 bold">Stylish clothes</h1>
            <h1 className="title p-1 bold">Stylish life</h1>
            <h4 className="subtitle d-none d-md-block  m-4 p-4">
              Embrace styles that make your energy flow
            </h4>
            <Button name="Shop Now" link="/shop" styleClass="transparent slide" />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100 image"
            src="https://i.imgur.com/icbB0O1.png"
            alt="First slide"
          />
          <Carousel.Caption className="reverse">
            <h1 className="title p-2 bold">New for Spring</h1>
            <h1 className="title p-1 bold">Shop Your Style</h1>
            <h4 className="subtitle d-none d-md-block m-4 p-4">
              Get the best outfit of your life
            </h4>
            <Button
              name="Shop Now"
              link="/shop/new-arrivals"
              styleClass="transparent slide"
            />
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ImageSlider;
