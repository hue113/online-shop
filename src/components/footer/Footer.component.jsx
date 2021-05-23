import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer bg-dark py-5 px-4">
      <div className="container">
        <div className="row">
          <div className="col-6 col-md-3">
            <Link to="/shop" className="title">
              Shop
            </Link>
            <div className="" id="shop">
              <div className="d-none d-flex flex-column" id="shop2">
                <Link className="item" to="/shop/women">
                  Women
                </Link>
                <Link className="item" to="/shop/men">
                  Men
                </Link>
                <Link className="item" to="/shop/kids">
                  Kids
                </Link>
                <Link className="item" to="/shop/new-arrivals">
                  New Arrivals
                </Link>
                <Link className="item" to="/shop/sale">
                  Sale
                </Link>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-3">
            <h4>Useful Links</h4>
            <div className="" id="usefulLinks">
              <div className="collapse d-flex flex-column">
                <Link className="item" to="/">
                  Customer Service
                </Link>
                <Link className="item" to="/">
                  Legal & Privacy
                </Link>
                <Link className="item" to="/">
                  Returns
                </Link>
                <Link className="item" to="/">
                  FAQs
                </Link>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-3">
            <h4 className="title">Follow us</h4>
            <div className="" id="followUs">
              <div className="collapse d-flex flex-column">
                <Link className="item" to="/">
                  Facebook
                </Link>
                <Link className="item" to="/">
                  Twitter
                </Link>
                <Link className="item" to="/">
                  Instagram
                </Link>
                <Link className="item" to="/">
                  Youtube
                </Link>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-3">
            <Link className="title" to="/register">
              <h4>Become A Member</h4>
            </Link>
            <span className="pb-2">
              Get E-mail updates about our latest shop and special offers.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
