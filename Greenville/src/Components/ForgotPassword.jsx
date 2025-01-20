export default function ForgotPassword(){
    return (
        <>
        <h1>Forgot Password</h1>
        <form>
        <label className="label"/>
          Email
          <input type="email" name="Email" placeholder="Enter Email" required />
          <button>Send Email</button>
        </form>
        </>
    )
}