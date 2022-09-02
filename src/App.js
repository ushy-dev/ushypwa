import { BrowserRouter, Route, Routes } from "react-router-dom";
import GigsDetails from "./pages/gigsDetails/gigsDetails";
import Homepage from "./pages/homepage/homepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/gigs-details" element={<GigsDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
