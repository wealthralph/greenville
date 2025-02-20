import Greetings from "./Greetings"
import DashboardCard from "./DashboardCard"
import Barchart from "./Barchart"
import PickupStats from "./PickupStats";
import PaymentMeter from './PaymentMeter'
import HamburgerMenu from "./HamburgerMenu";
import History from "./History";
// import FloatingButton from "./FloatingRoundButton";
export default function Dashboard() {
  return (
    <>
    {/* <HamburgerMenu /> */}
      <Greetings name={"Elo"} />
      <DashboardCard />
      <PaymentMeter />
      <PickupStats />
      <Barchart />
      <History />
   
    </>
  );
}
