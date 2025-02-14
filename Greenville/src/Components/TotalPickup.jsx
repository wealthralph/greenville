import { useState } from "react"

export default function TotalPickup(){
    const [pickUps , setPickUps] = useState(0);
    ()=>setPickUps(pickUps + 1)
    return(
        <>
        <h2>Total Pick-Up</h2>
        <h1>{pickUps}</h1>
        </>
    )
}