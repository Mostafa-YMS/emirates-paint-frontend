import React from "react";
import ContentLoader, { Facebook } from "react-content-loader";

const Loader = () => (
  <div className="site-loader">
    <ContentLoader />
    <ContentLoader />
  </div>
);

export default Loader;
