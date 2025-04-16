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
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)", // Apply box-shadow on hover
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
      <h1 className="areaHeader">We’re in Your Neighborhood</h1>
      <div className="areas">
        <div className="firstRow">
          <motion.div className="ikeja" {...hoverEffect}>
            <h3>Ikeja</h3>
          </motion.div>
          <motion.div className="vi" {...hoverEffect}>
            <h3>V.I</h3>
          </motion.div>
        </div>

        <div className="secondRow">
          <motion.div className="jakande" {...hoverEffect}>
            <h3>Jakande</h3>
          </motion.div>
          <motion.div className="ikate" {...hoverEffect}>
            <h3>Ikate</h3>
          </motion.div>
        </div>

        <div className="thirdRow">
          <motion.div className="chevron" {...hoverEffect}>
            <h3>Chevron</h3>
          </motion.div>
          <motion.div className="ikoyi" {...hoverEffect}>
            <h3>Ikoyi</h3>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
