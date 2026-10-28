// Fails if any "TODO" placeholder made it into the built site.
// Run after `npm run build`: `npm run check:todo`.
import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';

const root = 'dist';
const hits = [];

async function walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) await walk(path);
    else if (entry.name.endsWith('.html')) {
      const text = (await readFile(path, 'utf8')).replace(/<[^>]+>/g, ' ');
      const count = text.match(/TODO/g)?.length ?? 0;
      if (count) hits.push(`${path}: ${count}`);
    }
  }
}

await walk(root);
if (hits.length) {
  console.error(`Placeholders still visible:\n${hits.join('\n')}`);
  process.exit(1);
}
console.log('No TODO placeholders in dist/.');
