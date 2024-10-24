import React from 'react';
import { MdOutlineMail } from 'react-icons/md';
import { BsTelephone } from 'react-icons/bs';

const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      <div className="contact-grid">
        <div className="space-y-8">
          <h2 className="contact-title">
            Get in touch
          </h2>
          <p className="contact-description">
            Drop me an email, give me a call, or send me a message by submitting
            the form.
          </p>
          <div className="contact-info">
            <MdOutlineMail /> faizee956@gmail.com
          </div>
          <div className="contact-info">
            <BsTelephone /> +923112221305
          </div>
        </div>
        <div className="space-y-8">
          <div className="contact-input">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="contact-input-field"
              id="name"
            />
          </div>
          <div className="contact-input" >
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="contact-input-field"
              id="email"
            />
          </div>
          <div className="contact-input">
            <label htmlFor="message">Message</label>
            <textarea
              className="contact-input-field"
              id="message"
              rows={8}
            ></textarea>
          </div>
          <button className="contact-button">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
