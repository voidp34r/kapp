import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import Admin from "layouts/Admin.jsx";
import Auth from "layouts/Auth";

import "assets/css/material-dashboard-react.css?v=1.7.0";

export const history = createBrowserHistory();


class App extends React.Component {
  constructor(props) {
    super(props);

}
  render() {
    
    return (
      <Router history={history}>
        <Switch>
          <Route path="/admin" component={Admin} />
          <Route path="/auth" component={Auth} />
          <Redirect from="/" to="/admin/home" />
          {/* <Route path="/" component={Admin} /> */}
          {/* <Redirect from="/" to="/admin/dashboard" /> */}
        </Switch>
      </Router>
    );
  }
}

export default App;
