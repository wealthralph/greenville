import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function HamburgerMenu() {
 

  return (
    <nav className="navbar">
       {/* Hamburger Icon */}
      <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      {/* Mobile Menu */}
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
      </div> */}
    </nav>
  );
}
