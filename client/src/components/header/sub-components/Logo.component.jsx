import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="col-2  p-0">
      <Link className="logo" to="/">
        <h3 className="logo">Shine</h3>
      </Link>
    </div>
  );
};

export default Logo;
