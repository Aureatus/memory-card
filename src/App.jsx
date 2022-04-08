import React, { useState } from "react";
import CardComponent from "./components/CardComponent";
import ScoreboardComponent from "./components/ScoreboardComponent";

import "./styles/App.css";

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

  let keyCounter = 0;

  return (
    <>
      <header>
        <h1>Memory Card</h1>
        <ScoreboardComponent score={score} bestScore={bestScore} />
      </header>
      <main className="cards">
        {clickedArray.map((element, index) => {
          return (
            <CardComponent
              number={index + 1}
              key={keyCounter++}
              clickedArray={clickedArray}
              setClickedArray={setClickedArray}
              shuffleCards={shuffleCards}
              resetScore={resetScore}
              incrementScore={incrementScore}
            />
          );
        })}
      </main>
    </>
  );
}

export default App;
