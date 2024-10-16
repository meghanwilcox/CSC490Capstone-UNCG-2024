import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo 2 transparent.png';
import { AuthContext } from './AuthContext'; // Import AuthContext
import './styles/Navbar.css'; // Import the CSS file

const Navbar = () => {
  const { isLoggedIn, user, logout } = useContext(AuthContext); // Destructure user from AuthContext

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" className="logoImage" />
        </Link>
      </div>
      <ul className="navLinks">
        <li className="navItem">
          <Link to="/about" className="link">About Us</Link>
        </li>
        <li className="navItem">
          <Link to="/species-search" className="link">Species Search</Link>
        </li>
        <li className="navItem">
          <Link to="/map-page" className="link">Interactive Map</Link>
        </li>

        {/* If the user is logged in, check the is_researcher field */}
        {isLoggedIn ? (
          <>
            {/* Links for all logged-in users */}
            <li className="navItem">
              <Link to="/wildlife-sighting-form" className="link">Report Sighting</Link>
            </li>

            {/* Additional link only for researchers (is_researcher === 1) */}
            {user && user.is_researcher === true && (
              <li className="navItem">
                <Link to="/data-view" className="link">Predictive Data</Link>
              </li>
            )}

            {/* Links for all logged-in users */}
            <li className="navItem">
              <Link to="/user-profile" className="link">Profile</Link>
            </li>
            <li className="navItem">
              <button onClick={logout} className="buttonLink">Logout</button>
            </li>
          </>
        ) : (
          // If the user is NOT logged in, show the Login link
          <li className="navItem">
            <Link to="/login" className="link">Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
