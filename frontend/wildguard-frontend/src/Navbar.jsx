import React from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router
import logo from './assets/logo 2 transparent.png'; // Replace with the path to your logo image

const Navbar = () => {
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
          <Link to="/species-search" style={styles.link}>Educational Content</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/wildlife-sighting-form" style={styles.link}>Map Sightings</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/login" style={styles.link}>Login</Link>
        </li>
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
    height: '100px', // Adjust the height as needed
  },
  navLinks: {
    listStyleType: 'none',
    display: 'flex',
    margin: 0,
    padding: 0,
    flexGrow: 1, // Allow nav links to grow
    justifyContent: 'flex-end', // Align links to the right
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
};

// Media query styles for better responsiveness
const mediaStyles = `
  @media (max-width: 600px) {
    .navLinks {
      flex-direction: column; // Stack items on small screens
      align-items: center; // Center items
    }
    .navItem {
      margin: 10px 0; // Add margin for vertical spacing
    }
  }
`;

export default Navbar;
