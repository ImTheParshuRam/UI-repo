import React, { useState } from 'react';
import DemoShowcase from './pages/DemoShowcase';
import App from './App';

const AppWrapper = () => {
  const [showApp, setShowApp] = useState(false);

  if (!showApp) {
    return <DemoShowcase onEnter={() => setShowApp(true)} />;
  }

  return <App />;
};

export default AppWrapper;
