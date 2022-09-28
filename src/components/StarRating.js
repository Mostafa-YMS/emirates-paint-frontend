import React, { useState } from "react";

export default function StarRating() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const inputRatting = (ev) => {
    var value = ev.target.value;
    setRating(value);
  };

  return (
    <div className="star-rating">
      <div className="ratting_text">Please rate us here</div>
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={
              index <= (hover || rating) ? "star_btn on" : "star_btn off"
            }
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
      <>
        <br />
        <input
          onChange={inputRatting}
          className="input_ratting"
          value={rating}
          type="number"
          maxLength={1}
          
         
        />
      </>
    </div>
  );
}
