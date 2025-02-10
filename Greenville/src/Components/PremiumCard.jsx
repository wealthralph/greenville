export default function PremiumCard(){
    return(
        <>
           <div className="sideCard premiumCard">
      <p className="subCardHeader">Premium </p>
      <div className="cardHeader">
        <h2>₦7,500/month</h2>
        <p>Free plan for all users</p>
      </div>
      <ul className="custom-check-list">
        <li>Customized waste pickup schedule</li>
        <li>Recycling Rewards Trackingr</li>
        <li>Analytics Dashboard</li>
        <li>Increased Detty Token Multipliers</li>
        <li>Exclusive Eco-Discounts</li>
        <li>Priority Customer Support</li>
      </ul>
      <button className="cardButton premiumBtn">Get Started</button>
    </div>
        
        </>
    )
}