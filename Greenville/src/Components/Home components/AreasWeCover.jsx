import { motion } from "framer-motion";

export default function Areas() {
  const slideIn = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  const hoverEffect = {
    whileHover: {
      scale: 1.05,
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const locations = [
    { name: "Ikeja", className: "ikeja" },
    { name: "V.I", className: "vi" },
    { name: "Jakande", className: "jakande" },
    { name: "Ikate", className: "ikate" },
    { name: "Chevron", className: "chevron" },
    { name: "Ikoyi", className: "ikoyi" },
  ];

  return (
    <div className="areaContainer">
      <motion.h1
        className="areaHeader"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={slideIn}
      >
        We’re in Your Neighborhood
      </motion.h1>

      <div className="areas">
        {[0, 2, 4].map((startIdx) => (
          <div className={`row row-${startIdx / 2 + 1}`} key={startIdx}>
            {locations.slice(startIdx, startIdx + 2).map((location, i) => (
              <motion.div
                key={location.name}
                className={location.className}
                variants={slideIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                {...hoverEffect}
              >
                <h3>{location.name}</h3>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
