import { inject } from '@vercel/analytics';

/*
 * Vercel Web Analytics: page views for every page, plus the custom
 * lead_form events from src/lib/track.js. Enable it once in the Vercel
 * project (Analytics tab, Enable). In dev it logs to the console instead
 * of sending anything. On a host that is not Vercel the script simply
 * fails to load and nothing else is affected.
 */
inject({ mode: import.meta.env.DEV ? 'development' : 'production' });
