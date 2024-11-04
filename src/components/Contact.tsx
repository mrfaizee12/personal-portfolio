import React, { useState } from 'react';
import { MdOutlineMail } from 'react-icons/md';
import { BsTelephone } from 'react-icons/bs';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check if all fields are filled
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' }); // Clear form fields

      // Hide the success message after 3 seconds
      setTimeout(() => setSubmitted(false), 3000);
    } else {
      alert('Please fill in all fields before submitting.');
    }
  };

  return (
    <div id="contact" className="contact-container">
      <div className="contact-grid">
        <div className="space-y-8">
          <h2 className="contact-title">Get in touch</h2>
          <p className="contact-description">
            Drop me an email, give me a call, or send me a message by submitting the form.
          </p>
          <div className="contact-info">
            <MdOutlineMail /> faizee956@gmail.com
          </div>
          <div className="contact-info">
            <BsTelephone /> +923112221305
          </div>
        </div>
        <form className="space-y-8" onSubmit={handleSubmit}>
          <div className="contact-input">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="contact-input-field"
              id="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="contact-input">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="contact-input-field"
              id="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="contact-input">
            <label htmlFor="message">Message</label>
            <textarea
              className="contact-input-field"
              id="message"
              rows={8}
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="button-container">
            <button type="submit" className="contact-button">
              Send
            </button>
          </div>
          {submitted && (
            <p className="success-message">Form successfully submitted</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
