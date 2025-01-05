import React from 'react';
import { FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa'; // For social media icons
import './../App.css'; // Assuming this contains general styles

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <div className="contact-icons">
        {/* Mail Icon */}
        <a href="mailto:sunilkumar.a1203@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope size={40} className="contact-icon" />
        </a>
        {/* LinkedIn Icon */}
        <a href="https://www.linkedin.com/in/sunil-kumar-a-71ab58282/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={40} className="contact-icon" />
        </a>
        {/* Instagram Icon */}
        <a href="https://www.instagram.com/sunil._.12_/" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={40} className="contact-icon" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
