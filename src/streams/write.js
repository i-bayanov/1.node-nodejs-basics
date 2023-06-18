import { createWriteStream } from 'fs';
import { stdin } from 'process';
import path from 'path';

import { defineDirAndFilenameConstants } from '../misc/index.js';

const { __dirname } = defineDirAndFilenameConstants(import.meta.url);

const FILENAME_TO_WRITE = path.resolve(__dirname, 'files', 'fileToWrite.txt');

const write = async () => {
  stdin.pipe(createWriteStream(FILENAME_TO_WRITE));
};

await write();
