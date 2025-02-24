<<<<<<< HEAD
import Greetings from './Dashboard components/Greetings'
import DashboardCard from "./Dashboard components/DashboardCard"
import Barchart from "./Dashboard components/Barchart"
import PickupStats from "./Dashboard components/PickupStats";
import PaymentMeter from './Dashboard components/PaymentMeter'
=======
import Greetings from "./Greetings";
import DashboardCard from "./DashboardCard";
import Barchart from "./Barchart";
import PickupStats from "./PickupStats";
import PaymentMeter from "./PaymentMeter";
>>>>>>> c70b874d0d32170c26e0a93e100aeb383b62112f
import HamburgerMenu from "./HamburgerMenu";
import History from "./Dashboard components/History";
// import FloatingButton from "./FloatingRoundButton";
export default function Dashboard() {
  return (
    <>
<<<<<<< HEAD
    <HamburgerMenu />
=======
      {/* <HamburgerMenu /> */}
>>>>>>> c70b874d0d32170c26e0a93e100aeb383b62112f
      <Greetings name={"Elo"} />
      <DashboardCard />
      <PaymentMeter />
      <PickupStats />
      <Barchart />
      <History />
    </>
  );
}
