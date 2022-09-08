import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderBar from "../../components/headerBar/headerBar";
import SearchBar from "../../components/searchBar/searchBar";
import {
  disCoverNotActive,
  discoverTextNotActive,
  gigIconActive,
  gigTextActive,
  headerBackIcon,
  messageNotActive,
  messagesTextNotActive,
  settingsNotActive,
  SettingsTextNotActive,
} from "../../Utils/tools";
import nosearchresultimage from "../../assets/images/nosearchresults.png";
import BottomNav from "../../components/bottomNav/bottomNav";
import "./searchpage.css";

const SearchPage = () => {
  const [searchwords, setSearchWords] = useState("");
  const [showError, setShowError] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    if (searchwords === "") {
      setShowError(false);
    }
  }, [searchwords]);

  const handleDinput = (e) => {
    setSearchWords(e.target.value);
    setShowError(true);
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleDsubmit = (e) => {
    e.preventDefault();
    setShowError(true);
  };
  return (
    <>
      <HeaderBar
        handleClick={handleGoBack}
        backIcon={headerBackIcon}
        headerText="My Gigs"
      />
      <div className="watcham">
        <SearchBar
          submit="submit"
          inputType="text"
          placeholder="Search"
          inputtFocus={true}
          onSubmit={handleDsubmit}
          onChange={handleDinput}
        />

        {showError && (
          <div className="searchpage__notfound">
            <img src={nosearchresultimage} alt="" />
            <p className="searchpage_noresultfound">
              No results found for "{searchwords}"
            </p>
            <p className="searchpage__tryagain">
              Try again using a different keyword
            </p>
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

export default SearchPage;
