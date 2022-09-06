import { useState } from "react";
import Ads from "../../components/ads/ads";
import BottomNav from "../../components/bottomNav/bottomNav";
import HeaderBar from "../../components/headerBar/headerBar";
import JobCard from "../../components/jobCard/jobCard";
import SearchBar from "../../components/searchBar/searchBar";
import TitleCard from "../../components/titleCard/titleCard";
import {
  headerBackIcon,
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

function Homepage() {
  const [isitWork, setIsItWork] = useState("");
  const [, setShowWhat] = useState("");
  const handleDinput = (e) => {
    setIsItWork(e.target.value);
  };



  const handleDsubmit = (e) => {
    e.preventDefault();
    setShowWhat(isitWork);
  };
  return (
    <>
      <HeaderBar backIcon={headerBackIcon} headerText="My Gigs" />
      <div className="homepage__body">
        <div className="watcham">
          <SearchBar
            onSubmit={handleDsubmit}
            submit="submit"
            inputType="text"
            placeholder="Search"
            value={isitWork}
            name=""
            onChange={handleDinput}
            showSearchWords={isitWork}
          />
        </div>

        <Ads />
        <TitleCard name="Today" />
        <JobCard
          category="Concert"
          title="Burna Boy: Live @ the 02"
          location="Victoria Island, Lagos"
          date="06:00AM"
          progresss={50}
          bottomText="Anyone can apply"
          bottomTextThemeColor="#27AE5F13"
          bottomTextColor="#27AE60"
        />
        <TitleCard name="Tomorrow" />
        <JobCard
          category="Wedding"
          title="AW01030722"
          location="Ikorodu, Lagos"
          date="06:00AM"
          progresss={30}
          bottomText="Must be 5'11 and above"
          bottomTextThemeColor="#9B51E011"
          bottomTextColor="
        #9B51E0"
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


