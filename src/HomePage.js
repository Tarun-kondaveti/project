import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';  // Import the CSS module
import logo from './logo.png';
import usericon from './usericon.png'

const HomePage = () => {
  return (
    <div className={styles.homepage}>
      {/* Navbar */}
      <nav className={styles.navbar}>
        <div className={styles.navbarBrand}>Carbon Footprint Calculator</div>
        <div className={styles.navbarLinks}>
          <Link to="#what-we-do">What We Do</Link>
          <Link to="/faqs">FAQs</Link>
          <Link to="/about">About Us</Link>
          <a href='#contact'>Contact Us</a>
          <Link to="/my-account"><img className={styles.usericon} src={usericon} alt='user-icon' height={40} width={40}></img></Link>
        </div>
      </nav>

      {/* Main Section */}
      <section className={styles.mainSection}>
        <div className={styles.mainContent}>
          <div className={styles.logo}>
          <img src={logo} alt="Carbon Footprint Calculator" />
          </div>
          <h1>Save the Environment</h1>
          <p>
            Every small step towards afforestation helps reduce carbon footprints and contributes
            to a cleaner, healthier planet. Let's join hands in making the world greener The environment is the lifeblood of our planet, providing the air we breathe, the water we drink, and the food we eat. Saving the environment is crucial for our survival and the well-being of future generations. It's not just about preserving nature for its beauty; it's about safeguarding our own existence.

Understanding the importance of the environment is about recognizing the interconnectedness of all living things.</p> <p> From the smallest insect to the largest whale, every organism plays a role in the intricate web of life. When we harm the environment, we disrupt this delicate balance, leading to consequences that can have far-reaching effects.

Climate change, pollution, deforestation, and biodiversity loss are just some of the pressing environmental challenges we face. Addressing these issues requires collective action, a commitment to sustainable practices, and a shift in our relationship with the natural world. By embracing sustainable living, reducing our consumption, and advocating for environmental protection, we can make a difference in safeguarding the planet we call home.

Saving the environment is not just about making sacrifices; it's about investing in a healthier, more sustainable future. It's about creating a world where future generations can enjoy the same natural wonders we do today. It's about recognizing our responsibility as stewards of the Earth and taking action to protect it.
          </p>
        </div>
      </section>

      {/* Scroll Down Section */}
      <section className={styles.startprocess}>
        <Link to="/inputfromuser" className={styles.start}>Let's Get Started</Link>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div  id='contact'className={styles.contactInfo}>
          <h2 className={styles.contacttitle}>Contact Us</h2>
          <div className={styles.links}>
          <a href="mailto:contact@carbonfootprint.com">Gmail</a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
         <div className={styles.copyright}>
          &copy; 2024 Carbon Footprint Calculator. All rights reserved.
        </div>
      </footer>
     
    </div>
  );
};

export default HomePage;
