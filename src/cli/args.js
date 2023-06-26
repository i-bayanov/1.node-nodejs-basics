import { argv } from 'process';

const parseArgs = () => {
  const resultArr = [];

  argv.slice(2).forEach((arg, index, args) => {
    if (arg.startsWith('--')) {
      const currArg = arg.slice(2);
      const nextArg = args[index + 1];
      const currArgValue = nextArg.startsWith('--') ? undefined : nextArg;
      resultArr.push(`${currArg} is ${currArgValue}`);
    }
  });

  console.log(resultArr.join(', '));
};

parseArgs();
