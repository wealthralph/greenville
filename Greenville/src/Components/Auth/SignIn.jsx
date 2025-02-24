import { Link } from "react-router-dom";
import HamburgerMenu from "../HamburgerMenu";
export default function SignIn() {
  return (
    <>
        <HamburgerMenu />
    <h1>Ecowaste Sign In</h1>
      <form>
        <label className="label">
          Email
          <input type="email" name="Email" placeholder="Enter Email" required />
        </label>
        <label className="label">
          Password
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            required
          />
        </label>
        <Link to="/Sign In"><button>Sign In</button></Link>
        <Link to="/Forgot Password" >Forgot Password?</Link>
      </form>
      <p>
        New here? <Link to="/Sign Up">Sign Up</Link>
      </p>
    </>
  );
}
