// src/UserProfile.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './styles/UserProfile.css';
import placeholderImage from './assets/profile-placeholder.png'; 

const UserProfile = () => {
  const user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    profilePicture: null, 
    bio: 'Wildlife enthusiast and photographer.',
    
  };

  return (
    <div className="user-profile-page">
      {/* Header/Banner */}
      <header className="user-profile-header">
        <Link to="/" className="logo">WildGuard</Link>
      </header>

      {/* Main Content */}
      <div className="user-profile-content">
        <div className="profile-card">
          <div className="profile-image">
            <img src={user.profilePicture || placeholderImage} alt={`${user.name}'s profile`} />
          </div>
          <div className="profile-info">
            <h1>{user.name}</h1>
            <p className="email">{user.email}</p>
            <p className="bio">{user.bio}</p>
            <button className="edit-profile-button">Edit Profile</button>
          </div>
        </div>

        {/* User's Sightings */}
        <div className="user-sightings">
          <h2>Your Recent Sightings</h2>
          {/* Placeholder for sightings list */}
          <p>You have not submitted any sightings yet.</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
