export default function ResetPassword(){
    return(
        <>
        <h1>Reset Password</h1>
         <form>
        <label className="label"/>
          Email
          <input type="email" name="Email" placeholder="Enter Email" required />
          <label className="label"/>
          New Password
          <input
            type="password"
            name="Newpassword"
            placeholder="Enter Password"
            required
          />
           <label className="label"/>
          Confirm Password
          <input
            type="password"
            name="Confirmpassword"
            placeholder="Enter Password"
            required
          />

          <button>Send Email</button>
        </form>
        </>
    )
}