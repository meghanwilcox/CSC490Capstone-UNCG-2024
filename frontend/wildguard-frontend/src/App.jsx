import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './styles/App.css';
import logo from './assets/logo 2 transparent.png'; 

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setIsLoggedIn(true); 
    } else {
      setIsLoggedIn(false); 
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user_id'); 
    localStorage.removeItem('user');    
    setIsLoggedIn(false);               
    navigate('/');                      
  };

  return (
    <div className="app-container">
      {/* Navigation Bar */}
      <header className="navigation">
        <div className="nav-content">
          <Link to="/" className="logo">
            <img src={logo} alt="WildGuard Logo" className="logo-image" />
          </Link>
          <nav>
            {isLoggedIn ? (
              <>
                <Link to="/user-profile" className="nav-button">Profile</Link>
                <button onClick={handleLogout} className="nav-button">Logout</button>
              </>
            ) : (
              <>
                <Link to="/login" className="nav-button">Login</Link>
                <Link to="/register" className="nav-button">Register</Link>
              </>
            )}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <img src={logo} alt="WildGuard Logo" className="hero-logo" />
          <p>Endangered Programmers For Endangered Species</p>
          <div className="features">
            <Link to="/species-options" className="feature clickable-feature">
              <div className="feature-icon">
                <span role="img" aria-label="Search">&#128269;</span>
              </div>
              <h3>Species Search</h3>
              <p>Search for various species and learn more about them.</p>
            </Link>
            <Link to="/map-page" className="feature clickable-feature">
              <div className="feature-icon">
                <span role="img" aria-label="Globe">&#127758;</span> 
              </div>
              <h3>Explore Map</h3>
              <p>See sightings on the map.</p>
            </Link>
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
