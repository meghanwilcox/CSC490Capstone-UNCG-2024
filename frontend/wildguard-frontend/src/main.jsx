import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Login from './Login'; 
import Register from './Register';
import SpeciesSearchPage from './SpeciesSearch';
import SpeciesDetail from './SpeciesDetail';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} /> 
      <Route path="/register" element={<Register />} />
      <Route path="/species-search" element={<SpeciesSearchPage />} />
      <Route path="/detail/:scientificName" element={<SpeciesDetail />} />
      </Routes>
  </Router>
);
