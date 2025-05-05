import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WhatIsGreenville from "./Home components/WhatIsGreenville";

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
