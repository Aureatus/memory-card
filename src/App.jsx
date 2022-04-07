import React, { useEffect } from "react";
import CardComponent from "./components/CardComponent";

function App() {
  const shuffleCards = () => {
    let element = document.querySelector(`.cards`);
    for (let i = element.children.length; i >= 0; i--) {
      element.appendChild(element.children[(Math.random() * i) | 0]);
    }
  };

  return (
    <div className="App">
      <div className="cards">
        <CardComponent number={1} shuffleCards={shuffleCards} />
        <CardComponent number={2} shuffleCards={shuffleCards} />
        <CardComponent number={3} shuffleCards={shuffleCards} />
        <CardComponent number={4} shuffleCards={shuffleCards} />
      </div>
    </div>
  );
}

export default App;
