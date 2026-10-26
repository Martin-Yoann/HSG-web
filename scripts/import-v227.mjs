// Import the approved v2.27 HTML into the existing Next.js architecture.
// Usage: node scripts/import-v227.mjs <source-directory>
import fs from 'node:fs';
import path from 'node:path';
import { parseDocument } from 'htmlparser2';

const root = process.cwd();
const sourceRoot = path.resolve(process.argv[2] || "legacy/v2.27");
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
    else if (item.name === 'index.html') pages.push(path.relative(sourceRoot, file).replaceAll('\\', '/'));
  }
}
walk(sourceRoot);
if (pages.length !== 28) throw new Error(`Expected 28 release pages, got ${pages.length}`);
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
  if (mode === 'footer' && node.name === 'div') {
    const heading = (node.children || []).find(child => child.name === 'h4');
    if (heading) return `<FooterGroup title=${JSON.stringify(textOf(heading))}>${node.children.filter(child => child !== heading).map(child => serialize(child, file, mode)).join('')}</FooterGroup>`;
    if (attrs.class === 'footer__bottom') {
      const spans = node.children.filter(child => child.name === 'span');
      return `<div className="footer__bottom">${serialize(spans[0], file, mode)}<FooterGroup title="${file.startsWith('en/') ? 'Site Notice' : '网站声明'}"><p>${serialize(spans[1], file, mode)}</p></FooterGroup></div>`;
    }
  }
  if (attrs.class === 'page-hero' && file.includes('services/')) attrs.class += ' service-hero';
  if (attrs.class === 'page-hero' && /(?:privacy|terms)\//.test(file)) attrs.class += ' legal-hero';
  if (node.name === 'video') {
    attrs.preload = 'none';
    if (attrs.class === 'hero__video') delete attrs.poster;
  }
  let tag = node.name;
  if (tag === 'img') {
    tag = 'SiteImage';
    const parentClass = node.parent?.attribs?.class || '';
    if (parentClass.includes('portraits')) attrs.sizes = '(max-width: 760px) 30vw, (max-width: 1100px) 23vw, 155px';
    if (parentClass.includes('strip__item')) attrs.sizes = '(max-width: 760px) 260px, 380px';
  }
  if (tag === 'a' && attrs.href) {
    attrs.href = url(attrs.href, file);
    if (attrs.href.startsWith('/') && !attrs.href.startsWith('//')) tag = mode === 'header' ? 'NavLink' : 'Link';
  }
  if (mode === 'header') delete attrs['aria-current'];
  let props = tag === 'Link' && node.parent?.attribs?.class === 'tabs' ? ' scroll={false}' : '';
  for (let [key, value] of Object.entries(attrs)) {
    if (['src', 'poster', 'data-src'].includes(key)) value = url(value, file).split('?')[0];
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
const navigation = {};
for (const file of pages.sort()) {
  const html = fs.readFileSync(path.join(sourceRoot, file), 'utf8');
  const doc = parseDocument(html, { lowerCaseAttributeNames: false });
  const english = file.startsWith('en/');
  const locale = english ? 'en' : 'zh';
  const route = routeOf(file);
  const title = textOf(find(doc, n => n.name === 'title'));
  const meta = (name) => find(doc, n => n.name === 'meta' && (n.attribs.name === name || n.attribs.property === name))?.attribs.content;
  const description = meta('description') || '';
  const image = meta('og:image');
  const schemas = all(doc, n => n.name === 'script' && n.attribs.type === 'application/ld+json').map(n => JSON.parse(textOf(n)));
  const main = find(doc, n => n.name === 'main');
  const localPath = english ? file.slice(3) : file;
  const output = `src/content/${locale}/${localPath.replace('index.html', 'page.tsx')}`;
  const routeFile = `src/app/(${locale})/${file.replace('index.html', 'page.tsx')}`;
  const canonical = find(doc, n => n.name === 'link' && n.attribs.rel === 'canonical').attribs.href;
  const languages = Object.fromEntries(all(doc, n => n.name === 'link' && n.attribs.rel === 'alternate').map(n => [n.attribs.hreflang, n.attribs.href]));
  const metadata = { title, description, alternates: { canonical, languages }, openGraph: { title: meta('og:title') || title, description: meta('og:description') || description, url: canonical, type: 'website', locale: english ? 'en_US' : 'zh_CN', ...(image ? { images: [{ url: image }] } : {}) } };
  write(output, `import type { Metadata } from 'next';\nimport type { CSSProperties } from 'react';\nimport Link from '@/components/IntentLink';\nimport { SiteImage } from '@/components/SiteImage';\nimport { StructuredData } from '@/components/StructuredData';\n\nexport const metadata: Metadata = ${JSON.stringify(metadata, null, 2)};\n\nexport default function Page() {\n  return (<>\n<StructuredData data={${JSON.stringify(schemas)}} />\n${serialize(main, file)}\n</>);\n}\n`);
  write(routeFile, `export { default, metadata } from '@/content/${locale}/${localPath.replace('index.html', 'page')}';\n`);
  write(`legacy/v2.27/${file}`, html);
  if (file === 'index.html' || file === 'en/index.html') {
    const footer = find(doc, n => n.name === 'footer');
    write(`src/components/Footer${english ? 'En' : 'Zh'}.tsx`, `import type { CSSProperties } from 'react';\nimport Link from '@/components/IntentLink';\nimport { FooterGroup } from './FooterGroup';\n\nexport function Footer${english ? 'En' : 'Zh'}() {\nreturn (${serialize(footer, file, 'footer')});\n}\n`);
    const header = find(doc, n => n.name === 'header');
    const nav = find(header, n => n.name === 'nav');
    const links = nav.children.filter(n => n.name === 'a');
    const services = find(nav, n => n.attribs?.class === 'has-menu' || n.attribs?.class === 'nav__item has-menu');
    const serviceLink = services.children.find(n => n.name === 'a');
    navigation[locale] = {
      home: textOf(links[0]), services: textOf(serviceLink), network: textOf(links[1]), about: textOf(links[2]), contact: textOf(links[3]), nav: nav.attribs['aria-label'], menu: english ? 'Menu' : '菜单',
      items: all(header, n => n.attribs?.class === 'menu__link').map(n => ['span', 'b', 'small'].map(tag => textOf(find(n, c => c.name === tag)))),
    };
  }
  manifest.push({ route, source: `v2.27/${file}`, page: output, locale, title });
}
write('src/data/routes.json', JSON.stringify(manifest, null, 2) + '\n');
write('src/data/navigation.json', JSON.stringify(navigation, null, 2) + '\n');
console.log(`Imported ${manifest.length} release pages and bilingual footers.`);
