// src/WildlifeSightingForm.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/WildlifeSightingForm.css';

const WildlifeSightingForm = () => {
  const [formData, setFormData] = useState({
    description: '',
    date: '',
    location: '',
    media: null,
  });
  const [previewMedia, setPreviewMedia] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'media') {
      setFormData({
        ...formData,
        media: files[0],
      });
      setPreviewMedia(URL.createObjectURL(files[0]));
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    console.log('Form data:', formData);
    alert('Sighting submitted successfully!');
    
    setFormData({
      description: '',
      date: '',
      location: '',
      media: null,
    });
    setPreviewMedia(null);
  };

  return (
    <div className="wildlife-sighting-form-page">
      {/* Header/Banner */}
      <header className="wildlife-sighting-form-header">
        <Link to="/" className="logo">WildGuard</Link>
      </header>

      {/* Main Content */}
      <div className="wildlife-sighting-form-content">
        <h1>Submit a Wildlife Sighting</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Description:</label>
            <textarea
              name="description"
              value={formData.description}
              placeholder="Describe what you saw"
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="form-group">
            <label>Date of Sighting:</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Location:</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              placeholder="Enter the location"
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Upload Picture or Video:</label>
            <input
              type="file"
              name="media"
              accept="image/*,video/*"
              onChange={handleChange}
            />
            {previewMedia && (
              <div className="media-preview">
                <p>Preview:</p>
                {formData.media && formData.media.type.startsWith('image/') ? (
                  <img src={previewMedia} alt="Preview" />
                ) : (
                  <video src={previewMedia} controls />
                )}
              </div>
            )}
          </div>

          <button type="submit">Submit Sighting</button>
        </form>
      </div>
    </div>
  );
};

export default WildlifeSightingForm;

