export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer_links">
        <section className="footer_section">
          <h3 className="footer_heading">Useful Links</h3>
          <ul className="footer_list">
            <li>
              <a href="#" className="footer_link">
                About
              </a>
            </li>
            <li>
              <a href="#" className="footer_link">
                Partners
              </a>
            </li>
            <li>
              <a href="#" className="footer_link">
                Contact
              </a>
            </li>
          </ul>
        </section>

        <section className="footer_section">
          <h3 className="footer_heading">Help?</h3>
          <ul className="footer_list">
            <li>
              <a href="#" className="footer_link">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="footer_link">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="footer_link">
                Privacy
              </a>
            </li>
            <li>
              <a href="#" className="footer_link">
                Policy
              </a>
            </li>
          </ul>
        </section>

        <section className="footer_section">
          <h3 className="footer_heading">Contact</h3>
          <p className="footer_paragraph">
            No. 3 Segun Festus Oluwa street, off Anthony Enahoro, Ikoyi, Lagos
          </p>
          <p className="footer_paragraph">
            <a href="mailto:contact@greenville.com" className="footer_link">
              contact@greenville.com
            </a>
          </p>
        </section>

        <section className="footer_social-media">
          <a href="#" className="footer_social-link" aria-label="Facebook">
            <i className="socialmedia-icon facebook"></i>
          </a>
          <a href="#" className="footer_social-link" aria-label="Twitter">
            <i className="socialmedia-icon twitter"></i>
          </a>
          <a href="#" className="footer_social-link" aria-label="Instagram">
            <i className="socialmedia-icon instagram"></i>
          </a>
          <a href="#" className="footer_social-link" aria-label="Send Message">
            <i className="socialmedia-icon paper-plane"></i>
          </a>
        </section>
      </div>
    </footer>
  );
}
