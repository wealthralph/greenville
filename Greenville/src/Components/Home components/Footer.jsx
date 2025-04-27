import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer_links">
      
        <section className="footer_section">
          
          <ul className="footer_list">
          <h3 className="footer_heading">Help?</h3>
           
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

        <section id="footer-contact" className="footer_section">
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
        <section className="footer_social-media">
              <a href="#" className="footer_social-link" aria-label="Facebook">
                <FaFacebookF className="socialmedia-icon facebook" />
              </a>
              <a href="#" className="footer_social-link" aria-label="Twitter">
                <FaTwitter className="socialmedia-icon twitter" />
              </a>
              <a href="#" className="footer_social-link" aria-label="Instagram">
                <FaInstagram className="socialmedia-icon instagram" />
              </a>
              <h3>© Copyright 2025</h3>
            </section>
      </div>
    </footer>
  );
}
