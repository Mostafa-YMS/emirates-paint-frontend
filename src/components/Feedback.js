import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import StarRating from "./StarRating";

export default function Feedback() {
  const [show, setShow] = useState(false);
  const toggleShow = () => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  };
  const [feedStep, setFeedStep] = useState(1);
  const nextStep = () => {
    setFeedStep(feedStep + 1);
  };

  return (
    <div className={show ? "feedback show" : "feedback"}>
      <div
        onClick={toggleShow}
        className={show ? "feedback_toggle show" : "feedback_toggle"}
      >
        <div className="feed_toggle_btn">
          <i className="fa fa-list"></i> Give Feedback
        </div>
      </div>
      <div className="feedback_body">
        <div className="feedback_progress">
          <div className="progress">
            <div
              className={
                feedStep === 2
                  ? "progress-bar step_two"
                  : "progress-bar" && feedStep === 3
                  ? "progress-bar step_three"
                  : "progress-bar" && feedStep === 4
                  ? "progress-bar step_four"
                  : "progress-bar" && feedStep === 5
                  ? "progress-bar step_five"
                  : "progress-bar" && feedStep === 6
                  ? "progress-bar step_six"
                  : "progress-bar" && feedStep === 7
                  ? "progress-bar step_seven"
                  : "progress-bar"
              }
            ></div>
          </div>
        </div>
        <div onClick={() => setShow(false)} className="feedback_close">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enableBackground="new 0 0 24 24"
            viewBox="0 0 24 24"
            height="30"
            width="30"
          >
            <path
              d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M15.7,14.3c0.4,0.4,0.4,1,0,1.4c-0.4,0.4-1,0.4-1.4,0L12,13.4l-2.3,2.3c-0.4,0.4-1,0.4-1.4,0c-0.4-0.4-0.4-1,0-1.4l2.3-2.3L8.3,9.7c-0.4-0.4-0.4-1,0-1.4c0.4-0.4,1-0.4,1.4,0l2.3,2.3l2.3-2.3c0.4-0.4,1-0.4,1.4,0c0.4,0.4,0.4,1,0,1.4L13.4,12L15.7,14.3z"
              fill="red"
            ></path>
          </svg>
        </div>
        <br />

        <div className="step_body">
          <br />
          <br />

          {feedStep === 1 && (
            <>
              <div className="feedback_heading">
                Please describe your role in visiting our site.
              </div>
              <br />
              <br />
              <div className="mb-3">
                <div className="check_area form_checkbox">
                  <input id="role1" type="radio" name="role" />
                  <label for="role1">
                    <div className="text_area">Homeowner/tenant</div>
                  </label>
                </div>
              </div>
              <div className="mb-3">
                <div className="check_area form_checkbox">
                  <input id="role2" type="radio" name="role" />
                  <label for="role2">
                    <div className="text_area">
                      Professional {"("}someone who applies, buys or specifies
                      paint{")"}
                    </div>
                  </label>
                </div>
              </div>
              <br />

              <div className="next_button">
                <Button onClick={nextStep} className="nxt_btn">
                  {" "}
                  →{" "}
                </Button>
              </div>
            </>
          )}
          {feedStep === 2 && (
            <>
              <div className="feedback_heading">
                Please tell us the main purpose of your visit.
              </div>
              <br />
              <br />
              <div className="mb-3">
                <div className="check_area form_checkbox">
                  <input id="purpose1" type="radio" name="purpose" autoFocus />
                  <label for="purpose1">
                    <div className="text_area">Browse colors</div>
                  </label>
                </div>
              </div>
              <div className="mb-3">
                <div className="check_area form_checkbox">
                  <input id="purpose3" type="radio" name="purpose" />
                  <label for="purpose3">
                    <div className="text_area">Search a PPG store location</div>
                  </label>
                </div>
              </div>
              <div className="mb-3">
                <div className="check_area form_checkbox">
                  <input id="purpose4" type="radio" name="purpose" />
                  <label for="purpose4">
                    <div className="text_area">Search services</div>
                  </label>
                </div>
              </div>
              <div className="mb-3">
                <div className="check_area form_checkbox">
                  <input id="purpose5" type="radio" name="purpose" />
                  <label for="purpose5">
                    <div className="text_area">Buy paint online</div>
                  </label>
                </div>
              </div>
              <div className="mb-3">
                <div className="check_area form_checkbox">
                  <input id="purpose6" type="radio" name="purpose" />
                  <label for="purpose6">
                    <div className="text_area">
                      Use the paint color visualizer
                    </div>
                  </label>
                </div>
              </div>
              <div className="mb-3">
                <div className="check_area form_checkbox">
                  <input id="purpose7" type="radio" name="purpose" />
                  <label for="purpose7">
                    <div className="text_area">Others</div>
                  </label>
                </div>
              </div>

              <br />
              <br />
              <div className="next_button">
                <Button onClick={nextStep} className="nxt_btn">
                  {" "}
                  →{" "}
                </Button>
              </div>

              <br />
            </>
          )}
          {feedStep === 3 && (
            <>
              <div className="feedback_heading">
                How was your experience on our site?
              </div>
              <br />
              <br />
              <StarRating />
              <br />
              <br />
              <div className="next_button">
                <Button onClick={nextStep} className="nxt_btn">
                  {" "}
                  →{" "}
                </Button>
              </div>
              <br />
            </>
          )}
          {feedStep === 4 && (
            <>
              <div className="feedback_heading">
                What do you like best about our site?
              </div>
              <br />
              <br />
              <div className="mb-3">
                <div className="check_area form_checkbox not_radio">
                  <input
                    id="purpose1"
                    type="checkbox"
                    name="navigation"
                    autoFocus
                  />
                  <label for="purpose1">
                    <div className="text_area">Navigation of the site</div>
                  </label>
                </div>
              </div>
              <div className="mb-3">
                <div className="check_area form_checkbox">
                  <input id="purpose3" type="checkbox" name="purpose" />
                  <label for="purpose3">
                    <div className="text_area">Website speed</div>
                  </label>
                </div>
              </div>
              <div className="mb-3">
                <div className="check_area form_checkbox">
                  <input id="purpose4" type="checkbox" name="purpose" />
                  <label for="purpose4">
                    <div className="text_area">Product information</div>
                  </label>
                </div>
              </div>
              <div className="mb-3">
                <div className="check_area form_checkbox">
                  <input id="purpose5" type="checkbox" name="purpose" />
                  <label for="purpose5">
                    <div className="text_area">
                      Readability of the site pages
                    </div>
                  </label>
                </div>
              </div>
              <div className="mb-3">
                <div className="check_area form_checkbox">
                  <input id="purpose6" type="checkbox" name="purpose" />
                  <label for="purpose6">
                    <div className="text_area">
                      Balance of graphics to test on the site
                    </div>
                  </label>
                </div>
              </div>
              <div className="mb-3">
                <div className="check_area form_checkbox">
                  <input id="purpose7" type="checkbox" name="purpose" />
                  <label for="purpose7">
                    <div className="text_area">Overall site design</div>
                  </label>
                </div>
              </div>

              <br />
              <div className="next_button">
                <Button onClick={nextStep} className="nxt_btn">
                  {" "}
                  →{" "}
                </Button>
              </div>
              <br />
            </>
          )}
          {feedStep === 5 && (
            <>
              <div className="feedback_heading">
                What do you like least about our site?
              </div>
              <br />
              <br />
              <div className="mb-3">
                <div className="check_area form_checkbox not_radio">
                  <input
                    id="purpose1"
                    type="checkbox"
                    name="navigation"
                    autoFocus
                  />
                  <label for="purpose1">
                    <div className="text_area">Navigation of the site</div>
                  </label>
                </div>
              </div>
              <div className="mb-3">
                <div className="check_area form_checkbox">
                  <input id="purpose3" type="checkbox" name="purpose" />
                  <label for="purpose3">
                    <div className="text_area">Website speed</div>
                  </label>
                </div>
              </div>
              <div className="mb-3">
                <div className="check_area form_checkbox">
                  <input id="purpose4" type="checkbox" name="purpose" />
                  <label for="purpose4">
                    <div className="text_area">Product information</div>
                  </label>
                </div>
              </div>
              <div className="mb-3">
                <div className="check_area form_checkbox">
                  <input id="purpose5" type="checkbox" name="purpose" />
                  <label for="purpose5">
                    <div className="text_area">
                      Readability of the site pages
                    </div>
                  </label>
                </div>
              </div>
              <div className="mb-3">
                <div className="check_area form_checkbox">
                  <input id="purpose6" type="checkbox" name="purpose" />
                  <label for="purpose6">
                    <div className="text_area">
                      Balance of graphics to test on the site
                    </div>
                  </label>
                </div>
              </div>
              <div className="mb-3">
                <div className="check_area form_checkbox">
                  <input id="purpose7" type="checkbox" name="purpose" />
                  <label for="purpose7">
                    <div className="text_area">Overall site design</div>
                  </label>
                </div>
              </div>

              <br />
              <div className="next_button">
                <Button onClick={nextStep} className="nxt_btn">
                  {" "}
                  →{" "}
                </Button>
              </div>
            </>
          )}
          {feedStep === 6 && (
            <>
              <div className="feedback_heading">
                When are you planning to purchase paint next?
              </div>
              <br />
              <br />
              <div className="mb-3">
                <div className="check_area form_checkbox">
                  <input id="1" type="radio" name="purchase_date" autoFocus />
                  <label for="1">
                    <div className="text_area">Today</div>
                  </label>
                </div>
              </div>
              <div className="mb-3">
                <div className="check_area form_checkbox">
                  <input id="2" type="radio" name="purchase_date" />
                  <label for="2">
                    <div className="text_area">This week</div>
                  </label>
                </div>
              </div>
              <div className="mb-3">
                <div className="check_area form_checkbox">
                  <input id="3" type="radio" name="purchase_date" />
                  <label for="3">
                    <div className="text_area">In the next 30 days</div>
                  </label>
                </div>
              </div>
              <div className="mb-3">
                <div className="check_area form_checkbox">
                  <input id="4" type="radio" name="purchase_date" />
                  <label for="4">
                    <div className="text_area">In the next 3 months</div>
                  </label>
                </div>
              </div>
              <div className="mb-3">
                <div className="check_area form_checkbox">
                  <input id="5" type="radio" name="purchase_date" />
                  <label for="5">
                    <div className="text_area">In the next 6-12 months</div>
                  </label>
                </div>
              </div>
              <br />
              <br />
              <div className="feedback_heading">
                Are you interested in signing up to participate in future
                surveys and research projects?
              </div>
              <br />
              <div className="mb-3">
                <div className="check_area form_checkbox">
                  <input id="4" type="radio" name="survey_permission" />
                  <label for="4">
                    <div className="text_area">Yes</div>
                  </label>
                </div>
              </div>
              <div className="mb-3">
                <div className="check_area form_checkbox">
                  <input id="5" type="radio" name="survey_permission" />
                  <label for="5">
                    <div className="text_area">No, thank you</div>
                  </label>
                </div>
              </div>

              <br />
              <div className="next_button">
                <Button onClick={nextStep} className="nxt_btn">
                  {" "}
                  →{" "}
                </Button>
              </div>
            </>
          )}
          {feedStep === 7 && (
            <>
              <br />
              <br />
              <br />
              <br />
              <div className="feedback_heading">
                We thank you for your time spent taking this survey. Your
                response has been recorded.
              </div>
            </>
          )}
        </div>

        <div className="feedback_footer">
          <Link to="#">Powered by Emirates Paints</Link>
        </div>
      </div>
    </div>
  );
}
