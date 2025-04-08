// import sustainable from "../../assets/images/sustainable.png";

// export default function WhatIsGreenville() {
//   return (
//     <div className="whatIsGreenville">
//       {/* Left Side: Heading, Text, and Button */}
//       <div className="textContent">
//         <h1 className="textContainerHeader">
//           Experience Waste Disposal Services Like Never before
//         </h1>
//         <p className="whatIsGreenvilleDesc">
//           Greenville is an innovative waste management app designed to transform
//           the way Lagos tackles waste disposal. Our mission is to create a
//           cleaner, healthier, and more sustainable Lagos.
//         </p>
//         <button className="learnMore">Learn More</button>
//       </div>

//       {/* Right Side: Image */}
//       <div className="sustainableContainer">
//         <img
//           src={sustainable}
//           alt="sustainable solutions"
//           className="sustainableIcon"
//         />
//       </div>
//     </div>
//   );
// }



// import { motion } from "framer-motion";
// import sustainable from "../../assets/images/sustainable.png";

// export default function WhatIsGreenville() {
//   // Floating animation variant
//   const floatTransition = {
//     y: [0, -10, 0],
//     transition: {
//       duration: 3,
//       repeat: Infinity,
//       ease: "easeInOut",
//     },
//   };

//   return (
//     <div className="whatIsGreenville">
//       {/* Left Side: Heading, Text, and Button */}
//       <div className="textContent">
//         <motion.h1
//           className="textContainerHeader"
//           animate={floatTransition}
//         >
//           Experience Waste Disposal Services Like Never before
//         </motion.h1>

//         <motion.p
//           className="whatIsGreenvilleDesc"
//           animate={floatTransition}
//           transition={{ delay: 0.2, ...floatTransition.transition }}
//         >
//           Greenville is an innovative waste management app designed to transform
//           the way Lagos tackles waste disposal. Our mission is to create a
//           cleaner, healthier, and more sustainable Lagos.
//         </motion.p>

//         <motion.button
//           className="learnMore"
//           animate={floatTransition}
//           transition={{ delay: 0.4, ...floatTransition.transition }}
//         >
//           Learn More
//         </motion.button>
//       </div>

//       {/* Right Side: Image */}
//       <motion.div
//         className="sustainableContainer"
//         animate={floatTransition}
//         transition={{ delay: 0.6, ...floatTransition.transition }}
//       >
//         <img
//           src={sustainable}
//           alt="sustainable solutions"
//           className="sustainableIcon"
//         />
//       </motion.div>
//     </div>
//   );
// }









// import { motion } from "framer-motion";
// import sustainable from "../../assets/images/sustainable.png";

// export default function WhatIsGreenville() {
//   const floatTransition = {
//     y: [0, -10, 0],
//     transition: {
//       duration: 3,
//       repeat: Infinity,
//       ease: "easeInOut",
//     },
//   };

//   return (
//     <div className="whatIsGreenville">
//       {/* Left Side: Heading, Text, and Button */}
//       <div className="textContent">
//         <h1 className="textContainerHeader">
//           Experience Waste Disposal Services Like Never before
//         </h1>
//         <p className="whatIsGreenvilleDesc">
//           Greenville is an innovative waste management app designed to transform
//           the way Lagos tackles waste disposal. Our mission is to create a
//           cleaner, healthier, and more sustainable Lagos.
//         </p>
//         <button className="learnMore">Learn More</button>
//       </div>

//       {/* Right Side: Image */}
//       <div className="sustainableContainer">
//         <motion.img
//           src={sustainable}
//           alt="sustainable solutions"
//           className="sustainableIcon"
//           animate={floatTransition}
//         />
//       </div>
//     </div>
//   );
// }



import { motion } from "framer-motion";
import sustainable from "../../assets/images/sustainable.png";

export default function WhatIsGreenville() {
  const floatTransition = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 4, // 3–5 seconds range
        ease: "easeIn",
      },
    },
  };

  return (
    <motion.div
      className="whatIsGreenville"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Left Side: Heading, Text, and Button */}
      <div className="textContent">
        <h1 className="textContainerHeader">
          Experience Waste Disposal Services Like Never before
        </h1>
        <p className="whatIsGreenvilleDesc">
          Greenville is an innovative waste management app designed to transform
          the way Lagos tackles waste disposal. Our mission is to create a
          cleaner, healthier, and more sustainable Lagos.
        </p>
        <button className="learnMore">Learn More</button>
      </div>

      {/* Right Side: Image */}
      <div className="sustainableContainer">
        <motion.img
          src={sustainable}
          alt="sustainable solutions"
          className="sustainableIcon"
          animate={floatTransition}
        />
      </div>
    </motion.div>
  );
}

