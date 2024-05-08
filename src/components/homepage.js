import React from 'react';

function HomePage() {
  return (
    <div>
      <header>
        <nav className="navbar">
          <div className="logo" id="logoSelf">SafeWay</div>
          <ul className="nav-links" id="logo-text">
            <li><a href="#services">Home</a></li>
            <li><a href="#work">Events</a></li>
          </ul>
          <div className="auth">
            <a href="#login" id="login_button">Login</a>
            <button className="signup-button">Sign Up</button>
          </div>
        </nav>
      </header>
      <main>
        <section className="main1">
          <h1 className="title">SafeWay</h1>
          <p>Give your kids a safe way home.  </p>
        </section>

        <section className="services-section hidden animate__animated">
          <h2>Our  Schools </h2>
          <div className="services-container">
            <div className="service-item">
              <img src="img/silverdale.jpg" alt="SliverDale Elmentary School" width="300" height="300" />
              <h3>SliverDale Elmentary School</h3>
            </div>
            <div className="service-item">
              <img src="img/beaconhill.jpg" alt="Beacon Hill Elmentary School" width="300" height="300" />
              <h3>Beacon Hill Elmentary School</h3>
            </div>
            <div className="service-item">
              <img src="img/westhills.jpg" alt="West Hills Elmentary School" width="300" height="300" />
              <h3>West Hills Elmentary School</h3>
            </div>
            <div className="service-item">
              <img src="img/unionhill.jpg" alt="Union Hill Elmentary School" width="300" height="300" />
              <h3>Union Hill Elmentary School</h3>
            </div>
          </div>
        </section>
      
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
      </main>
    </div>
  );
}

export default HomePage;
