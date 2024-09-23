import React, { useState } from 'react';
import './styles/DataView.css';
import Navbar from './Navbar';

const DataView = () => {

  return (
    <div className="data-view-page">
      {/* Header/Banner */}
      <Navbar/>

      {/* Main Content */}
      <div className="data-view-content">
        <h1>Add your content here Billy.</h1>
      </div>
    </div>
  );
};

export default DataView;

