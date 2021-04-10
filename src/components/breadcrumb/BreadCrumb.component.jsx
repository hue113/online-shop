import React from "react";
import { Link } from "react-router-dom";

const Breadcrumbs = (props) => (
  <div className="breadcrumbs">
    <ul className="container">
      <Route path="/:path" component={BreadcrumbsItem} />
    </ul>
  </div>
);

const BreadcrumbsItem = ({ match, ...rest }) => (
  <React.Fragment>
    <li className={match.isExact ? "breadcrumb-active" : undefined}>
      <Link to={match.url || ""}>{match.url}</Link>
    </li>
    <Route path={`${match.url}/:path`} component={BreadcrumbsItem} />
  </React.Fragment>
);
export default Breadcrumbs;
