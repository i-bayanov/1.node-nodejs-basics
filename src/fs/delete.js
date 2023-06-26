import fsPromises from 'fs/promises';
import path from 'path';

import { defineDirAndFilenameConstants } from '../misc/index.js';

const { __dirname } = defineDirAndFilenameConstants(import.meta.url);
const FILENAME_TO_REMOVE = path.resolve(__dirname, 'files', 'fileToRemove.txt');

const remove = async () => {
  try {
    await fsPromises.rm(FILENAME_TO_REMOVE);
  } catch (e) {
    if ('message' in e && e.message.includes('no such file or directory')) {
      throw new Error('FS operation failed');
    }

    throw e;
  }
};

await remove();
