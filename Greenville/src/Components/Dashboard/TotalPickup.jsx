import { useState } from "react"

export default function TotalPickup(){
    const [pickUps , setPickUps] = useState(0);
   const handlePickup = ()=> {
    setPickUps(pickUps + 1)
   }
    return(
        <div className="totalpickup_con">
        <h2 className="totalpickup_header">Completed Pick-Up</h2>
        <h1 className="totalpickup_value">{pickUps}</h1>
        </div>
    )

}