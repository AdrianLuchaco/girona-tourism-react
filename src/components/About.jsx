import React, { useRef, useState } from 'react';

function About() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
      // Notificar a MediaGallery que reprodueixi el vídeo
      window.dispatchEvent(new CustomEvent('playVideo'));
    }
    setIsPlaying(!isPlaying);
  };

  // Escoltar quan el vídeo es reprodueix
  React.useEffect(() => {
    const handleVideoPlay = () => {
      if (!isPlaying && audioRef.current) {
        audioRef.current.play();
        setIsPlaying(true);
      }
    };

    window.addEventListener('videoPlayed', handleVideoPlay);
    return () => window.removeEventListener('videoPlayed', handleVideoPlay);
  }, [isPlaying]);

  return (
    <section id="about" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.heading}>About Girona</h2>
        <div style={styles.content}>
          <div style={styles.textContent}>
            <p style={styles.text}>
              Girona is a city in Catalonia, Spain, with a rich history dating back over 2,000 years. 
              Known for its well-preserved medieval architecture, colorful houses along the Onyar River, 
              and stunning Gothic cathedral, Girona offers visitors an authentic Catalan experience.
            </p>
            <p style={styles.text}>
              The Jewish Quarter (El Call) is one of the best-preserved in Europe, and the city walls 
              provide breathtaking views of the surrounding landscape. From gastronomy to culture, 
              Girona has something for everyone.
            </p>
            
            <div style={styles.audioSection}>
              <h3 style={styles.audioTitle}>🎧 Audio Guide</h3>
              <audio ref={audioRef} src="/girona-audio-guide.mp3" />
              <button onClick={toggleAudio} style={styles.audioButton}>
                {isPlaying ? '⏸️ Pause Guide' : '▶️ Play Audio Guide'}
              </button>
            </div>
          </div>
          
          <div style={styles.imageContainer}>
            <img 
              src="/girona-cathedral-edited.jpg" 
              alt="Girona Cathedral" 
              style={styles.image}
            />
            <p style={styles.imageCaption}>Girona Cathedral - Edited Image</p>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '4rem 0',
    backgroundColor: 'transparent',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  heading: {
    fontSize: '2.5rem',
    color: '#2c3e50',
    marginBottom: '2rem',
    textAlign: 'center',
    fontFamily: '"Georgia", serif',
  },
  content: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '3rem',
    alignItems: 'start',
  },
  textContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  text: {
    fontSize: '1.1rem',
    lineHeight: '1.8',
    color: '#555',
  },
  audioSection: {
    marginTop: '2rem',
    padding: '1.5rem',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  },
  audioTitle: {
    fontSize: '1.3rem',
    marginBottom: '1rem',
    color: '#2c3e50',
  },
  audioButton: {
    padding: '12px 24px',
    fontSize: '1rem',
    backgroundColor: '#3498db',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  imageContainer: {
    textAlign: 'center',
  },
  image: {
    width: '100%',
    borderRadius: '10px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
  },
  imageCaption: {
    marginTop: '1rem',
    fontSize: '0.9rem',
    color: '#777',
    fontStyle: 'italic',
  },
};

export default About;