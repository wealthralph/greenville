import HamburgerMenu from "./HamburgerMenu";
import { Logo } from "../assets";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <nav className="navigation">
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <HamburgerMenu />
    </nav>
  );
}
