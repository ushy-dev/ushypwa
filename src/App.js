import { useState } from "react";
import "./App.css";
import SearchBar from "./components/searchBar/searchBar";

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
      <SearchBar
        onSubmit={handleDsubmit}
        submit="submit"
        inputType="search"
        placeholder="Search"
        value={isitWork}
        name="search"
        onChange={handleDinput}
        showSearchWords={isitWork}
      />
    </>
  );
}

export default App;
