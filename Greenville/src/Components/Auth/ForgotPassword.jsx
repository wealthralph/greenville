import { useState } from "react";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  return (
    <>
      <div className="forgotContainer">
        <div className="forgotBox">
          <h1 className="forgotHeader">Forgot Password</h1>
          <form className="forgotForm">
            <label className="label" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Email"
              required
            />
            <button className="sendEmail">Send Email</button>
          </form>
          <p className="signupPrompt">
            New to Greenville? <Link to="/Sign Up">Sign Up</Link> Instead
          </p>
        </div>
      </div>
    </>
  );
}
