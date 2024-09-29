import React from 'react';

const Footer = () => {
  return (
    <div>
        {/* Footer */}
        <footer styles={styles.footerSection}>
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
