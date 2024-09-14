// src/App.jsx
import React from 'react';
import { Outlet } from 'react-router-dom'; // Use Outlet for nested routes
import './styles/App.css'; // Keep the styling if necessary

const App = () => {
  return (
    <div className="app-container">
      {/* Any global layout components can go here, such as a navigation or footer */}

      {/* Render the children components for different routes */}
      <Outlet />

      {/* You can keep a global footer here if you need */}
    </div>
  );
};

export default App;
