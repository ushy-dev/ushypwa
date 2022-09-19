import React, { useEffect, useState } from "react";
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
  const [overviewCnt, setOverviewCnt] = useState("active");
  const [requirementsCnt, setRequirementCnt] = useState("not-active");
  const [moreInfoCnt, setMoreInfoCnt] = useState("not-active");
  let navigate = useNavigate();
  const { state } = useLocation();
  const {
    gigType,
    gigLocation,
    gigNotification,
    gigTitle,
    gigTextBackground,
    gigTextColor,
  } = state;

  const handleOverview = () => {
    setOverviewCnt("active");
    setRequirementCnt("not-active");
    setMoreInfoCnt("not-active");
  };

  const handleRequirement = () => {
    setOverviewCnt("not-active");
    setRequirementCnt("active");
    setMoreInfoCnt("not-active");
  };

  const handlemoreInfo = () => {
    setMoreInfoCnt("active");
    setRequirementCnt("not-active");
    setOverviewCnt("not-active");
  };

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
        <div
          style={{ backgroundColor: `${gigTextBackground}` }}
          className="gigs_details_cnt-residency"
        >
          <p style={{ color: `${gigTextColor}` }}>{gigNotification}</p>
        </div>
        <div className="gigs_details_cnt-title">
          <div className="gigs_dimage">
            <img src={frameimage} alt="" />
          </div>
          <div className="gigs_details_correct">
            <div className="gigs__details-morenone">{moreIcon}</div>

            <p>{gigTitle}</p>
            <div className="gigs__details-more">{moreIcon}</div>
          </div>
        </div>
        {overviewCnt === "not-active" ? (
          <div
            className="gigs_details_cnt-overview"
            onClick={() => handleOverview()}
          >
            <p>Overview</p>
            <div>{arrowrightbutton}</div>
          </div>
        ) : (
          <div
            className="gigs_details_cnt-overview"
            onClick={() => setOverviewCnt("not-active")}
          >
            <p>Overview</p>
            <div>{arrowdownbutton}</div>
          </div>
        )}

        {overviewCnt === "active" && (
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
            <div className="gigs_details_cnt-item gigs_details_cntlast">
              <div className="gigs_details_cnt-itemleft">
                <p>SlotsLeft</p>
              </div>
              <div className="gigs_details_cnt-itemright">
                <p className="gigs_dateleft">2</p>
              </div>
            </div>
          </div>
        )}

        {requirementsCnt === "not-active" ? (
          <div
            className="gigs_details_cnt-overview"
            onClick={() => handleRequirement()}
          >
            <p>Requirements</p>
            <div>{arrowrightbutton}</div>
          </div>
        ) : (
          <div
            className="gigs_details_cnt-overview"
            onClick={() => setRequirementCnt("not-active")}
          >
            <p>Requirements</p>
            <div>{arrowdownbutton}</div>
          </div>
        )}

        {requirementsCnt === "active" && (
          <div className="gigs_details_cnt-itembody">
            <div className="gigs_details_cnt-item">
              <div className="gigs_details_cnt-itemleft">
                <p>Physical Interview</p>
              </div>
              <div className="gigs_details_cnt-itemright">
                <p>Yes</p>
              </div>
            </div>
            <div className="gigs_details_cnt-item">
              <div className="gigs_details_cnt-itemleft">
                <p>Gender</p>
              </div>
              <div className="gigs_details_cnt-itemright">
               <p>Female</p>
              </div>
            </div>
            <div className="gigs_details_cnt-item">
              <div className="gigs_details_cnt-itemleft">
                <p>Age Range</p>
              </div>
              <div className="gigs_details_cnt-itemright">
                <p>18-25</p>
              </div>
            </div>
            <div className="gigs_details_cnt-item">
              <div className="gigs_details_cnt-itemleft">
                <p>Height (ft)</p>
              </div>
              <div className="gigs_details_cnt-itemright">
                <p>5"9 - 6"3</p>
              </div>
            </div>
            <div className="gigs_details_cnt-item">
              <div className="gigs_details_cnt-itemleft">
                <p>Weight (US)</p>
              </div>
              <div className="gigs_details_cnt-itemright">
                <p>8 - 10</p>
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
                <p>Outfit</p>
              </div>
              <div className="gigs_details_cnt-itemright">
                <p>FittedBlack T-Shirt, Fitted Blue Jeans</p>
                <p>White Shoes</p>
                <p style={{color: `${gigTextColor}`}}>Provided by you</p>
              </div>
            </div>
            <div className="gigs_details_cnt-item">
              <div className="gigs_details_cnt-itemleft">
                <p>Hairstyle</p>
              </div>
              <div className="gigs_details_cnt-itemright">
                <p>Any</p>
              </div>
            </div>
            <div className="gigs_details_cnt-item">
              <div className="gigs_details_cnt-itemleft">
                <p>Wig</p>
              </div>
              <div className="gigs_details_cnt-itemright">
                <p>Yes</p>
              </div>
            </div>
            <div className="gigs_details_cnt-item">
              <div className="gigs_details_cnt-itemleft">
                <p>Makeup</p>
              </div>
              <div className="gigs_details_cnt-itemright">
                <p>Yes</p>
              </div>
            </div>
            <div className="gigs_details_cnt-item">
              <div className="gigs_details_cnt-itemleft">
                <p>Heels</p>
              </div>
              <div className="gigs_details_cnt-itemright">
                <p>No</p>
              </div>
            </div>
            <div className="gigs_details_cnt-item  gigs_details_cntlast">
              <div className="gigs_details_cnt-itemleft">
                <p>Other</p>
              </div>
              <div className="gigs_details_cnt-itemright">
                <p>{gigNotification}</p>
              </div>
            </div>
          </div>
        )}

        {moreInfoCnt === "not-active" ? (
          <div
            className="gigs_details_cnt-overview"
            onClick={() => handlemoreInfo()}
          >
            <p>More Info</p>
            <div>{arrowrightbutton}</div>
          </div>
        ) : (
          <div
            className="gigs_details_cnt-overview"
            onClick={() => setMoreInfoCnt("not-active")}
          >
            <p>More Info</p>
            <div>{arrowdownbutton}</div>
          </div>
        )}

        {moreInfoCnt === "active" && (
          <div className="gigs_details_cnt-itembody">
            <div className="gigs_details_cnt-item gigs_details_activitesleft">
              <div className="gigs_details_cnt-itemleft ">
                <p>Activities</p>
              </div>
              <div className="gigs_details_cnt-itemright gigs_details_activities">
                <p className="">Attendance</p>
                <p>Rule Enforcement</p>
                <p>Guest Relations</p>
                <p>Seating</p>
                <p>Souvenir Distribution</p>
              </div>
            </div>
            <div className="gigs_details_cnt-item gigs_details_activitesleft">
              <div className="gigs_details_cnt-itemleft">
                <p>Perks</p>
              </div>
              <div className="gigs_details_cnt-itemright  gigs_details_activities">
                <p>Food</p>
                <p>Transportation</p>
                <p>Accomodation</p>
                <p>Make UP</p>
                <p>Souvenirs</p>
                <p>Breaks</p>
              </div>
            </div>
            <div className="gigs_details_cnt-item gigs_details_cntlast">
              <div className="gigs_details_cnt-itemleft">
                <p>Agency</p>
              </div>
              <div className="gigs_details_cnt-itemright">
                <p>Please be punctual</p>
              </div>
            </div>
          </div>
        )}
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
