export default function SignIn() {
  return (
    <>
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
        <button>Sign In</button>
        <a>Forgot Password?</a>
      </form>
      <p>
        Don't have a Account? <span>Sign Up</span>
      </p>
    </>
  );
}
