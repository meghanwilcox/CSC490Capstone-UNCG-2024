import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './styles/SpeciesSearch.css';

const SpeciesSearchPage = () => {
  const [species, setSpecies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [filteredSpecies, setFilteredSpecies] = useState([]);

  useEffect(() => {
    const fetchSpeciesData = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/species/');
        const data = await response.json();
        setSpecies(data.results); // Adjust based on your API response
      } catch (error) {
        console.error('Error fetching species data:', error);
      }
    };

    fetchSpeciesData();
  }, []);

  useEffect(() => {
    const applyFilters = () => {
      const filtered = species.filter(species =>
        (species.scientific_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          species.main_common_name?.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (categoryFilter === '' || species.category === categoryFilter)
      );
      setFilteredSpecies(filtered);
    };

    applyFilters();
  }, [searchTerm, categoryFilter, species]);

  return (
    <div className="species-search-page">
      <h1>Species Search</h1>
      <div className="filters">
        <input
          type="text"
          placeholder="Search by scientific name or common name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="CR">Critically Endangered</option>
          <option value="EN">Endangered</option>
          <option value="VU">Vulnerable</option>
          <option value="NT">Near Threatened</option>
          <option value="LC">Least Concern</option>
        </select>
      </div>
      <div className="species-list">
        {filteredSpecies.length > 0 ? (
          <ul>
            {filteredSpecies.map((species) => (
              <li key={species.taxonid}>
                {/* Link to species detail using scientific name */}
                <Link to={`/detail/${encodeURIComponent(species.scientific_name)}`}>
                  <h2>{species.scientific_name}</h2>
                  <p>Common Name: {species.main_common_name || 'N/A'}</p>
                  <p>Category: {species.category}</p>
                  <p>Family: {species.family_name}</p>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>No species found</p>
        )}
      </div>
    </div>
  );
};

export default SpeciesSearchPage;