import React, { useState, useEffect, Fragment } from "react";
import { Container, Modal, Button } from "react-bootstrap";

import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import Spinner from "../components/Spinner";
// steps
import StepOne from "../components/StepOne";
import StepTwo from "../components/StepTwo";
import StepThree from "../components/StepThree";
import StepFour from "../components/StepFour";
import RightBar from "../components/RightBar";

export default function Home(props) {
  const [scroll, setScroll] = useState(0);
  // tabing
  const activeStep = props.tabProps;
  const changingStep = (step) => {
    setShowLeftBar(false);
    setShowRightBar(false);

    if (step === 2) {
      if (props.uploadImageProps !== undefined) {
        props.setTabProps(step);
      } else if (props.selectImageProps !== undefined) {
        props.setTabProps(step);
      } else {
        props.setTabProps(1);
      }
    } else if (step === 3) {
      if (props.selectedColorProps.length > 0) {
        props.setTabProps(step);
      } else {
        if (props.uploadImageProps !== undefined) {
          props.setTabProps(2);
        } else if (props.selectImageProps !== undefined) {
          props.setTabProps(2);
        } else {
          props.setTabProps(1);
        }
      }
    } else if (step === 4) {
      if (props.uploadImageProps !== undefined) {
        props.setTabProps(step);
      } else if (props.selectImageProps !== undefined) {
        props.setTabProps(step);
      } else {
        props.setTabProps(1);
      }
    } else if (step === 1) {
      props.setTabProps(step);
    }
  };
  // photo upload modal
  const [photoUploadModal, setPhotoUploadModal] = useState(true);
  const photoUploadOne = props.uploadImageProps;
  const closePhotUploadModal = () => setPhotoUploadModal(false);
  const openPhotUploadModal = () => setPhotoUploadModal(true);

  // color selection modal
  const [showColorModal, setShowColorModal] = useState(true);
  const selectedColorOne = props.selectedColorProps;

  const closeColorModal = () => setShowColorModal(false);
  const openColorModal = () => setShowColorModal(true);

  const [selectedColors, setSelectedColors] = useState([
    {
      id: 14,
      title: "Black",
      color_code: "#000000",
      color_type: "free",
    },
    {
      id: 15,
      title: "Orange",
      color_code: "#FFA500",
      color_type: "paid",
    },
  ]);

  const [showLeftBar, setShowLeftBar] = useState(false);
  const toggleLeftBar = () => {
    setShowRightBar(false);
    if (showLeftBar) {
      setShowLeftBar(false);
    } else {
      setShowLeftBar(true);
    }
  };
  const [showRightBar, setShowRightBar] = useState(false);
  const toggleRightBar = () => {
    setShowLeftBar(false);

    if (showRightBar) {
      setShowRightBar(false);
    } else {
      setShowRightBar(true);
    }
  };

  const [showBottomBar, setShowBottomBar] = useState(true);
  const toggleBottomBar = () => {
    if (showBottomBar) {
      setShowBottomBar(false);
    } else {
      setShowBottomBar(true);
    }
  };

  // const [loading, setLoading] = useState(true);
  // setTimeout(() => {
  //   setLoading(false);
  // }, 500);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    
    });
  });
  return (
    <Fragment>
      <div className="container">
        <div className={activeStep === 4 ? "d-none" : "page_heading"}>
          {activeStep === 1 && (
            <div className="heading_text">Visualize Your Space</div>
          )}
          {activeStep === 2 && (
            <div className="heading_text">
              Visualize Your Space <br /> pick colors for your photo
            </div>
          )}
          {activeStep === 3 && (
            <div className="heading_text">
              Visualize Your Space <br /> as simple as
            </div>
          )}
        </div>
        <div className={activeStep === 4 ? "d-none" : "step_index"}>
          <div
            onClick={() => changingStep(1)}
            className={activeStep === 1 ? "single_step active" : "single_step"}
          >
            <div
              className={activeStep === 1 ? "step_dash active" : "step_dash"}
            ></div>
            <div
              className={activeStep === 1 ? "step_text active" : "step_text"}
            >
              <span className="d-none d-sm-inline">Pick an</span> Image
            </div>
          </div>
          <div
            onClick={() => changingStep(2)}
            className={activeStep === 2 ? "single_step active" : "single_step"}
          >
            <div
              className={activeStep === 2 ? "step_dash active" : "step_dash"}
            ></div>
            <div
              className={activeStep === 2 ? "step_text active" : "step_text"}
            >
              <span className="d-none d-sm-inline">Pick a</span> color
            </div>
          </div>
          <div
            onClick={() => changingStep(3)}
            className={activeStep === 3 ? "single_step active" : "single_step"}
          >
            <div
              className={activeStep === 3 ? "step_dash active" : "step_dash"}
            ></div>
            <div
              className={activeStep === 3 ? "step_text active" : "step_text"}
            >
              Visualize <span className="d-none d-sm-inline">room</span>
            </div>
          </div>
          <div
            onClick={() => changingStep(4)}
            className={activeStep === 4 ? "single_step active" : "single_step"}
          >
            <div
              className={activeStep === 4 ? "step_dash active" : "step_dash"}
            ></div>
            <div
              className={activeStep === 4 ? "step_text active" : "step_text"}
            >
              <span className="d-none d-sm-inline">find a</span> store
            </div>
          </div>
        </div>

        <br />
        <div className="page_content_steps">
          {activeStep === 1 && <StepOne {...props} />}
          {activeStep === 2 && <StepTwo {...props} />}
          {activeStep === 3 && <StepThree {...props} />}
          {activeStep === 4 && <StepFour {...props} />}
        </div>
        <br />
        <br />
        <br />
      </div>

      <>
        {selectedColorOne.length > 0 ? (
          <Modal
            show={showColorModal}
            size="sm"
            onHide={closeColorModal}
            backdrop="static"
            keyboard={false}
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Body>
              You just saved your first color!
              <br /> Save as many colors as you like.
              <br />
              <Link className="modal_link" to="#" onClick={closeColorModal}>
                Got it
              </Link>
            </Modal.Body>
          </Modal>
        ) : (
          ""
        )}
      </>
      <>
        {photoUploadOne ? (
          <>
            <Modal
              show={photoUploadModal}
              size="sm"
              onHide={closePhotUploadModal}
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton></Modal.Header>
              <Modal.Body>
                Your photo is uploaded!
                <br />
                You can now paint your room or save more colors.
              </Modal.Body>
            </Modal>
          </>
        ) : (
          ""
        )}
      </>
    </Fragment>
  );
}
