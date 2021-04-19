import React from "react";

const CustomForm = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="custom-form">
      <input className="form-input" onChange={handleChange} {...otherProps} />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};
export default CustomForm;
