import React, { useState } from 'react';

function Activities({ activities, onAddToCart }) {
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Imatges per cada activitat (URLs d'exemple - tu les canviaràs després)
  const activityImages = {
    1: [ // Cathedral Tour
      'https://images.unsplash.com/photo-1675092001977-a97216bbdabc?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1751876150632-33bcbc489e74?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://plus.unsplash.com/premium_photo-1697730298481-87fe8e5c9602?q=80&w=1133&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    2: [ // Jewish Quarter Walk
      'https://www.giltravel.com/wp-content/uploads/2024/09/Prague-Jewish-Quarter.jpg',
      'https://coinventmediastorage.blob.core.windows.net/media-storage-container/gphoto_ChIJR5kBmt3muhIRsLYSfHB5RKs_1.jpg'
    ],
    3: [ // City Walls
      'https://velvetescape.com/wp-content/uploads/2013/01/Photo19-3-1280x920.jpg',
      'https://barcelonahacks.com/wp-content/uploads/2025/03/girona-medieval-walls-1041x633.jpg',
    ],
    4: [ // Onyar River Houses
      'https://www.hotelsgirona.net/media/items/medium/15d3e-Cases-de-Onyar.jpg',
      'https://www.esturismo.eu/images/gallery/Espana/Gerona/Casas%20sobre%20el%20rio%20O%C3%B1ar%20en%20Gerona%2006.jpg',
    ],
    5: [ // Gastronomic Tour
      'https://www.2foodtrippers.com/wp-content/uploads/2017/01/El-Cul-de-Mon-Girona-Food-Guide-via-2foodtrippers.jpg',
      'https://www.2foodtrippers.com/wp-content/uploads/2017/01/Ham-Session-Girona-Food-Guide-via-2foodtrippers.jpg',
    ],
    6: [ // Arab Baths
      'https://barcelonahacks.com/wp-content/uploads/2025/03/arab-baths-interior-girona.jpg',
      'https://www.girona.cat/turisme/img/caroussel/banysarabs5b.jpg',
    ],
  };

  const openGallery = (activity) => {
    setSelectedActivity(activity);
    setCurrentImageIndex(0);
  };

  const closeGallery = () => {
    setSelectedActivity(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedActivity) {
      const images = activityImages[selectedActivity.id];
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedActivity) {
      const images = activityImages[selectedActivity.id];
      setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  return (
    <>
      <section id="activities" style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.heading}>Tourist Activities</h2>
          <p style={styles.intro}>Select the activities you'd like to experience in Girona</p>
          
          <div style={styles.grid}>
            {activities.map((activity) => (
              <div key={activity.id} style={styles.card}>
                <div style={styles.cardImage}>
                  <span style={styles.icon}>{activity.icon}</span>
                </div>
                <h3 style={styles.activityName}>{activity.name}</h3>
                <p style={styles.description}>{activity.description}</p>
                <p style={styles.duration}>⏱️ {activity.duration}</p>
                <p style={styles.price}>💰 {activity.price}€</p>
                
                <button 
                  onClick={() => openGallery(activity)}
                  style={styles.summaryButton}
                >
                  📸 View Experience Summary
                </button>
                
                <button 
                  onClick={() => onAddToCart(activity)}
                  style={styles.button}
                >
                  Add to My Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pop-up Gallery */}
      {selectedActivity && (
        <div style={styles.galleryOverlay} onClick={closeGallery}>
          <div style={styles.galleryModal} onClick={(e) => e.stopPropagation()}>
            <button onClick={closeGallery} style={styles.closeButton}>✕</button>
            
            <h2 style={styles.galleryTitle}>
              {selectedActivity.icon} {selectedActivity.name}
            </h2>
            
            <div style={styles.imageContainer}>
              <button onClick={prevImage} style={styles.navButton}>‹</button>
              
              <img 
                src={activityImages[selectedActivity.id][currentImageIndex]} 
                alt={`${selectedActivity.name} - Image ${currentImageIndex + 1}`}
                style={styles.galleryImage}
              />
              
              <button onClick={nextImage} style={styles.navButton}>›</button>
            </div>
            
            <p style={styles.imageCounter}>
              {currentImageIndex + 1} / {activityImages[selectedActivity.id].length}
            </p>
            
            <p style={styles.galleryDescription}>{selectedActivity.description}</p>
          </div>
        </div>
      )}
    </>
  );
}

const styles = {
  section: {
    padding: '4rem 0',
    backgroundColor: '#f8f9fa',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  heading: {
    fontSize: '2.5rem',
    color: '#2c3e50',
    marginBottom: '1rem',
    textAlign: 'center',
  },
  intro: {
    textAlign: 'center',
    fontSize: '1.2rem',
    color: '#666',
    marginBottom: '3rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
  },
  card: {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s, box-shadow 0.3s',
  },
  cardImage: {
    textAlign: 'center',
    marginBottom: '1rem',
  },
  icon: {
    fontSize: '4rem',
  },
  activityName: {
    fontSize: '1.5rem',
    color: '#2c3e50',
    marginBottom: '1rem',
  },
  description: {
    color: '#666',
    marginBottom: '1rem',
    lineHeight: '1.6',
  },
  duration: {
    color: '#888',
    fontSize: '0.9rem',
    marginBottom: '0.5rem',
  },
  price: {
    color: '#27ae60',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  summaryButton: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#9b59b6',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '0.95rem',
    cursor: 'pointer',
    marginBottom: '0.5rem',
    transition: 'background-color 0.3s',
  },
  button: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#3498db',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  galleryOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
  },
  galleryModal: {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '15px',
    maxWidth: '800px',
    width: '90%',
    maxHeight: '90vh',
    overflow: 'auto',
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: '15px',
    right: '15px',
    backgroundColor: '#e74c3c',
    color: '#fff',
    border: 'none',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    fontSize: '1.5rem',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  galleryTitle: {
    fontSize: '2rem',
    color: '#2c3e50',
    marginBottom: '1.5rem',
    textAlign: 'center',
  },
  imageContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem',
    marginBottom: '1rem',
  },
  galleryImage: {
    maxWidth: '600px',
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
  },
  navButton: {
    backgroundColor: '#3498db',
    color: '#fff',
    border: 'none',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    fontSize: '2rem',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  imageCounter: {
    textAlign: 'center',
    fontSize: '1.1rem',
    color: '#666',
    marginBottom: '1rem',
  },
  galleryDescription: {
    fontSize: '1.1rem',
    color: '#555',
    textAlign: 'center',
    lineHeight: '1.6',
  },
};

export default Activities;