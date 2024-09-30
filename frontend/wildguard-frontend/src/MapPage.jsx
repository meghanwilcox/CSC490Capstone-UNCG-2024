import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './styles/MapPage.css';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import Navbar from './Navbar'; 
import poaching_coordinates from './poaching_coordinates'; // Import poaching data
import Footer from './Footer';

// Configure Leaflet icons;
delete L.Icon.Default.prototype._getIconUrl;

import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

// Default icon for sightings
L.Icon.Default.mergeOptions({
  iconRetinaUrl: iconRetinaUrl,
  iconUrl: iconUrl,
  shadowUrl: shadowUrl,
});

// Custom icon for poaching markers
const poachingIcon = new L.Icon({
  iconUrl: '/marker.png', // Red marker
  iconSize: [40, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34]
});

const MapPage = () => {
  const [sightings, setSightings] = useState([]);
  const [speciesList, setSpeciesList] = useState([]);
  const [selectedSpecies, setSelectedSpecies] = useState('All Species');
  const [checkboxes, setCheckboxes] = useState({
    checkbox1: true,
    checkbox2: true,
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
    if (e) {
      e.preventDefault();
    }

    // Filtering logic
    let filtered = sightings;

    // Filter by species dropdown
    if (selectedSpecies !== 'All Species') {
      filtered = filtered.filter(sighting => sighting.species_name === selectedSpecies);
    }

    // Update the filtered sightings that will be displayed
    setFilteredSightings(filtered);
  };

  return (
    <div>
      <Navbar />
      <div id="info-text">
        <h3>View our Interactive Map!</h3>
        <br/>
        <h4>Here you can browse verified species sightings submitted by our users, in addition to poachings arrests data. 
          This data helps researchers and conservationists better understand where species are being impacted, which helps them concentrate efforts in areads of need, 
          or provide a better understanding of population distributions for academic study.
        </h4>
      </div>
      <div id="content-container">
        {/* Map Container */}
        <div className="map-container">
          <MapContainer center={[0, 0]} zoom={2} style={{ height: '100%', width: '100%' }}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* Sightings Markers */}
            {checkboxes.checkbox1 && filteredSightings.map((sighting) => (
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

            {/* Conditional rendering of Poaching markers */}
            {checkboxes.checkbox2 && poaching_coordinates.map((poaching, index) => (
              <Marker
                key={`poaching-${index}`}
                position={[poaching.latitude, poaching.longitude]} // Use labeled latitude and longitude
                icon={poachingIcon} // Use custom icon for poaching
              >
                <Popup>
                  <strong>{poaching.species}</strong> {/* Species */}
                  <br />
                  {new Date(poaching.date).toLocaleDateString()} {/* Date */}
                  <br />
                  Poaching Incident
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
        {/* Filters */}
        <div className="filters">
          <form onSubmit={handleSubmit}>
            {/* Checkboxes */}
            <h4>Select the type of data you would like to display: </h4>
            <br />
            <label>
              <input
                type="checkbox"
                name="checkbox2"
                checked={checkboxes.checkbox2}
                onChange={handleCheckboxChange}
              />
              Poaching Arrests 🔴
            </label>
            <br />
            <br />
            <label>
              <input
                type="checkbox"
                name="checkbox1"
                checked={checkboxes.checkbox1}
                onChange={handleCheckboxChange}
              />
              Species Sightings 🔵
            </label>
            <br />
            <br />
            <h4>For the species sightings data, add filters based on which species you would like to display. </h4>
            {/* Dropdown */}
            <div id='dropdown-container'>
              <select value={selectedSpecies} onChange={handleDropdownChange}>
                {speciesList.map((species, index) => (
                  <option key={index} value={species}>{species}</option>
                ))}
              </select>
            {/* Submit Button */}
            <button id='submit-dropdown' type="submit">Apply Filters</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MapPage;
