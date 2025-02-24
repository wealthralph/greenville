 import TotalPickup from "./TotalPickup"
 import MissedCollection from "./MissedCollection"
 export default function PickupStats(){
    return(
        <div className="pickup_stats">
            <TotalPickup />
            <MissedCollection />
        </div>
    )
 }