import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './styles/Register.css';
import bearGif from './assets/wired-outline-1203-bear-hover-pinch.gif';
import logo from './assets/logo 2 transparent.png'; // Adjust the path to your logo

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/users/create/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, name }),
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
    <div className="register-page">
      {/* Header/Banner */}
      <header className="register-header">
        <Link to="/" className="logo">
          <img src={logo} alt="WildGuard Logo" className="logo-image" />
        </Link>
      </header>

      <div className="register-container">
        <h1>Create an Account</h1>
        <img src={bearGif} alt="Bear GIF" className="bear-gif" />
        <form onSubmit={handleSubmit}>
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
    </div>
  );
};

export default Register;
