import React from "react";

function GigDetailsBigBtn({ btnColor, btnName, handleClick }) {
  return (
    <>
      <button
        style={{ backgroundColor: `${btnColor}` }}
        onClick={handleClick}
        className="gigdetailsbigbtn__cnt"
      >
        {btnName}
      </button>
    </>
  );
}

export default GigDetailsBigBtn;
