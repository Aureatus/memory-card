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

  const [clickedArray, setClickedArray] = useState([
    false,
    false,
    false,
    false,
  ]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestscore] = useState(0);

  const resetScore = () => {
    if (score > bestScore) {
      setBestscore(score);
    }
    setScore(0);
    setClickedArray(clickedArray.map((click) => false));
  };

  const incrementScore = () => {
    setScore(score + 1);
  };

  return (
    <div className="App">
      <ScoreboardComponent score={score} bestScore={bestScore} />
      <div className="cards">
        <CardComponent
          number={1}
          clickedArray={clickedArray}
          setClickedArray={setClickedArray}
          shuffleCards={shuffleCards}
          resetScore={resetScore}
          incrementScore={incrementScore}
        />
        <CardComponent
          number={2}
          clickedArray={clickedArray}
          setClickedArray={setClickedArray}
          shuffleCards={shuffleCards}
          resetScore={resetScore}
          incrementScore={incrementScore}
        />
        <CardComponent
          number={3}
          clickedArray={clickedArray}
          setClickedArray={setClickedArray}
          shuffleCards={shuffleCards}
          resetScore={resetScore}
          incrementScore={incrementScore}
        />
        <CardComponent
          number={4}
          clickedArray={clickedArray}
          setClickedArray={setClickedArray}
          shuffleCards={shuffleCards}
          resetScore={resetScore}
          incrementScore={incrementScore}
        />
      </div>
    </div>
  );
}

export default App;
