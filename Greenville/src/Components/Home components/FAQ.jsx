export default function FAQ() {
  return (
    <div className="faq-container">
      <h2 className="faq-heading">Frequently Asked Questions</h2>
      <div className="faq-list">
        <div className="faq-item">
          <button className="faq-question">
            How do I co-own property?
            <span className="icon"></span>
          </button>
          <p className="faq-answer">
            By using EcoWaste, you can contribute to a cleaner environment,
            reduce waste, and promote sustainable living practices.
          </p>
        </div>

        <div className="faq-item">
          <button className="faq-question">
            How long does it take to buy a property?
            <span className="icon"></span>
          </button>
          <p className="faq-answer">
            Properties onboarded to Reezuto and subsequently verified can be
            bought or sold within minutes. Reezuto provides the modern investor
            with a faster way to buy or sell real estate assets and securities.
          </p>
        </div>

        <div className="faq-item">
          <button className="faq-question">
            How much do I need to become a "Co-Owner"?
            <span className="icon"></span>
          </button>
          <p className="faq-answer">
            For as little as NGN5000, you too can earn equity in choice
            properties on Reezuto.
          </p>
        </div>

        <div className="faq-item">
          <button className="faq-question">
            What is a "Tribe"?
            <span className="icon"></span>
          </button>
          <p className="faq-answer">
            A "Tribe" is a group of friends, family members, or professional
            colleagues onboard to Reezuto with the intent to jointly explore
            opportunities and invest in real estate assets and securities.
          </p>
        </div>
      </div>
    </div>
  );
}
