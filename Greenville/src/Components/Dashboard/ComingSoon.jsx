import { motion } from "framer-motion";
import { clogo } from "../../assets";

export default function ComingSoon() {
  const fadeInSlide = {
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
      className="coming-soon-container"
      variants={fadeInSlide}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="animation-section">
        <motion.img
          src={clogo}
          alt="logo"
          className="rotating-logo"
          animate={{
            rotate: 360,
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 10,
            ease: "linear",
          }}
        />
      </div>

      <motion.div
        className="text-section"
        variants={fadeInSlide}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="coming-soon-text">
          <h1 className="coming-soon-header">
            Coming soon!
            <br />
            Feature Under Development
          </h1>
          <p className="coming-soon-message">
            We're working hard to bring you this feature. Stay tuned!
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
