import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';

const routes = JSON.parse(fs.readFileSync('src/data/routes.json', 'utf8'));
assert.equal(routes.length, 24, 'All 24 original routes must exist');
const knownRoutes = new Set(routes.map(page => page.route));
const failures = [];
let references = 0;
function inspect(file) {
  const source = fs.readFileSync(file, 'utf8');
  const ast = ts.createSourceFile(file, source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  function visit(node) {
    if (ts.isJsxAttribute(node) && node.initializer && ts.isStringLiteral(node.initializer)) {
      const name = node.name.getText(ast);
      const value = node.initializer.text.split(/[?#]/)[0];
      if (['src', 'href', 'poster', 'data-src'].includes(name) && value.startsWith('/') && !value.startsWith('//')) {
        references++;
        if (value.startsWith('/assets/')) {
          if (!fs.existsSync(path.join('public', value))) failures.push(`${file}: missing asset ${value}`);
        } else if (!knownRoutes.has(value)) failures.push(`${file}: unknown route ${value}`);
      }
    }
    ts.forEachChild(node, visit);
  }
  visit(ast);
  assert(!source.includes('assets/js/site.js'), `Legacy JS must not run alongside React: ${file}`);
}
for (const page of routes) {
  assert(fs.existsSync(page.page), `Missing page ${page.page}`);
  const relative = page.source.replace('index.html', 'page.tsx');
  const routeFile = path.join(`src/app/(${page.locale})`, relative);
  assert(fs.existsSync(routeFile), `Missing route ${routeFile}`);
  assert(fs.existsSync(path.join('legacy', page.source)), `Missing original ${page.source}`);
  inspect(page.page);
  const counterpart = page.locale === 'en' ? page.route.replace(/^\/en/, '') || '/' : '/en' + (page.route === '/' ? '/' : page.route);
  assert(knownRoutes.has(counterpart), `Missing language counterpart for ${page.route}`);
}
for (const item of fs.readdirSync('src/components')) if (item.endsWith('.tsx')) inspect(path.join('src/components', item));
assert.deepEqual(failures, [], failures.join('\n'));
console.log(`Passed: 24 pages, 24 language counterparts, original source backups, and ${references} local references.`);
