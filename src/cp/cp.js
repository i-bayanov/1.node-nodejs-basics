import { fork } from 'child_process';
import path from 'path';

import { defineDirAndFilenameConstants } from '../misc/index.js';

const { __dirname } = defineDirAndFilenameConstants(import.meta.url);
const CHILD_FILENAME = path.resolve(__dirname, 'files', 'script.js');

const spawnChildProcess = async (args) => {
  const child = fork(CHILD_FILENAME, args);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(/* [someArgument1, someArgument2, ...] */);
