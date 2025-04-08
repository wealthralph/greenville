import HamburgerMenu from "./HamburgerMenu";
import { Logo } from "../assets";
import { Link } from "react-router-dom";
import { clogo } from "../assets";
import { useNavigate} from "react-router-dom";


export default function NavBar() {
  const navigate = useNavigate();
  return (
  
    
      <header>
        
         <Link to="/">
          <img src={clogo} alt="logo" />
        </Link>
        
        <nav className="simple-Nav">
          <ul className="navlinks">
            <li className="list">
            <Link to="/">Home</Link>
            </li>
            <li className="list">
            <Link to="/about">About</Link>
            </li>
            <li className="list">
            <Link to="/faq">FAQ</Link>
            </li>
            <li className="list"> 
            <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>


       <div className="buttons">
       <button onClick={() => navigate("/Sign in")}className="signin">Sign In</button>
       <button  onClick={() => navigate("/Sign up")}  className="signout">Sign Up</button>
       </div>  
       <div className="sidebar">
      
        
        
       </div>
       <HamburgerMenu className="hamburger"/>
       <h2 className="greenville">GREENVILLE</h2>
      </header>
      
    
  );
}
