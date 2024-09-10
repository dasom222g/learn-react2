import React from "react";

const CardButton = ({ onCardButtonClick }) => {
  // logic
  const handleClick = () => {
    console.log("click!!");
    onCardButtonClick();
  };

  // view
  return (
    <button type="button" className="card-button" onClick={handleClick}>
      Go somewhere
    </button>
  );
};

export default CardButton;
