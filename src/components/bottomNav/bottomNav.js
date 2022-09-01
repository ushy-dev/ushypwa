import React from "react";
import "./bottomNav.css";

const BottomNav = ({
  gigsIcon,
  discoverIcon,
  messageIcon,
  settingsIcon,
  gigsText,
  discoverText,
  messageText,
  settingsText,
}) => {
  return (
    <div className="bottomnav__cnt">
      <div className="bottomnav__cnt-item">
        <button>
          <div className="bottomnav__icon">{gigsIcon}</div>
          <div className="bottomnav__text">{gigsText}</div>
        </button>
      </div>
      <div className="bottomnav__cnt-item">
        <button>
          <div className="bottomnav__icon">{discoverIcon}</div>
          <div className="bottomnav__text">{discoverText}</div>
        </button>
      </div>
      <div className="bottomnav__cnt-item">
        <button>
          <div className="bottomnav__icon">{messageIcon}</div>
          <div className="bottomnav__text">{messageText}</div>
        </button>
      </div>
      <div className="bottomnav__cnt-item">
        <button>
          <div className="bottomnav__icon">{settingsIcon}</div>
          <div className="bottomnav__text">{settingsText}</div>
        </button>
      </div>
    </div>
  );
};

export default BottomNav;
