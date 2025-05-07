
import { motion } from "framer-motion";
import { ctrash } from "../../assets";
import { ctruck } from "../../assets";
import { cbuilding } from "../../assets";
import { useState } from "react";

export default function OurService() {
  const [Services] = useState([
    {
      id: 0,
      icon: ctrash,
      title: "Dumpster Service",
      serviceInfo:
        "Our Dumpster Service provides convenient and reliable waste disposal solutions for residential, commercial, and industrial projects, with flexible sizes to suit your needs.",
      button: "Learn more  >",
    },
    {
      id: 1,
      icon: ctruck,
      title: "Truck Service",
      serviceInfo:
        "Our Truck Service is designed to handle large-scale waste collection and disposal efficiently.",
      button: "Learn more  >",
    },
    {
      id: 2,
      icon: cbuilding,
      title: "Industrial Service",
      serviceInfo:
        "Our Industrial Service focuses on managing waste generated from factories, construction sites, and other large-scale industrial operations.",
      button: "Learn more  >",
    },
  ]);

  return (
    <div className="main" style={{ background: "white" }}>
      <div className="headerText">
        <h1 className="serviceHeader">What We Offer</h1>
        <span className="service-subHeader">
          Serving Lagos with innovation, sustainability, and care.
        </span>
      </div>

      <ul className="servicecard">
        {Services.map((service, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 1.5,
              ease: "easeOut",
              delay: index * 0.2,
            }}
            viewport={{ once: true, amount: 0.3 }} // triggers when 30% of card is visible
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="serviceBox">
              <motion.img
                className="service-icon"
                src={service.icon}
                alt={service.title}
                whileHover={{
                  rotate: 360,
                }}
                transition={{
                  duration: 1,
                  ease: "linear",
                }}
              />
              <h2 className="serviceTitle">{service.title}</h2>
              <span className="serviceinfo">{service.serviceInfo}</span>
              <button className="button">{service.button}</button>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}



