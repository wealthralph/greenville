import Greetings from './Dashboard components/Greetings'
import DashboardCard from "./Dashboard components/DashboardCard"
import Barchart from "./Dashboard components/Barchart"
import PickupStats from "./Dashboard components/PickupStats";
import PaymentMeter from './Dashboard components/PaymentMeter'
import HamburgerMenu from "./HamburgerMenu";
import History from "./Dashboard components/History";
// import FloatingButton from "./FloatingRoundButton";
export default function Dashboard() {
  return (
    <>
    <HamburgerMenu />
      <Greetings name={"Elo"} />
      <DashboardCard />
      <PaymentMeter />
      <PickupStats />
      <Barchart />
      <History />
   
    </>
  );
}
