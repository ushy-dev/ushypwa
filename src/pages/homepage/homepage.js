import { useState } from "react";
import { useNavigate } from "react-router";
import Ads from "../../components/ads/ads";
import BottomNav from "../../components/bottomNav/bottomNav";
import HeaderBar from "../../components/headerBar/headerBar";
import JobCard from "../../components/jobCard/jobCard";
import SearchBar from "../../components/searchBar/searchBar";
import TitleCard from "../../components/titleCard/titleCard";
import {
  emptybackIcon,
  gigIconActive,
  disCoverNotActive,
  messageNotActive,
  settingsNotActive,
  gigTextActive,
  discoverTextNotActive,
  messagesTextNotActive,
  SettingsTextNotActive,
} from "../../Utils/tools";
import "./homepage.css";

import usher1 from "../../assets/images/Ushers-1.png";
import usher2 from "../../assets/images/Ushers-2.png";
import ushers from "../../assets/images/Ushers.png";

function Homepage() {
  let navigate = useNavigate();
  const [isitWork, setIsItWork] = useState("");
  const [, setShowWhat] = useState("");
  const handleDinput = (e) => {
    setIsItWork(e.target.value);
  };

  const handleDsubmit = (e) => {
    e.preventDefault();
    setShowWhat(isitWork);
  };

  const handleClick = () => {
    navigate("/search");
  };

  return (
    <>
      <HeaderBar backIcon={emptybackIcon} headerText="My Gigs" />
      <div className="homepage__body">
        <div className="watcham">
          <SearchBar
            handleClick={handleClick}
            onSubmit={handleDsubmit}
            submit="submit"
            inputType="text"
            placeholder="Search"
            value={isitWork}
            name=""
            inputtFocus={false}
            inputDisabled={false}
            onChange={handleDinput}
            showSearchWords={isitWork}
          />
        </div>

        <Ads />
        <TitleCard name="Today" />
        <JobCard
          handleClick={() =>
            navigate("/gigs-details", {
              state: {
                gigType: "Concert",
                gigLocation: "Victoria Island, Lagos",
                gigTitle: "Burna Boy: Live @ the O2",
                gigNotification: "Anyone can apply",
              },
            })
          }
          category="Concert"
          title="Burna Boy: Live @ the O2"
          location="Victoria Island, Lagos"
          date="06:00AM"
          progresss={50}
          bottomText="Anyone can apply"
          bottomTextThemeColor="#27AE5F13"
          bottomTextColor="#27AE60"
          images={usher2}
          imagewidth="120px"
        />
        <TitleCard name="Tomorrow" />
        <JobCard
          handleClick={() =>
            navigate("/gigs-details", {
              state: {
                gigType: "Wedding",
                gigLocation: "Ago-Iwoye, Ogun",
                gigTitle: "WE01030722",
                gigNotification: "Must be 5'11 and above",
              },
            })
          }
          category="Wedding"
          title="WE01030722"
          location="Ago-Iwoye, Ogun"
          date="4:00PM"
          progresss={25}
          bottomText="Must be 5'11 and above"
          bottomTextThemeColor="#9B51E011"
          bottomTextColor="
        #9B51E0"
          images={usher1}
          imagewidth="120px"
        />
        {/* WE01030722 */}
        <TitleCard name="Next Week" />
        <JobCard
          handleClick={() =>
            navigate("/gigs-details", {
              state: {
                gigType: "Awards & Ceremonies",
                gigLocation: "Ikorodu, Lagos",
                gigTitle: "AC03110722",
                gigNotification:
                  "Size 8-10. Do not apply if you've worked with an agency in Lagos",
              },
            })
          }
          category="Awards & Ceremonies"
          title="AC03110722"
          location="Ikorodu, Lagos"
          date="08:00AM"
          progresss={25}
          bottomText="Size 8-10. Do not apply if you've worked with an agency in Lagos"
          bottomTextThemeColor="#9B51E011"
          bottomTextColor="
        #9B51E0"
          images={ushers}
          imagewidth="70px"
        />
        <JobCard
          handleClick={() =>
            navigate("/gigs-details", {
              state: {
                gigType: "Wedding",
                gigLocation: "Lekki-Epe, Lagos",
                gigTitle: "#FinallyFeyMos",
                gigNotification: "Lagos Residents only",
              },
            })
          }
          category="Wedding"
          title="#FinallyFeyMos"
          location="Lekki-Epe, Lagos"
          date="06:00AM"
          progresss={25}
          bottomText="Lagos Residents only"
          bottomTextThemeColor="#9B51E011"
          bottomTextColor="
        #9B51E0"
          images={usher1}
          imagewidth="120px"
        />
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
}

export default Homepage;
