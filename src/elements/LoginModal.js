import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function LoginModal(props) {
  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {
    if (props.openLoginModal == true) {
      setOpenModal(props.openLoginModal);
    }
  }, [props]);

  const [activeStep, setActiveStep] = useState(1);

  return (
    <Modal show={openModal}>
      <Modal.Body>
        <div className="register">
          <Link
            to="#"
            className="close_button"
            onClick={() => {
              setOpenModal(false);
            }}
          >
            <svg
              width="19"
              height="19"
              className="close-button__IconClose-sc-1o0pd70-1 bMKQZK"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <title>close</title>
              <path d="M18.984 6.422L13.406 12l5.578 5.578-1.406 1.406L12 13.406l-5.578 5.578-1.406-1.406L10.594 12 5.016 6.422l1.406-1.406L12 10.594l5.578-5.578z"></path>
            </svg>
          </Link>
          {activeStep === 1 && (
            <>
              <h4 className="headline">Sign In</h4>
              <h6 className="heading_dsc">
                We're really excited to have you back.
              </h6>
              <br />
              <div className="input_item">
                <div className="name">E-mail</div>
                <input
                  className="form-control name_value"
                  placeholder="Email"
                  type="email"
                  name="email"
                />
              </div>
              <div className="input_item">
                <div className="name">Password</div>
                <input
                  className="form-control name_value"
                  placeholder="Password"
                  type="password"
                  name="password"
                />
              </div>
              <div className="input_item">
                <button className="login_button">Sign In</button>
              </div>

              <div className="input_item text-center">
                <Link
                  onClick={() => {
                    setActiveStep(2);
                  }}
                  to="#"
                  className="forgot_password green"
                >
                  Forgot password?
                </Link>
              </div>
            </>
          )}
          {activeStep === 2 && (
            <>
              <h4 className="headline">Forgot your Password?</h4>
              <h6 className="heading_dsc">
                Enter your email address below and if your email exists in our
                system, we'll get you back on track
              </h6>
              <br />
              <div className="input_item">
                <div className="name">E-mail</div>
                <input
                  className="form-control name_value"
                  placeholder="Email"
                  type="email"
                  name="email"
                />
              </div>

              <div className="input_item">
                <button className="login_button">Request Password Reset</button>
              </div>
            </>
          )}

          <div className="input_item text-center">
            <span className="forgot_password">Don't have an account? </span>
            <Link to="#" className="forgot_password green">
              <b>Create Account</b>
            </Link>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
