
import PaymentMeter from "./Dashboard/PaymentMeter";
import PickupStats from "./Dashboard/PickupStats";
import UserStat from "./Dashboard/UserStat";
import Barchart from "./Dashboard/Barchart";
import History from "./Dashboard/History";
import Sidebar from "./Dashboard/Sidebar";
import Search from "./Dashboard/Search";
import UserProfile from "./Dashboard/UserProfile";
import TopAreas from "./Dashboard/TopAreas";



// import FloatingButton from "./FloatingRoundButton";
export default function Dashboard() {
  return (
    <div className="dashboard-layout">
      {/* <header className="H-greenville">
        <h2 className="W-greenville">WELCOME TO GREENVILLE</h2>
      </header> */}
      <Sidebar />

      <div className="dashboard-content">
        <div className="dashboard-header">
          <Search />
          <UserProfile />
        </div>

        <UserStat />

        <div className="dashboard-widgets">
          <Barchart />
          <TopAreas />

          <div className="lil-widgets">
            <History />
            <PaymentMeter />

            <PickupStats />
          </div>
        </div>
      </div>
    </div>
  );
}