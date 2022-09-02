import React from "react";
import { useNavigate } from "react-router-dom";
import BottomNav from "../../components/bottomNav/bottomNav";
import HeaderBar from "../../components/headerBar/headerBar";
import {
    arrowdownbutton,
  disCoverNotActive,
  discoverTextNotActive,
  gigIconActive,
  gigTextActive,
  headerBackIcon,
  messageNotActive,
  messagesTextNotActive,
  moreIcon,
  settingsNotActive,
  SettingsTextNotActive,
} from "../../Utils/tools";
import "./gigsDetails.css"

const GigsDetails = () => {
  let navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <>
      <HeaderBar
        handleClick={goBack}
        backIcon={headerBackIcon}
        headerText="Gig Details"
      />
      <div className="gigs_details_cnt">
        <div className="gigs_details_cnt-residency">
            <p>For Lagos residents only</p>
        </div>
        <div className="gigs_details_cnt-title">
            <p>AWA-001-030622</p>
            <div>
                {moreIcon}
            </div>
        </div>
        <div className="gigs_details_cnt-overview">
            <p>Overview</p>
            <div>
                {arrowdownbutton}
            </div>
        </div>
      </div>
      <BottomNav
        gigsIcon={gigIconActive}
        gigsText={gigTextActive}
        discoverIcon={disCoverNotActive}
        discoverText={discoverTextNotActive}
        messageIcon={messageNotActive}
        messageText={messagesTextNotActive}
        settingsIcon={settingsNotActive}
        settingsText={SettingsTextNotActive}
      />
    </>
  );
};

export default GigsDetails;
