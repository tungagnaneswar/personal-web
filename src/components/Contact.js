// src/components/Contact.js
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" className="form-input" />
        <input type="email" placeholder="Your Email" className="form-input" />
        <input type="text" placeholder="Your Contact" className="form-input" />
        <textarea placeholder="Your Message" className="form-textarea"></textarea>
        <button type="submit" className="form-button">Send</button>
      </form>
    </section>
  );
};

export default Contact;
