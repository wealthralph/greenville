import HamburgerMenu from "./HamburgerMenu";
import { Link } from "react-router-dom";
import { clogo } from "../assets";
import { useNavigate} from "react-router-dom";
import { motion } from "framer-motion";

export default function NavBar() {
  const navigate = useNavigate();
  return (
  
    
      <header>
        
        <Link to="/">
  <motion.img
    src={clogo}
    alt="logo"
    className="navlogo"
    animate={{
      rotate: 360, // Rotating 360 degrees
    }}
    transition={{
      repeat: Infinity, // Infinite loop
      repeatType: "loop", // Continuous loop
      duration: 10, // Rotation speed, adjust as needed
      ease: "linear", // Smooth continuous rotation
    }}
  />
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
            <Link to="/contactUs">Contact Us</Link>
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
      <h2 className="greenville">
        <Link to='/'> GREENVILLE</Link>
       </h2>
      </header>
      
    
  );
}
