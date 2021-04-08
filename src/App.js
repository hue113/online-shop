import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Home = lazy(() => import("./pages/home/Home.page"));
const Shop = lazy(() => import("./pages/shop/Shop.page"));
const ShopSingle = lazy(() => import("./pages/shop-single/ShopSingle.page"));
const ProductDetail = lazy(() =>
  import("./pages/product-detail/ProductDetail.page")
);
const Login = lazy(() => import("./pages/log-in/LogIn.page"));
const Register = lazy(() => import("./pages/register/Register.page"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + "/"} component={Home} />
          <Route
            exact
            path={process.env.PUBLIC_URL + "/home"}
            component={Home}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + "/shop"}
            component={Shop}
          />
          <Route
            path={process.env.PUBLIC_URL + "/shop/:category"}
            component={ShopSingle}
          />
          <Route
            path={process.env.PUBLIC_URL + "/product/:id"}
            component={ProductDetail}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + "/login"}
            component={Login}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + "/register"}
            component={Register}
          />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
