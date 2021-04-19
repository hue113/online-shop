import React from "react";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Review from "../../../components/review/Review.component";

const AdditionalInfo = ({ product }) => {
  return (
    <div className="section additional-info w-100">
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
              <Nav.Link eventKey="productReviews">Reviews</Nav.Link>
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
              <Review />
            </Tab.Pane>
            {/*  */}
          </Tab.Content>
        </Tab.Container>
      </div>
    </div>
  );
};

export default AdditionalInfo;
