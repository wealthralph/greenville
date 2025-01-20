export default function SignUp() {
  return (
    <>
    <h1>Ecowaste Sign Up</h1>
    <form>
      <div className="container" id="names">
        <label className="label">
          First Name
          <input
            type="text"
            name="Name"
            placeholder="Enter First Name"
            required
          />
        </label>
        <label className="label">
          Last Name
          <input
            type="text"
            name="name"
            placeholder="Enter Last Name"
            required
          />
        </label>
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
        <label className="label">
          Confirm Password
          <input
            type="password"
            name="password"
            placeholder="Confirm Password"
            required
          />
        </label>
      </div>
      <div className="form-btns">
        <button>Sign Up</button>
        or
        <button>Sign Up with Google </button>
      </div>
      <div className="lowerText">
                <p>By clicking continue, I agree to <a href="">Terms of Use</a> and acknowledge that I
                    have read the <a href="">Privacy Policy</a></p>
                </div>
      <p>
        Already have a Account? <span>Log In</span>
      </p>
    </form>
    </>
    
  );
}
