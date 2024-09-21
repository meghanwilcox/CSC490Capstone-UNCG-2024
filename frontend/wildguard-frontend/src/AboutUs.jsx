import React from 'react';
import Navbar from './Navbar'; // Adjust the import path if necessary

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <div style={styles.container}>
        <h1>About Us</h1>
        <p>
          Welcome to WildGuard! Our mission is to protect endangered species
          and educate the public about wildlife conservation. We are a team
          dedicated to making a positive impact on the environment and
          ensuring that future generations can enjoy the beauty of nature.
        </p>
        <h2>Our Goals</h2>
        <ul>
          <li>Raise awareness about endangered species.</li>
          <li>Provide educational resources for wildlife protection.</li>
          <li>Engage communities in conservation efforts.</li>
        </ul>
        <h2>Join Us</h2>
        <p>
          Get involved in our initiatives and help us make a difference.
          Together, we can create a better future for wildlife.
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'left',
  },
};

export default AboutUs;
