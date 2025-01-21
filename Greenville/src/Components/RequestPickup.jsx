export default function RequestPickup(){
    return(
        <>
        <h1>Request Waste Pick-up</h1>
        <form>
        <label className="label">
          Address
          <input type="text" name="address" placeholder="Enter Address" required />
        </label>
        <label className="label">
          Phone Number
          <input type="tel" name="Phone-number" placeholder="" required />
        </label>
        <label className="label">
          Email
          <input type="email" name="Email" placeholder="Enter Email" required />
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
        
        
        </form>
        </>
    )
}