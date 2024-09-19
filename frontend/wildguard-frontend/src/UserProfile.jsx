import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles/UserProfile.css';
import placeholderImage from './assets/neon-demon-slayer-tengen-uzui-cw5wj06w8h06hkao.jpg';

const UserProfile = () => {
  const navigate = useNavigate();

  const storedUser = JSON.parse(localStorage.getItem('user'));
  const [user, setUser] = useState(storedUser || {});

  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...user });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({
      ...editedUser,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:8000/users/update-profile/', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: user.user_id,
        name: editedUser.name,
        email: editedUser.email,
        bio: editedUser.bio,
      }),
    });

    if (response.ok) {
      const updatedUser = await response.json();
      setUser(updatedUser);  
      setIsEditing(false);
      localStorage.setItem('user', JSON.stringify(updatedUser));  
    } else {
      console.error('Error saving profile:', response.statusText);
      alert('Failed to update profile. Please try again.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user');     
    localStorage.removeItem('user_id');  
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
      </header>  {/* Correctly closing the header tag here */}

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
              {/* Link to Wildlife Sighting Form */}
              <Link to="/wildlife-sighting-form" className="submit-sighting-button">
                Submit Wildlife Sighting
              </Link>
              {/* Add buttons to Map Page and Species Options */}
              <Link to="/map-page" className="map-page-button">
                View Map
              </Link>
              <Link to="/species-options" className="species-options-button">
                Explore Species
              </Link>
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
      </div>
    </div>
  );
};

export default UserProfile;
