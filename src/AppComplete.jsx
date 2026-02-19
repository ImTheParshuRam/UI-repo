import React, { useState } from 'react';
import './App.css';

// Import all pages
import PassengerHome from './pages/PassengerHome';
import BookingConfirmation from './pages/BookingConfirmation';
import RideTracking from './pages/RideTracking';
import DriverDashboard from './pages/DriverDashboard';
import UserProfile from './pages/UserProfile';
import AdminDashboard from './pages/AdminDashboard';
import AIAssistant from './components/AIAssistant/AIAssistant';
import Navigation from './components/Navigation/Navigation';
import RoleSelection from './components/RoleSelection/RoleSelection';

export default function App() {
  const [currentPage, setCurrentPage] = useState('role-selection');
  const [userRole, setUserRole] = useState(null);
  const [isAIOpen, setIsAIOpen] = useState(false);
  const [pageData, setPageData] = useState({});

  const handlePageChange = (page, data = {}) => {
    setCurrentPage(page);
    setPageData(data);
    window.scrollTo(0, 0);
  };

  const handleRoleSelect = (role) => {
    setUserRole(role);
    if (role === 'admin') {
      handlePageChange('admin-dashboard');
    } else if (role === 'driver') {
      handlePageChange('driver-dashboard');
    } else {
      handlePageChange('passenger-home');
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'role-selection':
        return <RoleSelection onRoleSelect={handleRoleSelect} />;
      
      case 'passenger-home':
        return <PassengerHome onPageChange={handlePageChange} />;
      
      case 'booking-search':
        return (
          <BookingConfirmation 
            bookingData={pageData} 
            onPageChange={handlePageChange}
          />
        );
      
      case 'ride-tracking':
        return <RideTracking onPageChange={handlePageChange} />;
      
      case 'driver-dashboard':
        return <DriverDashboard onPageChange={handlePageChange} />;
      
      case 'admin-dashboard':
        return <AdminDashboard onPageChange={handlePageChange} />;
      
      case 'user-profile':
        return (
          <UserProfile 
            userType={userRole} 
            onPageChange={handlePageChange}
          />
        );
      
      default:
        return <PassengerHome onPageChange={handlePageChange} />;
    }
  };

  return (
    <div className="app">
      {currentPage !== 'role-selection' && (
        <Navigation 
          userRole={userRole} 
          onPageChange={handlePageChange}
          currentPage={currentPage}
        />
      )}
      
      <main className="main-content">
        {renderPage()}
      </main>

      <AIAssistant 
        isOpen={isAIOpen} 
        onClose={() => setIsAIOpen(false)}
      />

      {!isAIOpen && currentPage !== 'role-selection' && (
        <button 
          className="fab-ai-button" 
          onClick={() => setIsAIOpen(true)}
          title="Open AI Assistant"
        >
          💬
        </button>
      )}
    </div>
  );
}
