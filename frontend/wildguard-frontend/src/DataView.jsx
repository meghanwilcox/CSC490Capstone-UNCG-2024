import React, { useState } from 'react';
import './styles/DataView.css';
import Navbar from './Navbar';

const DataView = () => {
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
  const [searchTerm, setSearchTerm] = useState('');
  const [isContentVisible, setIsContentVisible] = useState(false);
  
  const tooltipText = `
    <p>The following three prediction methods are commonly used in time series analysis, particularly for predicting population trends:</p>

    <h3>1. Long-Short Term Memory (LSTM)</h3>
    <p>LSTM is a type of recurrent neural network (RNN) specifically designed to model sequential data. It can learn long-term dependencies, making it suitable for time series forecasting. Here are some key features:</p>
    <ul>
        <li><strong>Memory Cells:</strong> LSTM networks have memory cells that maintain information over long periods, allowing them to remember past events that are crucial for making predictions.</li>
        <li><strong>Gating Mechanism:</strong> LSTMs utilize gates (input, output, and forget gates) to control the flow of information, enabling the network to learn when to remember or forget data.</li>
    </ul>

    <h3>2. Regression Analysis</h3>
    <p>Regression analysis is a statistical method used to model the relationship between a dependent variable and one or more independent variables. In the context of population prediction, it typically involves the following:</p>
    <ul>
        <li><strong>Linear Relationships:</strong> Linear regression assumes a straight-line relationship between the independent variable (e.g., time) and the dependent variable (population).</li>
        <li><strong>Coefficient Estimation:</strong> The method estimates coefficients that minimize the difference between observed and predicted values, allowing predictions based on historical data.</li>
        <li><strong>Limitations:</strong> While useful for capturing general trends, regression analysis may not effectively model complex patterns and fluctuations in time series data.</li>
    </ul>

    <h3>3. Blended Approach (LSTM + Regression)</h3>
    <p>This method leverages the strengths of both LSTM and regression analysis. It involves using LSTM to capture complex, non-linear relationships in the data while incorporating regression to maintain a trend. Key aspects include:</p>
    <ul>
        <li><strong>Hybrid Prediction:</strong> The LSTM model predicts the next population value, while the regression model provides a trend line that influences the prediction.</li>
        <li><strong>Trend Adjustment:</strong> The final prediction is adjusted by combining LSTM output with the regression prediction, allowing for realistic variations while adhering to the overall trend.</li>
        <li><strong>Improved Stability:</strong> This combined method enhances prediction stability and accuracy, making it particularly effective for long-term forecasting in dynamic systems like wildlife populations.</li>
    </ul>

    <p>For our purposes, regression analysis and blended approach can give a more accurate view of a species' time to extinction, but may lead to discontinuity.</p>
    <p>Whereas pure LSTM prediction and the blended approach can give a more accurate forecast of species populations that are growing, while giving inaccurate estimates of time to extinction, and in some cases, conflict with the trend of the known data..</p>
    <p>Which series of predictions are most useful for individual species are left to the user's discretion.</p>

  `;
  
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setIsDropdownVisible(true); 
  };

  const handleSelectPlot = (plot) => {
    setCurrentPlot(plot);
    setSearchTerm(''); // Clears the search box after selecting an entry
    setIsDropdownVisible(false); 
  };

  const filteredPlots = searchTerm
    ? plots.filter((plot) =>
        plot.label.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : plots; // Show all plots if no search term

  return (
    <div className="data-view-page">
      <Navbar />

      <div className="plot-navigation">
        <div className="species-dropdown-container">
          <input
            type="text"
            placeholder="Search species..."
            value={searchTerm}
            onChange={handleSearchChange}
            onFocus={() => setIsDropdownVisible(true)}
            className="species-search-input"
          />
          {isDropdownVisible && (
            <ul className="dropdown-list">
              {filteredPlots.map((plot, index) => (
                <li
                  key={index}
                  onClick={() => handleSelectPlot(plot)}
                  className="dropdown-item"
                >
                  {plot.label}
                </li>
              ))}
            </ul>
          )}
          
          <div className="tooltip-container">
            <span className="tooltip-icon" onClick={() => setIsContentVisible(!isContentVisible)}>?</span>
          </div>
        </div>

        {isContentVisible && (
          <div className="content-box" dangerouslySetInnerHTML={{ __html: tooltipText }} />
        )}
      </div>

      <div className="data-view-content">
        <h1>{currentPlot.title}</h1>
        <iframe
          src={`http://localhost:3000/${currentPlot.file}`} 
          title={currentPlot.title}
          style={{ width: '100%', height: '600px', border: 'none' }}
        />
      </div>
    </div>
  );
};

export default DataView;
