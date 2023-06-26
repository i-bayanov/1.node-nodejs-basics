import { writeFile } from 'fs/promises';
import path from 'path';

import { defineDirAndFilenameConstants } from '../misc/index.js';

const { __dirname } = defineDirAndFilenameConstants(import.meta.url);
const FILE_NAME = path.resolve(__dirname, 'files', 'fresh.txt');
const FILE_DATA = 'I am fresh and young';

const create = async () => {
  try {
    await writeFile(FILE_NAME, FILE_DATA, { flag: 'wx' });
  } catch (e) {
    if ('message' in e && e.message.includes('file already exists')) {
      throw new Error('FS operation failed');
    }

    throw e;
  }
};

await create();
