import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div className="logo px-2 py-1">
      <Link className="" to="/">
        <h3 className="title py-2">Shine</h3>
      </Link>
    </div>
  );
};

export default Logo;
