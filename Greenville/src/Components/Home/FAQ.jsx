import { motion } from "framer-motion";

export default function FAQ() {
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
      className="faq-container"
      variants={fadeInSlide}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className="faq-heading">Got Questions? We’ve Got Answers!</h2>
      <div className="faq-list">
        <motion.details
          className="faq-item"
          variants={fadeInSlide}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <summary className="faq-question">
            How do I schedule a waste pickup?
          </summary>
          <p className="faq-answer">
            Scheduling a waste pickup on our platform is as easy as 1-2-3: Sign
            up, select your waste type, and schedule a pickup. It's that simple!
            After signing up, you'll be able to request waste pickups for your
            home or business, or even join a community cleanup initiative. Plus,
            if you've already arranged offline pickups, you can easily manage
            and track them on our platform for a more seamless experience.
          </p>
        </motion.details>

        <motion.details
          className="faq-item"
          variants={fadeInSlide}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <summary className="faq-question">
            How long does it take to schedule a waste pickup?
          </summary>
          <p className="faq-answer">
            Waste pickup scheduling typically takes a few minutes through the
            platform. Depending on your location and service provider,
            collection can be arranged for the same day or within 24 to 48
            hours.
          </p>
        </motion.details>

        <motion.details
          className="faq-item"
          variants={fadeInSlide}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <summary className="faq-question">
            How much does it cost to request a waste pickup?
          </summary>
          <p className="faq-answer">
            The cost of requesting a waste pickup depends on factors such as
            location, waste type, and service provider. Pricing details are
            available on the platform, with options for one-time pickups or
            subscription-based services.
          </p>
        </motion.details>

        <motion.details
          className="faq-item"
          variants={fadeInSlide}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <summary className="faq-question">
            What is a "Community Tribe" in waste management?
          </summary>
          <p className="faq-answer">
            A Community Tribe in waste management is a group of individuals or
            organizations collaborating to promote waste reduction, recycling,
            and sustainable disposal practices for a cleaner environment.
          </p>
        </motion.details>
      </div>
    </motion.div>
  );
}

