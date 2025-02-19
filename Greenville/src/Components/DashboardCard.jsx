import { useState } from "react"
export default function DashboardCard({fullName}){
     const [tokens, setTokens] = useState(0);
        () => setTokens(tokens + 10)
    return (
        <>
        <h1>EcoTokens</h1>
        <div>
        <h3>Balance</h3>
        <h2>{tokens}</h2>
        </div>
        <p>1234658604743</p>
        <h2>{fullName}</h2>
        </>
    )
}