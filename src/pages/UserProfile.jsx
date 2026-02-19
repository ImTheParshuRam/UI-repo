import React, { useState } from 'react';

export default function UserProfile({ userType = 'passenger', onPageChange }) {
  const [activeTab, setActiveTab] = useState('account');
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@email.com',
    phone: '+1-555-0123',
    photo: '👤'
  });

  const [paymentMethods, setPaymentMethods] = useState([
    { id: 1, type: 'Credit Card', last4: '4242', brand: 'Visa', default: true },
    { id: 2, type: 'Debit Card', last4: '5555', brand: 'Mastercard', default: false }
  ]);

  const [settings, setSettings] = useState({
    notifications: true,
    locationHistory: true,
    rideSharing: false,
    marketingEmails: true
  });

  return (
    <div className="user-profile">
      <div className="profile-header">
        <div className="profile-avatar">{user.photo}</div>
        <div className="profile-info">
          <h1>{user.name}</h1>
          <p>{userType === 'driver' ? 'Driver Account' : 'Passenger Account'}</p>
        </div>
      </div>

      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'account' ? 'active' : ''}`}
          onClick={() => setActiveTab('account')}
        >
          Account
        </button>
        <button 
          className={`tab ${activeTab === 'payment' ? 'active' : ''}`}
          onClick={() => setActiveTab('payment')}
        >
          Payment
        </button>
        <button 
          className={`tab ${activeTab === 'settings' ? 'active' : ''}`}
          onClick={() => setActiveTab('settings')}
        >
          Settings
        </button>
      </div>

      {activeTab === 'account' && (
        <div className="tab-content">
          <div className="form-section">
            <h2>Personal Information</h2>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" value={user.name} onChange={(e) => setUser({...user, name: e.target.value})} />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input type="tel" value={user.phone} onChange={(e) => setUser({...user, phone: e.target.value})} />
            </div>
            <button className="btn btn-primary">Save Changes</button>
          </div>
        </div>
      )}

      {activeTab === 'payment' && (
        <div className="tab-content">
          <div className="payment-section">
            <h2>Payment Methods</h2>
            <div className="payment-methods">
              {paymentMethods.map((method) => (
                <div key={method.id} className={`payment-card ${method.default ? 'default' : ''}`}>
                  <div className="payment-info">
                    <span className="card-type">{method.brand}</span>
                    <span className="card-ending">•••• {method.last4}</span>
                  </div>
                  <div className="payment-actions">
                    {method.default && <span className="badge">Default</span>}
                    <button className="text-btn">Edit</button>
                    <button className="text-btn delete">Remove</button>
                  </div>
                </div>
              ))}
            </div>
            <button className="btn btn-secondary add-payment">+ Add Payment Method</button>
          </div>
        </div>
      )}

      {activeTab === 'settings' && (
        <div className="tab-content">
          <div className="settings-section">
            <h2>Preferences</h2>
            <div className="setting-item">
              <div className="setting-label">
                <h4>Push Notifications</h4>
                <p>Get ride updates and offers</p>
              </div>
              <label className="toggle">
                <input 
                  type="checkbox" 
                  checked={settings.notifications}
                  onChange={(e) => setSettings({...settings, notifications: e.target.checked})}
                />
                <span className="toggle-slider"></span>
              </label>
            </div>
            <div className="setting-item">
              <div className="setting-label">
                <h4>Location History</h4>
                <p>Help improve our service</p>
              </div>
              <label className="toggle">
                <input 
                  type="checkbox" 
                  checked={settings.locationHistory}
                  onChange={(e) => setSettings({...settings, locationHistory: e.target.checked})}
                />
                <span className="toggle-slider"></span>
              </label>
            </div>
            <div className="setting-item">
              <div className="setting-label">
                <h4>Ride Sharing</h4>
                <p>Share rides to save money</p>
              </div>
              <label className="toggle">
                <input 
                  type="checkbox" 
                  checked={settings.rideSharing}
                  onChange={(e) => setSettings({...settings, rideSharing: e.target.checked})}
                />
                <span className="toggle-slider"></span>
              </label>
            </div>
            <div className="setting-item">
              <div className="setting-label">
                <h4>Marketing Emails</h4>
                <p>Receive offers and promotions</p>
              </div>
              <label className="toggle">
                <input 
                  type="checkbox" 
                  checked={settings.marketingEmails}
                  onChange={(e) => setSettings({...settings, marketingEmails: e.target.checked})}
                />
                <span className="toggle-slider"></span>
              </label>
            </div>
          </div>

          <div className="danger-zone">
            <h2>Account</h2>
            <button className="btn btn-danger">Delete Account</button>
          </div>
        </div>
      )}
    </div>
  );
}
