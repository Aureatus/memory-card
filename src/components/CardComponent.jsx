import React, { useEffect, useRef } from "react";
import "../styles/Card.css";

function CardComponent(props) {
  const prevClickedRef = useRef();
  const clicked = props.clickedArray[props.number - 1];

  const toggleClicked = () => {
    if (clicked === false) {
      props.incrementScore();
      props.setClickedArray(
        props.clickedArray.map((click, index) =>
          index === props.number - 1 ? true : click
        )
      );
    } else {
      props.setClickedArray(
        props.clickedArray.map((click, index) =>
          index === props.number - 1 ? false : click
        )
      );
    }
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
      }}
    >
      <div>
        <img src={props.image} alt="" />
      </div>
    </div>
  );
}
export default CardComponent;
