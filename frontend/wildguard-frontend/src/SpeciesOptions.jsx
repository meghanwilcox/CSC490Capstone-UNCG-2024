// src/SpeciesOptions.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './styles/SpeciesOptions.css'; // Add custom styles if needed

const SpeciesOptions = () => {
  return (
    <div className="species-options-container">
      <h1>Explore Species</h1>
      <div className="options">
        <Link to="/species-search" className="cta-button">Species Search</Link>
        <Link to="/detail/sample" className="cta-button">Species Detail</Link>
      </div>
    </div>
  );
};

export default SpeciesOptions;
