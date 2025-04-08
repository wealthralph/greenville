// import { Link } from "react-router-dom";

// export default function HeroSection() {
//   return (
//     <div className="heroContainer">
//         {/* <div className="backdrop"> */}
//       <div className="heroItems">
//         <h1 className="heroText ">CONNECTING LAGOS TO A CLEANER FUTURE</h1>
//         <p className="heroPara">
//           A cleaner Lagos, a cleaner you. let’s manage waste together. For a
//           cleaner Lagos and brighter future.
//         </p>
//         <Link to="/Sign Up">
//           <button className="heroBtn ">Get started</button>
//         </Link>
//       </div>
//       {/* </div> */}
//     </div>
//   );
// }




// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

// export default function HeroSection() {
//   // Background animation (slide in)
//   const backgroundAnimation = {
//     hidden: { x: "-100%" },
//     visible: {
//       x: "0%",
//       transition: {
//         duration: 2,
//         ease: "easeInOut",
//       },
//     },
//   };

//   // Typing animation for header text (with delay after background)
//   const textAnimation = {
//     hidden: { opacity: 0, width: 0 },
//     visible: {
//       opacity: 1,
//       width: "100%",
//       transition: {
//         duration: 4,
//         delay: 2, // 2-second delay after background animation begins
//         ease: "easeInOut",
//       },
//     },
//   };

//   // Typing animation for paragraph text (starts after the header text)
//   const paragraphAnimation = {
//     hidden: { opacity: 0, width: 0 },
//     visible: {
//       opacity: 1,
//       width: "100%",
//       transition: {
//         duration: 10,
//         delay: 2, // Paragraph starts after the header finishes typing
//         ease: "easeInOut",
//       },
//     },
//   };

//   return (
//     <motion.div
//       className="heroContainer"
//       variants={backgroundAnimation}
//       initial="hidden"
//       animate="visible"
//     >
//       <div className="heroItems">
//         <motion.h1
//           className="heroText"
//           variants={textAnimation}
//           initial="hidden"
//           animate="visible"
//         >
//           CONNECTING LAGOS TO A CLEANER FUTURE
//         </motion.h1>
//         <motion.p
//           className="heroPara"
//           variants={paragraphAnimation}
//           initial="hidden"
//           animate="visible"
//         >
//           A cleaner Lagos, a cleaner you. Let’s manage waste together. For a
//           cleaner Lagos and a brighter future.
//         </motion.p>
//         <Link to="/Sign Up">
//           <button className="heroBtn">Get Started</button>
//         </Link>
//       </div>
//     </motion.div>
//   );
// }





// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

// export default function HeroSection() {
//   // Background animation (slide in)
//   const backgroundAnimation = {
//     hidden: { x: "-100%" },
//     visible: {
//       x: "0%",
//       transition: {
//         duration: 2,
//         ease: "easeInOut",
//       },
//     },
//   };

//   // Typing animation for header text (with delay after background)
//   const textAnimation = {
//     hidden: { opacity: 0, width: 0 },
//     visible: {
//       opacity: 1,
//       width: "100%",
//       transition: {
//         duration: 4,
//         delay: 2, // 2-second delay after background animation begins
//         ease: "easeInOut",
//       },
//     },
//   };

//   // Typing animation for paragraph text (starts after the header text)
//   const paragraphAnimation = {
//     hidden: { opacity: 0, width: 0 },
//     visible: {
//       opacity: 1,
//       width: "100%",
//       transition: {
//         duration: 10,
//         delay: 2, // Paragraph starts after the header finishes typing
//         ease: "easeInOut",
//       },
//     },
//   };

//   return (
//     <motion.div
//       className="heroContainer"
//       variants={backgroundAnimation}
//       initial="hidden"
//       animate="visible"
//     >
//       {/* Black backdrop behind the content */}
//       <div className="blackBackdrop"></div>

//       <div className="heroItems">
//         <motion.h1
//           className="heroText"
//           variants={textAnimation}
//           initial="hidden"
//           animate="visible"
//         >
//           CONNECTING LAGOS TO A CLEANER FUTURE
//         </motion.h1>
//         <motion.p
//           className="heroPara"
//           variants={paragraphAnimation}
//           initial="hidden"
//           animate="visible"
//         >
//           A cleaner Lagos, a cleaner you. Let’s manage waste together. For a
//           cleaner Lagos and a brighter future.
//         </motion.p>
//         <Link to="/Sign Up">
//           <button className="heroBtn">Get Started</button>
//         </Link>
//       </div>
//     </motion.div>
//   );
// }



import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function HeroSection() {
  // Background animation (slide in)
  const backgroundAnimation = {
    hidden: { x: "-100%" },
    visible: {
      x: "0%",
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  // Typing animation for header text (with delay after background)
  const textAnimation = {
    hidden: { opacity: 0, width: 0 },
    visible: {
      opacity: 1,
      width: "100%",
      transition: {
        duration: 4,
        delay: 2, // 2-second delay after background animation begins
        ease: "easeInOut",
      },
    },
  };

  // Typing animation for paragraph text (starts after the header text)
  const paragraphAnimation = {
    hidden: { opacity: 0, width: 0 },
    visible: {
      opacity: 1,
      width: "100%",
      transition: {
        duration: 10,
        delay: 2, // Paragraph starts after the header finishes typing
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="heroContainer"
      variants={backgroundAnimation}
      initial="hidden"
      animate="visible"
    >
      {/* Persistent Black Backdrop */}
      <div className="blackBackdrop"></div>

      <div className="heroItems">
        <motion.h1
          className="heroText"
          variants={textAnimation}
          initial="hidden"
          animate="visible"
        >
          CONNECTING LAGOS TO A CLEANER FUTURE
        </motion.h1>
        <motion.p
          className="heroPara"
          variants={paragraphAnimation}
          initial="hidden"
          animate="visible"
        >
          A cleaner Lagos, a cleaner you. Let’s manage waste together. For a
          cleaner Lagos and a brighter future.
        </motion.p>
        <Link to="/Sign Up">
          <button className="heroBtn">Get Started</button>
        </Link>
      </div>
    </motion.div>
  );
}

