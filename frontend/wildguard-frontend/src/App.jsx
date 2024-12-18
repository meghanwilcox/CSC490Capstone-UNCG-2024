import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles/App.css';
import logo from './assets/logo 2 transparent.png'; 
import { AuthContext } from './AuthContext'; 
import Navbar from './Navbar';
import Footer from './Footer';

const App = () => {
  const { isLoggedIn, logout, user } = useContext(AuthContext); 
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');                      
  };

  // Handle report sighting click based on whether the user is logged in
  const handleReportSighting = () => {
    if (isLoggedIn) {
      navigate('/wildlife-sighting-form'); 
    } else {
      navigate('/login'); 
    }
  };

  // Handle classify photo click based on whether the user is logged in
  const handleClassifyPhoto = () => {
    if (isLoggedIn) {
      navigate('/classify-photo'); 
    } else {
      navigate('/login'); 
    }
  };

  // Handle predictive data click with researcher check
  const handleViewPredictiveData = () => {
    if (isLoggedIn) {
      if (user?.is_researcher) {
        navigate('/data-view'); // If the user is a researcher, go to the data view page
      } else {
        alert('Only researchers can view predictive data.'); // Alert if not a researcher
        navigate('/login'); 
      }
    } else {
      navigate('/login'); 
    }
  };

  return (
    <div className="app-container">
      <Navbar />
      <section className="app-hero-section">
        <div className="app-hero-overlay">
          <div id='app-attention'>
            <img src={logo} alt="WildGuard Logo" className="app-hero-logo" />
            <p>Community Wildlife Conservation Monitoring</p>
            <div className="app-features">
              <Link to="/species-search" className="app-feature app-clickable-feature">
                <div className="app-feature-icon">
                  <span role="img" aria-label="Search">&#128269;</span>
                </div>
                <h3>Species Search</h3>
                <p>Search for various species and learn more about them.</p>
              </Link>

              {/* Replace Link with a button and handle login check */}
              <div className="app-feature app-clickable-feature" onClick={handleReportSighting}>
                <div className="app-feature-icon">
                  <span role="img" aria-label="Lion">🦁</span>
                </div>
                <h3>Report an Endangered Species Sighting</h3>
                <p>Be a part of the effort to gain knowledge on dwindling species numbers!</p>
              </div>

              <Link to="/map-page" className="app-feature app-clickable-feature">
                <div className="app-feature-icon">
                  <span role="img" aria-label="Globe">&#127758;</span> 
                </div>
                <h3>Explore the Map</h3>
                <p>Explore geographical data about species sightings reported by our users.</p>
              </Link>
              <Link to="/about" className="app-feature app-clickable-feature">
                <div className="app-feature-icon">
                  <span role="img" aria-label="question">❓</span>
                </div>
                <h3>About Us</h3>
                <p>Learn about what we do, why we do it, and our impact.</p>
              </Link>
            </div>
          </div>
          <br/>
          <br/>

          <div className='app-content'>
            <h2>
              Do you want to get involved with wildlife conservation in your area? If you are an avid wildlife lover, help us track and monitor endangered species by uploading
              valid sightings to our site, where you can compare and explore other users' sightings as well! These sightings help us and our users be more knowledgeable about species 
              populations in their area and help conservationists focus their efforts in areas of need.
            </h2>
            <br/>
            <Link to="/register" className="app-link-app">
              <div className='app-link-app-div'>
                <h2>Create an Account to Get Started!</h2>
              </div>
            </Link>
          </div>

          <div className='app-content2'>
            <div>
              <h2>Machine Learning in Action!</h2>
              <img src='/ml.png' alt="ml" className="app-hero-logo" />
            </div>
            <div className='app-ml-div'>
              <h2>
                Are you a researcher or conservationist professional? If so, you could have access to our cutting-edge predictive data on species populations! Valid researcher users can 
                gain access to machine learning predictive population models on species data for some of the top-studied endangered species! 
              </h2>
              <br/>
              <div className='app-link-app-div app-clickable-feature' onClick={handleViewPredictiveData}>
                <h2 style={{color: 'black'}}>View Predictive Data</h2>
              </div>
              <br/>
              <h2>In addition, our users can utilize our advanced neural network model to classify the animal species from a photograph! Sign up and submit your photograph today!</h2>
              
              <div className='app-link-app-div app-clickable-feature' onClick={handleClassifyPhoto}>
                <h2 style={{color: 'black'}}>Classify your Photograph</h2>
              </div>
            </div>
          </div>

          <div className='app-content2'>
            <div>
              <h2>How Else Can You Help?</h2>
              <img src='/elephant.png' alt="ml" className="app-hero-logo" />
            </div>
            <div className='app-ml-div'>
              <h2>
                If you are looking for more ways to help conservation efforts, consider donating to one of the conservation organizations linked below! 
              </h2>
              <br/>
              <a href="https://protect.worldwildlife.org/page/53495/donate/1?en_og_source=SearchAd_Donation&ea.tracking.id=PaidAd_Bing_Membership&supporter.appealCode=AWE1800OQ18695A01430RX&msclkid=b47778fb94411a4837b41e010c494a23&utm_source=bing&utm_medium=cpc&utm_campaign=Brand&utm_term=wwf&utm_content=WWF" className="app-link-app" target="_blank" rel="noopener noreferrer">
                <div className='app-link-app-div'>
                  <h2>World Wildlife Fund</h2>
                </div>
              </a>
              <br/>
              <a href="https://iucn.org/" className="app-link-app" target="_blank" rel="noopener noreferrer">
                <div className='app-link-app-div'>
                  <h2>International Union for Conservation of Nature</h2>
                </div>
              </a>
              <br/>
              <a href="https://oceana.org/" className="app-link-app" target="_blank" rel="noopener noreferrer">
                <div className='app-link-app-div'>
                  <h2>Oceana</h2>
                </div>
              </a>
            </div>
          </div>

        </div>
      </section>

{/*       
      <Footer /> */}
    </div>
  );
};

export default App;
