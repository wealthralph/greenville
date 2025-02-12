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
        <li><i class="fa-regular fa-circle-check" className="tick"/>Customized waste pickup schedule</li>
        <li><i class="fa-regular fa-circle-check" className="tick"/>Recycling Rewards Trackingr</li>
        <li><i class="fa-regular fa-circle-check" className="tick"/>Analytics Dashboard</li>
        <li><i class="fa-regular fa-circle-check" className="tick"/>Increased Detty Token Multipliers</li>
        <li><i class="fa-regular fa-circle-check" className="tick"/>Exclusive Eco-Discounts</li>
        <li><i class="fa-regular fa-circle-check" className="tick"/>Priority Customer Support</li>
      </ul>
      <button className="cardButton premiumBtn">Get Started</button>
    </div>
        
        </>
    )
}