import React, { useState } from 'react';
import './DemoShowcase.css';
import AIAssistant from '../AIAssistant/AIAssistant';

const DemoShowcase = () => {
  const [isAIOpen, setIsAIOpen] = useState(false);
  const [currentDemo, setCurrentDemo] = useState('overview');

  const demos = [
    {
      id: 'overview',
      title: 'App Overview',
      description: 'Beautiful and modern cab booking application'
    },
    {
      id: 'features',
      title: 'Key Features',
      description: 'Everything you need in a ride-sharing app'
    },
    {
      id: 'passenger',
      title: 'Passenger Experience',
      description: 'Book rides with ease'
    },
    {
      id: 'driver',
      title: 'Driver Dashboard',
      description: 'Manage your rides efficiently'
    }
  ];

  return (
    <div className="demo-showcase">
      {/* Navigation */}
      <nav className="demo-nav">
        <div className="nav-brand">
          <span className="brand-icon">🚖</span>
          <h1>CabBook AI</h1>
          <span className="version-badge">v2.0</span>
        </div>
        <div className="nav-items">
          {demos.map(demo => (
            <button
              key={demo.id}
              className={`nav-item ${currentDemo === demo.id ? 'active' : ''}`}
              onClick={() => setCurrentDemo(demo.id)}
            >
              {demo.title}
            </button>
          ))}
        </div>
        <button className="ai-toggle-btn" onClick={() => setIsAIOpen(true)}>
          <span>🤖</span> AI Assistant
        </button>
      </nav>

      {/* Hero Section */}
      <section className="demo-hero">
        <div className="hero-content">
          <h2 className="hero-title">Your Ride, Your Way</h2>
          <p className="hero-subtitle">Premium cab booking experience with AI-powered assistance</p>
          <div className="hero-ctas">
            <button className="cta-btn primary">Get Started</button>
            <button className="cta-btn secondary">Learn More</button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-card card-1">
            <span className="icon">🚗</span>
            <p>Smart Booking</p>
          </div>
          <div className="floating-card card-2">
            <span className="icon">📍</span>
            <p>Real-time Tracking</p>
          </div>
          <div className="floating-card card-3">
            <span className="icon">💰</span>
            <p>Fair Pricing</p>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      {currentDemo === 'overview' && <OverviewSection setAIOpen={setIsAIOpen} />}
      {currentDemo === 'features' && <FeaturesSection />}
      {currentDemo === 'passenger' && <PassengerSection />}
      {currentDemo === 'driver' && <DriverSection />}

      {/* Stats Section */}
      <section className="demo-stats">
        <div className="stat-card">
          <h3>500K+</h3>
          <p>Active Users</p>
        </div>
        <div className="stat-card">
          <h3>10M+</h3>
          <p>Rides Completed</p>
        </div>
        <div className="stat-card">
          <h3>4.8★</h3>
          <p>Average Rating</p>
        </div>
        <div className="stat-card">
          <h3>24/7</h3>
          <p>AI Support</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="demo-cta">
        <h2>Ready to Transform Your Commute?</h2>
        <p>Join thousands of users who trust CabBook for their daily transportation needs</p>
        <button className="btn-large">Download App Now</button>
      </section>

      {/* AI Assistant */}
      <AIAssistant isOpen={isAIOpen} onClose={() => setIsAIOpen(false)} />

      {/* Floating Action Button */}
      {!isAIOpen && (
        <button className="fab-button" onClick={() => setIsAIOpen(true)}>
          <span>💬</span>
        </button>
      )}
    </div>
  );
};

const OverviewSection = ({ setAIOpen }) => (
  <section className="demo-section overview-section">
    <div className="section-content">
      <h2>Welcome to CabBook AI</h2>
      <p>Experience the future of urban mobility with our intelligent cab booking system powered by AI assistance.</p>
      
      <div className="overview-grid">
        <div className="overview-card">
          <div className="card-header primary">🎯</div>
          <h3>Smart Matching</h3>
          <p>AI algorithm matches you with the perfect driver based on location, preferences, and ratings</p>
        </div>
        <div className="overview-card">
          <div className="card-header success">🛡️</div>
          <h3>Safety First</h3>
          <p>Verified drivers, real-time tracking, emergency support, and safety features</p>
        </div>
        <div className="overview-card">
          <div className="card-header info">⚡</div>
          <h3>Ultra Fast</h3>
          <p>Book a ride in seconds with our streamlined interface and instant driver assignment</p>
        </div>
        <div className="overview-card">
          <div className="card-header warning">🤖</div>
          <h3>AI Assistant</h3>
          <p>24/7 AI support to answer questions, help with bookings, and resolve issues instantly</p>
          <button className="overview-card-btn" onClick={() => setAIOpen(true)}>
            Try AI Now →
          </button>
        </div>
      </div>
    </div>
  </section>
);

