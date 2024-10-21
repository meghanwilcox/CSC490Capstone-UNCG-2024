import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles/SpeciesSearch.css';
import logo from './assets/logo 2 transparent.png'; 
import Navbar from './Navbar';
import Footer from './Footer';

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
        setSpecies(data.slice(0, 100)); // Set only the first 100 records
      } catch (error) {
        console.error('Error fetching species data:', error);
      }
    };

    fetchSpeciesData();
  }, []);

  useEffect(() => {
    const applyFilters = () => {
      const filtered = species.filter((species) =>
        (species.scientific_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          species.main_common_name?.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (categoryFilter === '' || species.category === categoryFilter)
      );
      setFilteredSpecies(filtered);
    };

    applyFilters();
  }, [searchTerm, categoryFilter, species]);

  return (
    <div id='main-contnet'>
      <Navbar />
      <div>
        <div id="info-text">
          <h2>Search for a species to learn more about its classification!</h2>
        </div>

        {/* Filters */}
          <input
            id='input1'
            type="text"
            placeholder="Search by scientific or common name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
          id='select1'
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

        {/* Species List */}
        <div className="species-list">
          {filteredSpecies.length > 0 ? (
            <ul>
              {filteredSpecies.map((species) => (
                <li key={species.taxonid}>
                  <Link to={`/detail/${encodeURIComponent(species.scientific_name)}`}>
                    <h2>{species.scientific_name}</h2>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>No species found</p>
          )}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default SpeciesSearchPage;
