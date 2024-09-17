// src/MapPage.jsx
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './styles/MapPage.css';
import 'leaflet/dist/leaflet.css';
import { Link } from 'react-router-dom';
import L from 'leaflet';


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

  useEffect(() => {
    // Fetch sightings data from backend
    const fetchSightings = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/sightings/');
        const data = await response.json();
        setSightings(data);
      } catch (error) {
        console.error('Error fetching sightings data:', error);
      }
    };

    fetchSightings();
  }, []);

  return (
    <div className="map-page">
      {/* Header/Banner */}
      <header className="map-page-header">
        <Link to="/" className="logo">
          WildGuard
        </Link>
      </header>

      {/* Map Container */}
      <div className="map-container">
        <MapContainer center={[0, 0]} zoom={2} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {sightings.map((sighting) => (
            <Marker
              key={sighting.sighting_id}
              position={[sighting.latitude, sighting.longitude]}
            >
              <Popup>
                <strong>{sighting.species}</strong>
                <br />
                {new Date(sighting.dateSeen).toLocaleDateString()}
                <br />
                Sighted by: {sighting.sighted_by_name}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default MapPage;
