import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './styles/Login.css';
// import woodpeckerGif from './assets/wired-gradient-1144-woodpecker-hover-pinch.gif'; // Path to the .gif file
import logo from './assets/logo 2 transparent.png'; // Adjust the path to your logo

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

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
    <div className="login-page">
      <header className="login-header">
  <Link to="/">
    <img src={logo} alt="WildGuard Logo" className="logo-image" />
  </Link>
</header>


      <div className="login-wrapper">
        <div className="login-container">
          <div className="login-header-with-gif">
            <h1>Login</h1>
            {/* <img src={woodpeckerGif} alt="Woodpecker pecking" className="woodpecker" /> */}
          </div>
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
    </div>
  );
};

export default Login;
