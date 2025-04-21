import "./App.css";
// import HamburgerMenu from './Components/HamburgerMenu';
import Dashboard from "./Components/Dashboard";
import SignUp from "./Components/Auth/SignUp";
import SignIn from "./Components/Auth/SignIn";
import Home from "./Components/Home";
import ForgotPassword from "./Components/Auth/ForgotPassword";
import Page404 from "./Components/Page404";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavBar from "./Components/NavBar";
import ContactUs from "./Components/ContactUs";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/Sign up" element={<SignUp />} />
          <Route path="/Sign In" element={<SignIn />} />
          <Route path="/Forgot Password" element={<ForgotPassword />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
