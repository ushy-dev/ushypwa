import React from "react";
// import { useNavigate } from "react-router-dom";
import "./searchBar.css";
// import GigCard from "../gigCard/gigCard";

const SearchBar = ({
  onSubmit,
  submit,
  inputType,
  placeholder,
  value,
  name,
  onChange,
  inputtFocus,
  inputDisabled,
  handleClick
}) => {
  // let navigate = useNavigate();

  // const handleDetailClick = () => {
  //   navigate("/gigs-details");
  // };
  return (
    <>
      <form className="search__form" onClick={handleClick} onSubmit={onSubmit}>
        <input
          type={inputType}
          placeholder={placeholder}
          value={value}
          name={name}
          onChange={onChange}
          className="search"
          disabled={inputDisabled}
          autoFocus={inputtFocus}
        ></input>
        <div>
          {/* <div>
            {showSearchWords ? (
              <>
                <GigCard
                  handleClick={handleDetailClick}
                  category="Awards  Ceremonies"
                  location="Ajah, Lagos"
                  date="06:00AM"
                  fullWorld="City People Awards 2022"
                  searchedHighlight={showSearchWords}
                />
              </>
            ) : (
              <div></div>
            )}
          </div> */}
        </div>
      </form>
    </>
  );
};

export default SearchBar;
