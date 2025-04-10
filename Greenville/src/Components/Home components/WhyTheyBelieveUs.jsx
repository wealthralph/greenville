
import { motion } from "framer-motion";
import globe from "../../assets/icons/globe.png";
import truck from "../../assets/icons/truck.png";
import trash from "../../assets/icons/trash.png";

export default function WhyTheyBelieveUs() {
  const easeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 3.5,
        ease: "easeIn",
        delay: i * 0.3,
      },
    }),
  };

  return (
    <div className="greenvillecontainer">
      <div>
        <motion.h1
          className="greenvilleheader"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 3, ease: "easeIn" }}
        >
          Why they believe us
        </motion.h1>

        <div className="greenvillestat">
          {[globe, truck, trash].map((icon, i) => (
            <motion.div
              className="stat"
              key={i}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={easeInVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.img
                src={icon}
                alt="Stat icon"
                className="icon"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
              <motion.h2
                className="numb"
                whileHover={{
                  y: [0, -10, 0],
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                25,300 Tons
              </motion.h2>
              <motion.p
                className="numb-desc"
                whileHover={{
                  y: [0, -5, 0],
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                {i === 0
                  ? "Collected Yearly"
                  : i === 1
                  ? "Deliveries Made"
                  : "Waste Recycled"}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
