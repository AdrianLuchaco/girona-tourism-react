import React from 'react';

function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <h1 style={styles.logo}>Girona Tourism</h1>
        <nav style={styles.nav}>
          <a href="#about" style={styles.link}>About</a>
          <a href="#media" style={styles.link}>Gallery</a>
          <a href="#activities" style={styles.link}>Activities</a>
        </nav>
      </div>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: '#2c3e50',
    padding: '1rem 0',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    color: '#fff',
    margin: 0,
    fontSize: '1.8rem',
  },
  nav: {
    display: 'flex',
    gap: '2rem',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1.1rem',
    transition: 'color 0.3s',
  },
};

export default Header;