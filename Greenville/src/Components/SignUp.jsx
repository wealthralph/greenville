export default function SignUp() {
  return (
    <>
    <h1 className="signUpHeader">Ecowaste Sign Up </h1>
    <form className="signUpForm">
      <div className="signUpContainer" >
        <label className="label">
          First Name
          <input
            type="text"
            name="Name"
            placeholder=" "
            required
          />
        </label>
        <label className="label">
          Last Name
          <input
            type="text"
            name="name"
            placeholder=""
            required
          />
        </label>
        <label className="label">
          Email
          <input type="email" name="Email" placeholder=" " required />
        </label>
        <label className="label">
          Password
          <input
            type="password"
            name="password"
            placeholder=" "
            required
          />
        </label>
        <label className="label">
          Confirm Password
          <input
            type="password"
            name="password"
            placeholder=" "
            required
          />
        </label>
      </div>
      <div className="signUpbtns">
        <button className="signUpbtn">Sign Up</button>
        <p className="or">Or</p>
        <button className="signUpGoogle">Sign Up with Google </button>
      </div>
      <p className="haveAccount">
        Already have a Account? <span>Log In</span>
      </p>
      <div className="lowerText">
                <p>By clicking continue, I agree to <a href="">Terms of Use</a> and acknowledge that I
                    have read the <a href="">Privacy Policy</a></p>
                </div>
    
    </form>
    </>
    
  );
}
