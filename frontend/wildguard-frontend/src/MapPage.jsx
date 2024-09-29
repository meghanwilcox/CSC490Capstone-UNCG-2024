import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './styles/MapPage.css';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import Navbar from './Navbar'; 

// Configure Leaflet icons
delete L.Icon.Default.prototype._getIconUrl;

import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

L.Icon.Default.mergeOptions({
  iconRetinaUrl: iconRetinaUrl,
  iconUrl: iconUrl,
  shadowUrl: shadowUrl,
});

const MapPage = () => {
  const [sightings, setSightings] = useState([]);
  const [speciesList, setSpeciesList] = useState([]);
  const [selectedSpecies, setSelectedSpecies] = useState('All Species');
  const [checkboxes, setCheckboxes] = useState({
    checkbox1: false,
    checkbox2: false,
  });
  const [filteredSightings, setFilteredSightings] = useState([]);

  useEffect(() => {
    // Fetch sightings data from backend
    const fetchSightings = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/sightings/');
        const data = await response.json();
        setSightings(data);

        // Extract species names, remove duplicates, and add "All Species" option
        const speciesNames = ['All Species', ...new Set(data.map(sighting => sighting.species_name))];
        setSpeciesList(speciesNames);
        setFilteredSightings(data); // Initial display: show all sightings
      } catch (error) {
        console.error('Error fetching sightings data:', error);
      }
    };

    fetchSightings();
  }, []);

  const handleCheckboxChange = (e) => {
    setCheckboxes({ ...checkboxes, [e.target.name]: e.target.checked });
  };

  const handleDropdownChange = (e) => {
    setSelectedSpecies(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Filtering logic
    let filtered = sightings;

    // Filter by species dropdown
    if (selectedSpecies !== 'All Species') {
      filtered = filtered.filter(sighting => sighting.species_name === selectedSpecies);
    }

    // Filter by checkboxes (you can customize the checkbox filters as needed)
    if (checkboxes.checkbox1) {
      // Example filter based on checkbox 1
      filtered = filtered.filter(sighting => sighting.latitude > 0); // Example: northern hemisphere
    }
    if (checkboxes.checkbox2) {
      // Example filter based on checkbox 2
      filtered = filtered.filter(sighting => sighting.longitude < 0); // Example: western hemisphere
    }

    // Update the filtered sightings that will be displayed
    setFilteredSightings(filtered);
  };


  return (
    <div>
      <Navbar />
      <div id="info-text">
        <h2>Here you can view geographical data about wildlife conservation efforts around the world.</h2>
      </div>
      <div id="content-container">
        {/* Map Container */}
        <div className="map-container">
          <MapContainer center={[0, 0]} zoom={2} style={{ height: '100%', width: '100%' }}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {filteredSightings.map((sighting) => (
              <Marker
                key={sighting.id}
                position={[sighting.latitude, sighting.longitude]}
              >
                <Popup>
                  <strong>{sighting.species_name}</strong>
                  <br />
                  {new Date(sighting.date_seen).toLocaleDateString()}
                  <br />
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
        {/* Filters */}
        <div className="filters">
          <form onSubmit={handleSubmit}>
            {/* Checkboxes */}
            <label>
              <input
                type="checkbox"
                name="checkbox1"
                checked={checkboxes.checkbox1}
                onChange={handleCheckboxChange}
              />
              Endangered Species Data
            </label>
            <br />
            <br/>
            <label>
              <input
                type="checkbox"
                name="checkbox2"
                checked={checkboxes.checkbox2}
                onChange={handleCheckboxChange}
              />
              Poaching Arrests
            </label>
            <br />
            <br/>
            {/* Dropdown */}
            <label>      
              <select value={selectedSpecies} onChange={handleDropdownChange}>
                {speciesList.map((species, index) => (
                  <option key={index} value={species}>{species}</option>
                ))}
              </select>
              Select a Species 
            </label>
            <br />
            <br/>
            {/* Submit Button */}
            <button type="submit">Apply Filters</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MapPage;
