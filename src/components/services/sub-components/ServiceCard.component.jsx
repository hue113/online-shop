import React from "react";

const ServiceCard = ({ name, content, children }) => {
  return (
    <div className="col-md-4 d-flex">
      <div className="image-container">{children}</div>
      <div className="ml-2">
        <h4 className="bold">{name}</h4>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
