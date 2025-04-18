
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import globe from "../../assets/icons/globe.png";
import truck from "../../assets/icons/truck.png";
import trash from "../../assets/icons/trash.png";
import { useEffect, useState } from "react";

// Reusable Animated Counter Component
function AnimatedCounter({ start, value, suffix = "" }) {
  const count = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useAnimationFrame(() => {
    const current = count.get();
    if (start && current < value) {
      count.set(Math.min(current + value / 100, value)); // Smooth step
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
  const icons = [globe, truck, trash];
  const values = [25300, 4800, 12900];
  const labels = ["Collected Yearly", "Deliveries Made", "Waste Recycled"];

  // Track visibility per stat card
  const [visibleStats, setVisibleStats] = useState(
    new Array(icons.length).fill(false)
  );

  const handleInView = (index) => {
    setVisibleStats((prev) => {
      const updated = [...prev];
      updated[index] = true;
      return updated;
    });
  };

  return (
    <div className="greenvillecontainer">
      <motion.h1
        className="greenvilleheader"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Why they believe us
      </motion.h1>

      <div className="greenvillestat">
        {icons.map((icon, i) => (
          <motion.div
            className="stat"
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1, ease: "easeOut" }}
            onViewportEnter={() => handleInView(i)}
            whileHover={{ scale: 1.05 }}
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
              start={visibleStats[i]}
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

