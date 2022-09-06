import React  from "react";
import PropTypes from "prop-types";
import "./progressBar.css";

const ProgressBar = (props) => {
  const { progress, circleTwoStroke } = props;

  let dsd = `calc(${progress} * 31.4 / 100) 31.4`;

  return (
    <div className="progress__container" style={{borderColor: `${circleTwoStroke}`, borderWidth: "2px", borderStyle: "solid"}}>
      <svg height="10" width="10" viewBox="0 0 20 20">
        <circle r="10" cx="10" cy="10" fill="white" />
        <circle
          r="5"
          cx="10"
          cy="10"
          fill="transparent"
          stroke={circleTwoStroke}
          stroke-width="10"
          stroke-dasharray={dsd}
          transform="rotate(-90) translate(-20)"
        />
      </svg>
    </div>
  );
};

ProgressBar.propTypes = {
  size: PropTypes.number.isRequired,
  progress: PropTypes.number.isRequired,
  strokeWidth: PropTypes.number.isRequired,
  circleOneStroke: PropTypes.string.isRequired,
  circleTwoStroke: PropTypes.string.isRequired,
};

export default ProgressBar;
