import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WhatIsGreenville from "./Home/WhatIsGreenVille";

function About() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WhatIsGreenville />} />
      </Routes>
    </Router>
  );
}

export default About
