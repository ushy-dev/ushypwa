import React from "react";
import "./searchBar.css";
import GigCard from "../gigCard/gigCard";

const SearchBar = ({
  onSubmit,
  submit,
  inputType,
  placeholder,
  value,
  name,
  onChange,
  showSearchWords,
}) => {
  return (
    <>
      <form className="search__form" onSubmit={onSubmit}>
        <input
          type={inputType}
          placeholder={placeholder}
          value={value}
          name={name}
          onChange={onChange}
          className="search"
        ></input>
        <div>
          <div className="date__cnt">
            <p>Today</p>
          </div>

          <div>
            {showSearchWords.toLowerCase() === "city" ? (
              <GigCard
                category="Awards  Ceremonies"
                location="Ajah, Lagos"
                date="06:00AM"
                fullWorld="City People Awards 2022"
                searchedHighlight={showSearchWords}
              />
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </form>
    </>
  );
};

export default SearchBar;
