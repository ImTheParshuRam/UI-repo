import React, { useState, useEffect } from 'react';
import '../styles/RideTracking.css';

export default function RideTracking({ onPageChange }) {
  const [progress, setProgress] = useState(0);
  const [rideStatus, setRideStatus] = useState('pickup');

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setRideStatus('completed');
          return 100;
        }
        return prev + 0.5;
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const updateStatus = () => {
    if (rideStatus === 'pickup') setRideStatus('in-transit');
    else if (rideStatus === 'in-transit') setRideStatus('completed');
  };

  return (
    <div className="ride-tracking">
      <div className="tracking-header">
        <button className="back-btn" onClick={() => onPageChange('passenger-home')}>
          ← Back
        </button>
        <h2>Live Ride Tracking</h2>
      </div>

      <div className="tracking-container">
        <div className="map-section">
          <div className="map-placeholder">
            <div className="map-header">
              <span className="eta">Estimated arrival: 8 minutes</span>
            </div>
            <svg className="route-visual" viewBox="0 0 400 400">
              <circle cx="50" cy="50" r="8" fill="#10b981" />
              <circle cx="350" cy="350" r="8" fill="#ef4444" />
              <path d="M 50 50 Q 200 100 350 350" stroke="rgba(99, 102, 241, 0.5)" strokeWidth="2" fill="none" />
              <circle cx={50 + progress * 3} cy={50 + progress * 3} r="6" fill="#6366f1" />
            </svg>
            <div className="map-legend">
              <span className="legend-item pickup">Pickup</span>
              <span className="legend-item current">Current</span>
              <span className="legend-item dropoff">Dropoff</span>
            </div>
          </div>

          <div className="driver-tracking">
            <div className="driver-card">
              <div className="driver-photo">👤</div>
              <div className="driver-info">
                <h3>Alex Johnson</h3>
                <p>Toyota Prius • XYZ 1234</p>
              </div>
              <button className="call-icon">📞</button>
            </div>

            <div className="ride-controls">
              <button className="btn btn-secondary">Message</button>
              <button className="btn btn-secondary">Call</button>
              <button className="btn btn-secondary">Share</button>
            </div>
          </div>
        </div>

        <div className="details-section">
          <div className="progress-tracker">
            <div className={`step ${rideStatus === 'pickup' || rideStatus === 'in-transit' || rideStatus === 'completed' ? 'active' : ''}`}>
              <div className="step-icon">1</div>
              <div className="step-label">Driver Arriving</div>
            </div>
            <div className="step-line"></div>
            <div className={`step ${rideStatus === 'in-transit' || rideStatus === 'completed' ? 'active' : ''}`}>
              <div className="step-icon">2</div>
              <div className="step-label">In Transit</div>
            </div>
            <div className="step-line"></div>
            <div className={`step ${rideStatus === 'completed' ? 'active' : ''}`}>
              <div className="step-icon">3</div>
              <div className="step-label">Arrived</div>
            </div>
          </div>

          <div className="ride-details-card">
            <h3>Ride Details</h3>
            <div className="detail">
              <span>Pickup Location</span>
              <strong>Downtown Station</strong>
            </div>
            <div className="detail">
              <span>Dropoff Location</span>
              <strong>Airport Terminal</strong>
            </div>
            <div className="detail">
              <span>Distance</span>
              <strong>3.2 km</strong>
            </div>
            <div className="detail">
              <span>Estimated Fare</span>
              <strong className="price">$17.50</strong>
            </div>
          </div>

          <div className="fare-breakdown">
            <h3>Fare Breakdown</h3>
            <div className="fare-item">
              <span>Base Fare</span>
              <span>$4.50</span>
            </div>
            <div className="fare-item">
              <span>Distance (3.2 km)</span>
              <span>$9.60</span>
            </div>
            <div className="fare-item">
              <span>Time (15 min)</span>
              <span>$3.40</span>
            </div>
            <div className="fare-item total">
              <span>Total</span>
              <span>$17.50</span>
            </div>
          </div>

          <button 
            className="btn btn-secondary full-width"
            onClick={updateStatus}
          >
            {rideStatus === 'completed' ? 'Rate Ride' : 'Simulate Progress'}
          </button>
        </div>
      </div>
    </div>
  );
}
