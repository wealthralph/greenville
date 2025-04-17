import { useState } from "react";
import { clogo, contact } from "../assets";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Optionally send data to a backend or email service
  };

  return (
    <div className="contactUs_con">
      <div className="contactUs_text">
        <h1>Get in touch</h1>
        <h2>We’re here to help you manage your waste responsibly</h2>
        <p>
          Have questions about our services, need support, or want to give
          feedback? Fill out the form below or reach out to us directly — our
          team is always ready to assist you in creating a cleaner, greener
          community.
        </p>
      </div>

      <div className="contactUs_form">
        <form onSubmit={handleSubmit}>
          <div className="firstform_row">
          <label>
            Full Name
            <input
              type="text"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          </div>
          <div className="secondform_row">
          <label>
            Subject
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Phone Number
            <input
              type="tel"
              name="phone number"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </label>
          </div>
          <label>
            Message
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit">Send Message</button>
        </form>
        <div className="contactUs_img">
          <img src={contact} alt="clean world" />
        </div>
      </div>
    </div>
  );
}
