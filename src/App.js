import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./auth/Login";
import SVG from "./SVG";
import Work from "./Working";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/home" element={<SVG />} /> */}
        <Route path="/home" element={<Work />} />
      </Routes>
    </Router>
  );
}

export default App;
