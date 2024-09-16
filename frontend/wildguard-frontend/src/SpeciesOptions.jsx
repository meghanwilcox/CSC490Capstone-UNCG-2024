import React from 'react';
import { Link } from 'react-router-dom';
import './styles/SpeciesOptions.css';
import wingsGif from './assets/wired-outline-1145-wings.gif'; 
import logo from './assets/logo 2 transparent.png'; 

const SpeciesOptions = () => {
  return (
    <div className="species-options-page">
      {/* Header/Banner */}
      <header className="species-options-header">
        <Link to="/" className="logo">
          <img src={logo} alt="WildGuard Logo" className="logo-image" />
        </Link>
      </header>

      {/* Main Content */}
      <div className="species-options-content">
        <h1>Explore Species</h1>
        <p>Discover the wonders of wildlife through our comprehensive species database.</p>
        
        {/* Wings GIF */}
        <img src={wingsGif} alt="Wings GIF" className="wings-gif" />

        <div className="options">
          <Link to="/species-search" className="option-card">
            <div className="option-icon">
              <span role="img" aria-label="Search">&#128270;</span>
            </div>
            <h2>Species Search</h2>
            <p>Search and filter species to find exactly what you're looking for.</p>
          </Link>
          <Link to="/detail/sample" className="option-card">
            <div className="option-icon">
              <span role="img" aria-label="Detail">&#128196;</span>
            </div>
            <h2>Species Detail</h2>
            <p>Get detailed information on individual species.</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SpeciesOptions;
