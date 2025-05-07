import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
        
      {/* Hamburger Icon */}
    
      <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
      </button>

      {/* Mobile Menu */}
      <div className={`menu ${isOpen ? "show" : "hide"}`}>
        <ul className="menu-list">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "active menu-link" : "menu-link"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "active menu-link" : "menu-link"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/faqs"
              className={({ isActive }) =>
                isActive ? "active menu-link" : "menu-link"
              }
            >
              FAQs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contactUs"
              className={({ isActive }) =>
                isActive ? "active menu-link" : "menu-link"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="menu-buttons">
          <NavLink to="/Sign up">
            <button className="menu_btn_one ">Sign Up</button>
          </NavLink>
          <NavLink to="/Sign In">
            <button className="menu_btn_two">Sign In</button>
          </NavLink>
        </div>
      </div>
    </nav>
     
    
  );
}
