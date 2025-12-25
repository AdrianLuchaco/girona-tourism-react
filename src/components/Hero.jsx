import React from 'react';

function Hero() {
  return (
    <section style={styles.hero}>
      <div style={styles.overlay}>
        <h1 style={styles.title}>Discover Girona</h1>
        <p style={styles.subtitle}>A Medieval Gem in Catalonia</p>
      </div>
    </section>
  );
}

const styles = {
  hero: {
    height: '400px', // Reduït de 600px a 400px
    backgroundImage: 'url(/girona-cathedral-edited.jpg)', // Imatge de la catedral
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Opacitat més alta per veure bé el text
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: '3.5rem', // Una mica més petit també
    margin: 0,
    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
  },
  subtitle: {
    color: '#fff',
    fontSize: '1.3rem',
    marginTop: '1rem',
  },
};

export default Hero;