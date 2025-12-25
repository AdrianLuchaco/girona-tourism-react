import React, { useState } from 'react';

function Cart({ cartItems, onRemoveFromCart }) {
  const [showBookingMessage, setShowBookingMessage] = useState(false);
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleBookTrip = () => {
    setShowBookingMessage(true);
    setTimeout(() => {
      setShowBookingMessage(false);
    }, 4000); // El missatge desapareix després de 4 segons
  };

  if (cartItems.length === 0) {
    return (
      <div style={styles.emptyCart}>
        <h3 style={styles.emptyTitle}>🗺️ Your Trip Plan</h3>
        <p style={styles.emptyText}>No activities selected yet. Start planning your Girona adventure!</p>
      </div>
    );
  }

  return (
    <>
      <div style={styles.cart}>
        <h3 style={styles.cartTitle}>🗺️ Your Trip Plan ({cartItems.length} activities)</h3>
        
        <div style={styles.cartItems}>
          {cartItems.map((item, index) => (
            <div key={index} style={styles.cartItem}>
              <div style={styles.itemInfo}>
                <span style={styles.itemIcon}>{item.icon}</span>
                <div>
                  <p style={styles.itemName}>{item.name}</p>
                  <p style={styles.itemPrice}>{item.price}€</p>
                </div>
              </div>
              <button 
                onClick={() => onRemoveFromCart(index)}
                style={styles.removeButton}
              >
                ✕
              </button>
            </div>
          ))}
        </div>
        
        <div style={styles.cartTotal}>
          <strong>Total:</strong> {total}€
        </div>
        
        <button onClick={handleBookTrip} style={styles.bookButton}>
          Book Your Trip
        </button>
      </div>

      {showBookingMessage && (
        <div style={styles.bookingOverlay}>
          <div style={styles.bookingMessage}>
            <h2 style={styles.bookingTitle}>🎉 Trip Booked Successfully!</h2>
            <p style={styles.bookingText}>
              Your Girona adventure has been confirmed!
            </p>
            <p style={styles.bookingText}>
              Get ready to explore the magic of this medieval city.
            </p>
            <p style={styles.bookingEmoji}>✈️ 🏰 🎊</p>
            <p style={styles.bookingFooter}>Enjoy your journey!</p>
          </div>
        </div>
      )}
    </>
  );
}

const styles = {
  emptyCart: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: '#fff',
    padding: '1.5rem',
    borderRadius: '10px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
    maxWidth: '350px',
    zIndex: 999,
  },
  emptyTitle: {
    fontSize: '1.3rem',
    marginBottom: '0.5rem',
    color: '#2c3e50',
  },
  emptyText: {
    color: '#666',
    margin: 0,
  },
  cart: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: '#fff',
    padding: '1.5rem',
    borderRadius: '10px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
    maxWidth: '400px',
    maxHeight: '500px',
    overflowY: 'auto',
    zIndex: 999,
  },
  cartTitle: {
    fontSize: '1.3rem',
    marginBottom: '1rem',
    color: '#2c3e50',
  },
  cartItems: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    marginBottom: '1rem',
  },
  cartItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.8rem',
    backgroundColor: '#f8f9fa',
    borderRadius: '5px',
  },
  itemInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  itemIcon: {
    fontSize: '2rem',
  },
  itemName: {
    margin: 0,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  itemPrice: {
    margin: 0,
    color: '#27ae60',
    fontSize: '0.9rem',
  },
  removeButton: {
    backgroundColor: '#e74c3c',
    color: '#fff',
    border: 'none',
    borderRadius: '50%',
    width: '30px',
    height: '30px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
  cartTotal: {
    fontSize: '1.3rem',
    color: '#2c3e50',
    padding: '1rem 0',
    borderTop: '2px solid #eee',
    borderBottom: '2px solid #eee',
    marginBottom: '1rem',
  },
  bookButton: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#27ae60',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1.1rem',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  bookingOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
  },
  bookingMessage: {
    backgroundColor: '#fff',
    padding: '3rem',
    borderRadius: '15px',
    textAlign: 'center',
    maxWidth: '500px',
    boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
    animation: 'fadeIn 0.3s ease-in',
  },
  bookingTitle: {
    fontSize: '2rem',
    color: '#27ae60',
    marginBottom: '1rem',
  },
  bookingText: {
    fontSize: '1.2rem',
    color: '#555',
    marginBottom: '0.8rem',
  },
  bookingEmoji: {
    fontSize: '2.5rem',
    margin: '1.5rem 0',
  },
  bookingFooter: {
    fontSize: '1.3rem',
    color: '#27ae60',
    fontWeight: 'bold',
    marginTop: '1rem',
  },
};

export default Cart;