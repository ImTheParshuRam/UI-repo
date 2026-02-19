import React, { useState } from 'react';
import './DemoShowcase.css';
import AIAssistant from '../components/AIAssistant/AIAssistant';

const DemoShowcase = ({ onEnter }) => {
  const [isAIOpen, setIsAIOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState('overview');

  const sections = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { id: 'features', label: 'Features', icon: '⭐' },
    { id: 'pricing', label: 'Pricing', icon: '💰' },
    { id: 'safety', label: 'Safety', icon: '🔒' },
    { id: 'testimonials', label: 'Reviews', icon: '💬' },
  ];

  const features = [
    {
      title: 'Real-time Tracking',
      description: 'Track your ride in real-time with live GPS updates',
      icon: '🗺️',
      color: '#6366f1'
    },
    {
      title: 'AI Assistant',
      description: '24/7 AI support for all your travel needs',
      icon: '🤖',
      color: '#8b5cf6'
    },
    {
      title: 'Safe & Secure',
      description: 'Verified drivers and secure payment methods',
      icon: '🛡️',
      color: '#ec4899'
    },
    {
      title: 'Multiple Ride Types',
      description: 'Choose from Standard, Premium, or SUV rides',
      icon: '🚗',
      color: '#f59e0b'
    },
    {
      title: 'Quick Booking',
      description: 'Book a ride in just 3 taps',
      icon: '⚡',
      color: '#10b981'
    },
    {
      title: 'Loyalty Rewards',
      description: 'Earn points on every ride and redeem rewards',
      icon: '🎁',
      color: '#0ea5e9'
    },
  ];

  const rides = [
    { type: 'Standard', price: '₹10/km', description: 'Comfort for everyday trips', image: '🚙', passengers: 4 },
    { type: 'Premium', price: '₹15/km', description: 'Enhanced comfort and style', image: '🚘', passengers: 4 },
    { type: 'SUV', price: '₹18/km', description: 'Spacious for group travel', image: '🚐', passengers: 6 },
  ];

  const testimonials = [
    {
      name: 'Priya Singh',
      role: 'Daily Commuter',
      review: 'Amazing app! The AI assistant solved my issue in seconds.',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      name: 'Rahul Patel',
      role: 'Weekend Explorer',
      review: 'Love the real-time tracking feature. Always feels safe!',
      rating: 5,
      avatar: '👨‍💼'
    },
    {
      name: 'Anjali Sharma',
      role: 'Business Traveler',
      review: 'Premium rides are worth every rupee. Professional drivers!',
      rating: 5,
      avatar: '👩‍🔬'
    },
  ];

  const renderContent = () => {
    switch (currentSection) {
      case 'overview':
        return (
          <section className="demo-section">
            <div className="hero-banner">
              <div className="hero-content">
                <h1>Welcome to <span className="gradient-text">CabBook</span></h1>
                <p>Your trusted ride-sharing partner with AI-powered assistance</p>
                <button className="btn btn-primary hero-btn" onClick={() => setIsAIOpen(true)}>
                  Try AI Assistant
                </button>
              </div>
              <div className="hero-graphic">
                <div className="graphic-element gradient-circle-1"></div>
                <div className="graphic-element gradient-circle-2"></div>
                <div className="graphic-element car-icon">🚕</div>
              </div>
            </div>

            <div className="stats-grid">
              <div className="stat-card glass-card">
                <div className="stat-number">500K+</div>
                <div className="stat-label">Happy Riders</div>
              </div>
              <div className="stat-card glass-card">
                <div className="stat-number">50M+</div>
                <div className="stat-label">Rides Completed</div>
              </div>
              <div className="stat-card glass-card">
                <div className="stat-number">4.9★</div>
                <div className="stat-label">Average Rating</div>
              </div>
              <div className="stat-card glass-card">
                <div className="stat-number">24/7</div>
                <div className="stat-label">AI Support</div>
              </div>
            </div>
          </section>
        );

      case 'features':
        return (
          <section className="demo-section">
            <h2 className="section-title">Why Choose CabBook?</h2>
            <div className="features-grid">
              {features.map((feature, idx) => (
                <div key={idx} className="feature-card glass-card" style={{borderColor: `${feature.color}20`}}>
                  <div className="feature-icon" style={{background: `${feature.color}20`}}>
                    <span className="emoji">{feature.icon}</span>
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </section>
        );

      case 'pricing':
        return (
          <section className="demo-section">
            <h2 className="section-title">Choose Your Ride</h2>
            <div className="rides-grid">
              {rides.map((ride, idx) => (
                <div key={idx} className="ride-card glass-card">
                  <div className="ride-icon">{ride.image}</div>
                  <h3>{ride.type}</h3>
                  <div className="ride-price">{ride.price}</div>
                  <p className="ride-desc">{ride.description}</p>
                  <div className="ride-info">👥 {ride.passengers} passengers</div>
                  <button className="btn btn-primary w-full">Book Now</button>
                </div>
              ))}
            </div>
          </section>
        );

      case 'safety':
        return (
          <section className="demo-section">
            <h2 className="section-title">Safety First</h2>
            <div className="safety-grid">
              <div className="safety-item glass-card">
                <div className="safety-icon">✓</div>
                <h3>Verified Drivers</h3>
                <p>All drivers undergo thorough background checks and verification</p>
              </div>
              <div className="safety-item glass-card">
                <div className="safety-icon">🔍</div>
                <h3>Real-time Tracking</h3>
                <p>Share your live location with trusted contacts during every ride</p>
              </div>
              <div className="safety-item glass-card">
                <div className="safety-icon">📱</div>
                <h3>24/7 Support</h3>
                <p>Our AI assistant and support team available round the clock</p>
              </div>
              <div className="safety-item glass-card">
                <div className="safety-icon">🔐</div>
                <h3>Secure Payments</h3>
                <p>Encrypted payment processing with multiple payment options</p>
              </div>
            </div>
          </section>
        );

      case 'testimonials':
        return (
          <section className="demo-section">
            <h2 className="section-title">What Our Users Say</h2>
            <div className="testimonials-grid">
              {testimonials.map((testimonial, idx) => (
                <div key={idx} className="testimonial-card glass-card">
                  <div className="testimonial-header">
                    <div className="testimonial-avatar">{testimonial.avatar}</div>
                    <div className="testimonial-info">
                      <h4>{testimonial.name}</h4>
                      <span className="testimonial-role">{testimonial.role}</span>
                    </div>
                  </div>
                  <div className="testimonial-rating">
                    {'★'.repeat(testimonial.rating)}
                  </div>
                  <p className="testimonial-text">"{testimonial.review}"</p>
                </div>
              ))}
            </div>
          </section>
        );

      default:
        return null;
    }
  };

  return (
    <div className="demo-showcase">
      {/* Navigation */}
      <nav className="demo-nav glass-panel">
        <div className="nav-brand">
          <span className="brand-icon">🚕</span>
          <span className="brand-name">CabBook</span>
        </div>
        <div className="nav-menu">
          {sections.map(section => (
            <button
              key={section.id}
              className={`nav-item ${currentSection === section.id ? 'active' : ''}`}
              onClick={() => setCurrentSection(section.id)}
            >
              <span>{section.icon}</span>
              <span>{section.label}</span>
            </button>
          ))}
        </div>
        <button className="ai-toggle-btn" onClick={() => setIsAIOpen(!isAIOpen)} title="Open AI Assistant">
          💬
        </button>
      </nav>

      {/* Main Content */}
      <main className="demo-main">
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="demo-footer">
        <div className="footer-content">
          <p>&copy; 2024 CabBook. All rights reserved.</p>
          <div className="footer-links">
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>

      {/* AI Assistant */}
      <AIAssistant isOpen={isAIOpen} onClose={() => setIsAIOpen(false)} />
    </div>
  );
};

export default DemoShowcase;
