import React, { useState, useEffect } from "react";
import { Badge } from "react-bootstrap";

import { Redirect, Route, Link, useParams } from "react-router-dom";
import Logo from "../components/Logo";

// custom component
import LeftSidebar from "./LeftSidebar";

const Header = (props) => {
  // expand searcbar
  const [expandSearchBar, setExpandSearchBar] = useState(false);
  const openExpandSearchBar = () => {
    setExpandSearchBar(true);
  };
  const closeExpandSearchBar = () => {
    setExpandSearchBar(false);
  };

  // topbar
  const [topBar, setTopBar] = useState(true);
  const closeTopBar = () => {
    setTopBar(false);
  };

  // sticky header

  const [scroll, setScroll] = useState(0);

  // left menus
  const [showLeftSidebar, setShowLeftSidebar] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  });

  return (
    <header>
      <>
        <section className={scroll ? "app_header to_fixed" : "app_header"}>
          {expandSearchBar && (
            <div className="expand_searchbox">
              <input
                className="form-control expand_input"
                placeholder="Search..."
                type="text"
              />
              <i
                onClick={closeExpandSearchBar}
                className="fal fa-times close_search_bar"
              ></i>
            </div>
          )}
          {topBar && (
            <div className="header_topbar">
              Premium Paints Made in UAE
              <i
                onClick={closeTopBar}
                className="fal fa-times text-white top_remove"
              ></i>
            </div>
          )}

          <div className="app_header_menu">
            <div className="menu-group">
              <Link
                className="d-lg-none"
                onClick={() => {
                  setShowLeftSidebar(true);
                  setTimeout(function () {
                    setShowLeftSidebar(false);
                  }, 500);
                }}
                to="#"
              >
                <i className="far fa-bars"></i>
              </Link>

              <Link to="/">
                <Logo />
              </Link>
            </div>

            <div className="menu-group d-none d-lg-flex">
              <Link className="active" to="#">
                Colors
              </Link>
              <Link to="#">Products</Link>
              <Link to="#">Inspiration</Link>
              <Link to="#">Visualizer</Link>
              <Link to="#">Find A Store</Link>
              <Link to="#">Book A Painter</Link>
            </div>

            <div className="menu-group">
              <Link className="active" to="#" onClick={openExpandSearchBar}>
                <i className="far fa-search mobile_search_icon"></i>
              </Link>
              <Link className="active" to="#">
                <i className="far fa-user"></i>
              </Link>
            </div>
          </div>
        </section>
        <LeftSidebar openLeftSidebar={showLeftSidebar} />
      </>
    </header>
  );
};

export default Header;
