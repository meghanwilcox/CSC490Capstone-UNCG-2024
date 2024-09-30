import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './styles/Register.css';
import Navbar from './Navbar';
import Footer from './Footer';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isResearcher, setIsResearcher] = useState(false); // State for the checkbox
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate email if the user is a researcher
    if (isResearcher && !email.endsWith('.edu')) {
      setError('Email must end with .edu when registering as a researcher.');
      return; // Stop the form submission
    }

    try {
      const response = await fetch('http://localhost:8000/users/create/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, name, is_researcher: isResearcher }), // Include is_researcher
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Registration successful:', data);
        navigate('/login');
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'An error occurred');
      }
    } catch (err) {
      console.error('Error:', err);
      setError('An error occurred');
    }
  };

  return (
    <div>
      <Navbar />

      {/* Main Content */}
      <div className="register-container">
        <h1>Create an Account</h1>
        <h3 id='info-reg'>
          Create an account with us to be able to submit wildlife sightings, and contribute to monitoring populations!
          If you are a verified researcher and can register with your university email, you will gain access to viewing machine learning powered predictive population data!
        </h3>
        <br />
        <form onSubmit={handleSubmit}>
          <label>
            <input
              type="checkbox"
              name="isResearcher"
              checked={isResearcher}
              onChange={() => setIsResearcher(!isResearcher)} // Toggle checkbox state
            />
            Are you a Researcher?
          </label>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              placeholder="Create a password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              value={name}
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit">Register</button>
        </form>
        <p className="login-prompt">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
