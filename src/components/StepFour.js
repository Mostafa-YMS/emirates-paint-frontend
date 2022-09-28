import React, { useState, Fragment } from "react";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import emailValidate from "../services/emailValidate";
import emailjs from "@emailjs/browser";

export default function StepFour(props) {
  const [showUnusedColor, setShowUnusedColor] = useState(false);
  const toggleShowUnusedColor = () => {
    if (showUnusedColor) {
      setShowUnusedColor(false);
    } else {
      setShowUnusedColor(true);
    }
  };

  // buy Modal
  const [showBuyModal, setShowBuyModal] = useState(false);
  const [buyModalTab, setBuyModalTab] = useState("");

  const openBuyModal = (tab) => {
    setBuyModalTab(tab);
    setShowBuyModal(true);
  };

  const closeBuyModal = () => {
    setShowBuyModal(false);
  };
  const [radioItem, setRadioItem] = useState("");

  const radioSelect = (ev) => {
    setRadioItem(ev.target.value);
  };

  // register Data

  const validateForm = () => {
    var valid = true;
    // return valid;
    var errorsTmp = {};
    if (
      registerData.first_name.length < 2 ||
      registerData.first_name.length > 250
    ) {
      errorsTmp = { ...errorsTmp, first_name: "Please enter your first name" };
      valid = false;
    }
    if (
      registerData.last_name.length < 2 ||
      registerData.last_name.length > 250
    ) {
      errorsTmp = { ...errorsTmp, last_name: "Please enter your last name" };
      valid = false;
    }

    if (registerData.email.length < 2 || registerData.email.length > 250) {
      errorsTmp = { ...errorsTmp, email: "Please enter your email" };
      valid = false;
    }
    if (!emailValidate(registerData.email)) {
      errorsTmp = { ...errorsTmp, email: "Your email not valid" };
      valid = false;
    }

    if (registerData.prefer.length < 2 || registerData.prefer.length > 250) {
      errorsTmp = { ...errorsTmp, prefer: "Please select your prefer" };
      valid = false;
    }
    if (
      registerData.user_type.length < 2 ||
      registerData.user_type.length > 250
    ) {
      errorsTmp = { ...errorsTmp, user_type: "Please select who you are" };
      valid = false;
    }
    if (registerData.country.length < 2 || registerData.country.length > 250) {
      errorsTmp = { ...errorsTmp, country: "Please select your country" };
      valid = false;
    }

    setErrors(errorsTmp);
    return valid;
  };

  const updateRegisterForm = (field, value) => {
    setRegisterData({ ...registerData, [field]: value });
  };

  const [acceptField, setAcceptField] = useState({
    first_name: false,
    last_name: false,
    email: false,
    prefer: false,
    user_type: false,
    country: false,
  });
  const [errors, setErrors] = useState({});

  const registerInput = (ev) => {
    var target = ev.target;
    var field = target.name;
    var value = target.value;

    if (field == "first_name") {
      if (value.length > 2) {
        setAcceptField({ ...acceptField, first_name: true });
        setErrors({ ...errors, first_name: "" });
      } else {
        setAcceptField({ ...acceptField, first_name: false });
        setErrors({ ...errors, first_name: "Please enter your first name" });
      }
    }

    if (field == "last_name") {
      if (value.length > 2) {
        setAcceptField({ ...acceptField, last_name: true });
        setErrors({ ...errors, last_name: "" });
      } else {
        setAcceptField({ ...acceptField, last_name: false });
        setErrors({ ...errors, last_name: "Please enter your last name" });
      }
    }

    if (field == "email") {
      if (emailValidate(value)) {
        setAcceptField({ ...acceptField, email: true });
        setErrors({ ...errors, email: "" });
      } else {
        setAcceptField({ ...acceptField, email: false });
        setErrors({ ...errors, email: "Your email not valid" });
      }
    }
    if (field == "prefer") {
      if (value.length > 2) {
        setAcceptField({ ...acceptField, prefer: true });
        setErrors({ ...errors, prefer: "" });
      } else {
        setAcceptField({ ...acceptField, prefer: false });
        setErrors({ ...errors, prefer: "Please select your prefer" });
      }
    }
    if (field == "user_type") {
      if (value.length > 2) {
        setAcceptField({ ...acceptField, user_type: true });
        setErrors({ ...errors, user_type: "" });
      } else {
        setAcceptField({ ...acceptField, user_type: false });
        setErrors({ ...errors, user_type: "Please select who you are" });
      }
    }
    if (field == "country") {
      if (value.length > 2) {
        setAcceptField({ ...acceptField, country: true });
        setErrors({ ...errors, country: "" });
      } else {
        setAcceptField({ ...acceptField, country: false });
        setErrors({ ...errors, country: "Please select your country" });
      }
    }

    updateRegisterForm(field, value);
  };

  const [registerData, setRegisterData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    prefer: "",
    user_type: "",
    country: "",
  });
  const templateParams = {
    name: registerData.first_name,
    notes: "Check this out!",
    email: registerData.email,
  };

  const submitRegisterData = async () => {
    var valid = validateForm();

    if (valid) {
      // send mail

      emailjs.send(
        "service_c15c53o",
        "template_726bm3g",
        templateParams,
        "YwKlVmJciXElKKB6X"
      );

      // download image
      const originalImage = process.env.PUBLIC_URL + props.selectImageProps;
      const image = await fetch(originalImage);

      //Split image name
      const nameSplit = originalImage.split("/");
      const duplicateName = nameSplit.pop();

      const imageBlog = await image.blob();
      const imageURL = URL.createObjectURL(imageBlog);
      const link = document.createElement("a");
      link.href = imageURL;
      link.download = "" + duplicateName + "";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setShowBuyModal(false);
    }
  };
  return (
    <Fragment>
      <div className="section_headline padding_left_right">
        <div onClick={() => props.setTabProps(3)} className="link">
          Visualize Your Room
        </div>
      </div>
      <br />
      <div className="section_ending_area">
        <div className="row">
          <div className="col-md-7">
            <br />
            <div className="final_photo">
              <div className="uploaded_photo">
                {props.uploadImageProps ? (
                  <>
                    <img alt="Logo" src={props.uploadImageProps} />
                  </>
                ) : (
                  <>
                    <img
                      alt="Logo"
                      src={process.env.PUBLIC_URL + props.selectImageProps}
                    />
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <br />
            <div className="section_headline">
              <div className="heading text-uppercase">Order Paint</div>
              <br />
              <div className="d-flex justify-content-between">
                <Link className="link d-block" target="blank" to="#">
                  Find a store
                </Link>
                <div
                  onClick={() => openBuyModal("Save Your Project")}
                  className="link"
                >
                  save this project
                </div>
              </div>
            </div>

            <br />
            <div className="used_color_list">
              {props.selectedColorProps.length > 0
                ? props.selectedColorProps.map((color) => (
                    <Fragment>
                      <div key={"color_" + color.id} className="used_color">
                        <div
                          className={
                            color.color_type === "paid"
                              ? "color_content undo_radious_bottom"
                              : "color_content"
                          }
                          style={{
                            background: color.color_code,
                          }}
                        >
                          <div className="title">{color.title}</div>
                          <div className="color_code">{color.color_code}</div>
                        </div>

                        {color.color_type === "paid" && (
                          <div className="buy_section">
                            <div className="buy_text">BUY NOW</div>

                            <Button
                              onClick={() =>
                                openBuyModal("Select Your Paint Sheen")
                              }
                              className="buy_btn"
                            >
                              <img
                                className="img-responsive"
                                alt="direction photo"
                                src={
                                  require("../assets/images/home-depot.png")
                                    .default
                                }
                              />
                            </Button>
                          </div>
                        )}
                      </div>
                    </Fragment>
                  ))
                : ""}
            </div>
            <br />

            <div onClick={toggleShowUnusedColor} className="show_unused_color">
              Show Unused Colors
              <span>
                <i className="fa fa-angle-down"></i>
              </span>
            </div>
            {showUnusedColor && (
              <div className="used_color_list">
                {props.selectedColorProps.length > 0
                  ? props.selectedColorProps.map((color) => (
                      <Fragment>
                        <div key={color.id} className="used_color">
                          <div
                            className={
                              color.color_type === "paid"
                                ? "color_content undo_radious_bottom"
                                : "color_content"
                            }
                            style={{
                              background: color.color_code,
                            }}
                          >
                            <div className="title">{color.title}</div>
                            <div className="color_code">{color.color_code}</div>
                          </div>

                          {color.color_type === "paid" && (
                            <div className="buy_section">
                              <div className="buy_text">BUY NOW</div>

                              <Button
                                onClick={() =>
                                  openBuyModal("Select Your Paint Sheen")
                                }
                                className="buy_btn"
                              >
                                <img
                                  className="img-responsive"
                                  alt="direction photo"
                                  src={
                                    require("../assets/images/home-depot.png")
                                      .default
                                  }
                                />
                              </Button>
                            </div>
                          )}
                        </div>
                      </Fragment>
                    ))
                  : ""}
              </div>
            )}
          </div>
        </div>
      </div>

      <Modal size="lg" show={showBuyModal} onHide={closeBuyModal}>
        <Modal.Body
          className={
            buyModalTab === "Select Your Paint Sheen" ? "no_padding_modal" : ""
          }
        >
          {buyModalTab === "Save Your Project" && (
            <form className="input_form">
              <div className="mb3 form_heading">{buyModalTab}</div>
              <div className="row">
                <div className="col-6">
                  <div className="mb-3">
                    <label className="form-label">First Name (required)</label>
                    <input
                      className={
                        "form-control " +
                        (errors && errors.first_name ? "error" : "") +
                        (acceptField.first_name == true ? "accepted" : "")
                      }
                      type="text"
                      onChange={registerInput}
                      name="first_name"
                      value={registerData.first_name}
                    />
                    <div className="errorMsg">
                      {errors ? errors.first_name : ""}
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="mb-3">
                    <label className="form-label">Last Name (required)</label>
                    <input
                      className={
                        "form-control " +
                        (errors && errors.last_name ? "error" : "") +
                        (acceptField.last_name == true ? "accepted" : "")
                      }
                      type="text"
                      onChange={registerInput}
                      name="last_name"
                      value={registerData.last_name}
                    />
                    <div className="errorMsg">
                      {errors ? errors.last_name : ""}
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="mb-3">
                    <br />

                    <label className="form-label">Email (required)</label>

                    <input
                      className={
                        "form-control " +
                        (errors && errors.email ? "error" : "") +
                        (acceptField.email == true ? "accepted" : "")
                      }
                      type="email"
                      onChange={registerInput}
                      name="email"
                      value={registerData.email}
                    />
                    <div className="errorMsg">{errors ? errors.email : ""}</div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="mb-3">
                    <label className="form-label">
                      Where do you prefer to buy Emirates Paints? (required)
                    </label>
                    <select
                      className={
                        "form-select " +
                        (errors && errors.prefer ? "error" : "") +
                        (acceptField.prefer == true ? "accepted" : "")
                      }
                      aria-label="Default select example"
                      name="prefer"
                      onChange={registerInput}
                      value={registerData.prefer}
                    >
                      <option value="" selected="selected"></option>
                      <option
                        label="Independent Dealer"
                        value="independent dealer"
                      >
                        Independent Dealer
                      </option>
                      <option
                        label="Emirates Paint Store"
                        value="Emirates paint store"
                      >
                        Emirates Paint Store
                      </option>
                      <option label="The Home Depot" value="the home depot">
                        The Home Depot
                      </option>
                    </select>
                    <div className="errorMsg">
                      {errors ? errors.prefer : ""}
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="mb-3">
                    <label className="form-label">
                      Who are you? (required)
                    </label>
                    <select
                      className={
                        "form-select " +
                        (errors && errors.user_type ? "error" : "") +
                        (acceptField.user_type == true ? "accepted" : "")
                      }
                      aria-label="Default select example"
                      name="user_type"
                      onChange={registerInput}
                      value={registerData.user_type}
                    >
                      <option value="" selected="selected"></option>
                      <option label="Homeowner" value="homeowner">
                        Homeowner
                      </option>
                      <option label="Professional" value="professional">
                        Professional
                      </option>
                    </select>
                    <div className="errorMsg">
                      {errors ? errors.user_type : ""}
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="mb-3">
                    <label className="form-label">Country (required)</label>
                    <select
                      className={
                        "form-select " +
                        (errors && errors.country ? "error" : "") +
                        (acceptField.country == true ? "accepted" : "")
                      }
                      aria-label="Default select example"
                      name="country"
                      onChange={registerInput}
                      value={registerData.country}
                    >
                      <option value="" selected="selected"></option>
                      <option label="USA" value="usa">
                        USA
                      </option>
                      <option label="Canada" value="canada">
                        Canada
                      </option>
                      <option label="Mexico" value="mexico">
                        Mexico
                      </option>
                    </select>
                    <div className="errorMsg">
                      {errors ? errors.country : ""}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <div className="check_area form_checkbox">
                  <input
                    id="privacyBox"
                    className="margin_top_10"
                    type="checkbox"
                    // onChange={registerInput}
                    value="yes"
                  />
                  <label for="privacyBox">
                    <span className="check_text">
                      Yes, I would like the opportunity to receive e-mails
                      containing information, product updates, e-newsletters,
                      samples, promotional offers and rebates from brands of PPG
                      Industries, Inc. and its subsidiaries. I understand that I
                      may later withdraw my consent to receive these materials
                      by following the message's opt out instructions.
                    </span>
                  </label>
                </div>
              </div>
              <br />
              <div className="mb-3">
                <div className="submit_area_btns">
                  <Button onClick={closeBuyModal} className="link font_13">
                    Cancel
                  </Button>
                  <Button
                    onClick={submitRegisterData}
                    className="link active font_13"
                  >
                    Save Project
                  </Button>
                </div>
              </div>
            </form>
          )}
          {buyModalTab === "Select Your Paint Sheen" && (
            <form className="input_form no_padding">
              <div className="mb3 form_heading padding_top_left_30">
                {buyModalTab}
              </div>

              <div className="mb-3">
                <div
                  className={
                    radioItem === "plan1"
                      ? "check_area form_checkbox form_radiobox active"
                      : "check_area form_checkbox form_radiobox"
                  }
                >
                  <input
                    id="plan1"
                    className="margin_top_10"
                    type="radio"
                    name="plan"
                    value="plan1"
                    onChange={radioSelect}
                  />
                  <label for="plan1">
                    <h3 className="radio_heading"> Interior - Flat </h3>
                    <div className="text_area uppercase">Best offer</div>
                    <div className="text_area">
                      Ceilings, Commercial, Dining Rooms, Offices
                    </div>
                  </label>
                </div>
              </div>

              <div className="mb-3">
                <div
                  className={
                    radioItem === "plan2"
                      ? "check_area form_checkbox form_radiobox active"
                      : "check_area form_checkbox form_radiobox"
                  }
                >
                  <input
                    id="plan2"
                    className="margin_top_10"
                    type="radio"
                    name="plan"
                    value="plan2"
                    onChange={radioSelect}
                  />
                  <label for="plan2">
                    <h3 className="radio_heading">Interior - Eggshell</h3>
                    <div className="text_area uppercase">Best offer</div>
                    <div className="text_area">
                      Bedrooms, Hallways, Living Rooms
                    </div>
                  </label>
                </div>
              </div>

              <div className="mb-3">
                <div
                  className={
                    radioItem === "plan3"
                      ? "check_area form_checkbox form_radiobox active"
                      : "check_area form_checkbox form_radiobox"
                  }
                >
                  <input
                    id="plan3"
                    className="margin_top_10"
                    type="radio"
                    name="plan"
                    value="plan3"
                    onChange={radioSelect}
                  />
                  <label for="plan3">
                    <h3 className="radio_heading">Interior - Satin</h3>
                    <div className="text_area uppercase">Best offer</div>
                    <div className="text_area">
                      Entryways, Exteriors, Kitchens, Nursery Rooms
                    </div>
                  </label>
                </div>
              </div>

              <div className="mb-3">
                <div
                  className={
                    radioItem === "plan4"
                      ? "check_area form_checkbox form_radiobox active"
                      : "check_area form_checkbox form_radiobox"
                  }
                >
                  <input
                    id="plan4"
                    className="margin_top_10"
                    type="radio"
                    name="plan"
                    value="plan4"
                    onChange={radioSelect}
                  />
                  <label for="plan4">
                    <h3 className="radio_heading">Interior - Semo-Gloss</h3>
                    <div className="text_area uppercase">Best offer</div>
                    <div className="text_area">Bathrooms, Trim</div>
                  </label>
                </div>
              </div>

              <div className="mb-3">
                <div
                  className={
                    radioItem === "plan5"
                      ? "check_area form_checkbox form_radiobox active"
                      : "check_area form_checkbox form_radiobox"
                  }
                >
                  <input
                    id="plan5"
                    className="margin_top_10"
                    type="radio"
                    name="plan"
                    value="plan5"
                    onChange={radioSelect}
                  />
                  <label for="plan5">
                    <h3 className="radio_heading">Interior - Semo-Gloss</h3>
                    <div className="text_area uppercase">Best offer</div>
                    <div className="text_area">Exteriors</div>
                  </label>
                </div>
              </div>

              <br />
              <div className="mb-3">
                <div className="submit_area_btns margin_o_auto">
                  <Button
                    onClick={() => closeBuyModal()}
                    className={
                      radioItem.length ? "buy_btn" : "buy_btn disabled"
                    }
                  >
                    <img
                      className="img-responsive"
                      alt="direction photo"
                      src={require("../assets/images/home-depot.png").default}
                    />
                  </Button>
                </div>
              </div>
              <br />
            </form>
          )}
        </Modal.Body>
      </Modal>
    </Fragment>
  );
}
