import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo 2 transparent.png';
import { AuthContext } from './AuthContext'; // Import AuthContext

const Navbar = () => {
  const { isLoggedIn, user, logout } = useContext(AuthContext); // Use AuthContext

  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>
        <Link to="/">
          <img src={logo} alt="Logo" style={styles.logoImage} />
        </Link>
      </div>
      <ul style={styles.navLinks}>
        <li style={styles.navItem}>
          <Link to="/about" style={styles.link}>About Us</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/species-search" style={styles.link}>Species Search</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/wildlife-sighting-form" style={styles.link}>Report Sighting</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/map-page" style={styles.link}>Interactive Map</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/data-view" style={styles.link}>Predictive Data</Link>
        </li>
        {isLoggedIn ? (
          <>
            <li style={styles.navItem}>
              <Link to="/user-profile" style={styles.link}>
                {'Profile'}
              </Link>
            </li>
            <li style={styles.navItem}>
              <button onClick={logout} style={styles.buttonLink}>Logout</button>
            </li>
          </>
        ) : (
          <li style={styles.navItem}>
            <Link to="/login" style={styles.link}>Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'white',
    padding: '10px 20px',
    flexWrap: 'wrap', // Allow items to wrap
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
  },
  logoImage: {
    height: '100px',
  },
  navLinks: {
    listStyleType: 'none',
    display: 'flex',
    margin: 0,
    padding: 0,
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  navItem: {
    marginLeft: '20px',
    marginRight: '20px',
  },
  link: {
    color: 'black',
    textDecoration: 'none',
    fontSize: '15pt',
  },
  buttonLink: {
    background: 'none',
    border: 'none',
    color: 'black',
    textDecoration: 'none',
    fontSize: '15pt',
    cursor: 'pointer',
    padding: 0,
    margin: 0,
  },
};

export default Navbar;
