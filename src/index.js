import 'semantic-ui-css/semantic.min.css';
import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";

import store from "./components/redux/store/store";
import Nav from "./components/nav/Nav";
import App from "./app/App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);


