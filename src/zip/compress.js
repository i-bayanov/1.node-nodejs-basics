import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import { pipeline } from 'stream';
import path from 'path';

import { defineDirAndFilenameConstants } from '../misc/index.js';

const { __dirname } = defineDirAndFilenameConstants(import.meta.url);
const FILENAME_TO_GZIP = path.resolve(__dirname, 'files', 'fileToCompress.txt');
const COMPRESSED_FILENAME = path.resolve(__dirname, 'files', 'archive.gz');

const compress = async () => {
  pipeline(
    createReadStream(FILENAME_TO_GZIP),
    createGzip(),
    createWriteStream(COMPRESSED_FILENAME),
    (err) => {
      if (err) console.error(err.message);
    }
  );
};

await compress();
