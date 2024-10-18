import React, { useState } from 'react';
import './styles/PredictImage.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const PredictImage = () => {
  const [selectedImage, setSelectedImage] = useState(null); // For storing the uploaded image
  const [previewImage, setPreviewImage] = useState(null); // For storing the image preview URL
  const [predictionResult, setPredictionResult] = useState(''); // For storing the result
  const [error, setError] = useState(''); // For handling errors
  const [showSightingSection, setShowSightingSection] = useState(false); // New state for showing sighting section

  // Function to handle file input and generate preview
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      setPreviewImage(URL.createObjectURL(file)); // Generate preview URL for the image
      setPredictionResult(''); // Reset the result when a new image is uploaded
      setError(''); // Clear previous errors
      setShowSightingSection(false); // Reset sighting section visibility
    }
  };

  // Function to submit the image and get the prediction
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedImage) {
      setError('Please upload an image first.');
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedImage);

    try {
      const response = await fetch('http://localhost:8000/api/predict-image/', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Error in prediction');
      }

      const data = await response.json();

      if (data.error) {
        setError(data.error);
      } else {
        setPredictionResult(data.predicted_class); // Display predicted class
        setShowSightingSection(true); // Show sighting section after successful prediction
      }
    } catch (error) {
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div id="body-div">
      <Navbar />

      <div id="info-div">
        <h3 style={{ color: '#0f9b4a' }}>
          Here you are able to upload a photograph of an animal, and our algorithm will use neural network based deep learning techniques to classify the species of the animal in the photograph!
        </h3>
        <br />
        <h4>
          Our model uses a large database of animal species, but keep in mind that not all unique species will be available for the model, so results are not 100% percent accurate. Nevertheless, you can still use this tool to learn more about the local species in your area, and have fun interacting with a relatively new piece of machine learning technology!
        </h4>
      </div>

      <br />
      <br />

      <div id="upload-div">
        <div>
          <h3>Here you can upload an image!</h3>
          {/* Form for uploading the image */}
          <form onSubmit={handleSubmit}>
            <input type="file" accept="image/*" onChange={handleImageUpload} />
            {/* Display the uploaded image as a preview */}
            {previewImage && (
              <div id="image-preview">
                <h3>Uploaded Image Preview:</h3>
                <img id="image-box" src={previewImage} alt="Uploaded Preview" style={{ maxWidth: '100%', height: 'auto' }} />
              </div>
            )}
            <button type="submit">Upload and Predict</button>
          </form>
        </div>

        {/* Display the results or error */}
        <div id="results-div">
          <h2>This animal is predicted to be a: </h2>
          {error && <h3 style={{ color: 'red' }}>{error}</h3>}
          {predictionResult && <h1 style={{ color: '#0f9b4a' }}>{predictionResult}</h1>}
        </div>
      </div>

      <br/>
      <br/>

      {/* Conditionally render the sighting section based on state */}
      {showSightingSection && (
        <div id="sighting-section">
          <h3>If you believe this prediction is accurate, consider uploading an official sighting to our map with this image!</h3>
          <br/>
          {/* Button wrapped in a Link component */}
          <Link to="/wildlife-sighting-form">
            <button id="sighting-button" type="button">Submit a Sighting</button>
          </Link>      
        </div>
      )}

    </div>
  );
};

export default PredictImage;
