

// export default function Areas(){
//     return(
//         <>
//          <div className="areaContainer">
//         <h1 className="areaHeader">Areas we cover</h1>
//         <div className="areas" >
//             <div className="firstRow">
//             <div className="ikeja">
//                 <div className="backdrop">
//                 <h3>Ikeja</h3>
//             </div>
//             </div>
//             <div className="vi">
//                 <div className="backdrop">
//                 <h3>V.I</h3>
//             </div>
//             </div>
//             </div>
//             <div className="secondRow">
//             <div className="jakande">
//                 <div className="backdrop">
//                 <h3>Jakande</h3>
//             </div>
//             </div>
//             <div className="ikate">
//                 <div className="backdrop">
//                 <h3>Ikate</h3>
//             </div>
//             </div>
//             </div>
//             <div className="thirdRow">
//             <div className="chevron">
//                 <div className="backdrop">
//                 <h3>Chevron</h3>
//                 </div>
//             </div>
//             <div className="ikoyi">
//                 <div className="backdrop">
//                 <h3>Ikoyi</h3>
//                 </div>
//             </div>
//             </div>
//             </div>
//         </div>
//         </>
//     )
// }


// import { motion } from "framer-motion";

// export default function Areas() {
//   const slideIn = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 3,
//         ease: "easeInOut",
//       },
//     },
//   };

//   const hoverEffect = {
//     whileHover: {
//       scale: 1.05,
//       transition: { duration: 0.3, ease: "easeOut" },
//     },
//   };

//   return (
//     <motion.div
//       className="areaContainer"
//       variants={slideIn}
//       initial="hidden"
//       animate="visible"
//     >
//       <h1 className="areaHeader">Areas we cover</h1>
//       <div className="areas">
//         <div className="firstRow">
//           <motion.div className="ikeja" {...hoverEffect}>
//             <div className="backdrop">
//               <h3>Ikeja</h3>
//             </div>
//           </motion.div>
//           <motion.div className="vi" {...hoverEffect}>
//             <div className="backdrop">
//               <h3>V.I</h3>
//             </div>
//           </motion.div>
//         </div>

//         <div className="secondRow">
//           <motion.div className="jakande" {...hoverEffect}>
//             <div className="backdrop">
//               <h3>Jakande</h3>
//             </div>
//           </motion.div>
//           <motion.div className="ikate" {...hoverEffect}>
//             <div className="backdrop">
//               <h3>Ikate</h3>
//             </div>
//           </motion.div>
//         </div>

//         <div className="thirdRow">
//           <motion.div className="chevron" {...hoverEffect}>
//             <div className="backdrop">
//               <h3>Chevron</h3>
//             </div>
//           </motion.div>
//           <motion.div className="ikoyi" {...hoverEffect}>
//             <div className="backdrop">
//               <h3>Ikoyi</h3>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </motion.div>
//   );
// }



import { motion } from "framer-motion";

export default function Areas() {
  const slideIn = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 3,
        ease: "easeInOut",
      },
    },
  };

  const hoverEffect = {
    whileHover: {
      scale: 1.05,
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",  // Apply box-shadow on hover
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="areaContainer"
      variants={slideIn}
      initial="hidden"
      animate="visible"
    >
      <h1 className="areaHeader">Areas we cover</h1>
      <div className="areas">
        <div className="firstRow">
          <motion.div className="ikeja" {...hoverEffect}>
            <div className="backdrop">
              <h3>Ikeja</h3>
            </div>
          </motion.div>
          <motion.div className="vi" {...hoverEffect}>
            <div className="backdrop">
              <h3>V.I</h3>
            </div>
          </motion.div>
        </div>

        <div className="secondRow">
          <motion.div className="jakande" {...hoverEffect}>
            <div className="backdrop">
              <h3>Jakande</h3>
            </div>
          </motion.div>
          <motion.div className="ikate" {...hoverEffect}>
            <div className="backdrop">
              <h3>Ikate</h3>
            </div>
          </motion.div>
        </div>

        <div className="thirdRow">
          <motion.div className="chevron" {...hoverEffect}>
            <div className="backdrop">
              <h3>Chevron</h3>
            </div>
          </motion.div>
          <motion.div className="ikoyi" {...hoverEffect}>
            <div className="backdrop">
              <h3>Ikoyi</h3>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

