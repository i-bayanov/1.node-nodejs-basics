import fsPromises from 'fs/promises';
import path from 'path';

import { defineDirAndFilenameConstants } from '../misc/index.js';

const { __dirname } = defineDirAndFilenameConstants(import.meta.url);
const DIRECTORY_TO_LIST = path.resolve(__dirname, 'files');

const list = async () => {
  try {
    const fileNames = await fsPromises.readdir(DIRECTORY_TO_LIST);
    console.table(fileNames);
  } catch (e) {
    if ('message' in e && e.message.includes('no such file or directory')) {
      throw new Error('FS operation failed');
    }

    throw e;
  }
};

await list();
