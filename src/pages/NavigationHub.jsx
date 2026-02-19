import React from 'react';
import '../styles/NavigationHub.css';

export default function NavigationHub({ onPageChange }) {
  const sections = [
    {
      title: 'Passenger Features',
      color: 'indigo',
      pages: [
        { name: 'Passenger Home', route: 'passenger-home', desc: 'Book a ride, select ride type', icon: '🚗' },
        { name: 'Ride Tracking', route: 'ride-tracking-page', desc: 'Track your live ride', icon: '📍' },
        { name: 'Booking Confirmation', route: 'booking-confirmation', desc: 'Confirm your booking', icon: '✓' },
      ]
    },
    {
      title: 'Driver Features',
      color: 'purple',
      pages: [
        { name: 'Driver Dashboard', route: 'driver-dashboard-page', desc: 'View earnings and stats', icon: '💰' },
      ]
    },
    {
      title: 'User Management',
      color: 'pink',
      pages: [
        { name: 'User Profile', route: 'user-profile-page', desc: 'Manage account settings', icon: '👤' },
      ]
    },
    {
      title: 'Admin Panel',
      color: 'cyan',
      pages: [
        { name: 'Admin Dashboard', route: 'admin-dashboard', desc: 'Platform analytics & control', icon: '⚙️' },
      ]
    },
    {
      title: 'Demo & Guides',
      color: 'green',
      pages: [
        { name: 'Main App', route: 'home', desc: 'Return to main app', icon: '🏠' },
        { name: 'Demo Showcase', route: 'demo', desc: 'View app showcase', icon: '🎨' },
      ]
    }
  ];

  return (
    <div className="navigation-hub">
      <div className="hub-header">
        <h1>CabBook Application Hub</h1>
        <p>Navigate to different sections of the cab booking platform</p>
      </div>

      <div className="sections-container">
        {sections.map((section, idx) => (
          <div key={idx} className={`section section-${section.color}`}>
            <h2 className="section-title">{section.title}</h2>
            <div className="pages-grid">
              {section.pages.map((page, pidx) => (
                <button
                  key={pidx}
                  className={`page-card card-${section.color}`}
                  onClick={() => onPageChange(page.route)}
                >
                  <div className="card-icon">{page.icon}</div>
                  <h3>{page.name}</h3>
                  <p>{page.desc}</p>
                  <span className="card-arrow">→</span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="hub-info">
        <div className="info-box">
          <h3>About This App</h3>
          <p>A comprehensive cab booking platform with passenger, driver, and admin features. Use the AI assistant (bottom right) for help anytime.</p>
        </div>
      </div>
    </div>
  );
}
