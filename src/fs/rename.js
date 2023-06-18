import fsPromises from 'fs/promises';
import path from 'path';

import { defineDirAndFilenameConstants, checkPathExistence } from '../misc/index.js';

const { __dirname } = defineDirAndFilenameConstants(import.meta.url);
const WRONG_FILENAME = path.resolve(__dirname, 'files', 'wrongFilename.txt');
const PROPER_FILENAME = path.resolve(__dirname, 'files', 'properFilename.md');

const rename = async () => {
  const isWrongFileExists = await checkPathExistence(WRONG_FILENAME);
  const isProperFileExists = await checkPathExistence(PROPER_FILENAME);

  if (!isWrongFileExists || isProperFileExists) throw new Error('FS operation failed');

  await fsPromises.rename(WRONG_FILENAME, PROPER_FILENAME);
};

await rename();
