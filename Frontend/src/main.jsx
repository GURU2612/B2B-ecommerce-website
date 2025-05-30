import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { UserProvider } from './Context/UserContext';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>
);
