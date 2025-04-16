import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div className="signin_con">
      <div className="greencard">
        <h2 className="greentext">
          Welcome to <span>Greenville</span>
        </h2>
        <h3 className="greensubtext">
          Join Us in Keeping the Planet Clean – Sign Up & Make a Difference!
          🌍♻️
        </h3>
        <br></br> <br></br>
        <div className="imagediv">
          <img
            src="..\src\assets\images\signup.png"
            id="image"
            alt="GREENVILLE"
          />
        </div>
      </div>
      <br></br>

      <div className="logincard">
        <form action="submit" className="signin_form">
          <h1 className="signin_header" style={{ color: " #1B5B33" }}>
          Sign In
          </h1>

          <label className="label">
            Email
            <input
              type="email"
              name="Email"
              placeholder="Enter Email"
              onChange={handleEmail}
              value={email}
              required
            />
          </label>
          <label className="label">
            Password
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              onChange={handlePassword}
              value={password}
              required
            />
          </label>
          <div className="signin_btns">
            <button className="login-btn" style={{ color: "white" }}>
              Login
            </button>
            <button className="signin_btn">Sign In with Google</button>
            <Link to="/Forgot Password" className="fp">
              Forgot Password?
            </Link>
          </div>
          <p className="nh">
            New to Greenville? <Link to="/Sign Up">Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
