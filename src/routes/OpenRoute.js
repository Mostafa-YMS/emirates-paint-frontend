import React, { Children, Component, Suspense } from "react";
import { Redirect, Route } from "react-router-dom";
import Spinner from "../components/Spinner";
import FullLayout from "../layouts/FullLayout";

const OpenRoute = ({ component, ...rest }) => {
  return (
    <Route {...rest}>
      <FullLayout>

          {React.createElement(component, rest)}

      </FullLayout>
    </Route>
  );
};

export default OpenRoute;
