import React, { useEffect, useState, useRef } from "react";

function CardComponent(props) {
  const [clicked, setClicked] = useState(false);

  const prevClickedRef = useRef();

  const toggleClicked = () => {
    if (clicked === false) {
      setClicked(true);
    } else setClicked(false);
  };

  useEffect(() => {
    if (prevClickedRef.current === true && clicked === false) {
      console.log("Game Over");
    }

    prevClickedRef.current = clicked;
  });

  return (
    <div
      onClick={() => {
        props.shuffleCards();
        toggleClicked();
      }}
    >
      {props.number}
    </div>
  );
}
export default CardComponent;
