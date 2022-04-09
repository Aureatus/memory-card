import React from "react";

import "../styles/scoreboard.css";

function ScoreboardComponent(props) {
  return (
    <div className="scoreboard">
      <div className="current-score">
        <h2>Current Score:</h2>
        <p>{props.score}</p>
      </div>
      <div className="best-score">
        <h2>Best Score:</h2>
        <p>{props.bestScore}</p>
      </div>
    </div>
  );
}

export default ScoreboardComponent;
