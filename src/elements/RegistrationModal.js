import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function RegistrationModal(props) {
  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {
    if (props.openRegModal == true) {
      setOpenModal(props.openRegModal);
    }
  }, [props]);
  return (
    <Modal size="lg" show={openModal}>
      <Modal.Body className="reg_modal">
        <div className="register">
          <Link
            to="#"
            className="close_button on_reg"
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
          <h4 className="headline">Sign up! It's Free!</h4>
          <h6 className="heading_dsc">
            Follow the steps and start playing at mBitcasino
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
            <div className="name">Choose a Password</div>
            <input
              className="form-control name_value"
              placeholder="Enter 6 characters or more"
              type="password"
              name="password"
            />
          </div>
          <div className="input_item">
            <div className="name">Currency</div>
            <select className="form-control name_value">
              <option>BTC</option>
              <option>ETH</option>
              <option>BCH</option>
              <option>LTC</option>
              <option>DOG</option>
            </select>
          </div>

          <div className="input_item">
            <label for="terms" className="terms">
              <input id="terms" type="checkbox" />
              <span className="forgot_password margin_left">
                I Agree to
                <Link to="/terms-and-conditions"> Terms &amp; Conditions</Link>
              </span>
            </label>
          </div>
          <div className="input_item">
            <button className="login_button">Create Account</button>
          </div>
        </div>
        <div className="package_details d-none d-md-block">
          <div className="package_img">
            <img
              src={
                require("../assets/images/header/mrbitty-signup.png").default
              }
            />
          </div>
          <h4 className="package_headline">
            5 BTC Welcome Bonus + 300 Free Spins
          </h4>
          <div className="package_dsc">
            Join the Premier Bitcoin Casino today
          </div>
          <hr></hr>
          <div className="package_menu">
            <ul>
              <li>
                <svg
                  name="user"
                  width="16"
                  height="18"
                  fill="rgba(255, 255, 255, .8)"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 28 28"
                >
                  <path d="M14 0c7.734 0 14 6.266 14 14 0 7.688-6.234 14-14 14-7.75 0-14-6.297-14-14C0 6.266 6.266 0 14 0zm9.672 21.109C25.125 19.109 26 16.656 26 14c0-6.609-5.391-12-12-12S2 7.391 2 14c0 2.656.875 5.109 2.328 7.109C4.89 18.312 6.25 16 9.109 16a6.979 6.979 0 0 0 9.782 0c2.859 0 4.219 2.312 4.781 5.109zM20 11c0-3.313-2.688-6-6-6s-6 2.688-6 6 2.688 6 6 6 6-2.688 6-6z"></path>
                </svg>
                Lightning Fast Withdrawals
              </li>
              <li>
                <svg
                  name="wallet"
                  width="16"
                  height="18"
                  fill="rgba(255, 255, 255, .8)"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                >
                  <path d="M18 22a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h12v6H18zm1.5-4.417a1.5 1.5 0 1 0 .001 3.001 1.5 1.5 0 0 0-.001-3.001zM15 18v2c0 1.656 1.344 3 3 3h10v4a3 3 0 0 1-3 3H4c-1.656 0-3-1.344-3-3V8a3 3 0 0 1 3-3h9.632l-2.349.979H3.501a1.5 1.5 0 0 0 0 3H28V15H18a3 3 0 0 0-3 3zm-9.999-7h-2v2h1v-1h1v-1zm0 3h-2v2h1.041l-.041-1 1 .021V14zm0 3h-2v2h1.021l-.021-1h1v-1zm0 3h-2v2h1.021l-.021-1 1 .021V20zm0 3h-2v2h1v-1h1v-1zm0 3h-2v2h1.021l-.021-.979h1V26zm4-18.062L20.751 3l2.25 4.938h-14zM22.646 5H25c.876 0 1.656.381 2.205.979h-4.081L22.646 5z"></path>
                </svg>
                Provably Fair Games
              </li>
              <li>
                <svg
                  name="wallet"
                  width="16"
                  height="18"
                  fill="rgba(255, 255, 255, .8)"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                >
                  <path d="M18 22a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h12v6H18zm1.5-4.417a1.5 1.5 0 1 0 .001 3.001 1.5 1.5 0 0 0-.001-3.001zM15 18v2c0 1.656 1.344 3 3 3h10v4a3 3 0 0 1-3 3H4c-1.656 0-3-1.344-3-3V8a3 3 0 0 1 3-3h9.632l-2.349.979H3.501a1.5 1.5 0 0 0 0 3H28V15H18a3 3 0 0 0-3 3zm-9.999-7h-2v2h1v-1h1v-1zm0 3h-2v2h1.041l-.041-1 1 .021V14zm0 3h-2v2h1.021l-.021-1h1v-1zm0 3h-2v2h1.021l-.021-1 1 .021V20zm0 3h-2v2h1v-1h1v-1zm0 3h-2v2h1.021l-.021-.979h1V26zm4-18.062L20.751 3l2.25 4.938h-14zM22.646 5H25c.876 0 1.656.381 2.205.979h-4.081L22.646 5z"></path>
                </svg>
                Personal VIP Program
              </li>
              <li>
                <svg
                  name="wallet"
                  width="16"
                  height="18"
                  fill="rgba(255, 255, 255, .8)"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                >
                  <path d="M18 22a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h12v6H18zm1.5-4.417a1.5 1.5 0 1 0 .001 3.001 1.5 1.5 0 0 0-.001-3.001zM15 18v2c0 1.656 1.344 3 3 3h10v4a3 3 0 0 1-3 3H4c-1.656 0-3-1.344-3-3V8a3 3 0 0 1 3-3h9.632l-2.349.979H3.501a1.5 1.5 0 0 0 0 3H28V15H18a3 3 0 0 0-3 3zm-9.999-7h-2v2h1v-1h1v-1zm0 3h-2v2h1.041l-.041-1 1 .021V14zm0 3h-2v2h1.021l-.021-1h1v-1zm0 3h-2v2h1.021l-.021-1 1 .021V20zm0 3h-2v2h1v-1h1v-1zm0 3h-2v2h1.021l-.021-.979h1V26zm4-18.062L20.751 3l2.25 4.938h-14zM22.646 5H25c.876 0 1.656.381 2.205.979h-4.081L22.646 5z"></path>
                </svg>
                24/7 Live Chat Support
              </li>
            </ul>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
