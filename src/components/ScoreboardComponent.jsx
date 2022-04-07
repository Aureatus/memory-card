import React from "react";

function ScoreboardComponent(props) {
  return (
    <div>
      <div className="current-score">{props.score}</div>
      <div className="best-score"></div>
    </div>
  );
}

export default ScoreboardComponent;
