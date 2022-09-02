import React from "react";
import { headerNotificationIcon } from "../../Utils/tools";
import "./headerBar.css";

const HeaderBar = ({ backIcon, headerText, handleClick }) => {
  return (
    <div className="headerbar-cnt">
      <button className="backIconButton" onClick={handleClick}>{backIcon}</button>
      <p>{headerText}</p>
      <button disabled>{headerNotificationIcon}</button>
    </div>
  );
};

export default HeaderBar;
