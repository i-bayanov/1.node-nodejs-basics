import fsPromises from 'fs/promises';
import path from 'path';

import { defineDirAndFilenameConstants, checkPathExistence } from '../misc/index.js';

const { __dirname } = defineDirAndFilenameConstants(import.meta.url);
const FILENAME_TO_READ = path.resolve(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
  try {
    const fileData = await fsPromises.readFile(FILENAME_TO_READ, { encoding: 'utf-8' });
    console.log(fileData);
  } catch (e) {
    if ('message' in e && e.message.includes('no such file or directory')) {
      throw new Error('FS operation failed');
    }

    throw e;
  }
};

await read();
