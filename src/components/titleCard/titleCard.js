import React from "react";
import "./titleCard.css";

const TitleCard = ({ name }) => {
  return (
    <div className="titlecard__cnt">
      <p>{name}</p>
    </div>
  );
};

export default TitleCard;
