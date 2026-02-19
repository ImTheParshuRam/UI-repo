import React, { useState, useRef, useEffect } from 'react';
import './AIAssistant.css';

const AIAssistant = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      text: 'Hello! I\'m your AI Travel Assistant. I can help you book rides, track your journey, answer questions about fares, and more. What can I help you with today?',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const predefinedResponses = {
    'fare': 'Our fares are ₹10/km for Standard rides, ₹15/km for Premium, and ₹18/km for SUV. Peak hours may have slight surcharges. Would you like to book a ride?',
    'booking': 'To book a ride, click "Quick Book" or use our map feature. Select your pickup and destination, choose a ride type, and confirm. You\'ll be matched with a driver in seconds!',
    'payment': 'We accept all major payment methods: Credit/Debit cards, UPI, Digital wallets, and Cash. You can save multiple payment methods for faster checkout.',
    'safety': 'Your safety is our priority! All drivers are verified, background-checked, and rated by users. Every ride is tracked in real-time. Share your trip details with trusted contacts.',
    'cancel': 'You can cancel a ride up to 2 minutes after booking with no charge. After that, a small cancellation fee may apply. Contact our support for special cases.',
    'rating': 'You can rate your driver and ride after completion. This helps us maintain quality. Drivers with ratings below 4.2 are regularly monitored.',
    'support': 'For immediate support, you can call us at 1-800-CABBOOK or use the chat feature. Our support team is available 24/7.',
    'account': 'Manage your account settings, payment methods, ride history, and preferences in the Profile section. You can also set emergency contacts there.',
    'promo': 'Check our Promotions page for current offers. New users get 50% off their first ride! Loyalty program members earn points on every ride.',
  };

  const generateResponse = (userMessage) => {
    const lower = userMessage.toLowerCase();
    
    // Check for keywords
    for (const [key, response] of Object.entries(predefinedResponses)) {
      if (lower.includes(key)) {
        return response;
      }
    }

    // Default responses for common queries
    if (lower.includes('hello') || lower.includes('hi')) {
      return 'Hi there! How can I assist you today? Feel free to ask about fares, bookings, payments, safety, or anything else!';
    }
    if (lower.includes('thank') || lower.includes('thanks')) {
      return 'You\'re welcome! Is there anything else I can help you with?';
    }
    if (lower.includes('bye') || lower.includes('goodbye')) {
      return 'Goodbye! Safe travels and thank you for choosing CabBook!';
    }

    return 'Great question! For more detailed information, please visit our Help Center or contact our support team at support@cabbook.com. How else can I help?';
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      text: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Simulate bot response delay
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        type: 'bot',
        text: generateResponse(inputValue),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsLoading(false);
    }, 600);
  };

  const handleQuickAction = (action) => {
    setInputValue(action);
    setTimeout(() => {
      const userMessage = {
        id: messages.length + 1,
        type: 'user',
        text: action,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, userMessage]);
      setInputValue('');
      setIsLoading(true);

      setTimeout(() => {
        const botResponse = {
          id: messages.length + 2,
          type: 'bot',
          text: generateResponse(action),
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botResponse]);
        setIsLoading(false);
      }, 600);
    }, 100);
  };

  if (!isOpen) return null;

  return (
    <div className="ai-assistant-overlay">
      <div className="ai-assistant-container">
        {/* Header */}
        <div className="ai-header">
          <div className="ai-header-content">
            <div className="ai-avatar">
              <span>🤖</span>
            </div>
            <div>
              <h3>CabBook AI Assistant</h3>
              <span className="ai-status">Always available to help</span>
            </div>
          </div>
          <button className="ai-close-btn" onClick={onClose}>✕</button>
        </div>

        {/* Messages Area */}
        <div className="ai-messages">
          {messages.map((msg, index) => (
            <div key={msg.id} className={`message message-${msg.type}`}>
              {msg.type === 'bot' && <span className="message-avatar">🤖</span>}
              <div className="message-bubble">
                {msg.text}
              </div>
              {msg.type === 'user' && <span className="message-avatar">👤</span>}
            </div>
          ))}
          {isLoading && (
            <div className="message message-bot">
              <span className="message-avatar">🤖</span>
              <div className="message-bubble typing">
                <span></span><span></span><span></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Actions (shown when no messages or after initial greeting) */}
        {messages.length <= 2 && (
          <div className="ai-quick-actions">
            <button 
              className="quick-action-btn"
              onClick={() => handleQuickAction('How much does a ride cost?')}
            >
              💰 Fares
            </button>
            <button 
              className="quick-action-btn"
              onClick={() => handleQuickAction('How do I book a ride?')}
            >
              🚗 Book a Ride
            </button>
            <button 
              className="quick-action-btn"
              onClick={() => handleQuickAction('What payment methods do you accept?')}
            >
              💳 Payment
            </button>
            <button 
              className="quick-action-btn"
              onClick={() => handleQuickAction('Is it safe?')}
            >
              🔒 Safety
            </button>
          </div>
        )}

        {/* Input Area */}
        <form className="ai-input-area" onSubmit={handleSendMessage}>
          <input
            type="text"
            placeholder="Ask me anything..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            disabled={isLoading}
            className="ai-input"
          />
          <button type="submit" disabled={isLoading || !inputValue.trim()} className="ai-send-btn">
            {isLoading ? '...' : '→'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AIAssistant;
