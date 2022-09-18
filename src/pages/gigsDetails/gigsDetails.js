import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import BottomNav from "../../components/bottomNav/bottomNav";
import HeaderBar from "../../components/headerBar/headerBar";
import frameimage from "../../assets/images/frame.png";
import {
  arrowdownbutton,
  arrowrightbutton,
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
import "./gigsDetails.css";

const GigsDetails = () => {
  let navigate = useNavigate();
  const { state } = useLocation();
  const { gigType, gigLocation, gigNotification, gigTitle } = state;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          <p>{gigNotification}</p>
        </div>
        <div className="gigs_details_cnt-title">
          <div className="gigs__details-morenone">{moreIcon}</div>
          <div className="gigs_dimage">
            <img src={frameimage} alt="" />
          </div>

          <p>{gigTitle}</p>
          <div className="gigs__details-more">{moreIcon}</div>
        </div>
        <div className="gigs_details_cnt-overview">
          <p>Overview</p>
          <div>{arrowdownbutton}</div>
        </div>
        <div className="gigs_details_cnt-itembody">
          <div className="gigs_details_cnt-item">
            <div className="gigs_details_cnt-itemleft">
              <p>You will be paid</p>
            </div>
            <div className="gigs_details_cnt-itemright">
              <p className="gigs_details_price">₦15,000.00</p>
            </div>
          </div>
          <div className="gigs_details_cnt-item">
            <div className="gigs_details_cnt-itemleft">
              <p>Status</p>
            </div>
            <div className="gigs_details_cnt-itemright">
              <div className="gigs_details_status">
                <div className="gigs_details_circle" />
                <p>Open</p>
              </div>

              <p className="gigs_details-doesmean">What does this mean?</p>
            </div>
          </div>
          <div className="gigs_details_cnt-item">
            <div className="gigs_details_cnt-itemleft">
              <p>Agency</p>
            </div>
            <div className="gigs_details_cnt-itemright">
              <p>Zapphaire Ushers</p>
            </div>
          </div>
          <div className="gigs_details_cnt-item">
            <div className="gigs_details_cnt-itemleft">
              <p>Gig Type</p>
            </div>
            <div className="gigs_details_cnt-itemright">
              <p>{gigType}</p>
            </div>
          </div>
          <div className="gigs_details_cnt-item">
            <div className="gigs_details_cnt-itemleft">
              <p>Location</p>
            </div>
            <div className="gigs_details_cnt-itemright">
              <p>{gigLocation}</p>
            </div>
          </div>
          <div className="gigs_details_cnt-item">
            <div className="gigs_details_cnt-itemleft">
              <p>Gig Length</p>
            </div>
            <div className="gigs_details_cnt-itemright">
              <p>1 Day</p>
            </div>
          </div>
          <div className="gigs_details_cnt-item">
            <div className="gigs_details_cnt-itemleft">
              <p>Date(s)</p>
            </div>
            <div className="gigs_details_cnt-itemright">
              <p>03 July 2022</p>
            </div>
          </div>
          <div className="gigs_details_cnt-item">
            <div className="gigs_details_cnt-itemleft">
              <p>Time</p>
            </div>
            <div className="gigs_details_cnt-itemright">
              <p>11:00AM - 9:00PM</p>
            </div>
          </div>
          <div className="gigs_details_cnt-item">
            <div className="gigs_details_cnt-itemleft">
              <p>Overnight</p>
            </div>
            <div className="gigs_details_cnt-itemright">
              <p>No</p>
            </div>
          </div>
          <div className="gigs_details_cnt-item">
            <div className="gigs_details_cnt-itemleft">
              <p>Deadline</p>
            </div>
            <div className="gigs_details_cnt-itemright">
              <p className="gigs_dateleft">2 Days Left</p>
            </div>
          </div>
          <div className="gigs_details_cnt-item">
            <div className="gigs_details_cnt-itemleft">
              <p>SlotsLeft</p>
            </div>
            <div className="gigs_details_cnt-itemright">
              <p className="gigs_dateleft">2</p>
            </div>
          </div>
          <div className="gigs_details_cnt-item">
            <div className="gigs_details_cnt-itemleft">
              <p className="gigs_details-requirement">Requirements</p>
            </div>
            <div className="gigs_details_cnt-itemright">{arrowrightbutton}</div>
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
