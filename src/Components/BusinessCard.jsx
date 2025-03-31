export default function BusinessCard(){
    return(
        <>
           <div className="sideCard">
      <p className="subCardHeader">Business</p>
      <div className="cardHeader">
        <h2>₦22,500/month</h2>
        <p>Free plan for all users</p>
      </div>
      <ul className="custom-check-list">
        <li><i class="fa-regular fa-circle-check"/>Business Profile Creation</li>
        <li><i class="fa-regular fa-circle-check"/>Dedicated Account Manager</li>
        <li><i class="fa-regular fa-circle-check"/>Bulk Pickup Scheduling</li>
        <li><i class="fa-regular fa-circle-check"/>Waste Volume Analytics</li>
        <li><i class="fa-regular fa-circle-check"/>CSR Visibility Boost</li>
        <li><i class="fa-regular fa-circle-check"/>Custom Detty Token Incentives</li>
      </ul>
      <button className="cardButton">Get Started</button>
    </div>
        
        </>
    )
}