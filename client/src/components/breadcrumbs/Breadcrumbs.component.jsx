import React from 'react';
import { Link } from 'react-router-dom';

import { link } from '../../data/breadcrumbs';

const Breadcrumbs = ({ path, productName, productPath }) => {
  const results = path.split(', ').map((i) => {
    return link.filter((el) => el.name.toLowerCase() === i.replace('-', ' '))[0];
  });
  // console.log(results);

  return (
    <div className="breadcrumbs py-5">
      <div className="wrapper">
        <h2 className="title uppercase bold">
          {productName ? productName : results.slice(-1)[0].fullName}
        </h2>
        <div></div>
        <div className="link-group">
          <span className="link">
            {results.map((i) => (
              <Link key={i.id} to={i.link}>
                {i.name}
              </Link>
            ))}
            {productPath && <Link to={productPath}>{productName}</Link>}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumbs;
