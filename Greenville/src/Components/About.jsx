import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./path/to/About";
import WhatIsGreenville from "./path/to/WhatIsGreenville";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WhatIsGreenville />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
