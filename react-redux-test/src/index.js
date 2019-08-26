import React from "react";
import { render } from "react-dom";
// Redux
import { Provider } from "react-redux";
import store from "./js/store/index";

import App from "./js/components/App";
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css'

render(
  // Redux - Provider and store
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
