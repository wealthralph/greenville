import globe from "../../assets/icons/globe.png";
import truck from "../../assets/icons/truck.png";
import trash from "../../assets/icons/trash.png";

export default function WhyTheyBelieveUs() {
  return (
    <>
      <div className="greenvillecontainer">
        <div>
          <h1 className="greenvilleheader">Why they believe us</h1>
          <div className="greenvillestat">
            <div className="stat">
              <img src={globe} alt="Globe icon" className="icon" />
              <h2 className="numb">25,300</h2>
              <p className="numb-desc">Collected Yearly</p>
            </div>
            <div className="stat">
              <img src={truck} alt="Truck icon" className="icon" />
              <h2 className="numb">25,300</h2>
              <p className="numb-desc">Deliveries Made</p>
            </div>
            <div className="stat">
              <img src={trash} alt="Trash icon" className="icon" />
              <h2 className="numb">25,300</h2>
              <p className="numb-desc">Waste Recycled</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
