import React from "react";

function CardComponent(props) {
  return <div onClick={props.shuffleCards}>{props.number}</div>;
}
export default CardComponent;
