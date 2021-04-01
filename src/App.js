import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Home from "./pages/home/Home.page";

const Home = lazy(() => import("./pages/home/Home.page"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + "/"} component={Home} />
          <Route path={process.env.PUBLIC_URL + "/home"} component={Home} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
