import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Footer = (props) => {
  return (
    <>
      <footer>
        <section className="footer">
          <div className="container">
            <div className="footer_links">
              <div className="row">
                <div className="col-12 col-md-6 col-lg-3">
                  <ul>
                    <li>
                      <Link to="/">
                        <img
                          className="footer_logo"
                          src={require("../assets/images/white-logo.png").default}
                        />
                      </Link>
                    </li>
                    <br />
                    <li className="casino_text">
                      Explore our complete range of paints <br />
                      and colors and start painting today.
                    </li>
                    <br />
                    <br />
                    <li className="social_links">
                      <Link to="#">
                        <div className="icon_area">
                          <i className="fab fa-instagram"></i>
                        </div>
                      </Link>
                      <Link to="#">
                        <div className="icon_area">
                          <i className="fab fa-facebook"></i>
                        </div>
                      </Link>
                      <Link to="#">
                        <div className="icon_area">
                          <i className="fab fa-linkedin-in"></i>
                        </div>
                      </Link>
                    </li>
                    <br />
                    <li>
                      <b>
                        ISO 9001:2015
                        <br />
                        ISO 45001:2018
                        <br />
                        ISO 14001:2015
                        <br />
                        HACCP
                        <br />
                      </b>
                    </li>
                  </ul>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                  <ul>
                    <li className="list_heading">Explore</li>
                    <li>
                      <span className="red_dash"></span>{" "}
                      <span className="red_dash white"></span>
                    </li>
                    <li>
                      <Link to="#"> {">"} Home</Link>
                    </li>
                    <li>
                      <Link to="#"> {">"} About</Link>
                    </li>
                    <li>
                      <Link to="#"> {">"} Contact Us</Link>
                    </li>
                    <li>
                      <Link to="#"> {">"} Terms & conditions</Link>
                    </li>
                    <li>
                      <Link to="#"> {">"} Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="#"> {">"} Live Chat</Link>
                    </li>
                  </ul>
                </div>

                <div className="col-12 col-md-6 col-lg-3">
                  <ul>
                    <li className="list_heading">Browse </li>
                    <li>
                      <span className="red_dash"></span>{" "}
                      <span className="red_dash white"></span>
                    </li>
                    <li>
                      <Link to="#"> {">"} Find a Color</Link>
                    </li>
                    <li>
                      <Link to="#"> {">"} Choose a Product</Link>
                    </li>
                    <li>
                      <Link to="#"> {">"} Brochures</Link>
                    </li>
                    <li>
                      <Link to="#"> {">"} Technical Data Sheets</Link>
                    </li>
                    <li>
                      <Link to="#"> {">"} Professional</Link>
                    </li>
                    <li>
                      <Link to="#"> {">"} Book a Painter</Link>
                    </li>
                    <li>
                      <Link to="#"> {">"} Find a Store</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                  <ul>
                    <li className="list_heading">Contact</li>
                    <li>
                      <span className="red_dash"></span>{" "}
                      <span className="red_dash white"></span>
                    </li>

                    <li>
                      <div className="contact_group">
                        <div className="icon_area">
                          <i className="fal fa-phone"></i>
                        </div>
                        <div className="text_double">
                          <div className="option_name">Call Us</div>
                          <div className="option_name value">04 256 5474</div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="contact_group">
                        <div className="icon_area">
                          <i className="fal fa-envelope-open-text"></i>
                        </div>
                        <div className="text_double">
                          <div className="option_name">Send E-mail</div>
                          <div className="option_name value">
                            info@emiratespaint.com
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="contact_group no_border">
                        <div className="icon_area">
                          <i className="fal fa-location"></i>
                        </div>
                        <div className="text_double">
                          <div className="option_name">
                            P.O Box 1, 14a St, Umm Ramool
                          </div>
                          <div className="option_name value">
                            Dubai, United Arab Emirates
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="copyright_section">
              <div className="copyright_text">
                © 2022 Emirates Paints. All Rights Reserved.
              </div>
            </div>
          </div>

          <div className="scrolling_up">
            <div className="whatsapp">
              <i className="fab fa-whatsapp"></i>
              <div className="status"></div>
            </div>
            <br />
            <br />
            <br />
            <Link to="#">
              <div className="scroll_top">
                <i className="fas fa-arrow-up"></i>
              </div>
            </Link>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
