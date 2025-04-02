export default function ForgotPassword(){
    return (
        <>
        <h1 className="forgotHeader">Forgot Password</h1>
        <form className="forgotForm">
        <label className="label"/>
          Email
          <input type="email" name="Email" placeholder="Enter Email" required />
          <button className="sendEmail">Send Email</button>
        </form>
        </>
    )
}