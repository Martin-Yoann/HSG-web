import fs from 'node:fs';
import path from 'node:path';
const routes = JSON.parse(fs.readFileSync('src/data/routes.json', 'utf8'));
let replaced = 0;
for (const { page, locale } of routes) {
  let source = fs.readFileSync(page, 'utf8');
  source = source.replace(/<video([^>]*)><source src="\/assets\/video\/(?:opc|why-dallas)\.mp4"[^>]*\/><\/video>/g, (_, attrs) => {
    const poster = attrs.match(/poster="([^"]+)"/)?.[1];
    if (!poster) throw new Error(`Missing poster: ${page}`);
    replaced++;
    return `<VideoPlaceholder poster="${poster}" english={${locale === 'en'}} />`;
  });
  if (source.includes('<VideoPlaceholder')) source = `import { VideoPlaceholder } from '@/components/VideoPlaceholder';\n` + source;
  fs.writeFileSync(page, source);
}
const css = `\n/* Posters for the two videos absent from the supplied source. */\n.video-placeholder{position:relative;aspect-ratio:16/9;background:#000;display:grid;place-items:center;overflow:hidden}\n.video--inline .video-placeholder img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.7}\n.video-placeholder span{position:relative;z-index:1;padding:8px 16px;border-radius:999px;background:rgba(1,29,100,.85);color:#fff;font-size:14px}\n`;
fs.appendFileSync(path.join('src/styles/site.css'), css);
console.log(`Replaced ${replaced} missing video references with supplied posters.`);
