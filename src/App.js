import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Home = lazy(() => import("./pages/home/Home.page"));
const Shop = lazy(() => import("./pages/shop/Shop.page"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + "/"} component={Home} />
          <Route path={process.env.PUBLIC_URL + "/home"} component={Home} />
          <Route path={process.env.PUBLIC_URL + "/shop"} component={Shop} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
