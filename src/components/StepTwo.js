import React, { useState, Fragment, useEffect } from "react";
import colorList from "../colors.json";
import RightBar from "./RightBar";
export default function StepTwo(props) {
  // colors
  const selectedColors = props.selectedColorProps;

  const [parentsColor, setParentsColor] = useState([
    {
      id: 1,
      title: "Reds",
      color_code: "#DF2228",
      group: "red",
    },
    {
      id: 2,
      title: "Oranges",
      color_code: "#ec8f2c",
      group: "orange",
    },
    {
      id: 3,
      title: "Yellows",
      color_code: "#e8de35",
      group: "yellow",
    },
    {
      id: 4,
      title: "Greens",
      color_code: "#44b24d",
      group: "green",
    },
    {
      id: 5,
      title: "Blues",
      color_code: "#3555d3",
      group: "blue",
    },

    {
      id: 6,
      title: "Whites",
      color_code: "#ffffff",
      group: "white",
    },
    {
      id: 7,
      title: "Violets",
      color_code: "#bb3e77",
      group: "violet",
    },
    {
      id: 8,
      title: "Grays",
      color_code: "#a4a5a7",
      group: "gray",
    },
    {
      id: 9,
      title: "Brown",
      color_code: "#964b00",
      group: "brown",
    },
    {
      id: 10,
      title: "Darks",
      color_code: "#000000",
      group: "dark",
    },
  ]);

  const [selectedParentsColor, setSelectedParentsColor] = useState("Reds");

  const colors = colorList;
  const [colorGroups, setColorGroups] = useState("red");
  const filterParentsColor = (group) => {
    setColorGroups(group);
  };

  const selectColors = (event) => {
    var updatedList = [...props.selectedColorProps];
    var color = colors.find((color) => {
      return color.id == event.target.value;
    });
    if (event.target.checked) {
      updatedList = [...props.selectedColorProps, color];
    } else {
      updatedList.splice(props.selectedColorProps.indexOf(color), 1);
    }

    props.setSelectedColorProps(updatedList);
  };

  const [searchValue, setSearchValue] = useState("");

  return (
    <Fragment>
      <Fragment>
        <div className="section_headline">
          <div className="d-flex justify-content-between">
            <div
              onClick={() => {
                props.setUploadImageProps();
                props.setSelectImageProps();
                props.setTabProps(1);
              }}
              className="link"
            >
              Select a Different Photo
            </div>
            {selectedColors.length > 0 ? (
              <div onClick={() => props.setTabProps(3)} className="link">
                paint your room
              </div>
            ) : (
              ""
            )}
          </div>
          <br />
          <div className="heading text-center">SELECT YOUR COLORS</div>

          <br />
        </div>
      </Fragment>
      <Fragment>
        <div className="parent_filter">
          <div className="parent_color_list">
            {parentsColor.length > 0
              ? parentsColor.map((color) => (
                  <div
                    onClick={() => {
                      filterParentsColor(color.group);
                      setSelectedParentsColor(color.title);
                    }}
                    key={color.id}
                    className={
                      selectedParentsColor === color.title
                        ? "single_parent active"
                        : "single_parent"
                    }
                    style={{
                      background: color.color_code,
                    }}
                  >
                    <img className="color_frame"
                      alt="color frame"
                      src={require("../assets/images/colorbox.png").default}
                    />

                    <span
                      className={
                        color.color_code === "#ffffff"
                          ? "checkmark text-dark"
                          : "checkmark"
                      }
                    >
                      <i className="far fa-check"></i>
                    </span>
                  </div>
                ))
              : ""}
            <div className="clear"></div>
          </div>
          <div className="clearfix"></div>
        </div>
        <br />
        <div className="row">
          <div className="section_headline">
            <div className="heading sub gray text-center">
              {selectedParentsColor}
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-12 col-sm-8 col-lg-9">
            <div className="browse_color_list">
              {searchValue.length ? (
                <>
                  {colors
                    .filter((item) => {
                      if (!searchValue) return false;
                      if (
                        item.title.includes(searchValue.toUpperCase()) ||
                        item.color_code.includes(searchValue) ||
                        item.group.includes(searchValue)
                      ) {
                        return true;
                      }
                    })
                    .map((color) => (
                      <label key={color.id} for={"color_" + color.id}>
                        <Fragment>
                          <div
                            className="single_color"
                            style={{
                              background: color.color_code,
                            }}
                          >
                            {props.selectedColorProps.length > 0
                              ? props.selectedColorProps.map((check) => (
                                  <>
                                    {check.id === color.id && (
                                      <span className="checkmark">
                                        <i className="far fa-check"></i>
                                      </span>
                                    )}
                                  </>
                                ))
                              : ""}

                            <div className="color_title">{color.title}</div>

                            <input
                              id={"color_" + color.id}
                              type="checkbox"
                              onChange={selectColors}
                              // defaultChecked={false}
                              value={color.id}
                              hidden
                            />
                          </div>
                        </Fragment>
                      </label>
                    ))}
                </>
              ) : (
                <Fragment>
                  {colors
                    .filter((color) => {
                      if (!colorGroups) return true;
                      if (color.group.includes(colorGroups)) {
                        return true;
                      }
                    })

                    .map((color) => (
                      <label key={color.id} for={"color_" + color.id}>
                        <Fragment>
                          <div
                            className="single_color"
                            style={{
                              background: color.color_code,
                            }}
                          >
                            {props.selectedColorProps.length > 0
                              ? props.selectedColorProps.map((check) => (
                                  <>
                                    {check.id === color.id && (
                                      <span className="checkmark">
                                        <i className="far fa-check"></i>
                                      </span>
                                    )}
                                  </>
                                ))
                              : ""}

                            <div className="color_title">{color.title}</div>

                            <input
                              id={"color_" + color.id}
                              type="checkbox"
                              onChange={selectColors}
                              // defaultChecked={false}
                              value={color.id}
                              hidden
                            />
                          </div>
                        </Fragment>
                      </label>
                    ))}
                </Fragment>
              )}
            </div>
          </div>
          <div className="col-12 col-sm-4 col-lg-3">
            <div className="searchbox">
              <span className="search_icon">
                <i className="fa fa-search"></i>
              </span>
              <input
                placeholder="Search color...."
                onChange={(e) => setSearchValue(e.target.value)}
                type="text"
                value={searchValue}
              />
            </div>
            <RightBar {...props} />
          </div>
        </div>
      </Fragment>
    </Fragment>
  );
}
