import React from "react";
import "./GigDetailsBigBtn.css"

function GigDetailsBigBtn({ btnColor, btnName, handleClick }) {
  return (
    <div className="gdbbtn">
      <button
        style={{ backgroundColor: `${btnColor}` }}
        onClick={handleClick}
        className="gigdetailsbigbtn__cnt"
      >
        {btnName}
      </button>
    </div>
  );
}

export default GigDetailsBigBtn;
