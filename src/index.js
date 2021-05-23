import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/scss/normalize.scss';
import './assets/scss/style.scss';
import reportWebVitals from './reportWebVitals';
// import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    {/* <BrowserRouter> */}
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
    {/* </BrowserRouter> */}
  </Provider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();