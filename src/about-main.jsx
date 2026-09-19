import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './analytics.js';
import AboutPage from './pages/AboutPage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AboutPage />
  </StrictMode>
);
