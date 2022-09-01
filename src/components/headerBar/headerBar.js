import React from "react";
import { headerNotificationIcon } from "../../Utils/tools";
import "./headerBar.css";

const HeaderBar = ({ backIcon, headerText }) => {
  return (
    <div className="headerbar-cnt">
      <button className="backIconButton">{backIcon}</button>
      <p>{headerText}</p>
      <button disabled>{headerNotificationIcon}</button>
    </div>
  );
};

export default HeaderBar;
