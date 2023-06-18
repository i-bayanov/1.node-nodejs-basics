import { Worker } from 'worker_threads';
import { cpus } from 'os';
import path from 'path';

import { defineDirAndFilenameConstants } from '../misc/index.js';

const { __dirname } = defineDirAndFilenameConstants(import.meta.url);
const WORKER_FILENAME = path.resolve(__dirname, 'worker.js');
const FIRST_NUMBER = 10;

const performCalculations = async () => {
  const numbersToCalcArr = cpus().map((_el, i) => FIRST_NUMBER + i);
  const workersPromisesArr = numbersToCalcArr.map(
    (num) =>
      new Promise((resolve) => {
        const worker = new Worker(WORKER_FILENAME, { workerData: num });

        worker
          .once('error', () => resolve({ status: 'error', data: null }))
          .once('message', (data) => resolve(data));
      })
  );
  const workersCalcResult = await Promise.all(workersPromisesArr);

  console.table(workersCalcResult);
};

await performCalculations();
