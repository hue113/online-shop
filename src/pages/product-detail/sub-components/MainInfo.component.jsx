import React, { useState } from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';

import Button from '../../../components/custom-button/Button.component';
import { addItemToFavourite } from '../../../redux/favourite/favourite.actions';
import { addItemToCart } from '../../../redux/cart/cart.actions';
import { toastSetting, calculatePrice } from '../../../utils/helper';

const MainInfo = ({ product, addItemToFavourite, addItemToCart }) => {
  const { name, price, discount, variation, shortDescription } = product;
  const [color, setColor] = useState(variation ? variation[0].color : '');
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
    console.log(color, size, quantity);
    if (color && size && quantity) {
      const order = { color, size, quantity };
      console.log(product, order);
      addItemToCart(product, order);

      // reset color, size, quantity after submission
      setColor(variation[0].color);
      const sizeBtn = document.querySelectorAll('.sizebtn');
      sizeBtn.forEach((btn) => {
        btn.classList.remove('focus');
      });
      setQuantity(1);

      toast.success(
        `You've just added ${quantity} ${name} - Size: ${size.toUpperCase()} & Color: ${color} successfully !`,
        toastSetting,
      );
    } else toast.error('Please choose color & size', toastSetting);
  };

  return (
    <div className="section main-info">
      <div className="container">
        {/* NAME & PRICE & DESCRIPTION */}
        <div className="">
          <h2 className="mb-5">{name}</h2>
          <div className="price my-4">
            {discount === 0 ? (
              <span className="mr-5">${price.toFixed(2)}</span>
            ) : (
              <div>
                <span className="mr-4 old-price">${price.toFixed(2)}</span>
                <span className="sale-price">${calculatePrice(price, discount)}</span>
              </div>
            )}
          </div>
          <p className="short-description py-4">{shortDescription}</p>
        </div>

        <div className="line-break my-5"></div>

        {/* COLOR & SIZE pick */}
        <div className="d-flex pt-4">
          <div className="colorPick mr-5">
            <h4>Color</h4>
            <div className="color-btn color d-flex py-3">
              <DropdownButton title={color} onSelect={handleSelectColor}>
                {variation.map((el, index) => (
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
              {variation
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

        {/* QUANTITY */}
        <div className="quantity py-4 d-flex align-items-center">
          <h4 className="mr-5 my-0">Quantity</h4>
          <div className="quantity-btn">
            <input
              className="py-3 text-center"
              type="number"
              pattern="[0-9]*"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            ></input>
          </div>
        </div>

        <div className="line-break my-5"></div>

        {/* BUTTON ADD TO CART & FAVOURITE */}
        <div className="d-flex justify-content-center">
          <Button
            styleClass="color square lighter mx-4"
            name="Add To Cart"
            onClick={() => handleSubmit(color, size, quantity)}
          />
          <Button
            onClick={() => addItemToFavourite(product)}
            styleClass="color square lighter mx-4"
          >
            <i className="bi bi-heart" />
          </Button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItemToFavourite: (item) => dispatch(addItemToFavourite(item)),
  addItemToCart: (item, order) => dispatch(addItemToCart(item, order)),
});

export default connect(null, mapDispatchToProps)(MainInfo);
