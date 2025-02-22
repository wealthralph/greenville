export default function RequestPickup(){
    return(
        <>
        <h1 className="requestHeader">Request Waste Pick-up</h1>
        <form className="requestForm">
        <label className="label">
          Address
          <input type="text" name="address" placeholder=" " required />
        </label>
        <label className="label">
          Phone Number
          <input type="tel" name="Phone-number" placeholder="" required />
        </label>
        <label className="label">
          Email
          <input type="email" name="Email" placeholder=" " required />
        </label>
        <label className="label">Service Required
                        <select name="Reference" id="Reference">
                            <option value="choose level">Choose Service</option>
                            <option name="service" value="Residential">Residential waste management</option>
                            <option name="service" value="Industrial">Industrial waste management</option>
                            <option name="service" value="Commercial">Commercial waste management</option>
                        </select>
                    </label>
                    <label className="label">
                        Description
                        <textarea placeholder="Type message">

        </textarea>
                    </label>
                    <div className="requestButtons">
                    <button className="requestCancle">Cancle</button>
        <button className="requestDone" >Done</button>
        </div>
        </form>
        </>
    )
}