import React, { useState, useEffect } from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { connect } from 'react-redux';

import Button from '../../../components/custom-button/Button.component';
import { addItemToFavourite } from '../../../redux/favourite/favourite.actions';

const MainInfo = ({ product, addItemToFavourite }) => {
  const [color, setColor] = useState(product.variation ? product.variation[0].color : '');
  const [size, setSize] = useState(
    product.variation ? product.variation[0].size[0].name : '',
  );

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

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div className="section main-info">
      <div className="container">
        <div className="">
          <h2 className="mb-5">{product.name}</h2>
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
          <p className="short-description py-4">{product.shortDescription}</p>
        </div>

        <div className="line-break my-5"></div>

        {/* <div className="right-side middle mt-4"> */}
        <div className="d-flex pt-4">
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
        {/* </div> */}

        <div className="quantity py-4 d-flex align-items-center">
          <h4 className="mr-5 my-0">Quantity</h4>
          <div className="quantity-btn">
            <input
              className="py-3 text-center"
              type="number"
              pattern="[0-9]*"
              min="1"
              defaultValue="1"
            ></input>
          </div>
        </div>

        <div className="line-break my-5"></div>

        <div className="d-flex justify-content-center">
          <Button styleClass="color square mx-4" name="Add To Cart" />
          <Button
            onClick={() => addItemToFavourite(product)}
            styleClass="color square mx-4"
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
});

export default connect(null, mapDispatchToProps)(MainInfo);
// export default MainInfo;
