export default function HamburgerMenu() {
  return (
    <nav className="navbar">
      {/* Hamburger Icon */}
      <button className="hamburger">☰</button>

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
    </nav>
  );
}
