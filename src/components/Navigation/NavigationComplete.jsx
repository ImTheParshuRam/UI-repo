import React, { useState } from 'react';
import './NavigationComplete.css';

export default function Navigation({ userRole, onPageChange, currentPage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const passengerMenus = [
    { label: 'Home', page: 'passenger-home', icon: '🏠' },
    { label: 'Book Ride', page: 'passenger-home', icon: '🚗' },
    { label: 'My Rides', page: 'ride-tracking', icon: '📍' },
    { label: 'Profile', page: 'user-profile', icon: '👤' },
  ];

  const driverMenus = [
    { label: 'Dashboard', page: 'driver-dashboard', icon: '📊' },
    { label: 'Earnings', page: 'driver-dashboard', icon: '💰' },
    { label: 'Settings', page: 'user-profile', icon: '⚙️' },
    { label: 'Support', page: 'user-profile', icon: '❓' },
  ];

  const adminMenus = [
    { label: 'Dashboard', page: 'admin-dashboard', icon: '📊' },
    { label: 'Users', page: 'admin-dashboard', icon: '👥' },
    { label: 'Payments', page: 'admin-dashboard', icon: '💳' },
    { label: 'Analytics', page: 'admin-dashboard', icon: '📈' },
  ];

  const getMenuItems = () => {
    if (userRole === 'admin') return adminMenus;
    if (userRole === 'driver') return driverMenus;
    return passengerMenus;
  };

  const handleNavClick = (page) => {
    onPageChange(page);
    setIsMenuOpen(false);
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-brand">
          <span className="logo">🚕</span>
          <h1>CabBook</h1>
        </div>

        <button 
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        <div className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <div className="nav-items">
            {getMenuItems().map((item) => (
              <button
                key={item.page}
                className={`nav-item ${currentPage === item.page ? 'active' : ''}`}
                onClick={() => handleNavClick(item.page)}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
              </button>
            ))}
          </div>

          <div className="nav-footer">
            <button 
              className="btn btn-secondary logout-btn"
              onClick={() => {
                setIsMenuOpen(false);
                onPageChange('role-selection');
              }}
            >
              Logout
            </button>
          </div>
        </div>

        <div className="nav-right">
          <div className="user-badge">
            <span className="badge-icon">👤</span>
            <span className="badge-text">
              {userRole === 'admin' ? 'Admin' : userRole === 'driver' ? 'Driver' : 'Passenger'}
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}
