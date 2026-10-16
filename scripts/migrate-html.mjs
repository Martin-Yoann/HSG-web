// One-time migration. Original files are preserved in legacy/ for reference.
import fs from 'node:fs';
import path from 'node:path';
import { parseDocument } from 'htmlparser2';

const root = process.cwd();
const write = (name, text) => {
  const file = path.join(root, name);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, text, 'utf8');
};
const pages = [];
function walk(dir) {
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    if (['node_modules', '.next', 'legacy', 'src', 'public', 'scripts', '.git'].includes(item.name)) continue;
    const file = path.join(dir, item.name);
    if (item.isDirectory()) walk(file);
    else if (item.name === 'index.html') pages.push(path.relative(root, file).replaceAll('\\', '/'));
  }
}
walk(root);
if (pages.length !== 24) throw new Error(`Expected 24 original pages, got ${pages.length}`);
const voids = new Set('area base br col embed hr img input link meta param source track wbr'.split(' '));
const booleans = new Set('required disabled checked selected multiple muted loop controls playsinline autoplay readonly open hidden'.split(' '));
const names = { class: 'className', for: 'htmlFor', tabindex: 'tabIndex', autocomplete: 'autoComplete', playsinline: 'playsInline', autoplay: 'autoPlay', readonly: 'readOnly', srcset: 'srcSet', crossorigin: 'crossOrigin', viewbox: 'viewBox', 'fill-rule': 'fillRule', 'clip-rule': 'clipRule', 'stroke-width': 'strokeWidth', 'stroke-linecap': 'strokeLinecap', 'stroke-linejoin': 'strokeLinejoin', 'aria-current': 'aria-current', hreflang: 'hrefLang', allowfullscreen: 'allowFullScreen' };
function find(node, pred) {
  if (pred(node)) return node;
  for (const child of node.children || []) { const found = find(child, pred); if (found) return found; }
}
function all(node, pred) {
  return [...(pred(node) ? [node] : []), ...(node.children || []).flatMap(child => all(child, pred))];
}
const textOf = node => node?.type === 'text' ? node.data : (node?.children || []).map(textOf).join('');
const routeOf = file => '/' + file.replace(/(^|\/)index\.html$/, '').replace(/\/$/, '') + (file === 'index.html' ? '' : '/');
function url(value, file) {
  if (!value || /^(?:[a-z][a-z0-9+.-]*:|\/\/|#)/i.test(value)) return value;
  const resolved = new URL(value, `https://migration.local/${file}`);
  const pathname = resolved.pathname.replace(/\/index\.html$/, '/');
  return pathname + resolved.search + resolved.hash;
}
function serialize(node, file, mode = 'page') {
  if (node.type === 'text') return node.data.trim() ? `{${JSON.stringify(node.data)}}` : '\n';
  if (node.type === 'comment') return '';
  if (!node.name) return (node.children || []).map(child => serialize(child, file, mode)).join('');
  if (node.name === 'script') return '';
  const attrs = { ...node.attribs };
  if (mode === 'header' && attrs.class === 'langswitch') return '<LanguageSwitch locale={locale} />';
  let tag = node.name;
  if (tag === 'a' && attrs.href) {
    attrs.href = url(attrs.href, file);
    if (attrs.href.startsWith('/') && !attrs.href.startsWith('//')) tag = mode === 'header' ? 'NavLink' : 'Link';
  }
  if (mode === 'header') delete attrs['aria-current'];
  let props = '';
  for (let [key, value] of Object.entries(attrs)) {
    if (['src', 'poster', 'data-src'].includes(key)) value = url(value, file);
    if (key === 'style') {
      const style = Object.fromEntries(value.split(';').filter(Boolean).map(decl => {
        const colon = decl.indexOf(':');
        const name = decl.slice(0, colon).trim();
        return [name.startsWith('--') ? name : name.replace(/-([a-z])/g, (_, c) => c.toUpperCase()), decl.slice(colon + 1).trim()];
      }));
      props += ` style={${JSON.stringify(style)} as CSSProperties}`;
    } else if (booleans.has(key)) {
      const attrName = key === 'checked' ? 'defaultChecked' : names[key] || key;
      props += ` ${attrName}`;
    } else {
      const attrName = key === 'value' && node.name === 'input' && attrs.type !== 'checkbox' ? 'defaultValue' : names[key] || key;
      props += ` ${attrName}=${JSON.stringify(value)}`;
    }
  }
  if (voids.has(node.name)) return `<${tag}${props} />`;
  return `<${tag}${props}>${(node.children || []).map(child => serialize(child, file, mode)).join('')}</${tag}>`;
}
const manifest = [];
for (const file of pages) {
  const html = fs.readFileSync(path.join(root, file), 'utf8');
  const doc = parseDocument(html, { lowerCaseAttributeNames: false });
  const english = file.startsWith('en/');
  const locale = english ? 'en' : 'zh';
  const route = routeOf(file);
  const title = textOf(find(doc, n => n.name === 'title'));
  const description = find(doc, n => n.name === 'meta' && n.attribs.name === 'description')?.attribs.content || '';
  const image = url(find(doc, n => n.name === 'meta' && n.attribs.property === 'og:image')?.attribs.content, file);
  const schemas = all(doc, n => n.name === 'script' && n.attribs.type === 'application/ld+json').map(n => JSON.parse(textOf(n)));
  const main = find(doc, n => n.name === 'main');
  const localPath = english ? file.slice(3) : file;
  const output = `src/app/(${locale})/${english ? 'en/' : ''}${localPath.replace('index.html', 'page.tsx')}`;
  const counterpart = english ? route.slice(3) || '/' : route === '/' ? '/en/' : '/en' + route;
  const metadata = { title, description, alternates: { canonical: route, languages: { 'zh-CN': english ? counterpart : route, en: english ? route : counterpart } }, openGraph: { title, description, type: 'website', locale: english ? 'en_US' : 'zh_CN', ...(image ? { images: [{ url: image }] } : {}) } };
  write(output, `import type { Metadata } from 'next';\nimport type { CSSProperties } from 'react';\nimport Link from 'next/link';\nimport { StructuredData } from '@/components/StructuredData';\n\nexport const metadata: Metadata = ${JSON.stringify(metadata, null, 2)};\n\nexport default function Page() {\n  return (<>\n<StructuredData data={${JSON.stringify(schemas)}} />\n${serialize(main, file)}\n</>);\n}\n`);
  if (file === 'index.html' || file === 'en/index.html') {
    for (const [tag, name, mode] of [['header', 'Header', 'header'], ['footer', 'Footer', 'footer']]) {
      const node = find(doc, n => n.name === tag);
      write(`src/components/${name}${english ? 'En' : 'Zh'}.tsx`, `import type { CSSProperties } from 'react';\nimport Link from 'next/link';\nimport { NavLink, LanguageSwitch } from './Navigation';\n\nexport function ${name}${english ? 'En' : 'Zh'}() {\nconst locale = '${locale}';\nreturn (${serialize(node, file, mode)});\n}\n`);
    }
  }
  manifest.push({ route, source: file, page: output, locale, title });
}
write('src/data/routes.json', JSON.stringify(manifest, null, 2) + '\n');
// Move the original static source to a reference directory, away from Next routes.
fs.mkdirSync(path.join(root, 'legacy'), { recursive: true });
for (const entry of ['index.html', 'about', 'contact', 'ecosystem', 'en', 'faq', 'services', 'robots.txt']) {
  fs.renameSync(path.join(root, entry), path.join(root, 'legacy', entry));
}
fs.mkdirSync(path.join(root, 'public'), { recursive: true });
fs.renameSync(path.join(root, 'assets'), path.join(root, 'public/assets'));
fs.mkdirSync(path.join(root, 'src/styles'), { recursive: true });
fs.copyFileSync(path.join(root, 'public/assets/css/site.css'), path.join(root, 'src/styles/site.css'));
fs.copyFileSync(path.join(root, 'legacy/robots.txt'), path.join(root, 'public/robots.txt'));
console.log(`Migrated ${manifest.length} pages. Original HTML preserved in legacy/.`);
