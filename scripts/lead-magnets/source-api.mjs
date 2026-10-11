/*
 * Reads Damon's posts database through the official Notion API. Needs an
 * internal integration token that has been given access to the database
 * (database page, three-dot menu, Connections). API version pinned so the
 * shapes below stay stable.
 */
const API = 'https://api.notion.com/v1';
const VERSION = '2022-06-28';

export const PROPS = {
  publish: 'Publish to website',
  title: 'Web title',
  summary: 'Web summary',
  kicker: 'Web kicker',
  slug: 'Web slug',
  takeaways: 'Web takeaways',
};

const plain = rich => (rich || []).map(r => r.plain_text ?? '').join('');

const TYPE = {
  paragraph: 'text',
  heading_1: 'text',
  heading_2: 'text',
  heading_3: 'text',
  quote: 'text',
  callout: 'text',
  numbered_list_item: 'numbered',
  bulleted_list_item: 'bulleted',
  child_page: 'child_page',
};

export function apiSource(token) {
  async function call(path, init = {}) {
    const r = await fetch(`${API}${path}`, {
      ...init,
      headers: {
        Authorization: `Bearer ${token}`,
        'Notion-Version': VERSION,
        'Content-Type': 'application/json',
        ...(init.headers || {}),
      },
    });
    const body = await r.json().catch(() => ({}));
    if (!r.ok) throw new Error(`Notion API ${r.status} on ${path}: ${body.message || ''}`);
    return body;
  }

  return {
    /* Rows with the publish box ticked, oldest first. */
    async rows(databaseId) {
      const out = [];
      let cursor;
      do {
        const d = await call(`/databases/${databaseId}/query`, {
          method: 'POST',
          body: JSON.stringify({
            filter: { property: PROPS.publish, checkbox: { equals: true } },
            sorts: [{ timestamp: 'created_time', direction: 'ascending' }],
            page_size: 100,
            ...(cursor ? { start_cursor: cursor } : {}),
          }),
        });
        for (const p of d.results ?? []) {
          const props = p.properties ?? {};
          const titleProp = Object.values(props).find(v => v.type === 'title');
          const rt = name => plain(props[name]?.rich_text);
          out.push({
            id: p.id.replace(/-/g, ''),
            createdTime: p.created_time,
            pageTitle: plain(titleProp?.title),
            overrides: {
              title: rt(PROPS.title),
              summary: rt(PROPS.summary),
              kicker: rt(PROPS.kicker),
              slug: rt(PROPS.slug),
              takeaways: rt(PROPS.takeaways)
                .split(/\r?\n/)
                .map(s => s.trim())
                .filter(Boolean),
            },
          });
        }
        cursor = d.has_more ? d.next_cursor : null;
      } while (cursor);
      return out;
    },

    /* The page's top-level blocks, normalised. */
    async page(pageId) {
      const blocks = [];
      let cursor;
      do {
        const d = await call(`/blocks/${pageId}/children?page_size=100${cursor ? `&start_cursor=${cursor}` : ''}`);
        for (const b of d.results ?? []) {
          const type = TYPE[b.type];
          if (!type) continue;
          if (type === 'child_page') {
            blocks.push({ type, childPageId: b.id.replace(/-/g, ''), childPageTitle: b.child_page?.title ?? '' });
          } else {
            blocks.push({ type, text: plain(b[b.type]?.rich_text) });
          }
        }
        cursor = d.has_more ? d.next_cursor : null;
      } while (cursor);
      const page = await call(`/pages/${pageId}`);
      const titleProp = Object.values(page.properties ?? {}).find(v => v.type === 'title');
      return { pageTitle: plain(titleProp?.title), blocks };
    },

    async resolveTitle(pageId) {
      const page = await call(`/pages/${pageId}`);
      const titleProp = Object.values(page.properties ?? {}).find(v => v.type === 'title');
      return plain(titleProp?.title);
    },

    /* One-off: add the website columns to the database if they are missing. */
    async setup(databaseId) {
      const db = await call(`/databases/${databaseId}`);
      const have = db.properties ?? {};
      const add = {};
      if (!have[PROPS.publish]) add[PROPS.publish] = { checkbox: {} };
      for (const name of [PROPS.title, PROPS.summary, PROPS.kicker, PROPS.slug, PROPS.takeaways]) {
        if (!have[name]) add[name] = { rich_text: {} };
      }
      if (Object.keys(add).length) {
        await call(`/databases/${databaseId}`, { method: 'PATCH', body: JSON.stringify({ properties: add }) });
      }
      return { added: Object.keys(add), url: db.url, title: plain(db.title) };
    },
  };
}
