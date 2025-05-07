// import { useState } from "react";


// export default function DashboardCard({ fullName }) {
//   const [tokens, setTokens] = useState(200);
//   () => setTokens(tokens + 10);
//   return (
//     <div className="card" >
//       <h1 className="dashboard_title">Eco Tokens</h1>
//       <div>
//         <h3 className="dashboard_balance">Balance</h3>
//         <h2 className="ecotokens">{tokens}</h2>
//       </div>
//       <p className="pee">123465860474394</p>
//       <h2 className="fullname">{fullName}</h2>
//     </div>
//   );
// }
import { useState } from "react";

export default function DashboardCard({ fullName }) {
  const [tokens, setTokens] = useState(200);

  const increaseTokens = () => {
    setTokens((prevTokens) => prevTokens + 10);
  };

  return (
    <div className="card">
      <h1 className="dashboard_title">Eco Tokens</h1>
      <div>
        <h3 className="dashboard_balance">Balance</h3>
        <h2 className="ecotokens">{tokens}</h2>
      </div>
      <p className="pee">123465860474394</p>
      <h2 className="fullname">{fullName}</h2>
      {/* <button onClick={increaseTokens} className="increaseTokens">
        Add Tokens
      </button> */}
    </div>
  );
}