const FeaturesSection = () => (
  <section className="demo-section features-section">
    <h2>Powerful Features</h2>
    <div className="features-grid">
      <div className="feature-item">
        <span className="feature-icon">🗺️</span>
        <h3>Real-Time Mapping</h3>
        <p>Live GPS tracking of your ride with estimated arrival times</p>
      </div>
      <div className="feature-item">
        <span className="feature-icon">💳</span>
        <h3>Multiple Payments</h3>
        <p>Credit cards, UPI, wallets, and cash payment options</p>
      </div>
      <div className="feature-item">
        <span className="feature-icon">⭐</span>
        <h3>Rating System</h3>
        <p>Rate drivers and riders to maintain service quality</p>
      </div>
      <div className="feature-item">
        <span className="feature-icon">🔐</span>
        <h3>Secure Booking</h3>
        <p>End-to-end encryption and verified user profiles</p>
      </div>
      <div className="feature-item">
        <span className="feature-icon">📞</span>
        <h3>24/7 Support</h3>
        <p>Chat, call, or message support anytime</p>
      </div>
      <div className="feature-item">
        <span className="feature-icon">🎁</span>
        <h3>Loyalty Rewards</h3>
        <p>Earn points on every ride and unlock rewards</p>
      </div>
    </div>
  </section>
);

const PassengerSection = () => (
  <section className="demo-section passenger-section">
    <h2>Passenger Experience</h2>
    <div className="experience-timeline">
      <div className="timeline-item">
        <div className="timeline-number">1</div>
        <div className="timeline-content">
          <h3>Open App</h3>
          <p>Launch CabBook and allow location access</p>
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-number">2</div>
        <div className="timeline-content">
          <h3>Set Destination</h3>
          <p>Enter your pickup and drop-off locations</p>
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-number">3</div>
        <div className="timeline-content">
          <h3>Choose Ride Type</h3>
          <p>Select Standard, Premium, or SUV based on your needs</p>
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-number">4</div>
        <div className="timeline-content">
          <h3>Confirm Booking</h3>
          <p>Review fare and confirm your booking</p>
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-number">5</div>
        <div className="timeline-content">
          <h3>Driver Assigned</h3>
          <p>Get assigned to a nearby verified driver instantly</p>
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-number">6</div>
        <div className="timeline-content">
          <h3>Enjoy Ride</h3>
          <p>Track driver location and enjoy your journey</p>
        </div>
      </div>
    </div>
  </section>
);

const DriverSection = () => (
  <section className="demo-section driver-section">
    <h2>Driver Dashboard</h2>
    <div className="driver-stats-grid">
      <div className="driver-stat">
        <span className="stat-number">1,245</span>
        <span className="stat-label">Total Earnings</span>
        <span className="stat-period">This Month</span>
      </div>
      <div className="driver-stat">
        <span className="stat-number">47</span>
        <span className="stat-label">Rides Completed</span>
        <span className="stat-period">This Week</span>
      </div>
      <div className="driver-stat">
        <span className="stat-number">4.9</span>
        <span className="stat-label">Rating</span>
        <span className="stat-period">Based on 312 ratings</span>
      </div>
    </div>
    <div className="driver-features">
      <h3>Driver Tools</h3>
      <ul>
        <li>🗓️ Schedule rides in advance</li>
        <li>📊 View detailed earnings analytics</li>
        <li>📱 Accept/Decline ride requests</li>
        <li>📍 Smart route optimization</li>
        <li>📞 In-app communication with passengers</li>
        <li>🎯 Performance tracking and rewards</li>
      </ul>
    </div>
  </section>
);

export default DemoShowcase;
