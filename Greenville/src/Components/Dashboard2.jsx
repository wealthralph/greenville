import Greetings from "./Dashboard components/Greetings";
import DashboardCard from "./Dashboard components/DashboardCard";
import PaymentMeter from "./Dashboard components/PaymentMeter";
import PickupStats from "./Dashboard components/PickupStats";
import UserStat from "./Dashboard components/UserStat";
import Barchart from "./Dashboard components/Barchart";
import History from "./Dashboard components/History";
import Sidebar from "./Dashboard components/Sidebar";
import Search from "./Dashboard components/Search";
import UserProfile from "./Dashboard components/UserProfile";

// import FloatingButton from "./FloatingRoundButton";
export default function Dashboard() {
  return (
    <>
      {/* <HamburgerMenu /> */}
      {/* <Greetings name={"Elo"} /> */}
      <Search />
      {/* <DashboardCard /> */}
      <Sidebar />
      <UserStat />
      <UserProfile />
      <PaymentMeter />
      <PickupStats />
      <Barchart />
      <History />
    </>
  );
}
