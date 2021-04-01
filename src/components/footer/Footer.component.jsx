import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// const ToggleItem = ({ name, children, handleToggle }) => {
//   return <h4 onClick={() => handleToggle(name)}>{children}</h4>;
// };

const Footer = () => {
  const [toggle, setToggle] = useState([]);

  const handleToggle = (name) => {
    const itemCollapse = document.querySelector(`#${name}`);
    if (toggle.name === true) {
      itemCollapse.classList.add("collapse");
    } else {
      itemCollapse.classList.remove("collapse");
    }
    setToggle({ ...toggle, [name]: !toggle[name] });
  };

  useEffect(() => {
    console.log(toggle);
  }, [toggle]);

  return (
    <footer className="footer bg-dark py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h4 onClick={(e) => handleToggle("shop")}>Shop</h4>
            <div className={`${toggle.shop ? "collapse" : ""}`} id="shop">
              <div className="d-none d-flex flex-column" id="shop2">
                <Link className="item" to="/">
                  Women
                </Link>
                <Link className="item" to="/">
                  Men
                </Link>
                <Link className="item" to="/">
                  Kids
                </Link>
                <Link className="item" to="/">
                  New Arrival
                </Link>
                <Link className="item" to="/">
                  Sale
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <h4 onClick={(e) => handleToggle("usefulLinks")}>Useful Links</h4>
            <div
              className={`${toggle.usefulLinks ? "collapse" : ""}`}
              id="usefulLinks"
            >
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

          <div className="col-md-3">
            <h4 onClick={(e) => handleToggle("followUs")}>Follow us</h4>
            {/* <ToggleItem name="followUs" handleToggle={(e) => handleToggle("followUs")}>
              Follow Us
            </ToggleItem> */}
            <div
              className={`${toggle.followUs ? "collapse" : ""}`}
              id="followUs"
            >
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

          <div className="col-md-3">
            <h4>Subscribe form</h4>
            <span className="pb-2">
              Get E-mail updates about our latest shop and special offers.
            </span>
            <input placeholder="Enter your email address ..." />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
