import { useState } from "react";
import BottomNav from "../../components/bottomNav/bottomNav";
import HeaderBar from "../../components/headerBar/headerBar";
import SearchBar from "../../components/searchBar/searchBar";
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
