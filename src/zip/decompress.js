import { createReadStream, createWriteStream } from 'fs';
import { createGunzip } from 'zlib';
import { pipeline } from 'stream';
import path from 'path';

import { defineDirAndFilenameConstants } from '../misc/index.js';

const { __dirname } = defineDirAndFilenameConstants(import.meta.url);
const FILENAME_TO_GUNZIP = path.resolve(__dirname, 'files', 'archive.gz');
const UNCOMPRESSED_FILENAME = path.resolve(__dirname, 'files', 'fileToCompress.txt');

const decompress = async () => {
  pipeline(
    createReadStream(FILENAME_TO_GUNZIP),
    createGunzip(),
    createWriteStream(UNCOMPRESSED_FILENAME),
    (err) => {
      if (err) console.error(err.message);
    }
  );
};

await decompress();
