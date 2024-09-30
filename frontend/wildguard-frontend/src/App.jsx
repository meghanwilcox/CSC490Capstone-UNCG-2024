// App.jsx
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

  return (
    <div className="app-container">
      <Navbar />
      <section className="hero-section">
        <div className="hero-overlay">
          <div id='attention'>
            <img src={logo} alt="WildGuard Logo" className="hero-logo" />
            <p>Community Wildlife Conservtion Monitoring</p>
            <div className="features">
              <Link to="/species-search" className="feature clickable-feature">
                <div className="feature-icon">
                  <span role="img" aria-label="Search">&#128269;</span>
                </div>
                <h3>Species Search</h3>
                <p>Search for various species and learn more about them.</p>
              </Link>
              <Link to="/wildlife-sighting-form" className="feature clickable-feature">
                <div className="feature-icon">
                <span role="img" aria-label="Lion">🦁</span>
                </div>
                <h3>Report an Endangerd Species Sighting</h3>
                <p>Be a part of the effort to gain knowledge on dwindling species numbers!</p>
              </Link>
              <Link to="/map-page" className="feature clickable-feature">
                <div className="feature-icon">
                  <span role="img" aria-label="Globe">&#127758;</span> 
                </div>
                <h3>Explore the Map</h3>
                <p>Explore geographical data abot species sightings reported by our users.</p>
              </Link>
              <Link to="/about" className="feature clickable-feature">
                <div className="feature-icon">
                  <span role="img" aria-label="question">❓</span>
                </div>
                <h3>About Us</h3>
                <p>Learn about what we do, why we do it, and our impact.</p>
              </Link>
            </div>
          </div>
          <br/>
          <br/>

          <div class='content'>
            <h2>
              Do you want to get involved with wildlife conservation in your area? If you are an avid wildlife lover, help us track and monitor endangered species by uploading
              valid sighitngs to our site, where you can compare and explore other users sighitngs as well! These sightings help us and our users be more knowledgeable about species 
              populations in their area, and help conservationists focus their efforts in areas of need.
            </h2>
            <br/>
            <Link to="/register" className="link-app">
              <div className='link-app-div'>
              <h2>Create an Account to Get Started!</h2>
              </div>
            </Link>
          </div>

          <div class='content2'>
            <div>
              <h2>Machine Learning in Action!</h2>
              <img src='/ml.png' alt="ml" className="hero-logo" />
            </div>
            <div class='ml-div'>
              <h2>
                Are you a researcher or conservationist professional? If so, you could have access to our cutting edge predictive data on species populations! Valid researcher users can 
                gain access to machine learning predictive population models on species data for some of the top studied endangered species! 
              </h2>
              <br/>
              <Link to="/data-view" className="link-app">
              <div className='link-app-div'>
              <h2>View Predictive Data</h2>
              </div>
            </Link>
            </div>
          </div>

          <div class='content2'>
            <div>
              <h2>How Else Can You Help?</h2>
              <img src='/elephant.png' alt="ml" className="hero-logo" />
            </div>
            <div class='ml-div'>
              <h2>
                If you are looking for more ways to help conservation efforts, consider donating to one of the conservation organizations linked below! 
              </h2>
              <br/>
              <Link to="https://protect.worldwildlife.org/page/53495/donate/1?en_og_source=SearchAd_Donation&ea.tracking.id=PaidAd_Bing_Membership&supporter.appealCode=AWE1800OQ18695A01430RX&msclkid=b47778fb94411a4837b41e010c494a23&utm_source=bing&utm_medium=cpc&utm_campaign=Brand&utm_term=wwf&utm_content=WWF" className="link-app">
                <div className='link-app-div'>
                <h2>World Wildlife Fund</h2>
                </div>
              </Link>
              <br/>
              <Link to="https://iucn.org/" className="link-app">
                <div className='link-app-div'>
                <h2>International Union for Conservation of Nature</h2>
                </div>
              </Link>
              <br/>
              <Link to="https://oceana.org/" className="link-app">
                <div className='link-app-div'>
                <h2>Oceana</h2>
                </div>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
