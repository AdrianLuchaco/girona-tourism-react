import React from 'react';

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.content}>
          <div style={styles.section}>
            <h4 style={styles.heading}>Girona Tourism</h4>
            <p style={styles.text}>Discover the magic of Catalonia's hidden gem</p>
          </div>
          
          <div style={styles.section}>
            <h4 style={styles.heading}>Contact</h4>
            <p style={styles.text}>📧 info@gironaturisme.cat</p>
            <p style={styles.text}>📞 +34 972 010 001</p>
          </div>
          
          <div style={styles.section}>
            <h4 style={styles.heading}>Follow Us</h4>
            <p style={styles.text}>🌐 Instagram | Facebook | Twitter</p>
          </div>
        </div>
        
        <div style={styles.bottom}>
          <p style={styles.copyright}>© 2024 Girona Tourism. Multimedia Project - UdG</p>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#2c3e50',
    color: '#fff',
    padding: '3rem 0 1rem',
    marginTop: '4rem',
    borderRadius: '0',
    position: 'relative',
    zIndex: 10,
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  content: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
    marginBottom: '2rem',
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  heading: {
    fontSize: '1.2rem',
    marginBottom: '0.5rem',
    color: '#ffffff',
    fontWeight: 'bold',
  },
  text: {
    fontSize: '0.9rem',
    margin: '0.25rem 0',
    color: '#ecf0f1',
  },
  bottom: {
    borderTop: '1px solid rgba(255,255,255,0.2)',
    paddingTop: '1rem',
    textAlign: 'center',
  },
  copyright: {
    margin: 0,
    fontSize: '0.9rem',
    color: '#bdc3c7',
  },
};

export default Footer;