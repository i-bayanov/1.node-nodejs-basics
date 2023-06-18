import { createReadStream } from 'fs';
import { stdout } from 'process';
import path from 'path';

import { defineDirAndFilenameConstants } from '../misc/index.js';

const { __dirname } = defineDirAndFilenameConstants(import.meta.url);
const FILENAME_TO_READ = path.resolve(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
  createReadStream(FILENAME_TO_READ).pipe(stdout);
};

await read();
