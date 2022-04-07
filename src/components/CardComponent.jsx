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
      props.resetScore();
    }

    prevClickedRef.current = clicked;
  });

  return (
    <div
      className={props.number}
      onClick={() => {
        props.shuffleCards();
        toggleClicked();
        props.incrementScore();
      }}
    >
      {props.number}
    </div>
  );
}
export default CardComponent;
