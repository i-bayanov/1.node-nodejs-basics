import { readdir, mkdir, copyFile } from 'fs/promises';
import path from 'path';

import { defineDirAndFilenameConstants } from '../misc/index.js';

const { __dirname } = defineDirAndFilenameConstants(import.meta.url);
const SOURCE_DIRECTORY = path.resolve(__dirname, 'files');
const DESTINATION_DIRECTORY = path.resolve(__dirname, 'files_copy');

const copy = async () => {
  try {
    const fileNames = await readdir(SOURCE_DIRECTORY);
    await mkdir(DESTINATION_DIRECTORY);

    for (let fileName of fileNames) {
      const sourceFile = path.resolve(SOURCE_DIRECTORY, fileName);
      const destinationFile = path.resolve(DESTINATION_DIRECTORY, fileName);

      await copyFile(sourceFile, destinationFile);
    }
  } catch (e) {
    if (
      'message' in e &&
      (e.message.includes('no such file or directory') || e.message.includes('file already exists'))
    ) {
      throw new Error('FS operation failed');
    }

    throw e;
  }
};

await copy();
