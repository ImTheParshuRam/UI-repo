import React, { useState } from 'react';

export default function PassengerHome({ onPageChange }) {
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');
  const [selectedRide, setSelectedRide] = useState(null);

  const rideOptions = [
    {
      id: 1,
      name: 'CabX Go',
      description: 'Budget-friendly',
      price: '$4.50',
      time: '3 min',
      icon: '🚗',
      rating: 4.8,
      passengers: 4
    },
    {
      id: 2,
      name: 'CabX Plus',
      description: 'Comfortable ride',
      price: '$6.75',
      time: '5 min',
      icon: '🚙',
      rating: 4.9,
      passengers: 4
    },
    {
      id: 3,
      name: 'CabX Prime',
      description: 'Premium experience',
      price: '$12.50',
      time: '7 min',
      icon: '🚕',
      rating: 5.0,
      passengers: 4
    }
  ];

  const handleBookRide = () => {
    if (pickupLocation && dropoffLocation) {
      onPageChange('booking-search', { 
        pickup: pickupLocation, 
        dropoff: dropoffLocation,
        selectedRide 
      });
    }
  };

  return (
    <div className="passenger-home">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Your ride, your way</h1>
          <p>Quick, safe, and affordable rides to anywhere</p>
        </div>
      </div>

      <div className="booking-card">
        <div className="booking-inputs">
          <div className="input-group">
            <label>Pickup location</label>
            <input
              type="text"
              placeholder="Where are you?"
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Dropoff location</label>
            <input
              type="text"
              placeholder="Where to?"
              value={dropoffLocation}
              onChange={(e) => setDropoffLocation(e.target.value)}
            />
          </div>
        </div>

        <div className="ride-types">
          <h3>Choose ride type</h3>
          <div className="ride-options">
            {rideOptions.map((ride) => (
              <div
                key={ride.id}
                className={`ride-card ${selectedRide?.id === ride.id ? 'active' : ''}`}
                onClick={() => setSelectedRide(ride)}
              >
                <div className="ride-icon">{ride.icon}</div>
                <div className="ride-info">
                  <h4>{ride.name}</h4>
                  <p>{ride.description}</p>
                </div>
                <div className="ride-meta">
                  <span className="rating">★ {ride.rating}</span>
                  <span className="price">{ride.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button 
          className="btn btn-primary book-btn"
          onClick={handleBookRide}
          disabled={!pickupLocation || !dropoffLocation}
        >
          Request {selectedRide?.name || 'a ride'}
        </button>
      </div>

      <div className="quick-info">
        <div className="info-card">
          <h3>Safe & Reliable</h3>
          <p>All drivers verified and tracked in real-time</p>
        </div>
        <div className="info-card">
          <h3>Fair Pricing</h3>
          <p>Know your fare before you book</p>
        </div>
        <div className="info-card">
          <h3>24/7 Support</h3>
          <p>Help whenever you need it</p>
        </div>
      </div>

      <div className="navigation-buttons">
        <h3>Explore More</h3>
        <div className="nav-buttons-grid">
          <button className="nav-btn nav-btn-primary" onClick={() => onPageChange('ride-tracking-page')}>
            Track Ride →
          </button>
          <button className="nav-btn nav-btn-secondary" onClick={() => onPageChange('user-profile-page')}>
            My Profile →
          </button>
          <button className="nav-btn nav-btn-tertiary" onClick={() => onPageChange('booking-confirmation')}>
            View Confirmation →
          </button>
          <button className="nav-btn nav-btn-quaternary" onClick={() => onPageChange('navigation-hub')}>
            Back to Hub
          </button>
        </div>
      </div>
    </div>
  );
}
