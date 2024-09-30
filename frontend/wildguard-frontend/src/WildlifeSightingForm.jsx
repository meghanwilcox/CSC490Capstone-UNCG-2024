import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import './styles/WildlifeSightingForm.css'; // Import your CSS styles
import Footer from './Footer';

const WildlifeSightingForm = () => {
    const [speciesValue, setSpeciesValue] = useState('');
    const [speciesOptions, setSpeciesOptions] = useState([]); // State for species options
    const [dateValue, setDateValue] = useState('');
    const [latitudeValue, setLatitudeValue] = useState('');
    const [longitudeValue, setLongitudeValue] = useState('');
    const [photoFile, setPhotoFile] = useState(null);
    const token = '';  // Add logic for obtaining token here if needed
    const navigate = useNavigate();

    // Fetch species data from the API
    useEffect(() => {
        const fetchSpecies = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/species/');
                const data = await response.json();
                // Map the data to extract scientific names
                const scientificNames = data.map(species => species.scientific_name);
                setSpeciesOptions(scientificNames);
            } catch (error) {
                console.error('Error fetching species:', error);
            }
        };

        fetchSpecies();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const formData = new FormData();
        formData.append('species_name', speciesValue);
        formData.append('date_seen', dateValue);
        formData.append('latitude', latitudeValue);
        formData.append('longitude', longitudeValue);
        if (photoFile) {
            formData.append('photo', photoFile);
        }

        try {
            const response = await fetch('http://127.0.0.1:8000/api/sightings/add/', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
                body: formData,
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error('Error:', errorData);
            } else {
                const result = await response.json();
                setSpeciesValue('');
                setDateValue('');
                setLatitudeValue('');
                setLongitudeValue('');
                setPhotoFile(null);
                
                alert('Sighting submitted successfully!');
                navigate('/map-page');
            }
        } catch (error) {
            console.error('Submission failed:', error);
        }
    };

    return (
        <div>
            <Navbar />
            <div id='main-content' className='wildlife-sighting-form-page'>
                <div className='wildlife-sighting-form-content'>
                    <h2>Submit a Wildlife Sighting!</h2>
                    <h3>
                        Submitting sightings helps researchers and conservationists better understand population distributions, 
                        and sightings can provide better understanding as to how these species are being impacted by humans. 
                        Submit the name of the species you saw, the date you saw it, latitude and longitude coordinates of its location, 
                        and a photo for verification. Once your sighting is submitted, you will be able to see it on the interactive map!
                    </h3>
                    <form onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <label htmlFor="species_name">Species Name:</label>
                            <select
                                id="species_name"
                                value={speciesValue}
                                onChange={(e) => setSpeciesValue(e.target.value)}
                                required
                            >
                                <option value="">Select a species from our list</option>
                                {speciesOptions.map((species, index) => (
                                    <option key={index} value={species}>
                                        {species}
                                    </option>
                                ))}
                            </select>
                            <br/>
                            {/* Input for custom species name */}
                            <input
                                type="text"
                                placeholder="Or type the species name here"
                                value={speciesValue}
                                onChange={(e) => setSpeciesValue(e.target.value)}
                            />
                        </div>

                        <div className='form-group'>
                            <label htmlFor="date_seen">Date Seen:</label>
                            <input
                                type="date"
                                id="date_seen"
                                value={dateValue}
                                onChange={(e) => setDateValue(e.target.value)}
                                required
                            />
                        </div>

                        <div className='form-group'>
                            <label htmlFor="latitude">Latitude:</label>
                            <input
                                type="number"
                                id="latitude"
                                value={latitudeValue}
                                onChange={(e) => setLatitudeValue(e.target.value)}
                                required
                            />
                        </div>

                        <div className='form-group'>
                            <label htmlFor="longitude">Longitude:</label>
                            <input
                                type="number"
                                id="longitude"
                                value={longitudeValue}
                                onChange={(e) => setLongitudeValue(e.target.value)}
                                required
                            />
                        </div>

                        <div className='form-group'>
                            <label htmlFor="photo">Photo:</label>
                            <input
                                type="file"
                                id="photo"
                                onChange={(e) => setPhotoFile(e.target.files[0])}
                            />
                        </div>

                        <button type="submit">Submit Sighting</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default WildlifeSightingForm;

