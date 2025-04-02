import { useState } from "react";
import { Link } from "react-router-dom";
import { SignupImage } from "../../assets";

export default function SignUp() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");

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
  // const handleConfirmPassword = (e) => {
  //   setConfirmPassword(e.target.value);
  // };

  return (
    <>
    <div className="formContainer">
      <section className="leftSection">
        <h1 className="title">Welcome to <br></br><span>Greenville</span></h1>
        <p className="titleParagraph">
          Join Us in Keeping the Planet Clean – Sign Up & Make a Difference!
          🌍♻️
        </p>
        <img src={SignupImage}/>
      </section>

      <form className="signUpForm">
        <div className="signUpContainer">
          <h1 className="signUpHeader">Create an Account </h1>
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
            <input
              type="email"
              name="Email"
              placeholder=" "
              value={email}
              onChange={handleEmail}
              required
            />
          </label>
          <label className="label">
            Password
            <input
              type="password"
              name="password"
              placeholder=" "
              value={password}
              onChange={handlePassword}
              required
            />
          </label>
          {/* <label className="label">
            Confirm Password
            <input type="password" name="password" placeholder=" " value={confirmPassword} onChange={handleConfirmPassword} required />
          </label> */}
          <div className="signUpbtns">
            <button className="signUpbtn">Sign Up</button>
            <p className="or">Or</p>
            <button className="signUpGoogle">Sign Up with Google </button>
          </div>
          <p className="haveAccount">
            Already have a Account?{" "}
            <Link to="/Sign In">
              <span>Log In</span>
            </Link>
          </p>
          <div className="lowerText">
            <p>
              By clicking continue, I agree to <a href="">Terms of Use</a> and
              acknowledge that I have read the <a href="">Privacy Policy</a>
            </p>
          </div>
        </div>
      </form>
      </div>
    </>
  );
}
