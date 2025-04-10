// import { FaCheckCircle } from "react-icons/fa";

// export default function BusinessCard(){
//     return(
//         <>
//            <div className="sideCard">
//       <p className="subCardHeader">Business</p>
//       <div className="cardHeader">
//         <h2>₦22,500/month</h2>
//         <p>Free plan for all users</p>
//       </div>
//       <ul className="custom-check-list">
//         <li className="card-item"><FaCheckCircle className="card-icon"/>Business Profile Creation</li>
//         <li  className="card-item"><FaCheckCircle className="card-icon"/>Dedicated Account Manager</li>
//         <li  className="card-item"><FaCheckCircle className="card-icon"/>Bulk Pickup Scheduling</li>
//         <li  className="card-item"><FaCheckCircle className="card-icon"/>Waste Volume Analytics</li>
//         <li className="card-item"><FaCheckCircle className="card-icon"/>CSR Visibility Boost</li>
//         <li  className="card-item"><FaCheckCircle className="card-icon"/>Custom Detty Token Incentives</li>
//       </ul>
//       <button className="cardButton">Get Started</button>
//     </div>
        
//         </>
//     )
// }


import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

export default function BusinessCard() {
  return (
    <>
      <motion.div
        className="sideCard"
        whileHover={{
          scale: 1.03,
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)",
        }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <p className="subCardHeader">Business</p>
        <div className="cardHeader">
          <h2>₦22,500/month</h2>
          <p>Free plan for all users</p>
        </div>

        <ul className="custom-check-list">
          <li className="card-item">
            <FaCheckCircle className="card-icon" /> Business Profile Creation
          </li>
          <li className="card-item">
            <FaCheckCircle className="card-icon" /> Dedicated Account Manager
          </li>
          <li className="card-item">
            <FaCheckCircle className="card-icon" /> Bulk Pickup Scheduling
          </li>
          <li className="card-item">
            <FaCheckCircle className="card-icon" /> Waste Volume Analytics
          </li>
          <li className="card-item">
            <FaCheckCircle className="card-icon" /> CSR Visibility Boost
          </li>
          <li className="card-item">
            <FaCheckCircle className="card-icon" /> Custom Detty Token Incentives
          </li>
        </ul>

        <motion.button
          className="cardButton"
          whileHover={{
            y: [0, -5, 0],
            transition: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 0.6,
              ease: "easeInOut",
            },
          }}
        >
          Get Started
        </motion.button>
      </motion.div>
    </>
  );
}
