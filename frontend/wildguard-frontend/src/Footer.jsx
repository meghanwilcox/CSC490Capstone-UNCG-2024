import React from 'react';
import './styles/Footer.css'

const Footer = () => {
  return (
    <div id="footer-div">
        {/* Footer */}
        <footer >
          <p>&copy; 2024 WildGuard. All rights reserved.</p>
        </footer>
    </div> 
  );
};

const styles = {
  footerSection: {
    color: 'black',
    padding: '1rem',
    textAlign: 'center',
  }
};

export default Footer;
