import { stdin, stdout } from 'process';
import { Transform, pipeline } from 'stream';
import { EOL } from 'os';

const transform = async () => {
  const reverseString = new Transform({
    transform(chunk, _encoding, callback) {
      const str = String(chunk).normalize().replace(EOL, '');
      const revertedStr = str.split('').reverse().join('') + EOL;
      callback(null, revertedStr);
    },
  });

  pipeline(stdin, reverseString, stdout, (err) => {
    if (err) console.error(err.message);
  });
};

await transform();
