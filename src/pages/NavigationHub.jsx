import React from 'react';

const styles = {
  hubContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '40px 20px',
    minHeight: '100vh',
  },
  hubHeader: {
    textAlign: 'center',
    marginBottom: '60px',
    padding: '40px 0',
  },
  hubTitle: {
    fontSize: '2.5rem',
    fontWeight: '800',
    color: '#f8fafc',
    marginBottom: '10px',
    letterSpacing: '-0.03em',
  },
  hubSubtitle: {
    fontSize: '1.1rem',
    color: '#94a3b8',
    fontWeight: '500',
  },
  sectionsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '30px',
    marginBottom: '60px',
  },
  section: {
    background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(99, 102, 241, 0.05))',
    border: '1px solid rgba(99, 102, 241, 0.2)',
    borderRadius: '16px',
    padding: '30px',
    transition: 'all 0.3s ease',
  },
  sectionTitle: {
    fontSize: '1.3rem',
    fontWeight: '700',
    color: '#f8fafc',
    marginBottom: '20px',
    padding: '15px 0',
    borderBottom: '2px solid rgba(99, 102, 241, 0.3)',
  },
  pageCard: {
    background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(99, 102, 241, 0.08))',
    border: '1.5px solid rgba(99, 102, 241, 0.25)',
    borderRadius: '12px',
    padding: '20px',
    margin: '12px 0',
    cursor: 'pointer',
    transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
    textAlign: 'left',
    color: '#f8fafc',
  },
  cardIcon: {
    fontSize: '2rem',
    marginBottom: '10px',
  },
  cardH3: {
    fontSize: '1rem',
    fontWeight: '700',
    marginBottom: '5px',
    color: '#e2e8f0',
  },
  cardP: {
    fontSize: '0.85rem',
    color: '#94a3b8',
    marginBottom: '8px',
  },
  cardArrow: {
    fontSize: '0.9rem',
    color: '#6366f1',
    fontWeight: '700',
  },
  hubInfo: {
    background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(139, 92, 246, 0.1))',
    border: '1px solid rgba(99, 102, 241, 0.3)',
    borderRadius: '16px',
    padding: '40px',
    textAlign: 'center',
  },
  infoH3: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#f8fafc',
    marginBottom: '15px',
  },
  infoP: {
    fontSize: '1rem',
    color: '#94a3b8',
    lineHeight: '1.6',
  },
};

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
    <div style={styles.hubContainer}>
      <div style={styles.hubHeader}>
        <h1 style={styles.hubTitle}>CabBook Application Hub</h1>
        <p style={styles.hubSubtitle}>Navigate to different sections of the cab booking platform</p>
      </div>

      <div style={styles.sectionsContainer}>
        {sections.map((section, idx) => (
          <div key={idx} style={styles.section}>
            <h2 style={styles.sectionTitle}>{section.title}</h2>
            <div>
              {section.pages.map((page, pidx) => (
                <button
                  key={pidx}
                  style={styles.pageCard}
                  onClick={() => onPageChange(page.route)}
                  onMouseEnter={(e) => e.target.style.background = 'linear-gradient(135deg, rgba(99, 102, 241, 0.25), rgba(99, 102, 241, 0.15))'}
                  onMouseLeave={(e) => e.target.style.background = 'linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(99, 102, 241, 0.08))'}
                >
                  <div style={styles.cardIcon}>{page.icon}</div>
                  <h3 style={styles.cardH3}>{page.name}</h3>
                  <p style={styles.cardP}>{page.desc}</p>
                  <span style={styles.cardArrow}>→</span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={styles.hubInfo}>
        <h3 style={styles.infoH3}>About This App</h3>
        <p style={styles.infoP}>A comprehensive cab booking platform with passenger, driver, and admin features. Use the AI assistant (bottom right) for help anytime.</p>
      </div>
    </div>
  );
}
