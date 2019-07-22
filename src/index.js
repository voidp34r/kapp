import React from "react";
import { render } from 'react-dom';
import { Provider } from "react-redux";
import { store } from "store/store";

// core components
// import Admin from "layouts/Admin.jsx";
import App  from "./App";

import "assets/css/material-dashboard-react.css?v=1.7.0";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
