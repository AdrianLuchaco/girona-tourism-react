import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import MediaGallery from './components/MediaGallery';
import Activities from './components/Activities';
import Cart from './components/Cart';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);

  const activitiesData = [
    {
      id: 1,
      name: 'Cathedral Tour',
      description: 'Explore the magnificent Girona Cathedral with the widest Gothic nave in the world',
      duration: '2 hours',
      price: 15,
      icon: '⛪',
    },
    {
      id: 2,
      name: 'Jewish Quarter Walk',
      description: 'Discover El Call, one of the best-preserved Jewish quarters in Europe',
      duration: '1.5 hours',
      price: 12,
      icon: '🕍',
    },
    {
      id: 3,
      name: 'City Walls Experience',
      description: 'Walk along the medieval walls with panoramic views of the city',
      duration: '1 hour',
      price: 10,
      icon: '🏰',
    },
    {
      id: 4,
      name: 'Onyar River Houses',
      description: 'Photo tour of the iconic colorful houses along the river',
      duration: '1 hour',
      price: 8,
      icon: '🏘️',
    },
    {
      id: 5,
      name: 'Gastronomic Tour',
      description: 'Taste authentic Catalan cuisine at local restaurants and markets',
      duration: '3 hours',
      price: 45,
      icon: '🍽️',
    },
    {
      id: 6,
      name: 'Arab Baths Visit',
      description: 'Explore the 12th-century Romanesque baths inspired by Islamic design',
      duration: '45 minutes',
      price: 7,
      icon: '♨️',
    },
  ];

  const addToCart = (activity) => {
    setCart([...cart, activity]);
  };

  const removeFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <MediaGallery />
      <Activities activities={activitiesData} onAddToCart={addToCart} />
      <Footer />
      <Cart cartItems={cart} onRemoveFromCart={removeFromCart} />
    </div>
  );
}

export default App;