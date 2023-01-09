import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client';

import { AuthProvider } from './context/AuthProvider';

import reportWebVitals from './reportWebVitals';

import GatewayRoutes from './routes/GatewayRoutes';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
  <AuthProvider>
    <BrowserRouter>
      <GatewayRoutes />
    </BrowserRouter>
  </AuthProvider>
</React.StrictMode>
);

reportWebVitals();
