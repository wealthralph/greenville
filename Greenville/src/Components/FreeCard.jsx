
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

export default function FreeCard() {
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
        <p className="subCardHeader">Basic</p>
        <div className="cardHeader">
          <h2>Free</h2>
          <p>Free plan for all users</p>
        </div>

        <ul className="custom-check-list">
          <li className="card-item">
            <FaCheckCircle className="card-icon" /> Limited Profile Creation
          </li>
          <li className="card-item">
            <FaCheckCircle className="card-icon" /> Pickup Scheduling
          </li>
          <li className="card-item">
            <FaCheckCircle className="card-icon" /> Basic recycling tips
          </li>
          <li className="card-item">
            <FaCheckCircle className="card-icon" /> Limited Detty Token Rewards
          </li>
          <li className="card-item">
            <FaCheckCircle className="card-icon" /> Limited Customer Support
          </li>
          <li className="card-item">
            <FaCheckCircle className="card-icon" /> Community Forum Access
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
