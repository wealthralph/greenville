export default function Dashboard(){
    return (
        <>
        <div className="topNav">
        </div>
        <h3> Hello {username} </h3>
        <div className="TokenCard">
            <h2>Ecotokens</h2>
            <h3>Balance</h3>
            <p>1250</p>
            <p>1234832848528</p>
            <p>{username}</p>
        </div>
        <div className="pickups"><h3>Total Pickup</h3>
        <h1>43</h1>
        </div>
        <div className="missed"><h3>Missed Pickup</h3>
        <h1>12</h1>
        </div>
        <div>
            <h2>History</h2>
            <span>See all</span>
            <div>
                <h3>Location</h3>
                <h2>Time</h2>
            </div>
            <p>+23</p>
        </div>
        <button>+</button>
        </>
    )
}