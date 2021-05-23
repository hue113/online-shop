import React from "react";

const ServiceCard = ({ name, content, children }) => {
  return (
    <div className="service-card col-md-4 d-flex">
      <div className="image-container mr-4">{children}</div>
      <div className="ml-2">
        <h4 className="title bold">{name}</h4>
        <p className="mb-3">{content}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
