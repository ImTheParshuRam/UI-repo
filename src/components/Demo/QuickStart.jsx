import React from 'react';
import './QuickStart.css';

const QuickStart = ({ onPageChange }) => {
  return (
    <div className="quickstart-container">
      <div className="quickstart-header">
        <button className="back-btn" onClick={() => onPageChange('home')}>
          ← Back to Home
        </button>
        <h1>Quick Start Guide</h1>
      </div>

      <div className="quickstart-content">
        {/* Passenger Guide */}
        <section className="guide-section">
          <div className="section-header">
            <span className="section-icon">👤</span>
            <h2>For Passengers</h2>
          </div>

          <div className="steps-grid">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Download & Install</h3>
              <p>Get CabBook from your app store or access online</p>
            </div>

            <div className="step">
              <div className="step-number">2</div>
              <h3>Sign Up</h3>
              <p>Create account with email and phone number</p>
            </div>

            <div className="step">
              <div className="step-number">3</div>
              <h3>Select Pickup</h3>
              <p>Use current location or search for pickup point</p>
            </div>

            <div className="step">
              <div className="step-number">4</div>
              <h3>Choose Destination</h3>
              <p>Enter drop-off location or select from recent</p>
            </div>

            <div className="step">
              <div className="step-number">5</div>
              <h3>Pick Ride Type</h3>
              <p>Choose Standard, Premium, or SUV based on needs</p>
            </div>

            <div className="step">
              <div className="step-number">6</div>
              <h3>Confirm & Pay</h3>
              <p>Review fare, confirm booking, and select payment</p>
            </div>

            <div className="step">
              <div className="step-number">7</div>
              <h3>Track Driver</h3>
              <p>See real-time location and arrival time of driver</p>
            </div>

            <div className="step">
              <div className="step-number">8</div>
              <h3>Enjoy Ride</h3>
              <p>Sit back, relax, and reach your destination</p>
            </div>
          </div>

          <div className="tips-box passenger-tips">
            <h4>Passenger Tips:</h4>
            <ul>
              <li>Enable location access for faster pickup</li>
              <li>Save favorite locations for quick access</li>
              <li>Check driver ratings before confirming</li>
              <li>Share your trip with emergency contacts</li>
              <li>Rate your ride to help improve service</li>
            </ul>
          </div>
        </section>

        {/* Divider */}
        <div className="section-divider"></div>

        {/* Driver Guide */}
        <section className="guide-section">
          <div className="section-header">
            <span className="section-icon">🚗</span>
            <h2>For Drivers</h2>
          </div>

          <div className="steps-grid">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Register Account</h3>
              <p>Sign up with ID, license, and vehicle details</p>
            </div>

            <div className="step">
              <div className="step-number">2</div>
              <h3>Verification</h3>
              <p>Complete background check and document verification</p>
            </div>

            <div className="step">
              <div className="step-number">3</div>
              <h3>Set Online Status</h3>
              <p>Go online to start receiving ride requests</p>
            </div>

            <div className="step">
              <div className="step-number">4</div>
              <h3>Receive Request</h3>
              <p>Get notified of ride requests with passenger details</p>
            </div>

            <div className="step">
              <div className="step-number">5</div>
              <h3>Accept/Decline</h3>
              <p>Choose to accept or decline based on availability</p>
            </div>

            <div className="step">
              <div className="step-number">6</div>
              <h3>Pick Up Passenger</h3>
              <p>Navigate to pickup location using directions</p>
            </div>

            <div className="step">
              <div className="step-number">7</div>
              <h3>Complete Ride</h3>
              <p>Drive to destination and drop off safely</p>
            </div>

            <div className="step">
              <div className="step-number">8</div>
              <h3>Earn Money</h3>
              <p>Get paid instantly and build your reputation</p>
            </div>
          </div>

          <div className="tips-box driver-tips">
            <h4>Driver Tips:</h4>
            <ul>
              <li>Maintain good vehicle condition and cleanliness</li>
              <li>Arrive on time - avoid cancellations</li>
              <li>Be professional and courteous to passengers</li>
              <li>Use suggested routes for faster rides</li>
              <li>Build ratings to get premium ride requests</li>
            </ul>
          </div>
        </section>
      </div>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h4>How long does a ride take?</h4>
            <p>Typically 2-10 minutes for driver arrival, depending on location. Ride time depends on distance and traffic.</p>
          </div>
          <div className="faq-item">
            <h4>What if I need to cancel?</h4>
            <p>Cancel within 2 minutes of booking for free. After that, a small cancellation fee applies.</p>
          </div>
          <div className="faq-item">
            <h4>How do I report an issue?</h4>
            <p>Use the in-app support chat, call support hotline, or email us with ride details and issue description.</p>
          </div>
          <div className="faq-item">
            <h4>Is my payment secure?</h4>
            <p>Yes, all payments are encrypted and secured using industry-standard protocols.</p>
          </div>
          <div className="faq-item">
            <h4>Can I schedule rides in advance?</h4>
            <p>Yes, you can schedule rides up to 30 days in advance with our scheduled rides feature.</p>
          </div>
          <div className="faq-item">
            <h4>How do I earn as a driver?</h4>
            <p>You earn per ride based on distance and time. No hourly fees - transparent pricing!</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="quickstart-cta">
        <h2>Ready to Get Started?</h2>
        <p>Join thousands of users and drivers on CabBook today</p>
        <div className="cta-buttons">
          <button className="btn-primary" onClick={() => onPageChange('register')}>
            Sign Up as Passenger
          </button>
          <button className="btn-secondary" onClick={() => onPageChange('cab-register')}>
            Register as Driver
          </button>
        </div>
      </section>
    </div>
  );
};

export default QuickStart;
