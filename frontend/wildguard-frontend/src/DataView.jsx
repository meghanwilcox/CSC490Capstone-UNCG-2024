import React, { useState } from 'react';
import './styles/DataView.css';
import Navbar from './Navbar';
import Footer from './Footer';

const DataView = () => {
  // list of plot objects with file names and custom labels/titles
  const plots = [
    { file: 'buffalo_population_plot.html', label: 'Wild Water Buffalo Population', title: 'Wild Water Buffalo Population Plot' },
    { file: 'california_condor_population_plot.html', label: 'California Condor Population', title: 'California Condor Population Plot' },
    { file: 'flyingfox_population_plot.html', label: 'Rodrigues Flying Fox Population', title: 'Rodrigues Flying Fox Population Plot' },
    { file: 'greenshank_population_plot.html', label: 'Nordmann\'s Greenshank Population', title: 'Nordmann\'s Greenshank Population Plot' },
    { file: 'guanaco_population_plot.html', label: 'Guanaco Population', title: 'Guanaco Population Plot' },
    { file: 'hyena_population_plot.html', label: 'Brown Hyena Population', title: 'Brown Hyena Population Plot' },
    { file: 'ibex_population_plot.html', label: 'Walia Ibex Population', title: 'Walia Ibex Population Plot' },
    { file: 'nyala_population_plot.html', label: 'Mountain Nyala Population', title: 'Mountain Nyala Population Plot' },
    { file: 'parrot_population_plot.html', label: 'Yellow-Eared Parrot Population', title: 'Yellow-Eared Parrot Population Plot' },
    { file: 'platypus_population_plot.html', label: 'Platypus Population', title: 'Platypus Population Plot' },
    { file: 'snow_leopard_population_plot.html', label: 'Snow Leopard Population', title: 'Snow Leopard Population Plot' },
    { file: 'tur_population_plot.html', label: 'West Caucasus Tur Population', title: 'West Caucasus Tur Population Plot' }
  ];

  const [currentPlot, setCurrentPlot] = useState(plots[0]);

  return (
    <div className="data-view-page">
      <Navbar />

      <div className="plot-navigation">
        {plots.map((plot, index) => (
          <button
            key={index}
            onClick={() => setCurrentPlot(plot)}
            className="plot-button"
          >
            {plot.label}
          </button>
        ))}
      </div>

      <div className="data-view-content">
        <h1>{currentPlot.title}</h1>
        <iframe
          src={`http://localhost:3000/${currentPlot.file}`} 
          //The above prefix will have to be changed if you are using a different port or if we deploy to a final website
          title={currentPlot.title}
          style={{ width: '100%', height: '600px', border: 'none' }}
        />
      </div>
      <Footer />
    </div>
  );
};

export default DataView;
