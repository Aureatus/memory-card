import React, { useEffect, useState } from "react";
import CardComponent from "./components/CardComponent";
import ScoreboardComponent from "./components/ScoreboardComponent";

function App() {
  const shuffleCards = () => {
    let element = document.querySelector(`.cards`);
    for (let i = element.children.length; i >= 0; i--) {
      element.appendChild(element.children[(Math.random() * i) | 0]);
    }
  };

  const [score, setScore] = useState(0);

  const resetScore = () => {
    setScore(0);
  };

  const incrementScore = () => {
    setScore(score + 1);
  };

  return (
    <div className="App">
      <ScoreboardComponent score={score} />
      <div className="cards">
        <CardComponent
          number={1}
          shuffleCards={shuffleCards}
          resetScore={resetScore}
          incrementScore={incrementScore}
        />
        <CardComponent
          number={2}
          shuffleCards={shuffleCards}
          resetScore={resetScore}
          incrementScore={incrementScore}
        />
        <CardComponent
          number={3}
          shuffleCards={shuffleCards}
          resetScore={resetScore}
          incrementScore={incrementScore}
        />
        <CardComponent
          number={4}
          shuffleCards={shuffleCards}
          resetScore={resetScore}
          incrementScore={incrementScore}
        />
      </div>
    </div>
  );
}

export default App;
