import React from "react";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";

const ProductDetailBottomTab = ({ product }) => {
  return (
    <div className="section bottom-tab w-100">
      <div className="container">
        <Tab.Container defaultActiveKey="additionalInfo">
          {/* 1. Navigation Tab (top bar) */}
          <Nav
            variant="pills"
            className="top-bar p-2 d-flex justify-content-center"
          >
            <Nav.Item>
              <Nav.Link eventKey="additionalInfo">
                Additional Information
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="productDescription">Description</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="productReviews">Reviews(2)</Nav.Link>
            </Nav.Item>
          </Nav>

          {/* 2. Content for each Navigation Tab */}
          <Tab.Content className="content m-4">
            {/* Additional Info Tab */}
            <Tab.Pane eventKey="additionalInfo">
              <div className="additionalInfo">
                <div className="py-2">
                  <span className="bold">Weight</span> 400 g
                </div>
                <div className="py-2">
                  <span className="bold">Dimensions</span>10 x 10 x 15 cm
                </div>
                <div className="py-2">
                  <span className="bold">Materials</span> 60% cotton, 40%
                  polyester
                </div>
                <div className="py-2">
                  <span className="bold">Other Info</span> American heirloom
                  jean shorts pug seitan letterpress
                </div>
              </div>
            </Tab.Pane>

            {/* Description Tab */}
            <Tab.Pane eventKey="productDescription">
              <p>{product.fullDescription}</p>
            </Tab.Pane>

            {/* Review Tab */}
            <Tab.Pane eventKey="productReviews">
              <div className="row">
                <div className="col-lg-7">
                  <div className="review-wrapper">
                    <div className="single-review">
                      <div className="review-img">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/img/testimonial/1.jpg"
                          }
                          alt=""
                        />
                      </div>
                      <div className="review-content">
                        <div className="review-top-wrap">
                          <div className="review-left">
                            <div className="review-name">
                              <h4>White Lewis</h4>
                            </div>
                            <div className="review-rating">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                            </div>
                          </div>
                          <div className="review-left">
                            <button>Reply</button>
                          </div>
                        </div>
                        <div className="review-bottom">
                          <p>
                            Vestibulum ante ipsum primis aucibus orci
                            luctustrices posuere cubilia Curae Suspendisse
                            viverra ed viverra. Mauris ullarper euismod
                            vehicula. Phasellus quam nisi, congue id nulla.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="single-review child-review">
                      <div className="review-img">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/img/testimonial/2.jpg"
                          }
                          alt=""
                        />
                      </div>
                      <div className="review-content">
                        <div className="review-top-wrap">
                          <div className="review-left">
                            <div className="review-name">
                              <h4>White Lewis</h4>
                            </div>
                            <div className="review-rating">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                            </div>
                          </div>
                          <div className="review-left">
                            <button>Reply</button>
                          </div>
                        </div>
                        <div className="review-bottom">
                          <p>
                            Vestibulum ante ipsum primis aucibus orci
                            luctustrices posuere cubilia Curae Suspendisse
                            viverra ed viverra. Mauris ullarper euismod
                            vehicula. Phasellus quam nisi, congue id nulla.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-5">
                  <div className="ratting-form-wrapper pl-50">
                    <h3>Add a Review</h3>
                    <div className="ratting-form">
                      <form action="#">
                        <div className="star-box">
                          <span>Your rating:</span>
                          <div className="ratting-star">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="rating-form-style mb-10">
                              <input placeholder="Name" type="text" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="rating-form-style mb-10">
                              <input placeholder="Email" type="email" />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="rating-form-style form-submit">
                              <textarea
                                name="Your Review"
                                placeholder="Message"
                                defaultValue={""}
                              />
                              <input type="submit" defaultValue="Submit" />
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </Tab.Pane>
            {/*  */}
          </Tab.Content>
        </Tab.Container>
        {/* <div className=" d-flex justify-content-around">
        <h3>Additional Information</h3>
        <h3>Description</h3>
        <h3>Reviews</h3>
      </div>

      <div>Detail</div> */}
      </div>
    </div>
  );
};

export default ProductDetailBottomTab;
