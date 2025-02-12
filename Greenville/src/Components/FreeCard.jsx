export default function FreeCard(){
    return(
        <>
         <div className="sideCard">
      <p className="subCardHeader">Basic</p>
      <div className="cardHeader">
        <h2>Free</h2>
        <p>Free plan for all users</p>
      </div>
      <ul className="custom-check-list">
        <li><i class="fa-regular fa-circle-check"></i>Limited Profile Creation</li>
        <li><i class="fa-regular fa-circle-check"></i>Pickup Scheduling </li>
        <li><i class="fa-regular fa-circle-check"></i>Basic recycling tips</li>
        <li><i class="fa-regular fa-circle-check"></i>Limited Detty Token Rewards</li>
        <li><i class="fa-regular fa-circle-check"></i>Limited Customer Support</li>
        <li><i class="fa-regular fa-circle-check"></i>Community Forum Access</li>
      </ul>
      <button className="cardButton">Get Started</button>
    </div>
        </>
    )
}