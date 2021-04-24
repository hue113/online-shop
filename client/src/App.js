import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { connect } from 'react-redux';

import ErrorBoundary from './components/error-boundary/error-boundary.component';
import Spinner from './components/loading-spinner/Spinner.component';

import { getCurrentUser } from './redux/user/user.actions';

const Home = lazy(() => import('./pages/home/Home.page'));
const Shop = lazy(() => import('./pages/shop/Shop.page'));
const ShopSingle = lazy(() => import('./pages/shop-single/ShopSingle.page'));
const ProductDetail = lazy(() => import('./pages/product-detail/ProductDetail.page'));
const Login = lazy(() => import('./pages/log-in/LogIn.page'));
const Register = lazy(() => import('./pages/register/Register.page'));
const StoreLocator = lazy(() => import('./pages/store-locator/StoreLocator.page'));
const Checkout = lazy(() => import('./pages/checkout/Checkout.page'));
const Favourites = lazy(() => import('./pages/favourites/Favourites.page'));

toast.configure();
const App = ({ getCurrentUser }) => {
  console.log('App');

  useEffect(() => {
    getCurrentUser();
  }, [getCurrentUser]);

  return (
    <Router>
      <Suspense fallback={<Spinner />}>
        <Switch>
          <ErrorBoundary>
            <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
            <Route exact path={process.env.PUBLIC_URL + '/home'} component={Home} />
            <Route exact path={process.env.PUBLIC_URL + '/shop'} component={Shop} />
            <Route
              exact
              path={process.env.PUBLIC_URL + '/shop/:category'}
              component={ShopSingle}
            />
            <Route
              exact
              path={process.env.PUBLIC_URL + '/products/:name'}
              component={ProductDetail}
            />
            <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
            <Route
              exact
              path={process.env.PUBLIC_URL + '/register'}
              component={Register}
            />
            <Route
              exact
              path={process.env.PUBLIC_URL + '/stores'}
              component={StoreLocator}
            />
            <Route
              exact
              path={process.env.PUBLIC_URL + '/checkout'}
              component={Checkout}
            />
            <Route
              exact
              path={process.env.PUBLIC_URL + '/favourites'}
              component={Favourites}
            />
          </ErrorBoundary>
          <ToastContainer />
        </Switch>
      </Suspense>
    </Router>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getCurrentUser: () => dispatch(getCurrentUser()),
});

export default connect(null, mapDispatchToProps)(App);
