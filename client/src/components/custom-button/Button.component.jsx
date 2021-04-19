import React from "react";
import { Link } from "react-router-dom";

const Button = ({ name, children, link, styleClass }) => {
  return (
    <>
      {link ? (
        <Link to={link}>
          <button className={`custom-button ${styleClass}`}>
            {name}
            {children}
          </button>
        </Link>
      ) : (
        <button className={`custom-button ${styleClass}`}>
          {name}
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
