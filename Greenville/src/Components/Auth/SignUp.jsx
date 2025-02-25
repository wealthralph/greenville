import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  return (
    <>
      <h1 className="signUpHeader">Greenville Sign Up </h1>
      <form className="signUpForm">
        <div className="signUpContainer">
          <label className="label">
            First Name
            <input
              type="text"
              name="Name"
              onChange={handleChange}
              value={name}
              placeholder=" "
              required
            />
          </label>
          <label className="label">
            Last Name
            <input
              type="text"
              name="name"
              value={lastName}
              onChange={handleLastName}
              placeholder=""
              required
            />
          </label>
          <label className="label">
            Email
            <input type="email" name="Email" placeholder=" " value={email} onChange={handleEmail} required />
          </label>
          <label className="label">
            Password
            <input type="password" name="password" placeholder=" " value={password} onChange={handlePassword}  required />
          </label>
          <label className="label">
            Confirm Password
            <input type="password" name="password" placeholder=" " value={confirmPassword} onChange={handleConfirmPassword} required />
          </label>
        </div>
        <div className="signUpbtns">
          <button className="signUpbtn">Sign Up</button>
          <p className="or">Or</p>
          <button className="signUpGoogle">Sign Up with Google </button>
        </div>
        <p className="haveAccount">
          Already have a Account? <Link to="/Sign In"><span>Log In</span></Link>
        </p>
        <div className="lowerText">
          <p>
            By clicking continue, I agree to <a href="">Terms of Use</a> and
            acknowledge that I have read the <a href="">Privacy Policy</a>
          </p>
        </div>
      </form>
    </>
  );
}
