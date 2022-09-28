import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";


export default function LeftSidebar(props) {
  const params = useParams();
  const tab = params.tab;
  const [activeTab, setActiveTab] = useState("account-details");
  //   alert(props.openLeftSidebar);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    if (props.openLeftSidebar == true) {
      setShowSidebar(props.openLeftSidebar);
    }
  }, [props]);

  return (
    <div className="sidebar_container left_sidebar menu_left_bar ">
      <div
        className={
          "sidebar_area menu_left_bar " + (showSidebar ? "show_bar" : "")
        }
      >
        <div
          onClick={() => {
            setShowSidebar(false);
          }}
          className="button_close"
        >
          <svg
            width="19"
            height="19"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <title>close</title>
            <path d="M18.984 6.422L13.406 12l5.578 5.578-1.406 1.406L12 13.406l-5.578 5.578-1.406-1.406L10.594 12 5.016 6.422l1.406-1.406L12 10.594l5.578-5.578z"></path>
          </svg>
        </div>

        <div className="left_side">
          <div className="left_sidebar_menus">
            <ul>
              <li>
                <Link
                  onClick={() => {
                    setShowSidebar(false);
                  }}
                  className="active"
                  to="#"
                >
                  Colors
                </Link>
                <Link
                  onClick={() => {
                    setShowSidebar(false);
                  }}
                  to="#"
                >
                  Products
                </Link>
                <Link
                  onClick={() => {
                    setShowSidebar(false);
                  }}
                  to="#"
                >
                  Inspiration
                </Link>
                <Link
                  onClick={() => {
                    setShowSidebar(false);
                  }}
                  to="#"
                >
                  Visualizer
                </Link>
                <Link
                  onClick={() => {
                    setShowSidebar(false);
                  }}
                  to="#"
                >
                  Find A Store
                </Link>
                <Link
                  onClick={() => {
                    setShowSidebar(false);
                  }}
                  to="#"
                >
                  Book A Painter
                </Link>
              </li>
            </ul>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}
