import { img8 } from "../assets";


export default function PickUp(){
    return (
    <div className="pickUp">
    <h1 className="pickupHeader">Request Pick-Up</h1>
    <div className="pickupImg">
        <img src={img8} alt="waste truck" />
    </div>
    <button className="pickupBtn">Request</button>
    </div>
    )
}