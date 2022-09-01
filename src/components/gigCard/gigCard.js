import React from "react";
import { moreIcon } from "../../Utils/tools";
import "./gigCard.css";

const GigCard = ({
  category,
  title,
  location,
  date,
  image,
  handlemoreClick,
  searchedHighlight,
  fullWorld,
}) => {
  const parts = fullWorld.split(new RegExp(`(${searchedHighlight})`, "gi"));
  return (
    <>
      <div className="gigCard_cnt">
        <div className="gigCard_cnt-left">
          <p className="gigCard_cnt-category">{category}</p>
          <p>
            <span>
              {parts.map((part, i) => (
                <span
                  className="Showsearch_text"
                  key={i}
                  style={
                    part.toLowerCase() === searchedHighlight.toLowerCase()
                      ? { fontWeight: 700, color: "#0184FB" }
                      : {}
                  }
                >
                  {part}
                </span>
              ))}
            </span>
          </p>
          <p className="gigCard_cnt-location">{location}</p>
          <p className="gigCard_cnt-date">{date}</p>
        </div>

        <button className="gigCard_cnt-morebutton" onClick={handlemoreClick}>{moreIcon}</button>
      </div>
    </>
  );
};

export default GigCard;
