// src/App.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './styles/App.css'; // Assuming you want to style it

const App = () => {
  return (
    <div className="app-container">
      <header className="navigation">
        <Link to="/login" className="nav-button">Login</Link>
        <Link to="/register" className="nav-button">Register</Link>
      </header>

      <header className="hero-section">
        <h1>Welcome to WildGuard</h1>
        <p>Discover, Learn, and Protect Wildlife Species</p>
        
      </header>

      <section className="features-section">
        <div className="features">
          <div className="feature">
            <h3>Species Search</h3>
            <p>Search for various species and learn more about them.</p>
            <Link to="/species-options" className="cta-button">Explore</Link> {/* Add button */}
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

export default App;
