// import FreeCard from "../FreeCard";
// import PremiumCard from "../PremiumCard";
// import BusinessCard from "../BusinessCard";

// export default function Cards(){
//     return(
//         <div className="myCards">
//             <h1 className="cardHeaderMain">Affordable Solutions to Fit Your Needs</h1>
//             <div className="cardContainer">
//         <FreeCard />
//         <PremiumCard />
//         <BusinessCard />
//         </div>
//         </div>
//     )
// }


// import { motion } from "framer-motion";
// import FreeCard from "../FreeCard";
// import PremiumCard from "../PremiumCard";
// import BusinessCard from "../BusinessCard";

// export default function Cards() {
//   const fadeSlide = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 1.5,
//         ease: "easeInOut",
//       },
//     },
//   };

//   return (
//     <motion.div
//       className="myCards"
//       variants={fadeSlide}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.3 }}
//     >
//       <h1 className="cardHeaderMain">Affordable Solutions to Fit Your Needs</h1>

//       <motion.div
//         className="cardContainer"
//         variants={fadeSlide}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.3 }}
//       >
//         <FreeCard />
//         <PremiumCard />
//         <BusinessCard />
//       </motion.div>
//     </motion.div>
//   );
// }


import { motion } from "framer-motion";
import FreeCard from "../FreeCard";
import PremiumCard from "../PremiumCard";
import BusinessCard from "../BusinessCard";

export default function Cards() {
  const fadeSlide = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="myCards"
      variants={fadeSlide}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <h1 className="cardHeaderMain">Affordable Solutions to Fit Your Needs</h1>

      <motion.div
        className="cardContainer"
        variants={fadeSlide}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        style={{ display: 'flex', justifyContent: 'space-between' }} // For alignment
      >
        <motion.div
          variants={fadeSlide}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.3 }} // First card with delay
        >
          <FreeCard />
        </motion.div>

        <motion.div
          variants={fadeSlide}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.6 }} // Second card with delay
        >
          <PremiumCard />
        </motion.div>

        <motion.div
          variants={fadeSlide}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.9 }} // Last card with delay
        >
          <BusinessCard />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

