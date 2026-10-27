/*
 * LEAD MAGNETS
 *
 * The list comes from Damon's posts database in Notion. To publish a guide:
 * publish the resource page, tick "Publish to website" on the post, press
 * Publish (or wait for the hourly rebuild). Nothing to edit here.
 *
 * scripts/lead-magnets/fetch.mjs reads the database at build time and
 * writes leadMagnets.generated.js, which is committed so a build without
 * Notion access still has the last good set. Per-page overrides live in the
 * Notion row (Web title, Web summary, Web kicker, Web slug, Web takeaways).
 *
 * Each entry: slug, title, summary, kicker, intro[], takeaways[], notionUrl
 * (the /ebd/ embed link), resourceLink (the public page), embedOk (false
 * when the resource page was not public at build time).
 */
import generated from './leadMagnets.generated.js';

export const leadMagnets = generated;

/*
 * The guides offered on the index and in the sitemap: those whose resource
 * page is public. A page whose Notion copy has gone private keeps its URL
 * (links are out there) and shows a holding notice instead of the embed.
 */
export const listedLeadMagnets = leadMagnets.filter(m => m.embedOk !== false);

export const findLeadMagnet = slug => leadMagnets.find(m => m.slug === slug);

/* The direct link for a magnet: its own resourceLink, else the public Notion page. */
export const resourceLinkFor = m => m.resourceLink || m.notionUrl.replace('/ebd/', '/');
