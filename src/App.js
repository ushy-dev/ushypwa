import { BrowserRouter, Route, Routes } from "react-router-dom";
import GigsDetails from "./pages/gigsDetails/gigsDetails";
import Homepage from "./pages/homepage/homepage";
import SearchPage from "./pages/searchpage/searchpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/gigs-details" element={<GigsDetails />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
