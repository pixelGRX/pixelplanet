/**
 */

import path from 'path';
import { writeFile, copyFile, makeDir, copyDir, cleanDir } from './lib/fs';
import pkg from '../package.json';

/**
 * Copies static files such as robots.txt, favicon.ico to the
 * output (build) folder.
 */
async function copy() {
  await makeDir('build');
  await Promise.all([
    makeDir('build/log'),
    copyFile('LICENSE', 'build/LICENSE'),
    copyDir('public', 'build/public'),
    copyFile('src/canvases.json', 'build/canvases.json'),
    copyFile('src/proxies.json', 'build/proxies.json'),
    copyFile('tools/example-ecosystem.yml', 'build/ecosystem.example.yml'),
    copyFile('tools/example-ecosystem-backup.yml', 'build/ecosystem-backup.example.yml'),
  ]);
  await makeDir('build/public/assets');
}

export default copy;
