import React, { useState } from 'react';

export default function DriverDashboard({ onPageChange }) {
  const [isOnline, setIsOnline] = useState(false);
  const [earnings, setEarnings] = useState(324.50);

  const stats = [
    { label: 'Total Earnings', value: '$324.50', icon: '💰' },
    { label: 'Rides Today', value: '12', icon: '🚗' },
    { label: 'Rating', value: '4.9', icon: '⭐' },
    { label: 'Acceptance Rate', value: '98%', icon: '✓' }
  ];

  const recentRides = [
    {
      id: 1,
      passenger: 'John Smith',
      from: 'Downtown Station',
      to: 'Airport',
      time: '2:30 PM',
      amount: '$28.50',
      rating: 5,
      status: 'completed'
    },
    {
      id: 2,
      passenger: 'Sarah Johnson',
      from: 'Mall Center',
      to: 'Residential Area',
      time: '1:15 PM',
      amount: '$18.75',
      rating: 4,
      status: 'completed'
    },
    {
      id: 3,
      passenger: 'Mike Davis',
      from: 'Airport',
      to: 'Hotel',
      time: '12:45 PM',
      amount: '$35.20',
      rating: 5,
      status: 'completed'
    }
  ];

  return (
    <div className="driver-dashboard">
      <div className="dashboard-header">
        <div>
          <h1>Welcome, Driver!</h1>
          <p>Your status: <span className={isOnline ? 'online' : 'offline'}>{isOnline ? 'Online' : 'Offline'}</span></p>
        </div>
        <button 
          className={`toggle-status ${isOnline ? 'active' : ''}`}
          onClick={() => setIsOnline(!isOnline)}
        >
          {isOnline ? 'Go Offline' : 'Go Online'}
        </button>
      </div>

      <div className="stats-grid">
        {stats.map((stat, idx) => (
          <div key={idx} className="stat-card">
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-content">
              <p>{stat.label}</p>
              <h3>{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="earnings-section">
        <h2>Today's Earnings</h2>
        <div className="earnings-card">
          <div className="earnings-display">
            <span className="label">Total</span>
            <h2>${earnings.toFixed(2)}</h2>
          </div>
          <div className="earnings-breakdown">
            <div className="breakdown-item">
              <span>12 Rides</span>
              <span className="amount">$324.50</span>
            </div>
            <div className="breakdown-item">
              <span>Incentive Bonus</span>
              <span className="amount">+$15.00</span>
            </div>
          </div>
        </div>
      </div>

      <div className="recent-rides">
        <div className="section-header">
          <h2>Recent Rides</h2>
          <button className="text-link" onClick={() => onPageChange('driver-history')}>
            View All →
          </button>
        </div>
        <div className="rides-list">
          {recentRides.map((ride) => (
            <div key={ride.id} className="ride-item">
              <div className="ride-info">
                <h4>{ride.passenger}</h4>
                <p className="route">{ride.from} → {ride.to}</p>
                <p className="time">{ride.time}</p>
              </div>
              <div className="ride-details">
                <div className="rating">
                  {'★'.repeat(ride.rating)}
                  <span className="empty">{'☆'.repeat(5 - ride.rating)}</span>
                </div>
                <span className="amount">{ride.amount}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="quick-actions">
        <button 
          className="action-btn"
          onClick={() => onPageChange('driver-earnings')}
        >
          📊 Earnings Report
        </button>
        <button 
          className="action-btn"
          onClick={() => onPageChange('driver-availability')}
        >
          🕐 Set Availability
        </button>
        <button 
          className="action-btn"
          onClick={() => onPageChange('user-profile-page')}
        >
          👤 Profile Settings
        </button>
      </div>

      <div className="driver-navigation">
        <div className="nav-divider"></div>
        <h3>Explore More</h3>
        <div className="nav-buttons">
          <button className="nav-btn nav-primary" onClick={() => onPageChange('ride-tracking-page')}>
            Track Ride →
          </button>
          <button className="nav-btn nav-secondary" onClick={() => onPageChange('passenger-home')}>
            Passenger View →
          </button>
          <button className="nav-btn nav-tertiary" onClick={() => onPageChange('admin-dashboard')}>
            Admin Panel →
          </button>
          <button className="nav-btn nav-back" onClick={() => onPageChange('navigation-hub')}>
            Back to Hub
          </button>
        </div>
      </div>
    </div>
  );
}
