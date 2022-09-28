import ls from "local-storage";

//Auth module
import PrivateRoute from "./PrivateRoute";
import OpenRoute from "./OpenRoute";

// import external modules
import React, { Component, lazy } from "react";
import { BrowserRouter, Switch, Redirect } from "react-router-dom";

import Home from "../pages/Home";

class OpenRoutes extends Component {
  

  render() {
    return (
      <BrowserRouter basename="/">
        <Switch>
          <OpenRoute exact path="/" component={Home}></OpenRoute>
          
          <Redirect path="*" to="/" />
        </Switch>
      </BrowserRouter>
    );
  }
}

class PrivateRoutes extends Component {
  render() {
    return (
      <BrowserRouter basename="/">
        <Switch>
          <PrivateRoute exact path="/" component={Home}></PrivateRoute>
          <Redirect path="*" to="/" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export { OpenRoutes, PrivateRoutes };
