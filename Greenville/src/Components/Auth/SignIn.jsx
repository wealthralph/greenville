import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        "https://staging.greenvillehub.com/api/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      // Store the token 
      localStorage.setItem("authToken", data.token);
      
      // Redirect to dashboard
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

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
          Welcome to <span className="greenv-text">Greenville</span>
        </h2>
        <h3 className="greensubtext">
          Join Us in Keeping the Planet Clean – Sign Up & Make a Difference!
          🌍♻️
        </h3>
        <br></br> <br></br>
        <div className="imagediv">
          <img
            src="../src/assets/images/signup.png"
            id="image"
            alt="GREENVILLE"
          />
        </div>
      </div>
      <br></br>

      <div className="logincard">
        <br></br> <br></br>
     
        <form onSubmit={handleSubmit} className="signin_form">
          

          {error && (
            <div className="error-message" style={{ color: " red" }}>
              {error}
            </div>
          )}
<h1 className="signin_header" style={{ color: " #1B5B33" }}> Login</h1>
          <div className="loginlabel">
          <label className="login-label">
            Email</label>
            <input
            id="login-input"
              type="email"
              name="Email"
              placeholder="Enter Email"
              onChange={handleEmail}
              value={email}
              required
            />
          </div>
          <div className="loginlabel">
          <label className="login-label">Password</label>
          <input
              className="login-input"
              type="password"
              name="password"
              placeholder="Enter Password"
              onChange={handlePassword}
              value={password}
              required
            />
          </div>
          <div className="signin_btns">
            <button
              type="submit"
              className="login-btn"
              style={{ color: "white" }}
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
            <button type="button" className="signin_btn" style={{backgroundColor:"white",color:"green"}}>
              Sign In with Google
            </button>
            <Link to="/forgot-password" className="fp">
              Forgot Password?
            </Link>
          </div>
          <p className="nh">
            New to Greenville? <Link to="/sign-up">Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
