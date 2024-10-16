import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './styles/Login.css';
import { AuthContext } from './AuthContext';
import Navbar from './Navbar'; 
import Footer from './Footer';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/users/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Login successful:', data);

        
        login(data.user);
        
        navigate('/');
      } else {
        const errorData = await response.json();
        alert('Login failed: ' + (errorData.error || 'An error occurred'));
        setError(errorData.error || 'An error occurred');
      }
    } catch (err) {
      console.error('Error:', err);
      alert('An error occurred during login');
      setError('An error occurred');
    }
  };

  return (
    <>
      <Navbar />

      {/* Main Content */}
      <div className="login-wrapper">
        <div className="login-container">
          <div className="login-header-with-gif">
            <h1>Login</h1>
          </div>
          <form onSubmit={handleSubmit}>
            {/* ... form fields ... */}
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
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className="error-message">{error}</p>}
            <button type="submit">Login</button>
          </form>
          <p className="register-prompt">
            Don't have an account? <Link to="/register">Register here</Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;