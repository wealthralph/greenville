// import { FaCheckCircle } from "react-icons/fa";

// export default function PremiumCard(){
//     return(
//         <>
//            <div className="premiumCard">
//       <p className="subCardHeader">Premium </p>
//       <div className="cardHeader">
//         <h2>₦7,500/month</h2>
//         <p>Free plan for all users</p>
//       </div>
//       <ul className="custom-check-list">
//         <li className="card-item"><FaCheckCircle className="premium-icon"/>Customized waste pickup schedule</li>
//         <li className="card-item"><FaCheckCircle className="premium-icon"/>Recycling Rewards Trackingr</li>
//         <li className="card-item"><FaCheckCircle className="premium-icon"/>Analytics Dashboard</li>
//         <li className="card-item"><FaCheckCircle className="premium-icon"/>Increased Detty Token Multipliers</li>
//         <li className="card-item"><FaCheckCircle className="premium-icon"/>Exclusive Eco-Discounts</li>
//         <li className="card-item"><FaCheckCircle className="premium-icon"/>riority Customer Support</li>
//       </ul>
//       <button className="premiumBtn">Get Started</button>
//     </div>
        
//         </>
//     )
// }


import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

export default function PremiumCard() {
  return (
    <>
      <motion.div
        className="premiumCard"
        whileHover={{
          scale: 1.03,
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)",
        }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <p className="subCardHeader">Premium</p>
        <div className="cardHeader">
          <h2>₦7,500/month</h2>
          <p>Free plan for all users</p>
        </div>

        <ul className="custom-check-list">
          <li className="card-item">
            <FaCheckCircle className="premium-icon" />
            Customized waste pickup schedule
          </li>
          <li className="card-item">
            <FaCheckCircle className="premium-icon" />
            Recycling Rewards Tracking
          </li>
          <li className="card-item">
            <FaCheckCircle className="premium-icon" />
            Analytics Dashboard
          </li>
          <li className="card-item">
            <FaCheckCircle className="premium-icon" />
            Increased Detty Token Multipliers
          </li>
          <li className="card-item">
            <FaCheckCircle className="premium-icon" />
            Exclusive Eco-Discounts
          </li>
          <li className="card-item">
            <FaCheckCircle className="premium-icon" />
            Priority Customer Support
          </li>
        </ul>

        <motion.button
          className="premiumBtn"
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
