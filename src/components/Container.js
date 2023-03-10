import React, { useState } from "react";
import "./Container.css";
import Scores from "./Scores";
import Thanks from "./Thanks";

function Container() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [thanksRating, setThanksRating] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitted(true);
  }

  function getRating(rating) {
    setThanksRating(rating);
  }

  function isSubmitDisabled() {
    return thanksRating === null;
  }

  return isSubmitted ? (
    <Thanks thanksRating={thanksRating} />
  ) : (
    <div className="main-container">
      <div className="star-div">
        <img
          className="star"
          src={require("../images/icon-star.svg").default}
          alt="mySvgImage"
        />
      </div>
      <h1 className="paragraph-header">How did we do?</h1>
      <p className="paragraph-text">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Scores getRating={getRating} />
        <button
          type="submit"
          className="submit-button"
          disabled={isSubmitDisabled()}
        >
          S U B M I T
        </button>
      </form>
    </div>
  );
}

export default Container;
