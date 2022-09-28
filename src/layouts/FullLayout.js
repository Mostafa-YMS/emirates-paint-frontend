import React, { useState, useEffect } from "react";
import Header from "../elements/Header";
import Footer from "../elements/Footer";
import ScrollTo from "../elements/ScrollTo";
import Feedback from "../components/Feedback";

const FullLayout = ({ children, ...rest }) => {
  const [spinner, setSpinner] = useState(false);
  const [tabProps, setTabProps] = useState(1);
  const [selectedColorProps, setSelectedColorProps] = useState([]);
  const [uploadImageProps, setUploadImageProps] = useState();
  const [selectImageProps, setSelectImageProps] = useState();

  const passableParams = {
    setTabProps,
    tabProps,
    setSpinner,
    spinner,
    setSelectedColorProps,
    selectedColorProps,
    setUploadImageProps,
    uploadImageProps,
    setSelectImageProps,
    selectImageProps,
  };
  const childrenWithProps = React.Children.map(children, (child) => {
   
    if (React.isValidElement(child)) {
      return React.cloneElement(child, passableParams);
    }
    return child;
  });

  return (
    <>
      <div className="home">
        <Header />
        <Feedback />
        <main>{childrenWithProps}</main>
        <Footer />
      </div>
      <ScrollTo />
    </>
  );
};

export default FullLayout;
