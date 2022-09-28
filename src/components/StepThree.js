import React, { useState, Fragment, useEffect, useCallback } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import RightBar from "./RightBar";
import axios from "axios";
import Mapper from "./Mapper";

export default function StepThree(props) {
  const [tabSelect, setTabSelect] = useState("Paint");
  const editImageTab = (tab) => {
    setTabSelect(tab);
  };
  const [activeColor, setActiveColor] = useState(props?.selectedColorProps[0]);

  const selectColor = useCallback((color) => setActiveColor(color), []);

  const uploadedImage = props.uploadImageProps;

  const [usedColors, setUsedColors] = useState([
    {
      id: 1,
      title: "Red",
      color_code: "#FF0000",
      color_type: "free",
    },
    {
      id: 2,
      title: "Cyan",
      color_code: "#00FFFF",
      color_type: "paid",
    },
    {
      id: 3,
      title: "Blue",
      color_code: "#0000FF",
      color_type: "free",
    },
    {
      id: 4,
      title: "DarkBlue",
      color_code: "#00008B",
      color_type: "free",
    },
    {
      id: 5,
      title: "LightBlue",
      color_code: "#ADD8E6",
      color_type: "paid",
    },
    {
      id: 6,
      title: "Purple",
      color_code: "#800080",
      color_type: "free",
    },
    {
      id: 7,
      title: "Yellow",
      color_code: "#FFFF00",
      color_type: "paid",
    },
    {
      id: 8,
      title: "Lime",
      color_code: "#00FF00",
      color_type: "free",
    },
    {
      id: 9,
      title: "Magenta",
      color_code: "#FF00FF",
      color_type: "free",
    },
    {
      id: 10,
      title: "Pink",
      color_code: "#FFC0CB",
      color_type: "paid",
    },
    {
      id: 12,
      title: "Silver",
      color_code: "#C0C0C0",
      color_type: "free",
    },
    {
      id: 13,
      title: "Gray or Grey",
      color_code: "#808080",
      color_type: "free",
    },
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

  const [masks, setMasks] = useState([]);

  const getMasks = useCallback(async () => {
    try {
      const { data } = await axios.get("http://127.0.0.1:5000/masks", {
        params: { id: process.env.PUBLIC_URL + props.selectImageProps?.id },
      });
      setMasks(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getMasks && getMasks();
  }, [getMasks]);

  return (
    <Fragment>
      <div className="section_headline">
        <div className="d-flex justify-content-between">
          <div onClick={() => props.setTabProps(2)} className="link">
            Find More Colors
          </div>
          <div onClick={() => props.setTabProps(4)} className="link">
            Find A Store
          </div>
        </div>
        <br />
        <div className="heading">Visualize Your Room</div>
        <div className="heading sub gray">
          Click a wall to paint the selected color.
        </div>
      </div>
      <br />
      <br />
      <div className="row">
        <div className="col-12 col-sm-8 col-lg-9">
          <br />
          <div className="photo_edit_frame">
            {uploadedImage ? (
              <>
                <div className="frame_header_image_upload">
                  <div className="header_tabs">
                    <div
                      onClick={() => editImageTab("Paint")}
                      className={
                        tabSelect === "Paint"
                          ? "single_menu active"
                          : "single_menu"
                      }
                    >
                      <span className="pad_right">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.2222 5.55553V2.2222C17.2222 1.92751 17.1051 1.64489 16.8967 1.43652C16.6884 1.22815 16.4057 1.11108 16.1111 1.11108H3.33328C3.03859 1.11108 2.75598 1.22815 2.5476 1.43652C2.33923 1.64489 2.22217 1.92751 2.22217 2.2222V5.55553C2.22217 5.85021 2.33923 6.13283 2.5476 6.3412C2.75598 6.54958 3.03859 6.66664 3.33328 6.66664H16.1111C16.4057 6.66664 16.6884 6.54958 16.8967 6.3412C17.1051 6.13283 17.2222 5.85021 17.2222 5.55553ZM3.33328 2.2222H16.1111V5.55553H3.33328V2.2222Z"
                            fill="currentColor"
                          />
                          <path
                            d="M18.3334 3.33325H17.7778V6.8277L10.3889 9.18881C10.2719 9.22548 10.1702 9.29987 10.0999 9.40037C10.0295 9.50086 9.99442 9.62182 10 9.74436V10.5555H8.88892V18.3333C8.88892 18.6279 9.00598 18.9106 9.21435 19.1189C9.42273 19.3273 9.70534 19.4444 10 19.4444H11.1111C11.4058 19.4444 11.6884 19.3273 11.8968 19.1189C12.1052 18.9106 12.2222 18.6279 12.2222 18.3333V10.5555H11.1111V10.1499L18.5 7.7777C18.6171 7.74102 18.7187 7.66664 18.7891 7.56614C18.8594 7.46564 18.8945 7.34468 18.8889 7.22214V3.88881C18.8889 3.74146 18.8304 3.60016 18.7262 3.49597C18.622 3.39178 18.4807 3.33325 18.3334 3.33325ZM11.1111 18.3333H10V11.6666H11.1111V18.3333Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                      Paint
                    </div>
                    <div
                      onClick={() => editImageTab("Edit")}
                      className={
                        tabSelect === "Edit"
                          ? "single_menu active"
                          : "single_menu"
                      }
                    >
                      <span className="pad_right">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18.0175 1.9825C17.5415 1.52771 16.9084 1.27393 16.25 1.27393C15.5916 1.27393 14.9586 1.52771 14.4825 1.9825L2.53127 13.9325C2.12374 14.3378 1.80066 14.82 1.58074 15.351C1.36081 15.8821 1.2484 16.4515 1.25002 17.0263V18.75H2.97252C3.54731 18.7517 4.11672 18.6393 4.64778 18.4194C5.17883 18.1994 5.66097 17.8763 6.06627 17.4688L18.0175 5.51813C18.2498 5.28602 18.434 5.01043 18.5597 4.7071C18.6854 4.40377 18.7501 4.07865 18.7501 3.75031C18.7501 3.42198 18.6854 3.09685 18.5597 2.79353C18.434 2.4902 18.2498 2.21461 18.0175 1.9825V1.9825ZM6.81877 11.4125L8.58689 13.1806L7.26064 14.5063L5.49314 12.7388L6.81877 11.4125ZM5.18189 16.585C4.89243 16.876 4.54811 17.1068 4.16886 17.2638C3.78962 17.4209 3.38299 17.5012 2.97252 17.5H2.50002V17.0256C2.49889 16.6152 2.57918 16.2085 2.73624 15.8293C2.8933 15.4501 3.12401 15.1057 3.41502 14.8163L4.60877 13.6225L6.37689 15.39L5.18189 16.585ZM17.1344 4.63375L9.47127 12.2963L7.70314 10.5288L15.3669 2.86625C15.6049 2.63886 15.9214 2.51196 16.2506 2.51196C16.5798 2.51196 16.8964 2.63886 17.1344 2.86625C17.3687 3.10066 17.5004 3.41855 17.5004 3.75C17.5004 4.08146 17.3687 4.39934 17.1344 4.63375V4.63375Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                      Edit Area
                    </div>
                    <div
                      onClick={() => editImageTab("Erase")}
                      className={
                        tabSelect === "Erase"
                          ? "single_menu active"
                          : "single_menu"
                      }
                    >
                      <span className="pad_right">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.3751 15.8751H17.7501V17.1251H3.3751V15.8751ZM16.1126 5.56881L11.1564 0.618805C11.0403 0.502585 10.9024 0.410386 10.7507 0.347481C10.5989 0.284575 10.4362 0.252197 10.272 0.252197C10.1077 0.252197 9.94505 0.284575 9.7933 0.347481C9.64156 0.410386 9.5037 0.502585 9.38761 0.618805L0.637604 9.36881C0.521384 9.4849 0.429185 9.62276 0.36628 9.7745C0.303374 9.92625 0.270996 10.0889 0.270996 10.2532C0.270996 10.4174 0.303374 10.5801 0.36628 10.7319C0.429185 10.8836 0.521384 11.0215 0.637604 11.1376L3.45635 14.0001H9.4501L16.1126 7.33756C16.2288 7.22146 16.321 7.0836 16.3839 6.93186C16.4468 6.78011 16.4792 6.61745 16.4792 6.45318C16.4792 6.28891 16.4468 6.12625 16.3839 5.97451C16.321 5.82276 16.2288 5.6849 16.1126 5.56881ZM8.93135 12.7501H4.0001L1.5001 10.2501L5.44385 6.30631L10.4001 11.2563L8.93135 12.7501ZM11.2814 10.4001L6.33135 5.44381L10.2501 1.50006L15.2501 6.45631L11.2814 10.4001Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                      Erase Area
                    </div>
                  </div>

                  <div className="header_content">
                    {tabSelect === "Paint" && (
                      <div className="paint_area_content">
                        Click a wall to paint the selected color.
                      </div>
                    )}
                    {tabSelect === "Edit" && (
                      <div className="paint_area_content edit_area_content">
                        <button className="preview_button">
                          <span>
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clip-path="url(#clip0_615_25)">
                                <path
                                  d="M6.00195 5.5C6.00195 5.89782 5.84392 6.27936 5.56261 6.56066C5.28131 6.84196 4.89978 7 4.50195 7C4.10413 7 3.7226 6.84196 3.44129 6.56066C3.15999 6.27936 3.00195 5.89782 3.00195 5.5C3.00195 5.10218 3.15999 4.72064 3.44129 4.43934C3.7226 4.15804 4.10413 4 4.50195 4C4.89978 4 5.28131 4.15804 5.56261 4.43934C5.84392 4.72064 6.00195 5.10218 6.00195 5.5V5.5Z"
                                  fill="currentColor"
                                />
                                <path
                                  d="M1.5 2C1.10218 2 0.720644 2.15804 0.43934 2.43934C0.158035 2.72064 0 3.10218 0 3.5L0 12.5C0 12.8978 0.158035 13.2794 0.43934 13.5607C0.720644 13.842 1.10218 14 1.5 14H14.5C14.8978 14 15.2794 13.842 15.5607 13.5607C15.842 13.2794 16 12.8978 16 12.5V3.5C16 3.10218 15.842 2.72064 15.5607 2.43934C15.2794 2.15804 14.8978 2 14.5 2H1.5ZM14.5 3C14.6326 3 14.7598 3.05268 14.8536 3.14645C14.9473 3.24021 15 3.36739 15 3.5V9.5L11.225 7.553C11.1312 7.50602 11.025 7.48973 10.9215 7.50642C10.8179 7.52311 10.7223 7.57194 10.648 7.646L6.938 11.356L4.278 9.584C4.18196 9.52006 4.06676 9.4913 3.95194 9.5026C3.83712 9.5139 3.72973 9.56456 3.648 9.646L1.002 12V12.54C1.0008 12.5267 1.00014 12.5134 1 12.5V3.5C1 3.36739 1.05268 3.24021 1.14645 3.14645C1.24021 3.05268 1.36739 3 1.5 3H14.5Z"
                                  fill="currentColor"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_615_25">
                                  <rect width="16" height="16" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </span>
                          Preview
                        </button>
                        <div className="edit_instruction">
                          Draw lines to mask areas.
                        </div>
                      </div>
                    )}
                    {tabSelect === "Erase" && (
                      <div className="paint_area_content erase_area_content">
                        <span>Click the</span>
                        <span>
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.3751 15.8751H17.7501V17.1251H3.3751V15.8751ZM16.1126 5.56881L11.1564 0.618805C11.0403 0.502585 10.9024 0.410386 10.7507 0.347481C10.5989 0.284575 10.4362 0.252197 10.272 0.252197C10.1077 0.252197 9.94505 0.284575 9.7933 0.347481C9.64156 0.410386 9.5037 0.502585 9.38761 0.618805L0.637604 9.36881C0.521384 9.4849 0.429185 9.62276 0.36628 9.7745C0.303374 9.92625 0.270996 10.0889 0.270996 10.2532C0.270996 10.4174 0.303374 10.5801 0.36628 10.7319C0.429185 10.8836 0.521384 11.0215 0.637604 11.1376L3.45635 14.0001H9.4501L16.1126 7.33756C16.2288 7.22146 16.321 7.0836 16.3839 6.93186C16.4468 6.78011 16.4792 6.61745 16.4792 6.45318C16.4792 6.28891 16.4468 6.12625 16.3839 5.97451C16.321 5.82276 16.2288 5.6849 16.1126 5.56881ZM8.93135 12.7501H4.0001L1.5001 10.2501L5.44385 6.30631L10.4001 11.2563L8.93135 12.7501ZM11.2814 10.4001L6.33135 5.44381L10.2501 1.50006L15.2501 6.45631L11.2814 10.4001Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        <span>to erase the area.</span>
                      </div>
                    )}
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="frame_header">
                  <ButtonGroup>
                    <Button className="link font_13">
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
                    <Button className="link font_13">
                      <span className="pad_right">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          role="img"
                          width="20"
                          height="20"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88c3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"
                          />
                        </svg>
                      </span>
                      Undo
                    </Button>
                    <Button className="link font_13">
                      <span className="pad_right">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          role="img"
                          width="20"
                          height="20"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 24 24"
                        >
                          <g
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                          >
                            <path d="M21 7v6h-6" />
                            <path d="M3 17a9 9 0 0 1 9-9a9 9 0 0 1 6 2.3l3 2.7" />
                          </g>
                        </svg>
                      </span>
                      Redo
                    </Button>
                  </ButtonGroup>

                  <Button
                    onClick={() => {
                      props.setTabProps(1);
                      props.setUploadImageProps();
                      props.setSelectImageProps();
                    }}
                    className="link font_13"
                  >
                    Change Your Photo
                  </Button>
                </div>
              </>
            )}

            <div className="uploaded_photo no_bg">
              {/* <div style={{ width: "700px", height: "600px" }}> */}
              <Mapper
                active
                masks={masks}
                src={process.env.PUBLIC_URL + props.selectImageProps?.path}
                color={activeColor}
                uploadedImage={uploadedImage}
              />
              {/* </div> */}
            </div>
            {uploadedImage ? (
              <>
                <div className="frame_header">
                  <ButtonGroup>
                    <Button className="link font_13">
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
                    <Button className="link font_13">
                      <span className="pad_right">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          role="img"
                          width="20"
                          height="20"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88c3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"
                          />
                        </svg>
                      </span>
                      Undo
                    </Button>
                    <Button className="link font_13">
                      <span className="pad_right">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          role="img"
                          width="20"
                          height="20"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 24 24"
                        >
                          <g
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                          >
                            <path d="M21 7v6h-6" />
                            <path d="M3 17a9 9 0 0 1 9-9a9 9 0 0 1 6 2.3l3 2.7" />
                          </g>
                        </svg>
                      </span>
                      Redo
                    </Button>
                  </ButtonGroup>

                  <Button
                    onClick={() => props.setTabProps(2)}
                    className="link font_13"
                  >
                    Change Your Photo
                  </Button>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="col-12 col-sm-4 col-lg-3">
          <br />
          <RightBar
            {...props}
            activeColor={activeColor}
            setActiveColor={selectColor}
          />
        </div>
      </div>
    </Fragment>
  );
}
