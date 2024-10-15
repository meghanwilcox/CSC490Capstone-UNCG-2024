// UserProfile.jsx
import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles/UserProfile.css';
import placeholderImage from './assets/neon-demon-slayer-tengen-uzui-cw5wj06w8h06hkao.jpg';
import { AuthContext } from './AuthContext';
import Navbar from './Navbar';
import Footer from './Footer';

const UserProfile = () => {
  const navigate = useNavigate();
  const { user, logout, updateUser } = useContext(AuthContext);

  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...user });
  const [isModalOpen, setIsModalOpen] = useState(false); 

  useEffect(() => {
    if (!user) {
      navigate('/login'); 
    }
  }, [user, navigate]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'profilePicture') {
      setEditedUser({
        ...editedUser,
        profilePicture: files[0],
      });
    } else {
      setEditedUser({
        ...editedUser,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('user_id', user.user_id);
    formData.append('name', editedUser.name);
    formData.append('email', editedUser.email);
    formData.append('bio', editedUser.bio);

    if (editedUser.profilePicture) {
      formData.append('profilePicture', editedUser.profilePicture);
    }

    const response = await fetch('http://localhost:8000/users/update-profile/', {
      method: 'PUT',
      body: formData,
    });

    if (response.ok) {
      const updatedUser = await response.json();
      updateUser(updatedUser);
      setIsEditing(false);
    } else {
      console.error('Error saving profile:', response.statusText);
      alert('Failed to update profile. Please try again.');
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (!user) {
    return null; 
  }

  return (
    <>
      <Navbar />

      {/* Main Content */}
      <div className="user-profile-content">
        <div className="profile-card">
          <div 
            className="profile-image" 
            onClick={() => setIsModalOpen(true)} 
            style={{ cursor: 'pointer' }}
          >
            <img
              src={user.profilePicture ? user.profilePicture : placeholderImage}              
              alt={`${user.name}'s enlarged profile`}
            />
          </div>
          {!isEditing ? (
            <div className="profile-info">
              <h1>{user.name}</h1>
              <p className="email">{user.email}</p>
              <p className="role">Role: {user.role}</p>
              <p className="bio">{user.bio}</p>
              <button
                className="button edit-profile-button"
                onClick={() => setIsEditing(true)}
              >
                Edit Profile
              </button>
              {/* Link to Wildlife Sighting Form */}
              <Link to="/wildlife-sighting-form" className="button submit-sighting-button">
                Submit Wildlife Sighting
              </Link>
              {/* Add button to Map Page */}
              <Link to="/map-page" className="button map-page-button">
                View Map
              </Link>
              {/* Logout Button */}
              <button className="button logout-button" onClick={handleLogout}>
                Logout
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
              <div className="form-group">
                <label>Profile Picture:</label>
                <input
                  type="file"
                  name="profilePicture"
                  accept="image/*"
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="button save-button">
                Save Changes
              </button>
              <button
                type="button"
                className="button cancel-button"
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

      {/* Modal for Enlarged Profile Picture */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={() => setIsModalOpen(false)}>
              &times;
            </span>
            <img
              src={user.profilePicture ? user.profilePicture : placeholderImage}
              alt={`${user.name}'s enlarged profile`}
              className="modal-image"
            />

          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default UserProfile;
