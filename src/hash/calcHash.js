import { createReadStream } from 'fs';
import { readFile } from 'fs/promises';
import path from 'path';
import { createHash } from 'crypto';

import { defineDirAndFilenameConstants } from '../misc/index.js';

const { __dirname } = defineDirAndFilenameConstants(import.meta.url);
const FILENAME_TO_HASH = path.resolve(__dirname, 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
  const fileData = await readFile(FILENAME_TO_HASH);
  const hash = createHash('sha256').update(fileData).digest('hex');

  console.log(hash);

  // Or the same functionality with streams API
  // const hash = createHash('sha256');
  // const readStream = createReadStream(FILENAME_TO_HASH);
  // readStream.on('readable', () => {
  //   const data = readStream.read();
  //   if (data) {
  //     hash.update(data);
  //   } else {
  //     console.log(hash.digest('hex'));
  //   }
  // });
};

await calculateHash();
