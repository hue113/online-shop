import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { shop } from '../../../data/shop';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

const CheckoutItem = () => {
  const product = shop[0].items[0];

  const [color, setColor] = useState(product.variation ? product.variation[0].color : '');
  const [size, setSize] = useState();

  const handleSelectColor = (color) => {
    setColor(color);
    console.log(color);
  };
  const handleSelectSize = (size) => {
    setSize(size);
    console.log(size);
  };

  return (
    <div className="checkout-item row">
      <div className="image-box col-sm-4 mb-4">
        <Link
          to={`/products/${product.name.toLowerCase().replace(/ /g, '-')}.${product.sku}`}
        >
          <img src={product.image} alt="" />
        </Link>
      </div>

      <div className="content px-4 col-sm-8 d-flex flex-column">
        {/* NAME */}
        <h4 className="bold my-3 ">{product.name}</h4>

        {/* PRICE */}
        <div className="price mb-3 ">
          {product.discount === 0 ? (
            <span className="mr-4">${product.price.toFixed(2)}</span>
          ) : (
            <div>
              <span className="mr-4 old-price">${product.price.toFixed(2)}</span>
              <span className="sale-price">
                ${(product.price * (1 - product.discount / 100)).toFixed(2)}
              </span>
            </div>
          )}
        </div>

        {/* OPTIONS */}
        <div className="options mb-3 d-flex">
          <div className="colorPick mr-5">
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
          <div className="sizePick ml-4">
            <h4>Size</h4>
            <div className="size-content d-flex my-4 w-100">
              <DropdownButton title={size} onSelect={handleSelectSize}>
                {product.variation
                  .filter((el) => el.color === 'white')[0]
                  .size.map((el, index) => (
                    <Dropdown.Item key={index} eventKey={el.size}>
                      {el.name}
                    </Dropdown.Item>
                  ))}
              </DropdownButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CheckoutItem;
