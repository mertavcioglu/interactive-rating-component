import React from "react";
import "./Thanks.css";

function Thanks(props) {
  return (
    <div className="thanks-container spin">
      <div className="thanks-image-div">
        <img
          className="thanks-image"
          src={require("../images/illustration-thank-you.svg").default}
          alt="thanks-img"
        />
      </div>
      <p className="score-result">You selected {props.thanksRating} out of 5</p>
      <p className="thanks-text">Thank You!</p>
      <p className="thanks-paragraph">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}

export default Thanks;
