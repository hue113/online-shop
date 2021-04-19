import React from "react";

const Spinner = () => {
  return (
    <div className="spinner vh-100">
      <div className="h-75 d-flex justify-content-center align-items-center">
        <div
          className="spinner-border text-primary"
          style={{ width: 45, height: 45 }}
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  );
};
export default Spinner;
