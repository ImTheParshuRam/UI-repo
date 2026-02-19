import React, { useState, useEffect } from 'react';

export default function BookingConfirmation({ bookingData, onPageChange }) {
  const [rideStatus, setRideStatus] = useState('searching');
  const [driver, setDriver] = useState(null);
  const [eta, setEta] = useState(5);

  useEffect(() => {
    // Simulate driver found
    const timer1 = setTimeout(() => {
      setRideStatus('driver-found');
      setDriver({
        name: 'Alex Johnson',
        rating: 4.9,
        car: 'Toyota Prius',
        plate: 'XYZ 1234',
        phone: '+1-555-0123',
        photo: '👤'
      });
    }, 3000);

    return () => clearTimeout(timer1);
  }, []);

  return (
    <div className="booking-confirmation">
      <div className="confirmation-header">
        <button 
          className="back-btn"
          onClick={() => onPageChange('passenger-home')}
        >
          ← Back
        </button>
        <h2>Your ride is coming</h2>
      </div>

      <div className="status-container">
        {rideStatus === 'searching' && (
          <div className="status-searching">
            <div className="spinner"></div>
            <h3>Finding your driver...</h3>
            <p>We're connecting you with the best driver nearby</p>
          </div>
        )}

        {rideStatus === 'driver-found' && driver && (
          <>
            <div className="map-placeholder">
              <div className="map-icon">🗺️</div>
            </div>

            <div className="driver-card">
              <div className="driver-info">
                <div className="driver-photo">{driver.photo}</div>
                <div>
                  <h3>{driver.name}</h3>
                  <p className="rating">★ {driver.rating} • {driver.car}</p>
                  <p className="plate">{driver.plate}</p>
                </div>
              </div>
              <button className="call-btn" title="Call driver">📞</button>
            </div>

            <div className="ride-details">
              <div className="detail-row">
                <span>Pickup</span>
                <strong>{bookingData?.pickup || 'Current location'}</strong>
              </div>
              <div className="detail-row">
                <span>Dropoff</span>
                <strong>{bookingData?.dropoff || 'Destination'}</strong>
              </div>
              <div className="detail-row">
                <span>Ride type</span>
                <strong>{bookingData?.selectedRide?.name || 'CabX Plus'}</strong>
              </div>
              <div className="detail-row eta">
                <span>Estimated arrival</span>
                <strong>{eta} mins</strong>
              </div>
            </div>

            <div className="price-section">
              <div className="price-row">
                <span>Base fare</span>
                <span>$4.50</span>
              </div>
              <div className="price-row">
                <span>Distance (3.2 km)</span>
                <span>$12.80</span>
              </div>
              <div className="price-row total">
                <span>Total</span>
                <span>$17.30</span>
              </div>
            </div>

            <button 
              className="btn btn-primary track-btn"
              onClick={() => onPageChange('ride-tracking')}
            >
              Track Ride Live
            </button>
          </>
        )}
      </div>

      <div className="safety-info">
        <h4>Your safety matters</h4>
        <ul>
          <li>Share your ride details with friends</li>
          <li>24/7 customer support available</li>
          <li>Driver details verified</li>
        </ul>
      </div>
    </div>
  );
}
