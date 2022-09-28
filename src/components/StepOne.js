import React, { Fragment, useState } from "react";
import { Alert, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import ImageGrid from "./parts/ImageGrid";
import ImageList from "../images.json";

export default function StepOne(props) {
  const changingStep = (step) => {
    props.setTabProps(step);
  };
  // lazy loading image
  const [imageLoaded, setImageLoaded] = useState(false);

  const pickImage = (image) => {
    props.setSelectImageProps(image);
    props.setTabProps(2);
  };
  const [file, setFile] = useState();
  const [getPhoto, setGetPhoto] = useState();
  const pickPhoto = (event) => {
    setFile(event.target.files[0]);
    setGetPhoto(URL.createObjectURL(event.target.files[0]));
    props.setUploadImageProps(URL.createObjectURL(event.target.files[0]));
  };

  const [showImageUploadArea, setShowImageUploadArea] = useState(false);
  const openImageUploadArea = () => {
    setShowImageUploadArea(true);
  };
  const coloseImageUploadArea = () => {
    setShowImageUploadArea(false);
  };
  const [imagesCategory, setImagesCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const selectImagesCategory = (category) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
    setImagesCategory(category);
  };

  //policy
  const [policyAccepted, setPolicyAccepted] = useState(false);

  const acceptPolicy = (ev) => {
    var target = ev.target;
    var value = target.value;
    var checkedStatus = ev.target.checked;
    if (checkedStatus) {
      setPolicyAccepted(true);
    } else {
      setPolicyAccepted(false);
    }
  };
  return (
    <Fragment>
      {showImageUploadArea ? (
        <Fragment>
          {getPhoto ? (
            <Fragment>
              <div className="section_headline">
                <div className="d-flex justify-content-between">
                  <div
                    onClick={() => {
                      setGetPhoto(null);
                      setPolicyAccepted(false);
                    }}
                    className="link"
                  >
                    Change Your Photo
                  </div>
                  <div onClick={() => changingStep(2)} className="link">
                    Next Step: Select Colors
                  </div>
                </div>
                <br />
                <br />
                <div className="heading">Rotate or Crop Your Photo</div>
                <br />
              </div>

              <div className="photo_edit_frame col-md-8">
                <div className="frame_header">
                  <Button className="link">
                    <span className="pad_right">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="img"
                        width="20"
                        height="20"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 1024 1024"
                      >
                        <path
                          fill="currentColor"
                          d="M758.2 839.1C851.8 765.9 912 651.9 912 523.9C912 303 733.5 124.3 512.6 124C291.4 123.7 112 302.8 112 523.9c0 125.2 57.5 236.9 147.6 310.2c3.5 2.8 8.6 2.2 11.4-1.3l39.4-50.5c2.7-3.4 2.1-8.3-1.2-11.1c-8.1-6.6-15.9-13.7-23.4-21.2a318.64 318.64 0 0 1-68.6-101.7C200.4 609 192 567.1 192 523.9s8.4-85.1 25.1-124.5c16.1-38.1 39.2-72.3 68.6-101.7c29.4-29.4 63.6-52.5 101.7-68.6C426.9 212.4 468.8 204 512 204s85.1 8.4 124.5 25.1c38.1 16.1 72.3 39.2 101.7 68.6c29.4 29.4 52.5 63.6 68.6 101.7c16.7 39.4 25.1 81.3 25.1 124.5s-8.4 85.1-25.1 124.5a318.64 318.64 0 0 1-68.6 101.7c-9.3 9.3-19.1 18-29.3 26L668.2 724a8 8 0 0 0-14.1 3l-39.6 162.2c-1.2 5 2.6 9.9 7.7 9.9l167 .8c6.7 0 10.5-7.7 6.3-12.9l-37.3-47.9z"
                        />
                      </svg>
                    </span>
                    Rotate
                  </Button>
                  <Button className="link">
                    <span className="pad_right">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="img"
                        width="20"
                        height="20"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 1024 1024"
                      >
                        <path
                          fill="currentColor"
                          d="M758.2 839.1C851.8 765.9 912 651.9 912 523.9C912 303 733.5 124.3 512.6 124C291.4 123.7 112 302.8 112 523.9c0 125.2 57.5 236.9 147.6 310.2c3.5 2.8 8.6 2.2 11.4-1.3l39.4-50.5c2.7-3.4 2.1-8.3-1.2-11.1c-8.1-6.6-15.9-13.7-23.4-21.2a318.64 318.64 0 0 1-68.6-101.7C200.4 609 192 567.1 192 523.9s8.4-85.1 25.1-124.5c16.1-38.1 39.2-72.3 68.6-101.7c29.4-29.4 63.6-52.5 101.7-68.6C426.9 212.4 468.8 204 512 204s85.1 8.4 124.5 25.1c38.1 16.1 72.3 39.2 101.7 68.6c29.4 29.4 52.5 63.6 68.6 101.7c16.7 39.4 25.1 81.3 25.1 124.5s-8.4 85.1-25.1 124.5a318.64 318.64 0 0 1-68.6 101.7c-9.3 9.3-19.1 18-29.3 26L668.2 724a8 8 0 0 0-14.1 3l-39.6 162.2c-1.2 5 2.6 9.9 7.7 9.9l167 .8c6.7 0 10.5-7.7 6.3-12.9l-37.3-47.9z"
                        />
                      </svg>
                    </span>
                    Reset
                  </Button>
                </div>

                <div className="uploaded_photo">
                  <img
                    className="profile_image"
                    alt="Profile"
                    src={getPhoto}
                  ></img>
                </div>
              </div>
            </Fragment>
          ) : (
            <Fragment>
              <div className="section_headline">
                <div onClick={coloseImageUploadArea} className="link">
                  Explore Different Photos
                </div>
                <br />
                <br />
              </div>
              <br />
              <div className="policy_area">
                <div className="row">
                  <div className="col-12 col-md-6">
                    <div className="accept_policy check_area">
                      <input
                        onChange={acceptPolicy}
                        type="checkbox"
                        id="policy"
                        autoFocus
                      />
                      <div className="policy_text">
                        <label for="policy">
                          I Accept Emirates Paint's Terms of Use
                        </label>
                        <br />
                        <Link to="/about" target="blank">
                          View Full Terms of Use
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="upload_photo">
                      <input
                        name="profile_pic"
                        id="profilePicture"
                        type="file"
                        onChange={pickPhoto}
                        hidden
                        disabled={policyAccepted ? false : true}
                      />
                      <label for="profilePicture">
                        <div
                          className={
                            policyAccepted
                              ? "input_area_btn fit_width"
                              : "input_area_btn fit_width disabled"
                          }
                        >
                          <div className="text_area">
                            Select to Upload Photo
                          </div>
                          <div
                            className={
                              policyAccepted ? "link active" : "link d-none"
                            }
                          >
                            upload
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <div className="upload_tips">
                <div className="section_headline">
                  <div className="heading">
                    Select a Photo to Virtually Paint
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-md-6">
                    <div className="tips_direction">
                      Your photo should be well-lit.
                    </div>
                    <div className="images_group border_right">
                      <img
                        className="img-responsive"
                        alt="direction photo"
                        src={require("../assets/images/good.jpg").default}
                      />
                      <img
                        className="img-responsive"
                        alt="direction photo"
                        src={require("../assets/images/dark.png").default}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="tips_direction">
                      Take your photo 5ft-8ft from your wall.
                    </div>
                    <div className="images_group">
                      <img
                        className="img-responsive"
                        alt="direction photo"
                        src={require("../assets/images/good.jpg").default}
                      />
                      <img
                        className="img-responsive"
                        alt="direction photo"
                        src={require("../assets/images/tooFar.png").default}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Fragment>
          )}

          <br />
          <br />
        </Fragment>
      ) : (
        <Fragment>
          {imagesCategory.length ? (
            <Fragment>
              <div className="section_headline">
                <div onClick={() => setImagesCategory("")} className="link">
                  Explore Different Photos
                </div>
                <div className="heading">Select a Photo to Paint</div>
                <div className="heading sub gray">{imagesCategory}</div>
              </div>
              <br />
              {loading && <ImageGrid />}
              <div className="images_list">
                <Fragment>
                  {imagesCategory === "Living Room" && (
                    <Fragment>
                      {ImageList.length > 0
                        ? ImageList.map((img) => (
                            <>
                              {img.group === "living" && (
                                <Link
                                  onClick={() => pickImage(img)}
                                  to="#"
                                  className="single_image no_border"
                                >
                                  <div className="image">
                                    <img
                                      alt="categories_img"
                                      src={process.env.PUBLIC_URL + img.path}
                                    />
                                  </div>
                                </Link>
                              )}
                            </>
                          ))
                        : ""}
                    </Fragment>
                  )}

                  {imagesCategory === "Bedroom" && (
                    <Fragment>
                      {ImageList.length > 0
                        ? ImageList.map((img) => (
                            <>
                              {img.group === "bed" && (
                                <Link
                                  onClick={() => pickImage(img)}
                                  to="#"
                                  className="single_image no_border"
                                >
                                  <div className="image">
                                    <img
                                      alt="categories_img"
                                      src={process.env.PUBLIC_URL + img.path}
                                    />
                                  </div>
                                </Link>
                              )}
                            </>
                          ))
                        : ""}
                    </Fragment>
                  )}

                  {imagesCategory === "Dining Room" && (
                    <Fragment>
                      {ImageList.length > 0
                        ? ImageList.map((img) => (
                            <>
                              {img.group === "dining" && (
                                <Link
                                  onClick={() => pickImage(img)}
                                  to="#"
                                  className="single_image no_border"
                                >
                                  <div className="image">
                                    <img
                                      alt="categories_img"
                                      src={process.env.PUBLIC_URL + img.path}
                                    />
                                  </div>
                                </Link>
                              )}
                            </>
                          ))
                        : ""}
                    </Fragment>
                  )}

                  {imagesCategory === "Kitchen" && (
                    <Fragment>
                      {ImageList.length > 0
                        ? ImageList.map((img) => (
                            <>
                              {img.group === "kitchen" && (
                                <Link
                                  onClick={() => pickImage(img)}
                                  to="#"
                                  className="single_image no_border"
                                >
                                  <div className="image">
                                    <img
                                      alt="categories_img"
                                      src={process.env.PUBLIC_URL + img.path}
                                    />
                                  </div>
                                </Link>
                              )}
                            </>
                          ))
                        : ""}
                    </Fragment>
                  )}

                  {imagesCategory === "Bathroom" && (
                    <Fragment>
                      {ImageList.length > 0
                        ? ImageList.map((img) => (
                            <>
                              {img.group === "bathroom" && (
                                <Link
                                  onClick={() => pickImage(img)}
                                  to="#"
                                  className="single_image no_border"
                                >
                                  <div className="image">
                                    <img
                                      alt="categories_img"
                                      src={process.env.PUBLIC_URL + img.path}
                                    />
                                  </div>
                                </Link>
                              )}
                            </>
                          ))
                        : ""}
                    </Fragment>
                  )}

                  {imagesCategory === "Exterior" && (
                    <Fragment>
                      {ImageList.length > 0
                        ? ImageList.map((img) => (
                            <>
                              {img.group === "exterior" && (
                                <Link
                                  onClick={() => pickImage(img)}
                                  to="#"
                                  className="single_image no_border"
                                >
                                  <div className="image">
                                    <img
                                      alt="categories_img"
                                      src={process.env.PUBLIC_URL + img.path}
                                    />
                                  </div>
                                </Link>
                              )}
                            </>
                          ))
                        : ""}
                    </Fragment>
                  )}

                  {imagesCategory === "Commercial" && (
                    <Fragment>
                      {ImageList.length > 0
                        ? ImageList.map((img) => (
                            <>
                              {img.group === "commercial" && (
                                <Link
                                  onClick={() => pickImage(img)}
                                  to="#"
                                  className="single_image no_border"
                                >
                                  <div className="image">
                                    <img
                                      alt="categories_img"
                                      src={process.env.PUBLIC_URL + img.path}
                                    />
                                  </div>
                                </Link>
                              )}
                            </>
                          ))
                        : ""}
                    </Fragment>
                  )}

                  {imagesCategory === "Industrial" && (
                    <Fragment>
                      {ImageList.length > 0
                        ? ImageList.map((img) => (
                            <>
                              {img.group === "industrial" && (
                                <Link
                                  onClick={() => pickImage(img)}
                                  to="#"
                                  className="single_image no_border"
                                >
                                  <div className="image">
                                    <img
                                      alt="categories_img"
                                      src={process.env.PUBLIC_URL + img.path}
                                    />
                                  </div>
                                </Link>
                              )}
                            </>
                          ))
                        : ""}
                    </Fragment>
                  )}
                </Fragment>
              </div>
            </Fragment>
          ) : (
            <Fragment>
              <div className="images_list">
                <Link
                  onClick={() => selectImagesCategory("Living Room")}
                  to="#"
                  className="single_image"
                >
                  <div className="image">
                    <img
                      alt="categories_img"
                      src={
                        require("../assets/images/categories/living.jpg")
                          .default
                      }
                    />
                  </div>
                  <div className="img_title">Living Room</div>
                </Link>
                <Link
                  onClick={() => selectImagesCategory("Bedroom")}
                  to="#"
                  className="single_image"
                >
                  <div className="image">
                    <img
                      alt="categories_img"
                      src={
                        require("../assets/images/categories/bedroom.jpg")
                          .default
                      }
                    />
                  </div>
                  <div className="img_title">Bedroom</div>
                </Link>
                <Link
                  onClick={() => selectImagesCategory("Dining Room")}
                  to="#"
                  className="single_image"
                >
                  <div className="image">
                    <img
                      alt="categories_img"
                      src={
                        require("../assets/images/categories/dining.jpg")
                          .default
                      }
                    />
                  </div>
                  <div className="img_title">Dining Room</div>
                </Link>
                <Link
                  onClick={() => selectImagesCategory("Kitchen")}
                  to="#"
                  className="single_image"
                >
                  <div className="image">
                    <img
                      alt="categories_img"
                      src={
                        require("../assets/images/categories/kitchen.jpg")
                          .default
                      }
                    />
                  </div>
                  <div className="img_title">Kitchen</div>
                </Link>
                <Link
                  onClick={() => selectImagesCategory("Bathroom")}
                  to="#"
                  className="single_image"
                >
                  <div className="image">
                    <img
                      alt="categories_img"
                      src={
                        require("../assets/images/categories/bathroom.jpg")
                          .default
                      }
                    />
                  </div>
                  <div className="img_title">Bathroom</div>
                </Link>
                <Link
                  onClick={() => selectImagesCategory("Exterior")}
                  to="#"
                  className="single_image"
                >
                  <div className="image">
                    <img
                      alt="categories_img"
                      src={
                        require("../assets/images/categories/exteritor.jpg")
                          .default
                      }
                    />
                  </div>
                  <div className="img_title">Exterior</div>
                </Link>
                <Link
                  onClick={() => selectImagesCategory("Commercial")}
                  to="#"
                  className="single_image"
                >
                  <div className="image">
                    <img
                      alt="categories_img"
                      src={
                        require("../assets/images/categories/commercial.jpg")
                          .default
                      }
                    />
                  </div>
                  <div className="img_title">Commercial</div>
                </Link>
                <Link
                  onClick={() => selectImagesCategory("Industrial")}
                  to="#"
                  className="single_image"
                >
                  <div className="image">
                    <img
                      alt="categories_img"
                      src={
                        require("../assets/images/categories/industrial.jpg")
                          .default
                      }
                    />
                  </div>
                  <div className="img_title">Industrial</div>
                </Link>
              </div>
              <br />
              <br />
              <div className="row">
                <div className="col-md-12 col-lg-6">
                  <div className="or_area">
                    <div className="or_text">Or</div>
                  </div>
                  <br />
                  <br />
                  <div className="upload_photo" onClick={openImageUploadArea}>
                    <label>
                      <div className="input_area_btn">
                        <div className="text_area">
                          Upload Your Own Photo
                          <p>
                            Make your project come alive with a photo of your
                            own home.
                          </p>
                        </div>
                        <div className="link">upload an image</div>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </Fragment>
          )}
          <br />
          <br />
        </Fragment>
      )}
    </Fragment>
  );
}
