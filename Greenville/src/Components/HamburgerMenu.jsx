import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Hamburger Icon */}
      <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
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
              to="/contact"
              className={({ isActive }) =>
                isActive ? "active menu-link" : "menu-link"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="menu-buttons">
          <NavLink to="/sign-up">
            <button className="signup">Sign Up</button>
          </NavLink>
          <NavLink to="/sign-in">
            <button className="signin">Sign In</button>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

/*return (
    <nav className="navbar">
       {/* Hamburger Icon }
      <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      {/* Mobile Menu *}
      <div className="menu show">
        <ul className="menu-list">
          <li>
            <a href="#" className="menu-link">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="menu-link">
              About
            </a>
          </li>
          <li>
            <a href="#" className="menu-link">
              FAQs
            </a>
          </li>
          <li>
            <a href="#" className="menu-link">
              Contact
            </a>
          </li>
        </ul>
        <div className="menu-buttons">
          <button className="signup">Sign Up</button>
          <button className="signin">Sign In</button>
        </div>
      </div> 
      {/* <NavLink to='/' className={({ isActive }) => (isActive ? "active" : "")} >Home</NavLink>
      <NavLink to='/Dashboard' className={({ isActive }) => (isActive ? "active" : "")} >Dashboard</NavLink>
      <NavLink to='/About' className={({ isActive }) => (isActive ? "active" : "")}>About</NavLink>
      <div className="nav_btns">
        <NavLink to="/Sign In" ><button>Login</button></NavLink>
        <NavLink to="/Sign Up" ><button>Sign Up</button></NavLink>
      </div> }
    </nav>
  );
}*/
