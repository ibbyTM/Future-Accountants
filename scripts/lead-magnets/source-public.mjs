/*
 * Reads a published Notion page through the notion.site page endpoint. No
 * token needed, works for any page Damon has published. Used for the parity
 * check and as the fallback adapter.
 */
const uuid = h => (h.includes('-') ? h : `${h.slice(0, 8)}-${h.slice(8, 12)}-${h.slice(12, 16)}-${h.slice(16, 20)}-${h.slice(20)}`);

const text = t => (t || []).map(x => (Array.isArray(x) && typeof x[0] === 'string' ? x[0] : '')).join('');

const TYPE = {
  text: 'text',
  header: 'text',
  sub_header: 'text',
  sub_sub_header: 'text',
  quote: 'text',
  callout: 'text',
  code: 'text',
  numbered_list: 'numbered',
  bulleted_list: 'bulleted',
  page: 'child_page',
};

export function publicSource(site) {
  const base = `https://${site}/api/v3/loadPageChunk`;

  async function chunk(pageId, cursor, n) {
    const r = await fetch(base, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'User-Agent': 'Mozilla/5.0' },
      body: JSON.stringify({ page: { id: uuid(pageId) }, limit: 100, cursor: cursor ?? { stack: [] }, chunkNumber: n, verticalColumns: false }),
    });
    if (!r.ok) throw new Error(`notion.site answered ${r.status} for ${pageId}`);
    return r.json();
  }

  async function load(pageId) {
    const blocks = {};
    let cursor;
    for (let n = 0; n < 8; n++) {
      const d = await chunk(pageId, cursor, n);
      for (const [k, v] of Object.entries(d.recordMap?.block ?? {})) {
        const val = v.value?.value ?? v.value ?? {};
        blocks[k] = val;
      }
      cursor = d.cursor;
      if (!cursor?.stack?.length) break;
    }
    return blocks;
  }

  return {
    async page(pageId) {
      const id = uuid(pageId);
      const blocks = await load(id);
      const root = blocks[id];
      if (!root) throw new Error(`page ${pageId} not found or not published`);
      const out = [];
      for (const cid of root.content ?? []) {
        const b = blocks[cid];
        if (!b) continue;
        const type = TYPE[b.type];
        if (!type) continue;
        if (type === 'child_page') {
          out.push({ type, childPageId: cid.replace(/-/g, ''), childPageTitle: text(b.properties?.title) });
        } else {
          out.push({ type, text: text(b.properties?.title) });
        }
      }
      return { pageTitle: text(root.properties?.title), blocks: out };
    },
    async resolveTitle(pageId) {
      const id = uuid(pageId);
      const blocks = await load(id);
      return text(blocks[id]?.properties?.title);
    },
  };
}
