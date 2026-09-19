import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './analytics.js';
import BookPage from './pages/BookPage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookPage />
  </StrictMode>
);
