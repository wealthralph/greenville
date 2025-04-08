export default function FAQ() {
  return (
    <div className="faq-container">
      <h2 className="faq-heading">Got Questions? We’ve Got Answers!</h2>
      <div className="faq-list">
        <details className="faq-item">
          <summary className="faq-question">
            How do I schedule a waste pickup?
          </summary>
          <p className="faq-answer">
            Schedulinga waste pickup on our platform is as easy as 1-2-3:Sign
            up, select your waste type, and schedule a pickup. It's that simple!
            After signing up, you'll be able to request waste pickups for your
            home or business, or even join a community cleanup initiative. Plus,
            if you've already arranged offline pickups, you can easily manage
            and track them on our platform for a more seamless experience.
          </p>
        </details>
        <details className="faq-item">
          <summary className="faq-question">
            How long does it take to schedule a waste pickup?
          </summary>
          <p className="faq-answer">
            Waste pickup scheduling typically takes a few minutes through the
            platform. Depending on your location and service provider,
            collection can be arranged for the same day or within 24 and 48
            hours.
          </p>
        </details>
        <details className="faq-item">
          <summary className="faq-question">
            How long does it cost to request a waste pickup?
          </summary>
          <p className="faq-answer">
            The cost of requesting a waste pickup depends on factors such as
            location, waste type, and service provider. Pricing details are
            available on the platform, with options for one-time pickups or
            subscription-based services.
          </p>
        </details>

        <details className="faq-item">
          <summary className="faq-question">
            What is a "Community Tribe" in waste management?
          </summary>
          <p className="faq-answer">
            A Community Tribe in waste management is a group of individuals or
            organizations collaborating to promote waste reduction, recycling,
            and sustainable disposal practices for a cleaner environment.
          </p>
        </details>
      </div>
    </div>
  );
}
