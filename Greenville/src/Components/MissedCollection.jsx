import { useState } from "react"

export default function Missed(){
    const [missed, setMissed] = useState(12)
    return(
        <div className="missed_con">
        <h2 className="missed_header">Missed Pickups</h2>
        <h1 className="missed_value">{missed}</h1>
        </div>
    )
}