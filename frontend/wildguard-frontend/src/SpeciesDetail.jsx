import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './styles/SpeciesDetail.css';

const SpeciesDetail = () => {
  const { scientificName } = useParams(); // Get the scientific name from the URL
  const [speciesData, setSpeciesData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSpeciesData = async () => {
      try {
        // Fetch data using the scientific name
        const response = await fetch(`http://localhost:8000/species/?scientificName=${encodeURIComponent(scientificName)}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch species data');
        }

        const data = await response.json();
        setSpeciesData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSpeciesData();
  }, [scientificName]);

  if (loading) {
    return <p>Loading species data...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!speciesData) {
    return <p>No species data found</p>;
  }

  return (
    <div className="species-detail">
      <h2>Species Details</h2>
      <p><strong>Scientific Name:</strong> {speciesData.scientificName}</p>
      <p><strong>Kingdom:</strong> {speciesData.kingdom}</p>
      <p><strong>Phylum:</strong> {speciesData.phylum}</p>
      <p><strong>Class:</strong> {speciesData.class}</p>
      <p><strong>Order:</strong> {speciesData.order}</p>
      <p><strong>Family:</strong> {speciesData.family}</p>
      <p><strong>Genus:</strong> {speciesData.genus}</p>
      <p><strong>Species:</strong> {speciesData.species}</p>
      <p><strong>Threat Status:</strong> {speciesData.threatStatus || 'N/A'}</p>
    </div>
  );
};

export default SpeciesDetail;
