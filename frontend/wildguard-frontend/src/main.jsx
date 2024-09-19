// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Login from './Login';
import Register from './Register';
import SpeciesSearchPage from './SpeciesSearch';
import SpeciesDetail from './SpeciesDetail';

import WildlifeSightingForm from './WildlifeSightingForm'; 
import UserProfile from './UserProfile'; 
import MapPage from './MapPage';
import { AuthProvider } from './AuthContext'; 

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<App />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
         
        <Route path="/species-search" element={<SpeciesSearchPage />} />
        <Route path="/detail/:scientificName" element={<SpeciesDetail />} />
        <Route path="/wildlife-sighting-form" element={<WildlifeSightingForm />} /> 
        <Route path="/user-profile" element={<UserProfile />} /> 
        <Route path="/map-page" element={<MapPage />} /> 
      </Routes>
    </Router>
  </AuthProvider>
);
