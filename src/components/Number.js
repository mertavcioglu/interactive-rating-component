import React from "react";
import "./Number.css";

function Number(props) {
  function handleClick() {
    props.handleRatingSelect(props.rating);
  }

  return (
    <button
      type="button"
      value={props.rating}
      className={`number-container ${props.isActive ? "number-clicked" : ""}`}
      onClick={(event) => handleClick(event)}
    >
      {props.rating}
    </button>
  );
}

export default Number;
