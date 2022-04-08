import React, { useEffect, useState, useRef } from "react";

function CardComponent(props) {
  const prevClickedRef = useRef();
  const clicked = props.clickedArray[props.number - 1];

  const toggleClicked = () => {
    if (clicked === false) {
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
        props.incrementScore();
      }}
    >
      {props.number}
    </div>
  );
}
export default CardComponent;
