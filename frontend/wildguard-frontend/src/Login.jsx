import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './styles/Login.css'; 

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
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {error && <p>{error}</p>}
      <button onClick={() => navigate('/register')} className="register-button">
        Register
      </button>
    </div>
  );
};

export default Login;
