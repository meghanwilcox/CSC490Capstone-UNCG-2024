import React from 'react';
import './styles/Homepage.css'; // Linking the new CSS file

const Homepage = () => {
  return (
    <div className="homepage-container">
      <header className="navigation">
        <a href="/" className="wildguard-title">WildGuard</a>
        <div>
          <a href="/login" className="nav-button">Login</a>
          <a href="/register" className="nav-button">Register</a>
        </div>
      </header>

      <header className="hero-section">
        <h1>Welcome to WildGuard</h1>
        <p>Discover, Learn, and Protect Wildlife Species</p>
        {/* Jaguar walking animation */}
        <div className="jaguar-walking"></div>
      </header>

      <section className="features-section">
        <div className="features">
          <div className="feature">
            <h3>Species Search</h3>
            <p>Search for various species and learn more about them.</p>
            <a href="/species-options" className="cta-button">Explore</a>
          </div>
          <div className="feature">
            <h3>Detailed Information</h3>
            <p>Get detailed information on species including threat status.</p>
          </div>
          <div className="feature">
            <h3>Community Engagement</h3>
            <p>Join our community to help protect wildlife.</p>
          </div>
        </div>
      </section>

      <footer className="footer-section">
        <p>&copy; 2024 WildGuard. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Homepage;
