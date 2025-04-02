import FreeCard from "../FreeCard";
import PremiumCard from "../PremiumCard";
import BusinessCard from "../BusinessCard";

export default function Cards(){
    return(
        <div className="myCards">
            <h1 className="cardHeaderMain">The Perfect Prices for you needs</h1>
            <div className="cardContainer">
        <FreeCard />
        <PremiumCard />
        <BusinessCard />
        </div>
        </div>
    )
}