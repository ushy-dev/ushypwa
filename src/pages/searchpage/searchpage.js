import React from "react";
import { useNavigate } from "react-router-dom";
import HeaderBar from "../../components/headerBar/headerBar";
import SearchBar from "../../components/searchBar/searchBar";
import { headerBackIcon } from "../../Utils/tools";


const SearchPage = () => {
    let navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    }
  return (
    <>
      <HeaderBar handleClick={handleGoBack} backIcon={headerBackIcon} headerText="My Gigs" />
      <div className="watcham">
        <SearchBar
            submit="submit"
            inputType="text"
            placeholder="Search"
            inputtFocus={true}
        />
      </div>
    </>
  );
};

export default SearchPage;
