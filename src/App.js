import { useState } from "react";
import "./App.css";
import HeaderBar from "./components/headerBar/headerBar";
import SearchBar from "./components/searchBar/searchBar";
import { headerBackIcon } from "./Utils/tools";

function App() {
  const [isitWork, setIsItWork] = useState("");
  const [showWhat, setShowWhat] = useState("");
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
    
    </>
  );
}

export default App;
