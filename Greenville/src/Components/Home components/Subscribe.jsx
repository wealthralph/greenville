import { motion } from "framer-motion";
import { clogo } from "../../assets";

export default function Subscribe() {
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
      className="subscribeCon"
      variants={fadeInSlide}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="phoneMock">
        <motion.img
          src={clogo}
          alt="logo"
          className="myMock"
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
        className="otherHalf"
        variants={fadeInSlide}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="anticipationText">
          <h1 className="subSecHeader">
            Coming soon <br />
            Greenville Application
          </h1>
          <p className="subSecParagraph">
            Imagine being able to request, track, and manage your waste pickups from your mobile phone... soon you'll be able to.
          </p>
        </div>

        <div className="anticipateForm">
          <form>
            <input
              type="email"
              placeholder="Enter Email"
              className="subInput"
            />
            <button className="subBtn">Join waiting list</button>
          </form>
        </div>
      </motion.div>
    </motion.div>
  );
}

