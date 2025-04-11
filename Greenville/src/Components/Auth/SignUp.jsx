import { useState } from "react";
import { Link } from "react-router-dom";
import { SignupImage } from "../../assets";
import { useMutation } from "@tanstack/react-query";
import SignUpApi from "./SignUpApi";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { mutate, isPending, isError, error, isSuccess } = useMutation({
    mutationFn: SignUpApi,
    onSuccess: (data) => {
      console.log("Signup success:", data);
      const token = data?.data.token;
      if (token) {
        localStorage.setItem("token", token);
      }

      navigate("/dashboard");
    },
    onError: (err) => {
      console.error("Signup error:", err);
    },
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(form);
  };

  return (

    <div className="signup-MainCon">
        <section className="leftSection">
        <h1 className="title">
          Welcome to <br /><span>Greenville</span>
        </h1>
        <p className="titleParagraph">
          Join Us in Keeping the Planet Clean – Sign Up & Make a Difference! 🌍♻️
        </p>
        <img src={SignupImage} alt="Signup visual" className="singUp-img"/>
      </section>
      
    <div className="formContainer">
      <form className="signUpForm" onSubmit={handleSubmit}>
      
          <h1 className="signUpHeader">Create an Account</h1>

          <label className="label">
            First Name
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </label>

          <label className="label">
            Last Name
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              required
            />
          </label>

          <label className="label">
            Email
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            />
          </label>

          <label className="label">
            Password
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              minLength={8}
              title="Password must be at least 8 characters long"
            />
          </label>

          <div className="signUpbtns">
            <button className="signUpbtn" type="submit" disabled={isPending}>
              {isPending ? "Signing up..." : "Sign Up"}
            </button>

            <p className="or">Or</p>

            <button
              className="signUpGoogle"
              onClick={() => {
                /* Implement Google Signup */
              }}
            >
              Sign Up with Google
            </button>

            {isSuccess && <p className="success">Signup successful!</p>}
            {isError && (
              <p className="error" style={{ color: "red" }}>
                Error: {error.message}
              </p>
            )}
          </div>

          <p className="haveAccount">
            Already have an Account?{" "}
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
        
      </form>
    </div>
    </div>



  );
}
