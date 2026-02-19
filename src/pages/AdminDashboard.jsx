import React, { useState } from 'react';
import '../styles/AdminDashboard.css';

export default function AdminDashboard({ onPageChange }) {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { label: 'Total Users', value: '12,543', trend: '+12%', icon: '👥' },
    { label: 'Active Drivers', value: '2,341', trend: '+8%', icon: '🚗' },
    { label: 'Revenue (Today)', value: '$24,580', trend: '+15%', icon: '💰' },
    { label: 'Active Rides', value: '156', trend: '+5%', icon: '🚕' }
  ];

  const recentUsers = [
    { id: 1, name: 'John Smith', type: 'Passenger', joined: '2 hours ago', status: 'Active' },
    { id: 2, name: 'Sarah Johnson', type: 'Driver', joined: '5 hours ago', status: 'Active' },
    { id: 3, name: 'Mike Davis', type: 'Passenger', joined: '1 day ago', status: 'Inactive' },
  ];

  const recentTransactions = [
    { id: 1, user: 'John S.', type: 'Payment', amount: '$18.50', date: '2 min ago', status: 'Success' },
    { id: 2, user: 'Sarah J.', type: 'Payout', amount: '$125.00', date: '15 min ago', status: 'Success' },
    { id: 3, user: 'Mike D.', type: 'Payment', amount: '$22.75', date: '1 hour ago', status: 'Failed' },
  ];

  return (
    <div className="admin-dashboard">
      <div className="admin-header">
        <h1>Admin Dashboard</h1>
        <p>Platform management and analytics</p>
      </div>

      <div className="stats-grid">
        {stats.map((stat, idx) => (
          <div key={idx} className="stat-card">
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-content">
              <p>{stat.label}</p>
              <h3>{stat.value}</h3>
              <span className="trend">{stat.trend} vs last period</span>
            </div>
          </div>
        ))}
      </div>

      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button 
          className={`tab ${activeTab === 'users' ? 'active' : ''}`}
          onClick={() => setActiveTab('users')}
        >
          Users
        </button>
        <button 
          className={`tab ${activeTab === 'payments' ? 'active' : ''}`}
          onClick={() => setActiveTab('payments')}
        >
          Payments
        </button>
        <button 
          className={`tab ${activeTab === 'analytics' ? 'active' : ''}`}
          onClick={() => setActiveTab('analytics')}
        >
          Analytics
        </button>
      </div>

      {activeTab === 'overview' && (
        <div className="tab-content">
          <div className="content-row">
            <div className="card">
              <h2>Recent Users</h2>
              <div className="table">
                <div className="table-header">
                  <span>Name</span>
                  <span>Type</span>
                  <span>Joined</span>
                  <span>Status</span>
                </div>
                {recentUsers.map((user) => (
                  <div key={user.id} className="table-row">
                    <span>{user.name}</span>
                    <span className={`badge ${user.type.toLowerCase()}`}>{user.type}</span>
                    <span>{user.joined}</span>
                    <span className={`status ${user.status.toLowerCase()}`}>{user.status}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card">
              <h2>Recent Transactions</h2>
              <div className="table">
                <div className="table-header">
                  <span>User</span>
                  <span>Type</span>
                  <span>Amount</span>
                  <span>Date</span>
                  <span>Status</span>
                </div>
                {recentTransactions.map((tx) => (
                  <div key={tx.id} className="table-row">
                    <span>{tx.user}</span>
                    <span>{tx.type}</span>
                    <span className="amount">{tx.amount}</span>
                    <span>{tx.date}</span>
                    <span className={`status ${tx.status.toLowerCase()}`}>{tx.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'users' && (
        <div className="tab-content">
          <div className="card">
            <h2>User Management</h2>
            <div className="management-controls">
              <input type="text" placeholder="Search users..." className="search-input" />
              <select className="filter-select">
                <option>All Users</option>
                <option>Passengers</option>
                <option>Drivers</option>
              </select>
              <button className="btn btn-secondary">Export</button>
            </div>
            <div className="table">
              <div className="table-header">
                <span>ID</span>
                <span>Name</span>
                <span>Email</span>
                <span>Type</span>
                <span>Action</span>
              </div>
              {recentUsers.map((user) => (
                <div key={user.id} className="table-row">
                  <span>#{user.id.toString().padStart(4, '0')}</span>
                  <span>{user.name}</span>
                  <span className="email">{user.name.replace(' ', '.').toLowerCase()}@email.com</span>
                  <span className={`badge ${user.type.toLowerCase()}`}>{user.type}</span>
                  <button className="action-btn">View</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'payments' && (
        <div className="tab-content">
          <div className="card">
            <h2>Payment Management</h2>
            <div className="payment-stats">
              <div className="payment-stat">
                <h3>Total Revenue</h3>
                <p className="amount">$124,580.50</p>
              </div>
              <div className="payment-stat">
                <h3>Pending Payouts</h3>
                <p className="amount">$18,925.00</p>
              </div>
              <div className="payment-stat">
                <h3>Failed Transactions</h3>
                <p className="amount">$2,345.75</p>
              </div>
            </div>
            <div className="table">
              <div className="table-header">
                <span>Transaction ID</span>
                <span>User</span>
                <span>Type</span>
                <span>Amount</span>
                <span>Date</span>
                <span>Status</span>
              </div>
              {recentTransactions.map((tx) => (
                <div key={tx.id} className="table-row">
                  <span className="tx-id">#TXN-{tx.id.toString().padStart(6, '0')}</span>
                  <span>{tx.user}</span>
                  <span>{tx.type}</span>
                  <span className="amount">{tx.amount}</span>
                  <span>{tx.date}</span>
                  <span className={`status ${tx.status.toLowerCase()}`}>{tx.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'analytics' && (
        <div className="tab-content">
          <div className="analytics-grid">
            <div className="analytics-card">
              <h3>Platform Metrics</h3>
              <div className="metric-item">
                <span>Daily Active Users</span>
                <strong>4,321</strong>
              </div>
              <div className="metric-item">
                <span>Average Ride Rating</span>
                <strong>4.7/5</strong>
              </div>
              <div className="metric-item">
                <span>Driver Acceptance Rate</span>
                <strong>94%</strong>
              </div>
            </div>
            <div className="analytics-card">
              <h3>Revenue Breakdown</h3>
              <div className="metric-item">
                <span>Platform Fees</span>
                <strong>$12,450</strong>
              </div>
              <div className="metric-item">
                <span>Surge Pricing Bonuses</span>
                <strong>$3,250</strong>
              </div>
              <div className="metric-item">
                <span>Promotional Deductions</span>
                <strong>-$2,100</strong>
              </div>
            </div>
            <div className="analytics-card">
              <h3>Performance</h3>
              <div className="metric-item">
                <span>Total Rides Today</span>
                <strong>2,156</strong>
              </div>
              <div className="metric-item">
                <span>Avg Ride Duration</span>
                <strong>18 mins</strong>
              </div>
              <div className="metric-item">
                <span>System Uptime</span>
                <strong>99.9%</strong>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
