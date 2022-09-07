import React from "react";
import HeaderBar from "../../components/headerBar/headerBar";
import SearchBar from "../../components/searchBar/searchBar";
import { emptybackIcon } from "../../Utils/tools";


const SearchPage = () => {
  return (
    <>
      <HeaderBar backIcon={emptybackIcon} headerText="My Gigs" />
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
