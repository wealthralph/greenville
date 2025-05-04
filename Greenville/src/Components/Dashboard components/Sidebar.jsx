import { IoHomeOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { GoTasklist } from "react-icons/go";
import { NewLogo } from "../../assets";
import { IoIosLogOut } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleDashboardClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
    }
  };
  return (
    /*<div className="sidebar_con">
      <img className="sidebar_img" src={NewLogo} alt="logo" />

      <nav className="sidebar_navlist">
        <ul className="sidenav_link">
          <li className="sidenav_list">
            <Link to="/">
              <IoHomeOutline />
              Home
            </Link>
          </li>
          <li className="sidenav_list">
            <Link to="/calendar">
              <CiCalendar />
              Calendar
            </Link>
          </li>
          <li className="sidenav_list">
            <Link to="/tasks">
              <GoTasklist />
              Tasks
            </Link>
          </li>
          <li className="sidenav_list">
            <Link to="/settings">
              <IoSettingsOutline />
              Settings
            </Link>
          </li>
        </ul>
      </nav>

      <button className="sidebar_logoutbtn">
        <IoIosLogOut />
        Logout
      </button>
    </div>*/
    <div className="sidebar_con">
      <img className="sidebar_img" src={NewLogo} alt="logo" />

      <nav className="sidebar_navlist">
        <ul className="sidenav_link">
          <li className="sidenav_list">
            <Link
              to="/"
              onClick={handleDashboardClick}
              className={location.pathname === "/" ? "active-dashboard" : ""}
            >
              <IoHomeOutline />
              Dashboard
            </Link>
          </li>
          <li className="sidenav_list">
            <Link to="/settings">
              <IoSettingsOutline />
              Settings
            </Link>
          </li>
          <li className="sidenav_list">
            <Link to="/tasks">
              <GoTasklist />
              Tasks
            </Link>
          </li>
          <li className="sidenav_list">
            <Link to="/calendar">
              <CiCalendar />
              Calendar
            </Link>
          </li>
        </ul>
      </nav>

      <button className="sidebar_logoutbtn">
        <IoIosLogOut />
        Logout
      </button>
    </div>
  );
}
