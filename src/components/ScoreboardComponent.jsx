import React from "react";

import "../styles/scoreboard.css";

function ScoreboardComponent(props) {
  return (
    <div className="scoreboard">
      <div className="current-score">{props.score}</div>
      <div className="best-score">{props.bestScore}</div>
    </div>
  );
}

export default ScoreboardComponent;
