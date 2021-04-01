import React from "react";

const Category = () => {
  return (
    <div className="category">
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <div className="category-card">
              <div className="image-cropper">
                <img
                  className="image"
                  src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1652&q=80"
                  alt=""
                />
              </div>
              <h4>Women</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
