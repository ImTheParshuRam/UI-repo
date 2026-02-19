import React, { useState } from 'react';
import './FeaturesDemo.css';

const FeaturesDemo = ({ onPageChange }) => {
  const [activeTab, setActiveTab] = useState('passenger');

  const features = {
    passenger: [
      {
        icon: '📍',
        title: 'Smart Location Booking',
        description: 'Easily set your pickup and drop-off locations with our intuitive map interface',
        details: 'Use current location or search for any address. Save favorite locations for quick access.'
      },
      {
        icon: '🚗',
        title: 'Multiple Ride Options',
        description: 'Choose from Standard, Premium, or SUV based on your comfort and budget',
        details: 'Each option includes real-time pricing and estimated arrival times.'
      },
      {
        icon: '💳',
        title: 'Flexible Payments',
        description: 'Pay with credit/debit cards, UPI, digital wallets, or cash',
        details: 'Your payment information is secure with end-to-end encryption.'
      },
      {
        icon: '📊',
        title: 'Trip History',
        description: 'Track all your past rides with detailed information and receipts',
        details: 'Export invoices for expense management and budgeting.'
      },
      {
        icon: '⭐',
        title: 'Rate & Review',
        description: 'Share your experience to help other users choose the best drivers',
        details: 'Drivers respond to feedback and continuously improve their service.'
      },
      {
        icon: '🔒',
        title: 'Safety Features',
        description: 'Share your live location with trusted contacts during your ride',
        details: 'Emergency SOS button, verified drivers, and ride details sharing.'
      }
    ],
    driver: [
      {
        icon: '📱',
        title: 'Easy Ride Acceptance',
        description: 'Accept or decline ride requests based on your availability',
        details: 'Smart matching algorithm shows compatible passengers.'
      },
      {
        icon: '💰',
        title: 'Real-time Earnings',
        description: 'Track your earnings in real-time with detailed breakdowns',
        details: 'Instant payment options and transparent commission structure.'
      },
      {
        icon: '🗺️',
        title: 'Route Optimization',
        description: 'Get the best route suggestions to save time and fuel',
        details: 'AI-powered navigation for efficiency and customer satisfaction.'
      },
      {
        icon: '📈',
        title: 'Performance Analytics',
        description: 'View detailed statistics about your rides and ratings',
        details: 'Track completion rate, average rating, and monthly trends.'
      },
      {
        icon: '🎁',
        title: 'Reward Programs',
        description: 'Earn bonus points and rewards for completing rides',
        details: 'Monthly incentives and referral bonuses available.'
      },
      {
        icon: '📞',
        title: '24/7 Support',
        description: 'Get immediate help from our support team anytime',
        details: 'In-app chat, call support, and comprehensive help center.'
      }
    ]
  };

  return (
    <div className="features-demo">
      {/* Header */}
      <header className="features-header">
        <button className="back-btn" onClick={() => onPageChange('home')}>
          ← Back
        </button>
        <h1>Powerful Features</h1>
      </header>

      {/* Tab Navigation */}
      <div className="features-tabs">
        <button
          className={`tab-btn ${activeTab === 'passenger' ? 'active' : ''}`}
          onClick={() => setActiveTab('passenger')}
        >
          👤 Passenger Features
        </button>
        <button
          className={`tab-btn ${activeTab === 'driver' ? 'active' : ''}`}
          onClick={() => setActiveTab('driver')}
        >
          🚗 Driver Features
        </button>
      </div>

      {/* Features Grid */}
      <div className="features-grid">
        {features[activeTab].map((feature, idx) => (
          <div key={idx} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
            <p className="feature-details">{feature.details}</p>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <section className="features-cta">
        <h2>Ready to experience the difference?</h2>
        <div className="cta-buttons">
          <button className="btn-primary" onClick={() => onPageChange('login')}>
            Get Started Now
          </button>
          <button className="btn-secondary" onClick={() => onPageChange('home')}>
            Learn More
          </button>
        </div>
      </section>
    </div>
  );
};

export default FeaturesDemo;
