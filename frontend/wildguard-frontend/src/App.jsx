import React from 'react';
import { Link } from 'react-router-dom';
import './styles/App.css';
import logo from './assets/logo 2 transparent.png'; // Adjust the path if necessary

const App = () => {
  return (
    <div className="app-container">
      {/* Navigation Bar */}
      <header className="navigation">
        <div className="nav-content">
          <Link to="/" className="logo">
            <img src={logo} alt="WildGuard Logo" className="logo-image" />
          </Link>
          <nav>
            <Link to="/login" className="nav-button">Login</Link>
            <Link to="/register" className="nav-button">Register</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
  <div className="hero-overlay">
    <img src={logo} alt="WildGuard Logo" className="hero-logo" /> {/* Replace the <h1> with this */}
    <p>Endangered Programmers For Endangered Species</p>
    <div className="features">
      <Link to="/species-options" className="feature clickable-feature">
        <div className="feature-icon">
          <span role="img" aria-label="Search">&#128269;</span>
        </div>
        <h3>Species Search</h3>
        <p>Search for various species and learn more about them.</p>
      </Link>
      <div className="feature">
        <div className="feature-icon">
          <span role="img" aria-label="Information">&#8505;</span>
        </div>
        <h3>TBD</h3>
        <p>TBD</p>
      </div>
      <div className="feature">
        <div className="feature-icon">
          <span role="img" aria-label="Community">&#128101;</span>
        </div>
        <h3>TBD</h3>
        <p>Join our community to help protect wildlife.</p>
      </div>
    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="footer-section">
        <p>&copy; 2024 WildGuard. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
