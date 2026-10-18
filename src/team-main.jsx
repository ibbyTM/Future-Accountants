import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './analytics.js';
import TeamPage from './pages/TeamPage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TeamPage />
  </StrictMode>
);
