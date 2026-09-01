import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import LeadMagnetPage from './pages/LeadMagnetPage.jsx';
import { findLeadMagnet, leadMagnets } from './content/leadMagnets.js';

/*
 * One shared entry for every lead magnet page. The slug comes from the URL,
 * so adding a magnet needs no new entry file: the generated HTML for
 * /resources/<slug> loads this and it looks the magnet up.
 */
const slug = window.location.pathname
  .replace(/\/$/, '')
  .split('/')
  .pop()
  .replace(/\.html$/, '');

const magnet = findLeadMagnet(slug) || leadMagnets[0];

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LeadMagnetPage magnet={magnet} />
  </StrictMode>
);
