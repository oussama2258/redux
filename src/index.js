import React from "react";
import ReactDOM from "react-dom";

// dependencies
import { Provider } from "react-redux";
import store from "./JS/Store/Store";

// components
import App from "./App";

// CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
