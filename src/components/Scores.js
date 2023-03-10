import React, { useState } from "react";
import "./Scores.css";
import Number from "./Number";

function Scores(props) {
  const [selectedRating, setSelectedRating] = useState(null);
  const ratings = [1, 2, 3, 4, 5];

  function handleRatingSelect(rating) {
    setSelectedRating(rating);
    props.getRating(rating);
  }

  return (
    <div className="scores-container">
      {ratings.map((rating) => (
        <Number
          key={rating}
          rating={rating}
          isActive={rating === selectedRating}
          handleRatingSelect={handleRatingSelect}
        />
      ))}
    </div>
  );
}

export default Scores;
