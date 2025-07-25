import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom'; // ✅ BrowserRouter for routing
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* ✅ Wrap App in BrowserRouter */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
