import Greetings from "./Greetings"
import DashboardCard from "./DashboardCard"
import Barchart from "./Barchart"
import PickupStats from "./PickupStats";
import PaymentMeter from './PaymentMeter'
import HamburgerMenu from "./HamburgerMenu";

export default function Dashboard() {
  return (
    <>
    {/* <HamburgerMenu /> */}
      <Greetings name={"Elo"} />
      <DashboardCard />
      <PaymentMeter />
      <PickupStats />
      <Barchart />
      <button className="createPickup" type="button">
        +
      </button>
    </>
  );
}
