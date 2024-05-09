import React from 'react';
import { Link } from 'react-router-dom';

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
    return (
        <footer className="footer-content hidden animate__animated">
          <div className="footer-container">
            <div className="column">
              <h2>Menu</h2>
              <a href="#services">Home</a>
              <a href="#work">Events</a>
            </div>
            <div className="column">
              <h2>Social</h2>
              <a href="https://instagram.com">Instagram</a>
              <a href="https://facebook.com">Facebook</a>
            </div>
            <div className="column contact-form">
              <h2>Let's stay connected</h2>
              <p>Reach out about a project, collaboration or just to say hello!</p>
              <form action="#" method="POST">
                <input type="email" id="email" name="email" placeholder="Email *" />
                <textarea id="message" name="message" placeholder="Message *" />
                <button type="submit">Send Away</button>
              </form>
            </div>
          </div>
        </footer>
    );
}