import React, { useState } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "../../../components/custom-button/Button.component";

const ProductDetailRightSide = ({ product }) => {
  const [color, setColor] = useState(
    product.variation ? product.variation[0].color : ""
  );
  const [size, setSize] = useState(
    product.variation ? product.variation[0].size[0].name : ""
  );
  const handleSelectColor = (e) => {
    setColor(e);
    console.log(e);
  };
  const handleSelectSize = (e) => {
    setSize(e);
    console.log(e);
  };

  return (
    <div className="section right-side">
      <div className="container">
        <div className="">
          <h2 className="mb-5">{product.name}</h2>
          <div className="price my-4">
            {product.discount === 0 ? (
              <span className="mr-5">${product.price.toFixed(2)}</span>
            ) : (
              <div>
                <span className="mr-4 old-price">
                  ${product.price.toFixed(2)}
                </span>
                <span className="sale-price">
                  ${(product.price * (1 - product.discount / 100)).toFixed(2)}
                </span>
              </div>
            )}
          </div>
          <p className="short-description py-4">{product.shortDescription}</p>
        </div>

        <div className="line-break my-5"></div>

        {/* <div className="right-side middle mt-4"> */}
        <div className="d-flex pt-4">
          <div className="color mr-5">
            <h4>Color</h4>
            <div className="color-btn color d-flex py-3">
              <DropdownButton title={color} onSelect={handleSelectColor}>
                {product.variation.map((el, index) => (
                  <Dropdown.Item key={index} eventKey={el.color}>
                    {el.color}
                  </Dropdown.Item>
                ))}
              </DropdownButton>
            </div>
          </div>
          <div className="size ml-5">
            <h4>Size</h4>
            <div className="size-content d-flex mt-4">
              {product.variation
                .filter((el) => el.color === color)[0]
                .size.map((el, index) => (
                  <button
                    key={index}
                    className="box mr-3 d-flex justify-content-center align-items-center"
                    onClick={() => handleSelectSize(el.name)}
                  >
                    {el.name.toUpperCase()}
                  </button>
                ))}
            </div>
          </div>
        </div>
        {/* </div> */}

        <div className="quantity py-4 d-flex align-items-center">
          <h4 className="mr-5 my-0">Quantity</h4>
          <div className="quantity-btn">
            <input
              className="py-3 text-center"
              type="number"
              min="1"
              defaultValue="1"
            ></input>
          </div>
        </div>

        <div className="line-break my-5"></div>

        <div className="d-flex justify-content-center">
          <Button link="/" styleClass="color square mx-4" name="Add To Cart" />
          <Button link="/" styleClass="color square mx-4">
            <i className="bi bi-heart" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailRightSide;
