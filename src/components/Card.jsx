import React from "react";
import CardButton from "./CardButton";

const Card = () => {
  // logic
  const subText = "카드 서브 텍스트입니다";
  const className = "chutzrit";
  // view
  return (
    <div className="card">
      <h5 className="card-title">Card title</h5>
      <p className={className}>{subText}</p>
      <CardButton />
    </div>
  );
};

export default Card;
