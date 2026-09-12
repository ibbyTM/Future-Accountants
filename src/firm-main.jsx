import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import FirmOfTheFuturePage from './pages/FirmOfTheFuturePage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FirmOfTheFuturePage />
  </StrictMode>
);
