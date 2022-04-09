import React, { useState } from "react";
import CardComponent from "./components/CardComponent";
import ScoreboardComponent from "./components/ScoreboardComponent";

import "./styles/App.css";

import vector from "./assets/Vector_wallpaper.webp";
import gru from "./assets/Gru.webp";
import drNefario from "./assets/Dr-Nefario-despicable-me-13776694-616-315.webp";
import druGru from "./assets/Dru.webp";
import lucyWilde from "./assets/Despicableme2-lucywilde-kristenwigg-300-01.webp";
import brat from "./assets/Balthazar_Bratt.webp";
import kevin from "./assets/3087299.webp";
import margo from "./assets/Margo_Gru.webp";

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

  const imageArray = [
    vector,
    gru,
    drNefario,
    druGru,
    lucyWilde,
    brat,
    kevin,
    margo,
  ];
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
        <h1>Despicable Me Memory Card Game</h1>
        <ScoreboardComponent score={score} bestScore={bestScore} />
      </header>
      <main className="cards">
        {clickedArray.map((element, index) => {
          return (
            <CardComponent
              number={index + 1}
              key={keyCounter++}
              image={imageArray[index]}
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
