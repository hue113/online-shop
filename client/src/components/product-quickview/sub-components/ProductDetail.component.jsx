import React, { useState, useEffect } from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';

import Button from '../../../components/custom-button/Button.component';
import { renderRatingStars } from '../../../utils/helper';
import { addItemToFavourite } from '../../../redux/favourite/favourite.actions';
import { addItemToCart } from '../../../redux/cart/cart.actions';

const ProductDetail = ({ product, addItemToFavourite, addItemToCart }) => {
  const [color, setColor] = useState(product.variation ? product.variation[0].color : '');
  const [size, setSize] = useState();
  const [quantity, setQuantity] = useState(1);

  const handleSelectColor = (color) => {
    setColor(color);
  };

  const handleSelectSize = (size, i) => {
    // fixed Safari issue: not changing style on click
    const sizeBtn = document.querySelectorAll('.sizebtn');
    sizeBtn.forEach((btn) => {
      btn.classList.remove('focus');
    });
    const selectedSize = document.querySelector(`.box.sizebtn.s${size}`);
    selectedSize.classList.add('focus');

    setSize(size);
  };
  const handleSubmit = (color, size, quantity) => {
    // console.log(color, size, quantity);
    if (color && size && quantity) {
      const order = { color, size, quantity };
      // console.log(product, order);
      addItemToCart(product, order);

      toast.success(
        `You've just added ${quantity} ${
          product.name
        } - Size: ${size.toUpperCase()} & Color: ${color} successfully !`,
        {
          position: toast.POSITION.TOP_CENTER,
        },
      );
    } else
      toast.error('Please choose color & size', {
        position: toast.POSITION.TOP_CENTER,
      });
  };

  return (
    <div>
      <div className="star">{renderRatingStars(product.rating)}</div>
      <h3 className="title mt-3">{product.name}</h3>
      <div className="price my-4">
        {product.discount === 0 ? (
          <span className="mr-5">${product.price.toFixed(2)}</span>
        ) : (
          <div>
            <span className="mr-4 old-price">${product.price.toFixed(2)}</span>
            <span className="sale-price">
              ${(product.price * (1 - product.discount / 100)).toFixed(2)}
            </span>
          </div>
        )}
      </div>
      <p className="description pb-1">{product.shortDescription}</p>

      {/*  */}
      <div className="options d-flex pt-2">
        <div className="colorPick mr-5">
          <h5>Color</h5>
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
          <h5>Size</h5>
          <div className="size-content d-flex my-4 w-100">
            {product.variation
              .filter((el) => el.color === color)[0]
              .size.map((el, index) =>
                el.stock === 0 ? (
                  <div key={index} className={`outOfStock mr-3 `}>
                    <div className="text d-flex justify-content-center align-items-center">
                      {el.name.toUpperCase()}
                    </div>
                  </div>
                ) : (
                  <button
                    key={index}
                    className={`box sizebtn s${el.name} mr-3 d-flex justify-content-center align-items-center`}
                    onClick={() => handleSelectSize(el.name, index)}
                  >
                    {el.name.toUpperCase()}
                  </button>
                ),
              )}
          </div>
        </div>
      </div>

      <div className="quantity pt-1 d-flex align-items-center">
        <h5 className="mr-5 my-0">Quantity</h5>
        <div className="quantity-btn">
          <input
            className="py-3 text-center"
            type="number"
            pattern="[0-9]*"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          ></input>
        </div>
      </div>

      <div className="py-5">
        <Button
          styleClass="color square mx-4"
          name="Add To Cart"
          onClick={() => handleSubmit(color, size, quantity)}
        />
        <Button
          onClick={() => addItemToFavourite(product)}
          styleClass="color square mx-4"
        >
          <i className="bi bi-heart" />
        </Button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItemToFavourite: (item) => dispatch(addItemToFavourite(item)),
  addItemToCart: (item, order) => dispatch(addItemToCart(item, order)),
});

export default connect(null, mapDispatchToProps)(ProductDetail);
