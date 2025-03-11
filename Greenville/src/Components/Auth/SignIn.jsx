import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignIn() {
  const [email,setEmail]= useState('')
  const [password, setPassword] = useState('')

  const handleEmail = (e)=>{
    setEmail(e.target.value);
  }
  const handlePassword = (e)=>{
    setPassword(e.target.value);
  }
  return (
    <div className="signin_con">
    
    <h1 className="signin_header">Sign In</h1>
      <form action="submit" className="signin_form">
        <label className="label">
          Email
          <input type="email" name="Email" placeholder="Enter Email" onChange={handleEmail} value={email} required />
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
        <button className="signin_btn">Sign In</button>
        <Link to="/Forgot Password"  className="fp">Forgot Password?</Link>
        </div>
       
      </form>
      <p className="nh">
        New here? <Link to="/Sign Up">Sign Up</Link>
      </p>
    </div>
  );
}
