import FreeCard from "../FreeCard";
import PremiumCard from "../PremiumCard";
import BusinessCard from "../BusinessCard";

export default function Cards(){
    return(
        <div className="myCards">
            <h1 className="cardHeaderMain">Affordable Solutions to Fit Your Needs</h1>
            <div className="cardContainer">
        <FreeCard />
        <PremiumCard />
        <BusinessCard />
        </div>
        </div>
    )
}