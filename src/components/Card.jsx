import React from "react";
import CardButton from "./CardButton";

const Card = ({ title, subText, onCardClick }) => {
  // logic
  // const subText = "카드 서브 텍스트입니다";
  const className = "chutzrit";
  const handleClick = () => {
    console.log("click2");
    onCardClick();
  };

  // view
  return (
    <div className="card">
      <h5 className="card-title">{title}</h5>
      <p className={className}>{subText}</p>
      <CardButton onCardButtonClick={handleClick} />
    </div>
  );
};

export default Card;
