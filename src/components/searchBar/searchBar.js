import React from "react";
import "./searchBar.css";

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
          <div>
            <p>{showSearchWords}</p>
          </div>
        </div>
      </form>
    </>
  );
};

export default SearchBar;
