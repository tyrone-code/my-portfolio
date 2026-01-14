import React, { useState } from "react";
import "./ContactForm.css"; // Import the CSS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import emailjs from "emailjs-com";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_uzo9hnb",
        "template_b1vnhrs",
        formData,
        "H9G14WShUK9ZzWSab"
      )
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
          setSubmitted(true);
        },
        (error) => {
          console.error("Email sending error:", error.text);
        }
      );
  };

  return (
    <>
      <hr></hr>

      <div className="contact-form-container">
        <h2 className="contact">Contact</h2>
        {submitted ? (
          <p className="thank-you">Form has been submitted!</p>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
              />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message..."
              />
            </div>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        )}
      </div>
      <div
        style={{ maxWidth: "400px", margin: "auto" }}
        className="contact-icons"
      >
        <label htmlFor="phone">
          <FontAwesomeIcon icon={faPhone} size="2x" />
          <p>062 878 3936</p>
        </label>
        <br></br>
        <label htmlFor="email">
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
          <p>tyronessglaw@gmail.com</p>
        </label>
      </div>
    </>
  );
}

export default ContactForm;
