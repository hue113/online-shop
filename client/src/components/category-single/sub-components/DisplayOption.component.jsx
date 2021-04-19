import React from "react";

const DisplayOption = ({ handleSelectGrid }) => {
  return (
    <div className="display-option ml-auto">
      <i
        className="bi bi-layout-text-sidebar-reverse icon mr-4"
        onClick={() => handleSelectGrid("row-cols-1")}
      />
      <i
        className="bi bi-grid icon mr-4"
        onClick={() => handleSelectGrid("row-cols-2")}
      />
      <i
        className="bi bi-grid-3x3-gap-fill icon d-none d-sm-inline"
        onClick={() => handleSelectGrid("row-cols-3")}
      />
    </div>
  );
};

export default DisplayOption;
