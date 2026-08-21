import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import OfferPage from './pages/OfferPage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <OfferPage />
  </StrictMode>
);
