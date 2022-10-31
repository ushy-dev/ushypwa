import React from "react";
import "./dialogmodal.css";

function Dialogmodal({ writeUp, handleYes, handleNo }) {
  return (
    <div className="dialogmodal__cnt">
      <div className="dialogmodal__overlay" />
      <div className="dialogmodal__wrapper">
        <div className="dailogmodal">
          <div className="dailogmodal__top">
            <p className="dialogmoda__writeup">{writeUp}</p>
          </div>
          <div className="dialogmodal__bottom">
            <button onClick={handleNo} className="dialogmodal__no">
              No
            </button>
            <button onClick={handleYes} className="dialogmodal__yes">
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dialogmodal;
