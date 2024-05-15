import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';

export function Header() {
    return (
        <header>
        <nav className="navbar">
        <div className="logo" id="logoSelf">
            SafeWay
        </div>
          <ul className="nav-links" id="logo-text">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/create-event">Event</Link></li>
            <li><Link to="/resources">Resource</Link></li>
            </ul>
        </nav>
      </header>
    );
}

export function Footer() {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const sendEmail = (e) => {
      e.preventDefault();

      emailjs
          .sendForm('service_fk7hqt4', 'template_7truf2m', form.current, {
              user_email: form.current.email.value,
              message: form.current.message.value,
          })
          .then(
              (result) => {
                  console.log('Email sent successfully:', result.text);
                  setSuccessMessage('Email sent successfully!');
                  setErrorMessage('');
              },
              (error) => {
                  console.error('Failed to send email:', error.text);
                  setErrorMessage('Failed to send email. Please try again.');
                  setSuccessMessage('');
              }
          );

      // Clear the form input fields after submission
      form.current.reset();
  };

  return (
      <footer className="footer-content hidden animate__animated">
          <div className="footer-container">
              <div className="column">
                  <h2>More</h2>
                  <a href="https://docs.google.com/presentation/d/1tPYC5uqRT2q-Ki1AczyEKbE9D83Hap0zqoaB4aTOPfU/edit?usp=sharing">Slides</a>
                  <a href="https://github.com/UW-INFO442-SP24/safeway">GitHub</a>
              </div>
              <div className="column">
                  <h2>Social</h2>
                  <a href="https://instagram.com">Instagram</a>
                  <a href="https://facebook.com">Facebook</a>
              </div>
              <div className="column contact-form">
                  <h2>Let's stay connected</h2>
                  <p>Reach out about a project, collaboration or just to say hello!</p>
                  <form ref={form} onSubmit={sendEmail}>
                      <input type="email" id="email" name="user_email" placeholder="Email *" required />
                      <textarea id="message" name="message" placeholder="Message *" required></textarea>
                      <button type="submit" value="send">Send Away</button>
                  </form>
                  {successMessage && <div className="success-message">{successMessage}</div>}
                  {errorMessage && <div className="error-message">{errorMessage}</div>}
              </div>
          </div>
      </footer>
  );
}