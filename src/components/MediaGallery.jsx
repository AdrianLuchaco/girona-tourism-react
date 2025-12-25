import React, { useRef, useEffect } from 'react';

function MediaGallery() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0.3; // 30% de volum
    }

    // Escoltar quan l'àudio es reprodueix
    const handlePlayVideo = () => {
      if (videoRef.current && videoRef.current.paused) {
        videoRef.current.play();
      }
    };

    // Escoltar quan el vídeo es reprodueix
    const handleVideoPlay = () => {
      window.dispatchEvent(new CustomEvent('videoPlayed'));
    };

    window.addEventListener('playVideo', handlePlayVideo);
    if (videoRef.current) {
      videoRef.current.addEventListener('play', handleVideoPlay);
    }

    return () => {
      window.removeEventListener('playVideo', handlePlayVideo);
      if (videoRef.current) {
        videoRef.current.removeEventListener('play', handleVideoPlay);
      }
    };
  }, []);

  return (
    <section id="media" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Multimedia Gallery</h2>
        
        <div style={styles.videoContainer}>
          <h3 style={styles.subheading}>📹 Virtual Tour of Girona</h3>
          <video 
            ref={videoRef}
            controls 
            style={styles.video}
            poster="https://images.unsplash.com/photo-1583509313622-0c3c8a5b2b63?w=800"
          >
            <source src="/girona-tour.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p style={styles.caption}>Experience a virtual walk through Girona's historic streets</p>
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
    marginBottom: '3rem',
    textAlign: 'center',
    fontFamily: '"Georgia", serif',
  },
  videoContainer: {
    textAlign: 'center',
  },
  subheading: {
    fontSize: '1.5rem',
    color: '#34495e',
    marginBottom: '1.5rem',
  },
  video: {
    width: '100%',
    maxWidth: '900px',
    borderRadius: '10px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
  },
  caption: {
    marginTop: '1rem',
    fontSize: '1rem',
    color: '#777',
    fontStyle: 'italic',
  },
};

export default MediaGallery;