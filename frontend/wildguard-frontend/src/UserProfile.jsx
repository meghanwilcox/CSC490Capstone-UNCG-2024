// src/UserProfile.jsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles/UserProfile.css';
import placeholderImage from './assets/profile-placeholder.png';

const UserProfile = () => {
  const navigate = useNavigate();

  // Simulated user data (replace with actual data from your backend)
  const [user, setUser] = useState({
    user_id: 1,
    name: 'Jane Smith',
    email: 'janesmith@example.com',
    role: 'Researcher', // or 'Volunteer'
    profilePicture: null,
    bio: 'Researcher focused on wildlife conservation.',
  });

  // State to manage edit mode
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...user });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({
      ...editedUser,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Update user data (send to backend)
    setUser({ ...editedUser });
    setIsEditing(false);
    // Implement API call to update user data on the backend
  };

  // Handle logout
  const handleLogout = () => {
    // Implement logout functionality
    navigate('/login');
  };

  return (
    <div className="user-profile-page">
      {/* Header/Banner */}
      <header className="user-profile-header">
        <Link to="/" className="logo">
          WildGuard
        </Link>
        <nav>
          <button onClick={handleLogout} className="nav-button">
            Logout
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <div className="user-profile-content">
        <div className="profile-card">
          <div className="profile-image">
            <img
              src={user.profilePicture || placeholderImage}
              alt={`${user.name}'s profile`}
            />
          </div>
          {!isEditing ? (
            <div className="profile-info">
              <h1>{user.name}</h1>
              <p className="email">{user.email}</p>
              <p className="role">Role: {user.role}</p>
              <p className="bio">{user.bio}</p>
              <button
                className="edit-profile-button"
                onClick={() => setIsEditing(true)}
              >
                Edit Profile
              </button>
            </div>
          ) : (
            <form className="edit-profile-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={editedUser.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={editedUser.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Bio:</label>
                <textarea
                  name="bio"
                  value={editedUser.bio}
                  onChange={handleChange}
                ></textarea>
              </div>
              {/* Additional fields if necessary */}
              <button type="submit" className="save-button">
                Save Changes
              </button>
              <button
                type="button"
                className="cancel-button"
                onClick={() => {
                  setIsEditing(false);
                  setEditedUser({ ...user });
                }}
              >
                Cancel
              </button>
            </form>
          )}
        </div>

        {/* Conditional Content Based on Role */}
        {user.role === 'Researcher' ? (
          <div className="researcher-content">
            <h2>Researcher Dashboard</h2>
            <p>Access to advanced data and sighting validations.</p>
            {/* Implement additional researcher functionalities here */}
          </div>
        ) : (
          <div className="volunteer-content">
            <h2>Your Recent Sightings</h2>
            <p>You have not submitted any sightings yet.</p>
            {/* Implement additional volunteer functionalities here */}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
