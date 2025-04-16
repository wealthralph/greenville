
// import { motion } from "framer-motion";
// import globe from "../../assets/icons/globe.png";
// import truck from "../../assets/icons/truck.png";
// import trash from "../../assets/icons/trash.png";
// import { useEffect, useState } from "react";
// import { useMotionValue, useAnimationFrame } from "framer-motion";



// // Reusable Animated Counter Component
// function AnimatedCounter({ value, suffix = "" }) {
//   const count = useMotionValue(0);
//   const [display, setDisplay] = useState(0);

//   useAnimationFrame(() => {
//     const current = count.get();
//     if (current < value) {
//       count.set(Math.min(current + value / 150, value)); // Adjust speed here
//     }
//     setDisplay(Math.floor(count.get()));
//   });

//   useEffect(() => {
//     count.set(0);
//   }, [value]);

//   return (
//     <motion.h2
//       className="numb"
//       whileHover={{ y: [0, -10, 0] }}
//       transition={{ duration: 0.6, ease: "easeInOut" }}
//     >
//       {display.toLocaleString()} {suffix}
//     </motion.h2>
//   );
// }

// // Main Component
// export default function GreenvilleStats() {
//   const easeInVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { opacity: 1, y: 0 },
//   };

//   const icons = [globe, truck, trash];
//   const values = [25300, 4800, 12900];
//   const labels = ["Collected Yearly", "Deliveries Made", "Waste Recycled"];

//   return (
//     <div className="greenvillecontainer">
//       <motion.h1
//         className="greenvilleheader"
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 3, ease: "easeIn" }}
//       >
//         Why they believe us
//       </motion.h1>

//       <div className="greenvillestat">
//         {icons.map((icon, i) => (
//           <motion.div
//             className="stat"
//             key={i}
//             initial="hidden"
//             animate="visible"
//             variants={easeInVariants}
//             whileHover={{ scale: 1.05 }}
//             transition={{ type: "spring", stiffness: 300 }}
//           >
//             <motion.img
//               src={icon}
//               alt="Stat icon"
//               className="icon"
//               whileHover={{ rotate: 360 }}
//               transition={{ duration: 0.6, ease: "easeInOut" }}
//             />
//             <AnimatedCounter value={values[i]} suffix="Tons" />
//             <motion.p
//               className="numb-desc"
//               whileHover={{ y: [0, -5, 0] }}
//               transition={{ duration: 0.6, ease: "easeInOut" }}
//             >
//               {labels[i]}
//             </motion.p>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }



import { motion } from "framer-motion";
import globe from "../../assets/icons/globe.png";
import truck from "../../assets/icons/truck.png";
import trash from "../../assets/icons/trash.png";
import { useEffect, useState } from "react";
import { useMotionValue, useAnimationFrame } from "framer-motion";

// Reusable Animated Counter Component
function AnimatedCounter({ start, value, suffix = "" }) {
  const count = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useAnimationFrame(() => {
    const current = count.get();
    if (start && current < value) {
      count.set(Math.min(current + value / 100, value)); // Slower speed
    }
    setDisplay(Math.floor(count.get()));
  });

  useEffect(() => {
    if (start) count.set(0);
  }, [start, value]);

  return (
    <motion.h2
      className="numb"
      whileHover={{ y: [0, -10, 0] }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {display.toLocaleString()} {suffix}
    </motion.h2>
  );
}

export default function GreenvilleStats() {
  const easeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const icons = [globe, truck, trash];
  const values = [25300, 4800, 12900];
  const labels = ["Collected Yearly", "Deliveries Made", "Waste Recycled"];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="greenvillecontainer">
      <motion.h1
        className="greenvilleheader"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 3, ease: "easeIn" }}
      >
        Why they believe us
      </motion.h1>

      <div className="greenvillestat">
        {icons.map((icon, i) => (
          <motion.div
            className="stat"
            key={i}
            initial="hidden"
            animate="visible"
            variants={easeInVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            onHoverStart={() => setHoveredIndex(i)}
            onHoverEnd={() => setHoveredIndex(null)}
          >
            <motion.img
              src={icon}
              alt="Stat icon"
              className="icon"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
            <AnimatedCounter
              value={values[i]}
              suffix="Tons"
              start={hoveredIndex === i}
            />
            <motion.p
              className="numb-desc"
              whileHover={{ y: [0, -5, 0] }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              {labels[i]}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
